import React from 'react';
import Table from './index';

export default {
  title: 'Components/Table',
  component: Table,
};

const columns = [
  { key: 'name', label: 'Nome' },
  { key: 'amount', label: 'Valor' },
  { key: 'date', label: 'Data' },
];

function makeItems(count = 200) {
  const base = new Date();
  return Array.from({ length: count }).map((_, i) => {
    const name = `Item ${String(i + 1).padStart(4, '0')}`;
    const amount = Number(((i * 97) % 10000) + i / 1000).toFixed(2);
    const d = new Date(base.getTime() - i * 24 * 60 * 60 * 1000);
    const date = d.toISOString().slice(0, 10);

    return {
      id: `r${i + 1}`,
      name,
      amount: parseFloat(amount),
      date,
    };
  });
}

function SelectionExample() {
  const [selected, setSelected] = React.useState([]);
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
      <div style={{ flex: 1 }}>
        <Table
          variant="default"
          title="Com seleção"
          columns={columns}
          items={makeItems(12)}
          showCheckbox
          onSelectionChange={(items) => setSelected(items)}
        />
      </div>
      <div style={{ width: 320 }}>
        <h4 style={{ marginTop: 0 }}>Selecionados</h4>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            maxHeight: 300,
            overflow: 'auto',
          }}
        >
          <code>{JSON.stringify(selected, null, 2)}</code>
        </pre>
      </div>
    </div>
  );
}

export const DefaultDocs = () => (
  <div style={{ padding: 16 }}>
    <Table
      variant="default"
      title="Tabela — Variante Default"
      columns={columns}
      items={makeItems(200)}
    />
  </div>
);
export const TableDefaultDocumentacao = () => (
  <div style={{ padding: 16, maxWidth: 1045 }}>
    <h3 style={{ marginTop: 0 }}>Tabela — Variante Padrão</h3>

    <section style={{ marginBottom: 12 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Table
          variant="default"
          title="Lista de Exemplo"
          columns={columns}
          items={makeItems(6)}
        />
      </div>
    </section>

    <section style={{ marginBottom: 12 }}>
      <h4 style={{ margin: '6px 0' }}>Exemplo de seleção (showCheckbox)</h4>
      <div style={{ marginBottom: 10 }}>
        <SelectionExample />
      </div>
    </section>

    <section style={{ marginBottom: 12 }}>
      <p style={{ color: '#444' }}>
        O componente <code>Table</code> apresenta dados tabulares com suporte a
        paginação, ordenação (strings, números e datas) e busca. Use a prop
        <code> columns</code> para declarar colunas (cada coluna precisa de
        <code> key</code> e <code>label</code>) e <code>items</code> para enviar
        os registros. A ordenação detecta automaticamente números e datas em
        formato ISO (YYYY-MM-DD).
      </p>
    </section>

    <section style={{ marginBottom: 12 }}>
      <h4 style={{ margin: '6px 0' }}>Props</h4>

      <div style={{ marginBottom: 10 }}>
        <h5 style={{ margin: '6px 0' }}>columns</h5>
        <p style={{ color: '#444', marginTop: 6 }}>
          A prop <code>columns</code> é um array de objetos com as chaves{' '}
          <code>key</code> (identificador do campo) e <code>label</code> (rótulo
          exibido no cabeçalho). A ordem do array define a ordem das colunas.
        </p>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
          }}
        >
          <code>{`const columns = [ { key: 'name', label: 'Nome' }, { key: 'amount', label: 'Valor' }, { key: 'date', label: 'Data' } ]`}</code>
        </pre>
      </div>

      <div style={{ marginBottom: 10 }}>
        <h5 style={{ margin: '6px 0' }}>items</h5>
        <p style={{ color: '#444', marginTop: 6 }}>
          Cada item é um objeto com propriedades correspondentes às chaves das
          colunas. Recomenda-se incluir um <code>id</code> único para cada
          linha.
        </p>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
          }}
        >
          <code>{`{ id: 'r1', name: 'Item 1', amount: 123.45, date: '2025-12-01' }`}</code>
        </pre>
      </div>

      <div style={{ marginBottom: 10 }}>
        <h5 style={{ margin: '6px 0' }}>showCheckbox</h5>
        <p style={{ color: '#444', marginTop: 6 }}>
          Quando <code>showCheckbox</code> for true, a primeira coluna exibirá
          checkboxes para seleção de linha. O componente não gerencia seleção
          externa — você pode controlar isso por fora conforme necessário.
        </p>
        <div style={{ display: 'flex', gap: 12, marginBottom: 8 }}>
          <Table
            variant="default"
            title="Com Checkboxes"
            columns={columns}
            items={makeItems(4)}
            showCheckbox
          />
        </div>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
          }}
        >
          <code>{`<Table variant="default" title="Com seleção" columns={columns} items={[{ id: 'r1', name: 'A', amount: 1, date: '2025-12-01' }]} showCheckbox
    onSelectionChange={(items) => console.log('selecionados', items)}
  />`}</code>
        </pre>
      </div>

      <div style={{ marginBottom: 10 }}>
        <h5 style={{ margin: '6px 0' }}>onSelectionChange</h5>
        <p style={{ color: '#444', marginTop: 6 }}>
          Callback chamado sempre que a seleção muda. Recebe um array com os
          itens atualmente selecionados:{' '}
          <code>onSelectionChange(selectedItems)</code>. Use este handler para
          armazenar a seleção no estado externo ou para realizar ações em lote
          sobre os itens selecionados.
        </p>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
          }}
        >
          <code>{`<Table showCheckbox onSelectionChange={(items) => console.log('selecionados', items)} />`}</code>
        </pre>
      </div>
    </section>

    <section style={{ marginBottom: 12 }}>
      <h4 style={{ margin: '6px 0' }}>Comportamentos importantes</h4>
      <div style={{ marginTop: 8 }}>
        <p style={{ color: '#444' }}>
          - Ordenação: clique nos cabeçalhos para ordenar. Datas em formato ISO
          são ordenadas por timestamp e, por padrão, ao clicar pela primeira vez
          a ordenação de datas é decrescente (mais recentes primeiro).
        </p>
        <p style={{ color: '#444' }}>
          - Busca: há um controle de busca no cabeçalho que é aberto pelo ícone
          de lupa; você pode restringir a busca a uma coluna específica usando o
          seletor dentro do painel de busca (ou passar a prop
          <code>searchColumn</code> para forçar uma coluna).
        </p>
        <p style={{ color: '#444' }}>
          - Paginação: os controles embaixo permitem escolher quantas linhas
          exibir por página e navegar entre páginas.
        </p>
      </div>
    </section>
  </div>
);

TableDefaultDocumentacao.storyName = 'Documentação';

export const DefaultInterativo = ({ title, showCheckbox, count }) => (
  <div style={{ padding: 16 }}>
    <Table
      variant="default"
      title={title}
      columns={columns}
      items={makeItems(Number(count || 50))}
      showCheckbox={!!showCheckbox}
    />
  </div>
);

DefaultInterativo.storyName = 'Default Interativo';
DefaultInterativo.argTypes = {
  title: { control: 'text' },
  showCheckbox: { control: 'boolean' },
  count: { control: { type: 'number', min: 1, max: 1000, step: 1 } },
};

DefaultInterativo.args = {
  title: 'Tabela — Interativo',
  showCheckbox: false,
  count: 200,
};

export const IrregularDocs = () => {
  const irregularItems = [
    { id: 'r1', cells: ['A1', 'B1', 'C1'] },
    { id: 'r2', cells: ['A2', 'B2'] },
    { id: 'r3', cells: ['A3', 'B3', 'C3', 'D3'] },
  ];
  return (
    <div style={{ padding: 16 }}>
      <Table
        variant="irregular"
        title="Tabela — Variante Irregular"
        items={irregularItems.concat(
          makeItems(120).map((it) => ({
            id: it.id,
            cells: [it.col1, it.col2, it.col3],
          })),
        )}
      />
    </div>
  );
};
IrregularDocs.story = { name: 'Table Irregular Docs' };
