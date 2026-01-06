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

TableDefaultDocumentacao.storyName = 'Documentação Default';

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

export const IrregularDocumentacao = () => (
  <div style={{ padding: 16, maxWidth: 1045 }}>
    <h3 style={{ marginTop: 0 }}>Tabela — Variante Irregular (Documentação)</h3>

    <section style={{ marginBottom: 12 }}>
      <p style={{ color: '#444' }}>
        A variação <code>irregular</code> é aplicada via classes CSS em uma
        marcação <code>&lt;table&gt;</code> sem um componente React específico.
        Essa abordagem segue o padrão gov.br: você usa a estrutura semântica de
        tabelas HTML (com <code>thead</code>, <code>tbody</code> e
        <code>th</code> com <code>rowspan</code>/<code>colspan</code>) e aplica
        classes utilitárias para obter o visual. Abaixo explicamos as classes
        principais e as customizações realizadas.
      </p>
      <p>
        Por motivos de ser alterações de css e estrutura html basicamente, a
        parte de pesquisa fica a cargo do desenvolvedor, visto que criar um
        padrão de busca para um conjunto irregular de dados sem ter conhecimento
        deles e formando um padrão a ser seguido, seria complexo demais e muito
        engessado.
      </p>
    </section>

    <section style={{ marginBottom: 12 }}>
      <h4 style={{ margin: '6px 0' }}>Estrutura e classes</h4>

      <div style={{ marginBottom: 10 }}>
        <h5 style={{ margin: '6px 0' }}>Principais classes e elementos</h5>
        <p style={{ color: '#444' }}>
          Abaixo há o mapeamento das classes/elementos mais usados e como eles
          se relacionam com colunas, linhas e variações (subcolunas /
          sublinhas):
        </p>

        <ul style={{ color: '#444' }}>
          <li>
            <strong>`.table-component.table-irregular`</strong>: wrapper geral
            (aplica contexto visual, fonte e espaçamento).
          </li>
          <li>
            <strong>`.table-header`</strong>: área superior com título e ações
            (mesmo comportamento do Default).
          </li>
          <li>
            <strong>`table thead` / `thead th`</strong>: <em>colunas</em> — use
            para declarar os títulos das colunas. Essas células recebem fundo
            cinza <code>#f0f0f0</code>, cor do rótulo <code>#1a7235</code> e
            efeitos de hover/active;
          </li>
          <li>
            <strong>`thead tr` (segunda linha de cabeçalho)</strong>:
            <em> subcolunas</em> — quando você precisa dividir um grupo de
            colunas (usando <code>colSpan</code> no primeiro <code>tr</code>),
            declare os rótulos das subcolunas na segunda linha do
            <code> thead</code>.
          </li>
          <li>
            <strong>`tbody tr`</strong>: <em>linhas</em> regulares — cada
            <code> tr</code> representa uma linha de dados dentro do grupo.
          </li>
          <li>
            <strong>
              `tbody th` (com <code>rowSpan</code>)
            </strong>
            :<em> sublinhas</em> / cabeçalhos de grupo de linhas — são usados
            para rótulos como <em>Zodiac</em> ou <em>Angels</em>. Recebem o
            mesmo estilo visual dos cabeçalhos de coluna (cor, fundo,
            hover/active) e normalmente têm <code>rowSpan</code> para englobar
            várias linhas de detalhe.
          </li>
          <li>
            <strong>Utilitários de borda:</strong> <code>.border-left</code>,
            <code>.border-right</code> e <code>.border-bottom</code> — aplique
            manualmente em <code>th</code> / <code>td</code> quando precisar
            forçar divisórias ao redor de células que usam
            <code> colspan/rowspan</code>. Regras como <code>td + td</code> e
            <code>th + th</code> também desenham bordas automaticamente entre
            células adjacentes.
          </li>
        </ul>

        <p style={{ color: '#444' }}>
          Em resumo: use elementos semânticos HTML (<code>thead</code>,
          <code>tbody</code>, <code>th</code>, <code>td</code>) para estruturar
          colunas, linhas, subcolunas e sublinhas; complemente com as classes
          utilitárias para ajustes finos de borda e agrupamento visual.
        </p>
      </div>
    </section>

    <section style={{ marginBottom: 12 }}>
      <h4 style={{ margin: '6px 0' }}>Customizações implementadas</h4>
      <ul style={{ color: '#444' }}>
        <li>
          Header e subheaders usam a mesma cor verde <code>#1a7235</code>.
        </li>
        <li>
          Hover e estado ativo replicados para <code>tbody th</code>.
        </li>
        <li>
          Bordas verticais entre subcolunas e horizontais entre sublinhas.
        </li>
        <li>
          Separador entre grupos de linhas (<code>tbody + tbody</code>).
        </li>
      </ul>
    </section>

    <section style={{ marginBottom: 12 }}>
      <h4 style={{ margin: '6px 0' }}>Exemplo de marcação</h4>
      <div style={{ background: '#fff', padding: 12, borderRadius: 6 }}>
        <div className="table-component table-irregular">
          <div className="table-header">
            <div className="top-bar">
              <div className="table-title">Tabela irregular — exemplo</div>
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th className="border-bottom" scope="col">
                  Poster name
                </th>
                <th className="border-bottom border-left" scope="col">
                  Color
                </th>
                <th
                  className="border-bottom border-left"
                  colSpan={3}
                  scope="colgroup"
                >
                  Sizes available
                </th>
              </tr>
              <tr>
                <th className="border-bottom" scope="col">
                  &nbsp;
                </th>
                <th className="border-bottom border-left" scope="col">
                  &nbsp;
                </th>
                <th className="border-bottom" scope="col">
                  A2
                </th>
                <th className="border-bottom" scope="col">
                  A3
                </th>
                <th className="border-bottom" scope="col">
                  A4
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="border-right" rowSpan={3} scope="rowgroup">
                  Zodiac
                </th>
                <td>Full color</td>
                <td>A2</td>
                <td>A3</td>
                <td>A4</td>
              </tr>
              <tr>
                <td>Black and white</td>
                <td>A1</td>
                <td>A2</td>
                <td>A3</td>
              </tr>
              <tr>
                <td>Sepia</td>
                <td>A3</td>
                <td>A4</td>
                <td>A5</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th className="border-right" rowSpan={2} scope="rowgroup">
                  Angels
                </th>
                <td>Black and white</td>
                <td>A1</td>
                <td>A3</td>
                <td>A4</td>
              </tr>
              <tr>
                <td>Sepia</td>
                <td>A2</td>
                <td>A3</td>
                <td>A5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <h5 style={{ margin: '12px 0 6px 0' }}>Código HTML como base</h5>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
          }}
        >
          <code>{`<div className="table-component table-irregular">
          <div className="table-header">
            <div className="top-bar">
              <div className="table-title">Tabela irregular — exemplo</div>
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th className="border-bottom" scope="col">Poster name</th>
                <th className="border-bottom border-left" scope="col">Color</th>
                <th className="border-bottom border-left" colSpan={3} scope="colgroup">Sizes available</th>
              </tr>
              <tr>
                <th className="border-bottom" scope="col">&nbsp;</th>
                <th className="border-bottom border-left" scope="col">&nbsp;</th>
                <th className="border-bottom" scope="col">A2</th>
                <th className="border-bottom" scope="col">A3</th>
                <th className="border-bottom" scope="col">A4</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="border-right" rowSpan={3} scope="rowgroup">Zodiac</th>
                <td>Full color</td>
                <td>A2</td>
                <td>A3</td>
                <td>A4</td>
              </tr>
              <tr>
                <td>Black and white</td>
                <td>A1</td>
                <td>A2</td>
                <td>A3</td>
              </tr>
              <tr>
                <td>Sepia</td>
                <td>A3</td>
                <td>A4</td>
                <td>A5</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th className="border-right" rowSpan={2} scope="rowgroup">Angels</th>
                <td>Black and white</td>
                <td>A1</td>
                <td>A3</td>
                <td>A4</td>
              </tr>
              <tr>
                <td>Sepia</td>
                <td>A2</td>
                <td>A3</td>
                <td>A5</td>
              </tr>
            </tbody>
          </table>
        </div>`}</code>
        </pre>
      </div>
    </section>
  </div>
);

IrregularDocumentacao.storyName = 'Documentação Irregular';

export const IrregularInterativo = () => (
  <div style={{ padding: 16 }}>
    <div className="table-component table-irregular">
      <div className="table-header">
        <div className="top-bar">
          <div className="table-title">Tabela irregular 1</div>
          <div className="actions-trigger">Ações</div>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th className="border-bottom" scope="col">
              Poster name
            </th>
            <th className="border-bottom border-left" scope="col">
              Color
            </th>
            <th
              className="border-bottom border-left"
              colSpan={3}
              scope="colgroup"
            >
              Sizes available
            </th>
          </tr>
          <tr>
            <th className="border-bottom" scope="col">
              &nbsp;
            </th>
            <th className="border-bottom border-left" scope="col">
              &nbsp;
            </th>
            <th className="border-bottom" scope="col">
              A2
            </th>
            <th className="border-bottom" scope="col">
              A3
            </th>
            <th className="border-bottom" scope="col">
              A4
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="border-right" rowSpan={3} scope="rowgroup">
              Zodiac
            </th>
            <td>Full color</td>
            <td>A2</td>
            <td>A3</td>
            <td>A4</td>
          </tr>
          <tr>
            <td>Black and white</td>
            <td>A1</td>
            <td>A2</td>
            <td>A3</td>
          </tr>
          <tr>
            <td>Sepia</td>
            <td>A3</td>
            <td>A4</td>
            <td>A5</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th className="border-right" rowSpan={2} scope="rowgroup">
              Angels
            </th>
            <td>Black and white</td>
            <td>A1</td>
            <td>A3</td>
            <td>A4</td>
          </tr>
          <tr>
            <td>Sepia</td>
            <td>A2</td>
            <td>A3</td>
            <td>A5</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);
IrregularInterativo.story = { name: 'Irregular Interativo' };
