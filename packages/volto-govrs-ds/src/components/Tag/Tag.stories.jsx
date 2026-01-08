import Tag from './index';
import Default from './variants/Default';
import Persistente from './variants/Persistente';
import Status from './variants/Status';
import Icone from './variants/Icone';
import Contagem from './variants/Contagem';

export default {
  title: 'Components/Tag',
  component: Tag,
};

export const TagDocs = () => (
  <>
    <div style={{ padding: 16, maxWidth: 720 }}>
      <h1>Tag - Documentação</h1>
      <p>
      O componente <code>Tag</code> permite escolher a variante através da prop{' '}
      <code>variant</code>. Isso facilita a utilização quando se deseja alternar
      entre diferentes tipos de tags dinamicamente.
    </p>
    </div>
    <h2>Tag de Interação</h2>
    <p>
      Possuem uma ação ao serem clicadas/tocadas. De acordo com o tipo de
      interação podemos ter tags interativas dispensáveis e persistentes.
      <br />
      Tags aceitam as props <code>content</code>, <code>disabled</code> e{' '}
      <code>showIcon</code>
    </p>
    <h3>Dispensáveis</h3>
    <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
      <Tag variant="default" content="Label 1" />
      <Tag variant="default" content="Label 2" />
      <Tag variant="default" content="Label 3" />
      <Tag variant="default" disabled content="Label" />
    </div>
    <pre
      style={{
        background: '#f7f7f7',
        padding: 12,
        borderRadius: 4,
        overflowX: 'auto',
        marginTop: 8,
      }}
    >
      <code>{`<Tag variant="default" content="Label" />`}</code> <br />
      <code>{`<Tag variant="default" disabled content="Label" />`}</code>
    </pre>

    <p>
      Ao utilizar a prop <code>showIcon</code>, a tag não exibe o ícone.
    </p>

    <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
      <Tag variant="default" showIcon={false} content="Label 1" />
      <Tag variant="default" showIcon={false} disabled content="Label" />
    </div>

    <pre className="showCode">
      <code>{`<Tag variant="default" showIcon={false} content="Label 1" />`}</code> <br />
      <code>{`<Tag variant="default" showIcon={false} disabled content="Label" />`}</code>
    </pre>

    <h3>Texto</h3>
    <p>
      A tag pode não possuir nenhum tipo de interação, serrvindo apenas para exibição de um texto, nesse caso, pode possuir icone e texto ou somente texto. Optando pela segunda
      opção utilizasse a prop <code>showClose</code> como <code>false</code>.
    </p>

    <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
      <Tag variant="default" showClose={false} content="Label 1" />
      <Tag variant="default" showClose={false} showIcon={false} content="Label 1" />
      <Tag variant="default" showClose={false} disabled content="Label" />
      <Tag variant="default" showIcon={false} showClose={false} disabled content="Label" />
    </div>

    <pre className="showCode">
      <code>{`<Tag variant="default" showClose={false} content="Label 1" />`}</code> <br />
      <code>{`<Tag variant="default" showClose={false} showIcon={false} content="Label 1" />`}</code>
      <br />
      <code>{`<Tag variant="default" showClose={false} disabled content="Label" />`}</code>
      <br />
      <code>{`<Tag variant="default" showIcon={false} showClose={false} disabled content="Label" /> `}</code>
    </pre>

    <h3>Persistentes</h3>
    <p>
      Tags persistentes não podem ser dispensadas, apenas indicam um estado ou
      categoria.
    </p>
    <p>
      As props <code>content</code>, <code>disabled</code> e{' '}
      <code>showIcon</code> são aceitas.
    </p>

    <p>
      {' '}
      <em>ATENÇÃO:</em> nas tags persistentes que serão selecionadas por padrão,
      utilize a prop <code>defaultChecked</code> juntamente com a prop{' '}
      <code>disabled</code>.
    </p>
    <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
      <Tag variant="persistente" content="Label 1" />
      <Tag variant="persistente" content="Label 2" showIcon={false} />
      <Tag variant="persistente" disabled content="Label" defaultChecked={true} />
    </div>

    <pre className="showCode">
      <code>{`<Tag variant="persistente" content="Label 1" />`}</code> <br />
      <code>{`<Tag variant="persistente" content="Label 2" showIcon={false}/>`}</code>
      <br />
      <code>{`<Tag variant="persistente" disabled content="Label" defaultChecked={true} `}</code>
    </pre>

    <h4>Persistente — Grupo (radio)</h4>
    <p>
      Variação para seleção única entre várias tags. Cada tag precisa ter um{' '}
      <code>id</code> único.
    </p>
    <p>
      Para selecionar uma tag por padrão, utilize a prop{' '}
      <code>defaultSelected</code> com o valor do <code>id</code> da tag
      desejada.
    </p>

    <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>

      <Tag variant="persistenteGroup" radio defaultSelected="null">
        <Persistente id="tag1" content="Tag 1" />
        <Persistente id="tag2" content="Tag 2" />
        <Persistente id="tag3" content="Tag 3" />
      </Tag >
    </div>
    <pre className="showCode">
      <code>{`<Tag variant="persistenteGroup" radio defaultSelected="null">`}</code> <br />
      <code>{`  <Persistente id="tag1" content="Tag 1" />`}</code>
      <br />
      <code>{`  <Persistente id="tag2" content="Tag 2" />`}</code>
      <br />
      <code>{`  <Persistente id="tag3" content="Tag 3" />`}</code>
      <br />
      <code>{`</Tag variant="persistenteGroup">`}</code>
    </pre>

    <h3>Status</h3>
    <p>
      Tags de status são utilizadas para indicar estados ou categorias
      específicas. Elas não possuem interação de clique.
    </p>
    <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
      <Tag variant="status" status="Online" Label="Online" />
      <Tag variant="status" status="Offline" Label="Offline" />
      <Tag variant="status" status="Ausente" Label="Ausente" />
    </div>
    <pre className="showCode">
      <code>{`<Tag variant="status" status="Online" Label="Online" />`}</code> <br />
      <code>{`<Tag variant="status" status="Offline" Label="Offline" />`}</code>
      <br />
      <code>{`<Tag variant="status" status="Ausente" Label="Ausente" />`}</code>
    </pre>

    <p>
      Podem ser usadas com Label ou apenas com a superfície circular. <br />{' '}
      Para realizar a escolha utilizar a prop<code>Label</code> vazia ou com o
      mesmo conteúdo da prop <code>status</code>.
    </p>
    <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
      <Tag variant="status" status="Online" Label="" />
      <Tag variant="status" status="Offline" Label="" />
      <Tag variant="status" status="Ausente" Label="" />
    </div>
    <pre className="showCode">
      <code>{`<Tag variant="status" status="Online" Label="" />`}</code> <br />
      <code>{`<Tag variant="status" status="Offline" Label="" />`}</code>
      <br />
      <code>{`<Tag variant="status" status="Ausente" Label="" />`}</code>
    </pre>

    <h3>Icone</h3>
    <p>
      Tags de icone possuem a mesma ideia das tags texto, porém utilizando
      apenas icone
    </p>
    <p>
      As props <code>ico</code> pode ser utilizada para especificar qual icone
      será exibido.
    </p>
    <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
      <Tag variant="icone" ico="car" />
      <Tag variant="icone" ico="search" />
    </div>
    <pre className="showCode">
      <code>{`<Tag variant="icone" ico="car" />`}</code> <br />
      <code>{`<Tag variant="icone" ico="search" />`}</code>
    </pre>

    <h3>Contagem</h3>
    <p>
      Tags de contagem são utilizadas para exibir um número ou valor associado a
      uma tag.
    </p>
    <p>
      Se o valor for maior que 999, será exibido como "999+". Os valores são
      atribuidos através da prop <code>label</code>.
    </p>
    <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
      <Tag variant="contagem" label="9" />
      <Tag variant="contagem" label="90" />
      <Tag variant="contagem" label="190" />
      <Tag variant="contagem" label="999" />
      <Tag variant="contagem" label="2000" />
    </div>
    <pre className="showCode">
      <code>{`<Tag variant="contagem" label="9" />`}</code> <br />
      <code>{`<Tag variant="contagem" label="90" />`}</code> <br />
      <code>{`<Tag variant="contagem" label="190" />`}</code> <br />
      <code>{`<Tag variant="contagem" label="999" />`}</code>
      <code>{`<Tag variant="contagem" label="2000" />`}</code>
    </pre>

  </>
);
