import './Banner.scss';
import { flattenToAppURL } from '@plone/volto/helpers';

function ImgBanner({ imageUrl, imageAlt }) {
  // Se não houver imagem do Plone, usa a imagem padrão
  const defaultImage = 'brasao-RS-contraste.svg';
  const src = imageUrl ? flattenToAppURL(imageUrl) : defaultImage;
  const alt = imageAlt || '';

  return <img src={src} alt={alt} />;
}

const Banner = ({ type, imageUrl, imageAlt, linkUrl }) => {
  const className = type ? `banner-fixo banner-fixo__${type}` : 'banner-fixo';
  const defaultLinkUrl = ' ';
  const href = linkUrl || defaultLinkUrl;

  return (
    <>
      <a href={href} target="_blank" className={className} rel="noreferrer">
        <ImgBanner imageUrl={imageUrl} imageAlt={imageAlt} />
      </a>
    </>
  );
};

export default Banner;
