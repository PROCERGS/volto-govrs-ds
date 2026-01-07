import PropTypes from 'prop-types';
import './Contagem.scss';

const Contagem = ({label}) => {
    const n = Number(label);
    const displayLabel = Number.isFinite(n) ? (n > 999 ? '999+' : String(n)) : label;
    return(
        <>
        <div className="govrs-tag-contagem">
            <span>
                {displayLabel}
            </span>
        </div>
          
        </>
    );
}

export default Contagem;