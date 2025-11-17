import React from 'react';
import List from './index';

export default {
  title: 'Components/List',
  component: List,
};

const SampleIcon = (
  <svg
    width="20"
    height="16"
    viewBox="0 0 20 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.25 6C19.6562 6 20 6.34375 20 6.75V15C20 15.5625 19.5312 16 19 16H1C0.4375 16 0 15.5625 0 15V3.75C0 3.34375 0.3125 3 0.75 3H2V0.5C2 0.25 2.21875 0 2.5 0H3C3.25 0 3.5 0.25 3.5 0.5V3H5.5V0.5C5.5 0.25 5.71875 0 6 0H6.5C6.75 0 7 0.25 7 0.5V3H9V0.75C9 0.34375 9.3125 0 9.75 0H14.25C14.6562 0 15 0.34375 15 0.75V6H19.25ZM4 12.625V11.375C4 11.1875 3.8125 11 3.625 11H2.375C2.15625 11 2 11.1875 2 11.375V12.625C2 12.8438 2.15625 13 2.375 13H3.625C3.8125 13 4 12.8438 4 12.625ZM4 9.625V8.375C4 8.1875 3.8125 8 3.625 8H2.375C2.15625 8 2 8.1875 2 8.375V9.625C2 9.84375 2.15625 10 2.375 10H3.625C3.8125 10 4 9.84375 4 9.625ZM4 6.625V5.375C4 5.1875 3.8125 5 3.625 5H2.375C2.15625 5 2 5.1875 2 5.375V6.625C2 6.84375 2.15625 7 2.375 7H3.625C3.8125 7 4 6.84375 4 6.625ZM8 12.625V11.375C8 11.1875 7.8125 11 7.625 11H6.375C6.15625 11 6 11.1875 6 11.375V12.625C6 12.8438 6.15625 13 6.375 13H7.625C7.8125 13 8 12.8438 8 12.625ZM8 9.625V8.375C8 8.1875 7.8125 8 7.625 8H6.375C6.15625 8 6 8.1875 6 8.375V9.625C6 9.84375 6.15625 10 6.375 10H7.625C7.8125 10 8 9.84375 8 9.625ZM8 6.625V5.375C8 5.1875 7.8125 5 7.625 5H6.375C6.15625 5 6 5.1875 6 5.375V6.625C6 6.84375 6.15625 7 6.375 7H7.625C7.8125 7 8 6.84375 8 6.625ZM13 9.625V8.375C13 8.1875 12.8125 8 12.625 8H11.375C11.1562 8 11 8.1875 11 8.375V9.625C11 9.84375 11.1562 10 11.375 10H12.625C12.8125 10 13 9.84375 13 9.625ZM13 6.625V5.375C13 5.1875 12.8125 5 12.625 5H11.375C11.1562 5 11 5.1875 11 5.375V6.625C11 6.84375 11.1562 7 11.375 7H12.625C12.8125 7 13 6.84375 13 6.625ZM13 3.625V2.375C13 2.1875 12.8125 2 12.625 2H11.375C11.1562 2 11 2.1875 11 2.375V3.625C11 3.84375 11.1562 4 11.375 4H12.625C12.8125 4 13 3.84375 13 3.625ZM18 12.625V11.375C18 11.1875 17.8125 11 17.625 11H16.375C16.1562 11 16 11.1875 16 11.375V12.625C16 12.8438 16.1562 13 16.375 13H17.625C17.8125 13 18 12.8438 18 12.625ZM18 9.625V8.375C18 8.1875 17.8125 8 17.625 8H16.375C16.15625 8 16 8.1875 16 8.375V9.625C16 9.84375 16.15625 10 16.375 10H17.625C17.8125 10 18 9.84375 18 9.625Z"
      fill="black"
    />
  </svg>
);

const defaultItems = [
  {
    id: 'i1',
    title: 'Item com imagem e label',
    text: 'Descrição curta do item com imagem.',
    image:
      'https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0',
    imageAlt: 'Foto de exemplo',
    icon: SampleIcon,
    label: null,
  },
  {
    id: 'i2',
    title: 'Item só com ícone',
    text: 'Item com ícone SVG apenas.',
    image:
      'https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0',
    imageAlt: 'Foto de exemplo',
    icon: SampleIcon,
    label: 'Grupo A',
  },
  {
    id: 'i3',
    title: 'Item sem mídia',
    text: 'Item que não possui imagem nem ícone.',
    image:
      'https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0',
    imageAlt: 'Foto de exemplo',
    icon: SampleIcon,
    label: 'Grupo B',
  },
  {
    id: 'i4',
    title: 'Item grande com imagem',
    text: 'Um texto mais longo para demonstrar quebra de linha e comportamento responsivo em horizontal.',
    image:
      'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0',
    imageAlt: 'Outra foto',
    icon: SampleIcon,
    label: 'Grupo B',
  },
  {
    id: 'i5',
    title: 'Título apenas',
    text: 'Texto de suporte para o item.',
    image:
      'https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0',
    imageAlt: 'Foto de exemplo',
    icon: SampleIcon,
    label: 'Grupo C',
  },
];

const InteractiveTemplate = (args) => {
  const { preset, items: controlledItems, ...rest } = args;

  if (controlledItems && controlledItems.length > 0) {
    return (
      <div style={{ width: rest.horizontal ? 960 : 640 }}>
        <h4>Default Interativo</h4>
        <List variant="default" items={controlledItems} {...rest} />
      </div>
    );
  }

  const items = defaultItems.map((it) => {
    const copy = { ...it };
    if (preset === 'images') {
      copy.icon = null;
    } else if (preset === 'icons') {
      copy.image = null;
      copy.imageAlt = null;
    } else if (preset === 'none') {
      copy.image = null;
      copy.imageAlt = null;
      copy.icon = null;
    }
    return copy;
  });

  return (
    <div style={{ width: rest.horizontal ? 960 : 640 }}>
      <h4>Default Interativo</h4>
      <List variant="default" items={items} {...rest} />
    </div>
  );
};

export const DefaultInterativo = InteractiveTemplate.bind({});
DefaultInterativo.storyName = 'Default Interativo';
DefaultInterativo.args = {
  preset: 'mixed',
  items: defaultItems,
  horizontal: false,
  labeled: false,
  collapsible: false,
};
DefaultInterativo.argTypes = {
  preset: {
    control: { type: 'inline-radio' },
    options: ['mixed', 'images', 'icons', 'none'],
  },
  items: { control: 'object' },
  horizontal: { control: 'boolean' },
  labeled: { control: 'boolean' },
  collapsible: { control: 'boolean' },
};

export const ListDefaultDocs = () => (
  <div style={{ padding: 16, maxWidth: 720 }}>
    <h1>Lista — Variante Padrão</h1>

    <section style={{ marginTop: 8 }}>
      <div style={{ width: 360 }}>
        <List
          variant="default"
          items={[
            { id: 'd1', title: 'Item um' },
            { id: 'd2', title: 'Item dois' },
            { id: 'd3', title: 'Item três' },
            { id: 'd4', title: 'Item quatro' },
          ]}
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
        <code>{`<List variant="default" items={[
            { id: 'd1', title: 'Item um' },
            { id: 'd2', title: 'Item dois' },
            { id: 'd3', title: 'Item três' },
            { id: 'd4', title: 'Item quatro' },
          ]}/>`}</code>
      </pre>
      <p>
        A variante padrão exibe uma lista vertical de itens. Cada item pode
        incluir uma imagem ou ícone opcional à esquerda, um título e um texto de
        suporte opcional, os formatos de objeto que devem ser passados estão em
        uma seção mais abaixo. Quando os itens são renderizados sem mídia, o
        conteúdo fica centralizado verticalmente.
      </p>
      <p>
        Mesmo que a prop <code>variant</code> não seja passada, o componente
        assume o valor "default".
      </p>
    </section>

    <section style={{ marginTop: 16 }}>
      <h2>Props</h2>

      <h3 style={{ marginTop: 8 }}>Horizontal</h3>
      <div style={{ marginBottom: 8 }}>
        <p>
          Quando <code>horizontal</code> for passado como prop, a lista
          posiciona os itens em linhas com quebra automática (wrap). Os itens
          têm largura base de <code>295px</code>, mas podem crescer ou encolher
          para preencher o elemento pai. Use este modo para itens em estilo
          cartão que devem fluir na mesma linha.
        </p>
      </div>

      <div style={{ width: 960, margin: '8px 0' }}>
        <List
          variant="default"
          horizontal
          items={[
            { id: 'h1', title: 'Cartão 1', icon: SampleIcon },
            { id: 'h2', title: 'Cartão 2', icon: SampleIcon },
            { id: 'h3', title: 'Cartão 3', icon: SampleIcon },
            { id: 'h4', title: 'Cartão 4', icon: SampleIcon },
            { id: 'h5', title: 'Cartão 5', icon: SampleIcon },
          ]}
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
        <code>{`<List variant="default" horizontal items={[
            { id: 'h1', title: 'Cartão 1', icon: SampleIcon },
            { id: 'h2', title: 'Cartão 2', icon: SampleIcon },
            { id: 'h3', title: 'Cartão 3', icon: SampleIcon },
            { id: 'h4', title: 'Cartão 4', icon: SampleIcon },
            { id: 'h5', title: 'Cartão 5', icon: SampleIcon },
          ]}/>`}</code>
      </pre>
      <h3 style={{ marginTop: 12 }}>Labeled</h3>
      <div style={{ marginBottom: 8 }}>
        <p>
          Quando <code>labeled</code> for passado, o componente agrupa os itens
          automaticamente por sua propriedade <code>label</code> e exibe um
          cabeçalho de rótulo acima de cada grupo. Cada grupo contém a lista dos
          itens que compartilham aquele rótulo.
        </p>
        <p>
          No caso da prop 'horizontal' ser passada juntamente com 'labeled', a
          horizontalidade só afeta os sub-itens do rótulo, e não os rótulos em
          si.
        </p>
        <p>
          Lembrando que, mesmo que alguns objetos possuam rótulo, se não tiver a
          prop "labeled" o agrupamento não ocorrerá.
        </p>
      </div>
      <div style={{ width: 360, margin: '8px 0' }}>
        <List
          variant="default"
          labeled
          items={[
            {
              label: 'RÓTULO 01',
              id: 'l1-1',
              title: 'Sub-item',
              icon: SampleIcon,
            },
            {
              label: 'RÓTULO 01',
              id: 'l1-2',
              title: 'Sub-item',
              icon: SampleIcon,
            },
            {
              label: 'RÓTULO 02',
              id: 'l2-1',
              title: 'Sub-item',
              icon: SampleIcon,
            },
          ]}
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
        <code>{`<List variant="default" labeled items={[
            { label: 'RÓTULO 01', id: 'l1-1', title: 'Sub-item', icon: SampleIcon },
            { label: 'RÓTULO 01', id: 'l1-2', title: 'Sub-item', icon: SampleIcon },
            { label: 'RÓTULO 02', id: 'l2-1', title: 'Sub-item', icon: SampleIcon },
          ]}/>`}</code>
      </pre>

      <h4 style={{ marginTop: 12 }}>collapsible</h4>
      <div style={{ marginBottom: 8 }}>
        <p>
          Opcionalmente, passe <code>collapsible</code> junto com
          <code>labeled</code> para permitir que cada grupo seja expandido ou
          recolhido. Vem recolhido por padrão.
        </p>
        <p>
          Lembrando que <code>collapsible</code> não faz nada se{' '}
          <code>labeled</code> não estiver ativo.
        </p>
      </div>
      <div style={{ width: 360, margin: '8px 0' }}>
        <List
          variant="default"
          labeled
          collapsible
          items={[
            {
              label: 'RÓTULO 01',
              id: 'c1-1',
              title: 'Sub-item',
              icon: SampleIcon,
            },
            {
              label: 'RÓTULO 01',
              id: 'c1-2',
              title: 'Sub-item',
              icon: SampleIcon,
            },
            {
              label: 'RÓTULO 02',
              id: 'c2-1',
              title: 'Sub-item',
              icon: SampleIcon,
            },
          ]}
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
        <code>{`<List variant="default" labeled collapsible items={[
            { label: 'RÓTULO 01', id: 'c1-1', title: 'Sub-item', icon: SampleIcon },
            { label: 'RÓTULO 01', id: 'c1-2', title: 'Sub-item', icon: SampleIcon },
            { label: 'RÓTULO 02', id: 'c2-1', title: 'Sub-item', icon: SampleIcon },
          ]}/>`}</code>
      </pre>
    </section>
    <section style={{ marginTop: 16 }}>
      <h2>Estrutura do item</h2>
      <p>
        Cada item passado para a lista é um objeto com as seguintes propriedades
        possíveis. Nem todas são obrigatórias — use conforme o caso de uso.
      </p>

      <h3 style={{ marginTop: 8 }}>Propriedades</h3>
      <ul>
        <li>
          <strong>id</strong>: identificador único (recomendado para chaves).
        </li>
        <li>
          <strong>title</strong>: título do item (string).
        </li>
        <li>
          <strong>text</strong>: texto de apoio/descrição (opcional).
        </li>
        <li>
          <strong>image</strong>: URL da imagem a ser exibida (opcional).
        </li>
        <li>
          <strong>imageAlt</strong>: texto alternativo para a imagem
          (acessibilidade).
        </li>
        <li>
          <strong>icon</strong>: JSX (SVG) usado quando <code>image</code> não
          existir.
        </li>
        <li>
          <strong>label</strong>: string usada para agrupar itens quando{' '}
          <code>labeled</code> estiver ativo.
        </li>
      </ul>

      <h4 style={{ marginTop: 8 }}>Exemplos</h4>
      <pre
        style={{
          background: '#f7f7f7',
          padding: 12,
          borderRadius: 4,
          overflowX: 'auto',
        }}
      >
        <code>{`{ id: '1', title: 'Título', text: 'Descrição curta' }
      { id: '2', title: 'Com imagem', image: 'https://.../img.jpg', imageAlt: 'Descrição da imagem' }
      { id: '3', title: 'Com ícone', icon: SampleIcon }
      { label: 'RÓTULO 01', id: 'l1', title: 'Sub-item' }`}</code>
      </pre>
    </section>
  </div>
);

ListDefaultDocs.story = { name: 'List Default Docs' };

export const ListCheckDocs = () => {
  const [items, setItems] = React.useState([
    { id: 'd1', title: 'Paragraph' },
    { id: 'd2', title: 'Paragraph' },
    { id: 'd3', title: 'Paragraph' },
    { id: 'd4', title: 'Paragraph' },
  ]);

  const [labeledItems, setLabeledItems] = React.useState([
    { label: 'GROUP 1', id: 'g1-1', title: 'Paragraph' },
    { label: 'GROUP 1', id: 'g1-2', title: 'Paragraph' },
    { label: 'GROUP 2', id: 'g2-1', title: 'Paragraph' },
    { label: 'GROUP 2', id: 'g2-2', title: 'Paragraph' },
  ]);

  function onToggle(item, opts = {}) {
    setItems((prev) =>
      prev.map((it) =>
        it.id === item.id ? { ...it, checked: !it.checked } : it,
      ),
    );
  }

  function onToggleGroup(label, checked) {
    setLabeledItems((prev) =>
      prev.map((it) => (it.label === label ? { ...it, checked } : it)),
    );
  }

  function onToggleLabeled(item, opts = {}) {
    const isMultiple = opts.multiple ?? true;
    setLabeledItems((prev) => {
      if (isMultiple)
        return prev.map((it) =>
          it.id === item.id ? { ...it, checked: !it.checked } : it,
        );
      return prev.map((it) =>
        it.id === item.id
          ? { ...it, checked: !it.checked }
          : { ...it, checked: false },
      );
    });
  }

  return (
    <div style={{ padding: 16, maxWidth: 720 }}>
      <p>
        <strong>Lembrete:</strong> Esta é a seção da variante Check do
        componente Lista, caso deseje ver outras props e suas funcionalidades,
        consulte a variante Default na seção anterior.
      </p>
      <h1>Lista — Variante Check</h1>

      <section style={{ marginTop: 8 }}>
        <div style={{ width: 360 }}>
          <List
            variant="check"
            title="Título"
            items={items}
            onToggle={onToggle}
            multiple
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
          <code>{`<List variant="check" title="Título" items={[...]} multiple onToggle={...} />`}</code>
        </pre>

        <p>
          A variante <code>check</code> exibe uma lista de itens com um checkbox
          à direita de cada item. Use a prop <code>multiple</code> para permitir
          múltiplas seleções. Quando <code>labeled</code> for usado junto com
          <code>multiple</code>, um checkbox de grupo aparecerá no cabeçalho do
          rótulo para selecionar/desmarcar todos os itens do grupo.
        </p>
      </section>

      <section style={{ marginTop: 16 }}>
        <h2>Props importantes</h2>

        <h3 style={{ marginTop: 8 }}>Title</h3>
        <p>O título exibido acima da lista (tipografia: 24px / 400).</p>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
          }}
        >
          <code>{`<List variant="check" title="Título" items={[{ id: '1', title: 'Item' }]} />`}</code>
        </pre>

        <h3 style={{ marginTop: 8 }}>Multiple</h3>
        <p>
          Passar <code>multiple</code> permite selecionar mais de um item. Caso
          contrário, a seleção é single-select.
        </p>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
          }}
        >
          <code>{`<List variant="check" multiple items={[{ id: '1', title: 'Item' }, { id: '2', title: 'Item' }]} />`}</code>
        </pre>

        <h3 style={{ marginTop: 8 }}>Labeled + Group Checkbox</h3>
        <p>
          Quando <code>labeled</code> e <code>multiple</code> estiverem ativos,
          o componente mostrará um checkbox de grupo que marca/desmarca todos os
          itens daquele rótulo.
        </p>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
          }}
        >
          <code>{`<List variant="check" labeled multiple items={[{ label: 'G1', id: '1', title: 'A' }, { label: 'G1', id: '2', title: 'B' }]} />`}</code>
        </pre>

        <div style={{ width: 360, margin: '8px 0' }}>
          <List
            variant="check"
            title="Título"
            labeled
            multiple
            items={labeledItems}
            onToggle={onToggleLabeled}
            onToggleGroup={onToggleGroup}
          />
        </div>
      </section>
    </div>
  );
};

ListCheckDocs.story = { name: 'List Check Docs' };

export const CheckExample = (args) => {
  const {
    multiple,
    items: controlledItems,
    labeled,
    collapsible,
    horizontal,
    title,
  } = args;

  const [items, setItems] = React.useState(
    controlledItems && controlledItems.length > 0
      ? controlledItems
      : [
          { id: 'c1', title: 'Paragraph', label: 'Group 1' },
          { id: 'c2', title: 'Paragraph', label: 'Group 1' },
          { id: 'c3', title: 'Paragraph', label: 'Group 2' },
          { id: 'c4', title: 'Paragraph', label: 'Group 2' },
        ],
  );

  function onToggle(item, opts = {}) {
    const isMultiple = opts.multiple ?? multiple;
    setItems((prev) => {
      if (isMultiple) {
        return prev.map((it) =>
          it.id === item.id ? { ...it, checked: !it.checked } : it,
        );
      }
      return prev.map((it) =>
        it.id === item.id
          ? { ...it, checked: !it.checked }
          : { ...it, checked: false },
      );
    });
  }

  function onToggleGroup(label, checked) {
    setItems((prev) =>
      prev.map((it) => (it.label === label ? { ...it, checked } : it)),
    );
  }

  return (
    <div style={{ width: horizontal ? 960 : 360 }}>
      <List
        variant="check"
        items={items}
        onToggle={onToggle}
        onToggleGroup={onToggleGroup}
        title={title}
        multiple={multiple}
        labeled={labeled}
        collapsible={collapsible}
        horizontal={horizontal}
      />
    </div>
  );
};

CheckExample.story = { name: 'Check Example' };

CheckExample.args = {
  multiple: false,
  items: [],
  title: 'Título',
  labeled: false,
  collapsible: false,
  horizontal: false,
};

CheckExample.argTypes = {
  multiple: { control: 'boolean' },
  items: { control: 'object' },
  title: { control: 'text' },
  labeled: { control: 'boolean' },
  collapsible: { control: 'boolean' },
  horizontal: { control: 'boolean' },
};
