import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './Persistente.scss';

function CarIcon() {
  return(
    <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.0937 5.5C17.3437 5.5 17.5312 5.75 17.4687 5.96875L17.2812 6.71875C17.25 6.90625 17.0937 7 16.9375 7H16.2812C16.7187 7.375 17 7.90625 17 8.5V10C17 10.5312 16.7812 10.9688 16.5 11.3125V13C16.5 13.5625 16.0312 14 15.5 14H14.5C13.9375 14 13.5 13.5625 13.5 13V12H5.5V13C5.5 13.5625 5.03125 14 4.5 14H3.5C2.9375 14 2.5 13.5625 2.5 13V11.3125C2.1875 10.9688 2 10.5312 2 10V8.5C2 7.90625 2.25 7.375 2.6875 7H2.0625C1.875 7 1.71875 6.90625 1.6875 6.71875L1.5 5.96875C1.4375 5.75 1.625 5.5 1.875 5.5H3.71875L4.25 4.21875C4.78125 2.875 6.0625 2 7.5 2H11.4687C12.9062 2 14.1875 2.875 14.7187 4.21875L15.25 5.5H17.0937ZM6.09375 4.96875L5.5 6.5H13.5L12.875 4.96875C12.625 4.375 12.0937 4 11.4687 4H7.5C6.875 4 6.34375 4.375 6.09375 4.96875ZM4.5 10C5.09375 10 6 10.0938 6 9.5C6 8.90625 5.09375 8 4.5 8C3.875 8 3.5 8.40625 3.5 9C3.5 9.625 3.875 10 4.5 10ZM14.5 10C15.0937 10 15.5 9.625 15.5 9C15.5 8.40625 15.0937 8 14.5 8C13.875 8 13 8.90625 13 9.5C13 10.0938 13.875 10 14.5 10Z" fill="white"/>
</svg>

  )
}

function CheckIcon(){
    return(
        <svg
         xmlns="http://www.w3.org/2000/svg"
         width="28" 
         height="32" 
         viewBox="0 0 28 32" 
         fill="none" 
        >
        <path
        fill="currentColor"
        d="M11.4062 21.75L6.21874 16.5625C5.90624 16.25 5.90624 15.7188 6.21874 15.4062L7.34374 14.2812C7.65624 13.9688 8.15624 13.9688 8.46874 14.2812L12 17.7812L19.5 10.2812C19.8125 9.96875 20.3125 9.96875 20.625 10.2812L21.75 11.4062C22.0625 11.7188 22.0625 12.25 21.75 12.5625L12.5625 21.75C12.25 22.0625 11.7187 22.0625 11.4062 21.75Z"
         />
        </svg>

    )
}


const Persistente = ({ disabled = false, content = 'Tag Persistente', checkIcon = true, showIcon = true, checked: checkedProp, defaultChecked = false, onChange }) => {

    const [internalChecked, setInternalChecked] = useState(defaultChecked);
    const isControlled = checkedProp !== undefined;
    const checked = isControlled ? checkedProp : internalChecked;

    const handleCheck = () => {
      const newChecked = !checked;
      if (!isControlled) setInternalChecked(newChecked);
      if (typeof onChange === 'function') onChange(newChecked);
    }

    return (
        <>
            <button
          className={`govrs-tag ${disabled ? 'disable' : ''} ${checked ? 'checked': ''}`}
          aria-disabled={disabled}
          disabled={disabled || undefined}
          onClick={!disabled ? handleCheck : undefined}
          onKeyDown={!disabled ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleCheck(); } } : undefined}
          role="button"
          tabIndex={disabled ? -1 : 0}
          aria-pressed={checkIcon ? checked : undefined}
        >
          {showIcon && <CarIcon />}
          {content}
          {checkIcon && checked && <CheckIcon />}
        </button> 
        
        </>
    );
}

Persistente.propTypes = {
  disabled: PropTypes.bool,
  content: PropTypes.node,
  checkIcon: PropTypes.bool,
  showIcon: PropTypes.bool,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  onChange: PropTypes.func,
};

Persistente.defaultProps = {
  disabled: false,
  content: 'Tag Persistente',
  checkIcon: true,
  showIcon: true,
  defaultChecked: false,
  onChange: undefined,
};

// Group variant: quando radio=true, gerencia seleção única (radio-like). Se radio=false, renderiza filhos sem gerenciar.
function Group({ children, radio = false, defaultSelected = null, selected: selectedProp, onChange, allowUnselect = true, ariaLabel }) {
  if (!radio) {
    return (
      <div role="group" aria-label={ariaLabel || 'Tag group'} className="govrs-tag-group">
        {children}
      </div>
    );
  }

  const [selected, setSelected] = useState(defaultSelected);
  const isControlled = selectedProp !== undefined;
  const current = isControlled ? selectedProp : selected;

  const handleChildChange = (id, newChecked) => {
    if (!newChecked && allowUnselect) {
      if (!isControlled) setSelected(null);
      if (typeof onChange === 'function') onChange(null);
      return;
    }
    if (newChecked) {
      if (!isControlled) setSelected(id);
      if (typeof onChange === 'function') onChange(id);
    }
  };

  return (
    <div role="radiogroup" aria-label={ariaLabel || 'Tag group'} className="govrs-tag-group">
      {React.Children.map(children, child => {
        // se o child não tiver id, não alteramos
        const id = child.props && child.props.id;
        if (!id) return child;
        return React.cloneElement(child, {
          checkIcon: true,
          checked: id === current,
          onChange: (newChecked) => handleChildChange(id, newChecked),
          role: 'radio',
          'aria-checked': id === current,
          className:"govrs-tag-group-active"
        });
      })}
    </div>
  );
}

Group.propTypes = {
  children: PropTypes.node,
  radio: PropTypes.bool,
  defaultSelected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  allowUnselect: PropTypes.bool,
  ariaLabel: PropTypes.string,
};

Group.defaultProps = {
  radio: false,
  defaultSelected: null,
  onChange: undefined,
  allowUnselect: true,
  ariaLabel: 'Tag group',
};

Persistente.Group = Group;

export default Persistente;
