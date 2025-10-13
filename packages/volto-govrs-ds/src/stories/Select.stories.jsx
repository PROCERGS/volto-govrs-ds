import React from 'react';
import '../theme/Formularios/Select.scss';
import Select from '../components/Utilidades/Select';

export default {
  title: 'Forms/br-select',
  parameters: {
    layout: 'padded',
  },
};

export const SelectDocumentacao = () => (
  <div style={{ padding: 16, width: '100%', maxWidth: 720 }}>
    <div style={{ width: 360 }}>
      <Select
        ariaLabel="Select component"
        placeholder="Placeholder"
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
          { value: '3', label: 'Option 3' },
        ]}
        onChange={() => {}}
      />
    </div>

    <div
      style={{
        marginTop: 16,
        fontSize: 14,
        lineHeight: 1.5,
        color: '#222',
        maxWidth: 640,
      }}
    >
      <h4 style={{ margin: '4px 0' }}>Uso e atributos do componente Select</h4>
      <p>
        Este componente substitui o elemento nativo <code>&lt;select&gt;</code>{' '}
        para permitir estilização consistente.
      </p>

      <div style={{ marginTop: 12 }}>
        <h5 style={{ margin: '8px 0' }}>options</h5>
        <p>
          Array de objetos <code>{`{ value, label }`}</code> com as opções.
        </p>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
          }}
        >
          <code>{`<Select
  options={[{ value: '1', label: 'Option 1' }, { value: '2', label: 'Option 2' }]}
/>`}</code>
        </pre>
      </div>

      <div style={{ marginTop: 12 }}>
        <h5 style={{ margin: '8px 0' }}>multiple</h5>
        <p>
          Se <code>multiple</code> for verdadeiro, ativa seleção múltipla (o
          mesmo componente é utilizado).
        </p>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
          }}
        >
          <code>{`// controlled multiple
const [vals, setVals] = useState([]);
<Select multiple options={options} value={vals} onChange={setVals} />`}</code>
        </pre>
      </div>

      <div style={{ marginTop: 12 }}>
        <h5 style={{ margin: '8px 0' }}>value / defaultValue</h5>
        <p>
          Valor controlado (string) ou array (múltipla);{' '}
          <code>defaultValue</code> é o inicial.
        </p>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
          }}
        >
          <code>{`// controlled (single)
const [v, setV] = useState('1');
<Select value={v} onChange={(val) => setV(val)} options={options} />

// uncontrolled
<Select defaultValue={'2'} options={options} />`}</code>
        </pre>
      </div>

      <div style={{ marginTop: 12 }}>
        <h5 style={{ margin: '8px 0' }}>onChange</h5>
        <p>
          Função chamada com o novo valor: string (single) ou array (multiple).
          Recebe opcionalmente a opção alterada.
        </p>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
          }}
        >
          <code>{`<Select onChange={(newValue, changedOption) => console.log(newValue, changedOption)} />`}</code>
        </pre>
      </div>

      <div style={{ marginTop: 12 }}>
        <h5 style={{ margin: '8px 0' }}>placeholder</h5>
        <p>
          Texto exibido quando nada está selecionado; também é renderizado como
          cabeçalho (não selecionável) no dropdown.
        </p>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
          }}
        >
          <code>{`<Select placeholder="Escolha uma opção" options={options} />`}</code>
        </pre>
      </div>

      <div style={{ marginTop: 12 }}>
        <h5 style={{ margin: '8px 0' }}>ariaLabel</h5>
        <p>
          Rótulo acessível aplicado ao botão de controle (útil quando não há
          label visual).
        </p>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
          }}
        >
          <code>{`<Select ariaLabel="Filtro de usuários" options={options} />`}</code>
        </pre>
      </div>

      <div style={{ marginTop: 12 }}>
        <h5 style={{ margin: '8px 0' }}>className / modifier classes</h5>
        <p>
          Adicione classes ao wrapper para estados visuais (ex.:{' '}
          <code>br-select--invalid</code>).
        </p>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
          }}
        >
          <code>{`<div className="br-select br-select--invalid">
  <label className="br-select__label">Label</label>
  <Select className="br-select--invalid" options={options} />
</div>`}</code>
        </pre>
      </div>

      <div style={{ marginTop: 12 }}>
        <h5 style={{ margin: '8px 0' }}>Comportamentos importantes</h5>
        <ul>
          <li>
            Em <em>multiple</em>, selecionar alterna a opção e mantém o dropdown
            aberto para permitir múltiplas seleções.
          </li>
          <li>
            O componente sanitiza valores desconhecidos contra a lista de{' '}
            <code>options</code>, portanto o placeholder não é considerado um
            valor válido.
          </li>
          <li>
            O resumo no controle (modo múltiplo) mostra o rótulo principal e "+
            (N)" com o número de itens adicionais (oculta o sufixo quando apenas
            1 está selecionado).
          </li>
          <li>
            <strong>Keyboard:</strong> navegação por teclado completa —
            ArrowUp/ArrowDown para navegar, Home/End para ir ao início/fim,
            Enter/Space para abrir/selecionar (toggle em <em>multiple</em>),
            Escape para fechar e Tab fecha o dropdown para seguir o fluxo de
            foco.
          </li>
          <li>
            <strong>Envio em formulários:</strong> quando a prop{' '}
            <code>name</code> é fornecida, o componente gera automaticamente{' '}
            <code>&lt;input type="hidden" name="..." /&gt;</code> (um por valor
            em <em>multiple</em>) para participar do submit do formulário,
            replicando o comportamento de um &lt;select&gt; nativo.
          </li>
        </ul>
      </div>
    </div>
  </div>
);

SelectDocumentacao.story = { name: 'Documentação Select' };

export const SelectInterativo = (args) => {
  const { useState, useEffect } = React;
  const { placeholder, label, multiple, disabled } = args;
  const [value, setValue] = useState(multiple ? [] : null);

  useEffect(() => {
    setValue(multiple ? [] : null);
  }, [multiple]);

  const options = multiple
    ? [
        { value: 'valid-1', label: 'Válida 1' },
        { value: 'valid-2', label: 'Válida 2' },
        { value: 'valid-3', label: 'Válida 3' },
        { value: 'valid-4', label: 'Válida 4' },
        { value: 'invalid', label: 'Inválida' },
      ]
    : [
        { value: 'valid', label: 'Opção válida' },
        { value: 'invalid', label: 'Opção inválida' },
      ];

  const isInvalid = multiple
    ? Array.isArray(value) && value.includes('invalid')
    : value === 'invalid';
  const isValid = multiple
    ? Array.isArray(value) &&
      value.some((v) => v && v.toString().startsWith('valid'))
    : value === 'valid';

  let wrapperClass = 'br-select';
  if (disabled) wrapperClass += ' br-select--disabled';
  else if (isInvalid) wrapperClass += ' br-select--invalid';
  else if (isValid) wrapperClass += ' br-select--valid';

  let feedback = null;
  if (disabled)
    feedback = (
      <div className="br-select__feedback br-select__feedback--disabled">
        Campo desabilitado
      </div>
    );
  else if (isInvalid)
    feedback = (
      <div className="br-select__feedback br-select__feedback--invalid">
        Campo inválido
      </div>
    );
  else if (isValid)
    feedback = (
      <div className="br-select__feedback br-select__feedback--valid">
        Campo correto
      </div>
    );

  return (
    <div
      style={{
        padding: 16,
        display: 'flex',
        gap: 24,
        alignItems: 'flex-start',
      }}
    >
      <div style={{ minWidth: 320 }}>
        <div className={wrapperClass}>
          <label className="br-select__label">{label}</label>
          <Select
            ariaLabel={label || 'Interactive select'}
            placeholder={placeholder}
            options={options}
            value={value}
            onChange={(v) => setValue(v)}
            disabled={disabled}
            multiple={multiple}
          />
          {feedback}
        </div>
        <div style={{ marginTop: 8, fontSize: 13, color: '#444' }}>
          Selecionado:{' '}
          {Array.isArray(value)
            ? value.length
              ? value.join(', ')
              : '—'
            : value || '—'}
        </div>
      </div>

      <div style={{ minWidth: 220 }}>
        <h4 style={{ marginTop: 0 }}>Controls</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ marginTop: 12, fontSize: 13, color: '#444' }}>
            Observação: use os controles do Storybook (painel Controls) para
            editar <strong>Placeholder</strong>, <strong>Label</strong>,{' '}
            <strong>Multiple</strong> e <strong>Disabled</strong>.
          </div>
        </div>
      </div>
    </div>
  );
};

SelectInterativo.args = {
  placeholder: 'Escolha uma opção',
  label: 'Interactive Label',
  multiple: false,
  disabled: false,
};

SelectInterativo.argTypes = {
  placeholder: { control: 'text' },
  label: { control: 'text' },
  multiple: { control: 'boolean' },
  disabled: { control: 'boolean' },
};

SelectInterativo.story = { name: 'Select Interativo' };
