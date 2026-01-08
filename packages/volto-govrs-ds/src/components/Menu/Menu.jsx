import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faXmark, 
  faChevronLeft, 
  faChevronRight, 
  faBars, 
  faExternalLinkAlt 
} from '@fortawesome/free-solid-svg-icons';
import './Menu.scss';

const Menu = ({ items, logo, footerLinks, socialIcons, copyrightText, id = "main-menu" }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const [activeStack, setActiveStack] = useState([{ title: null, links: items }]);

  const toggleMenu = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);
    if (!nextState) {
      setTimeout(() => setActiveStack([{ title: null, links: items }]), 300);
    }
  };

  const handleNextLevel = (e, item) => {
    e.preventDefault();
    if (item.links && item.links.length > 0) {
      setActiveStack([...activeStack, { title: item.title || item.label, links: item.links }]);
    }
  };

  const handlePrevLevel = () => {
    if (activeStack.length > 1) {
      const newStack = [...activeStack];
      newStack.pop();
      setActiveStack(newStack);
    }
  };

  const currentLevel = activeStack[activeStack.length - 1];
  const isSubLevel = activeStack.length > 1;

  const isExternal = (url) => {
    return url && (url.startsWith('http') || url.startsWith('www'));
  };

  return (
    <>
      <div className="menu-trigger-container">
        <button 
          className="br-button circle secondary medium" 
          type="button" 
          aria-label="Menu" 
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      <div className={`br-menu drill-down ${isOpen ? 'active' : ''}`} id={id}>
        <div className="menu-container">
          <div className="menu-panel">
            <div className="menu-header">
              <div className="menu-title">
                {logo && <img src={logo} alt="Logo" />}
              </div>
              <div className="menu-close">
                <button 
                  className="br-button circle small" 
                  type="button" 
                  onClick={toggleMenu}
                  aria-label="Fechar menu"
                >
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>
            </div>

            <nav className="menu-body">
              <ul>
                {isSubLevel && (
                  <li className="menu-back">
                    <button 
                      type="button" 
                      onClick={handlePrevLevel} 
                      className="menu-item back-button"
                    >
                      <span className="icon">
                        <FontAwesomeIcon icon={faChevronLeft} />
                      </span>
                      <span className="content">{currentLevel.title}</span>
                    </button>
                  </li>
                )}

                {currentLevel.links?.map((item, index) => {
                  const hasChildren = item.links && item.links.length > 0;
                  
                  return (
                    <li key={`${activeStack.length}-${index}`}>
                      <a 
                        className="menu-item" 
                        href={hasChildren ? undefined : (item.url || '#')}
                        onClick={(e) => hasChildren ? handleNextLevel(e, item) : null}
                      >
                        <span className="icon">
                          {item.leftIcon && <FontAwesomeIcon icon={item.leftIcon} />}
                        </span>
                        <span className="content">
                          {item.title || item.label}
                        </span>
                        {hasChildren && (
                          <span className="support">
                            <FontAwesomeIcon icon={faChevronRight} />
                          </span>
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="menu-footer">
              <div className="menu-links">
                {footerLinks?.map((link, idx) => {
                  const external = isExternal(link.url);
                  return (
                    <a 
                      href={link.url || '#'} 
                      key={idx} 
                      target={external ? "_blank" : undefined}
                      rel={external ? "noreferrer" : undefined}
                    >
                      <span>
                        {link.label}
                        {external && (
                          <FontAwesomeIcon 
                            icon={faExternalLinkAlt} 
                            className="external-icon" 
                          />
                        )}
                      </span>
                    </a>
                  );
                })}
              </div>

              <div className="social-network">
                <div className="social-network-title">Mídias Sociais</div>
                <div className="sharegroup">
                  {socialIcons?.map((social, idx) => (
                    <a key={idx} href={social.url || '#'} target="_blank" rel="noreferrer">
                      <FontAwesomeIcon icon={social.icon} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="menu-info">
                <div className="text-down-01">{copyrightText}</div>
              </div>
            </div>
          </div>
          <div className="menu-scrim" onClick={toggleMenu} tabIndex="0"></div>
        </div>
      </div>
    </>
  );
};

Menu.propTypes = {
  items: PropTypes.array,
  logo: PropTypes.string,
  footerLinks: PropTypes.array,
  socialIcons: PropTypes.array,
  copyrightText: PropTypes.string,
  id: PropTypes.string,
};

export default Menu;