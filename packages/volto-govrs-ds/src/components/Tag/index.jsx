import Default from './variants/Default.jsx';
import Persistente from './variants/Persistente';
import Status from './variants/Status';
import Icone from './variants/Icone';
import Contagem from './variants/Contagem';

const VARIANTS = {
  default: Default,
  persistente: Persistente,
  persistenteGroup: Persistente.Group,
  status: Status,
  icone: Icone,
  contagem: Contagem,
};

export default function Tag({
  items = [],
  variant,
  itemKey = (i) => i.id,
  className = '',
  ...rest
}) {
  const v = variant || 'default';
  const Variant = VARIANTS[v] || Default;
  return (
    <Variant items={items} itemKey={itemKey} className={className} {...rest} />
  );
}
