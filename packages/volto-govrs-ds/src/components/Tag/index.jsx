import Default from './variants/Default.jsx';

const VARIANTS = {
  default: Default,
  persistente: require('./variants/Persistente').default,
  status: require('./variants/Status').default,
  icon: require('./variants/Icone').default,
  contagem: require('./variants/Contagem').default,
};

export default function Tag({
  items = [],
  variant,
  itemKey = (i) => i.id,
  className = '',
  ...rest
}) {
  const v = variant || 'default';
    const Variant = VARIANTS[v] || DefaultVariant;
    return (
      <Variant items={items} itemKey={itemKey} className={className} {...rest} />
    );
}