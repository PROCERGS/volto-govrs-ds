import Banner from './Banner';

export default {
  title: 'Components/Banner',
  component: Banner,
};

export const BannerDocs = () => (
  <>
    <div style={{ padding: 16, maxWidth: 720 }}>
      <h1>Banner - Documentação</h1>
      <p>
        O componente <code>Banner</code> é utilizado para exibir banners fixos
        que transmitem informações importantes, links para sites, serviços e
        outras informações relevantes.
      </p>
      <p>
        O banner aceita as props <code>type</code>, <code>image</code>,{' '}
        <code>imageAlt</code> e <code>linkUrl</code>.
      </p>
    </div>

    <h2>Banner Fixo</h2>
    <p>
      Banner fixo para transmitir informações importantes bem como links para
      sites, serviços e outras informações relevantes.
    </p>

    <h3>Default</h3>
    <p>
      Banner padrão sem tipo específico. Pode utilizar uma imagem default salva
      no projeto e o link do Banner poderá ser personalizado via prop.
    </p>
    <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
      <Banner linkUrl="https://www.procergs.rs.gov.br" />
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
      <code>{`<Banner linkUrl="https://www.procergs.rs.gov.br" />`}</code>
    </pre>

    <h3>Com Tipo</h3>
    <p>
      Ao utilizar a prop <code>type</code>, você pode aplicar variações
      específicas ao banner. O tipo será aplicado como classe CSS modificando as
      dimensões e aparência do banner.
    </p>

    <h4>Tipo Quadrado</h4>
    <p>Banner no formato quadrado (368x368px)</p>
    <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
      <Banner type="quadrado" />
    </div>
    <pre className="showCode">
      <code>{`<Banner type="quadrado" />`}</code>
    </pre>

    <h4>Tipo Variant4</h4>
    <p>Banner no formato variant4 (1150x250px)</p>
    <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
      <Banner type="variant4" />
    </div>
    <pre className="showCode">
      <code>{`<Banner type="variant4" />`}</code>
    </pre>

    <h3>Com Imagem Personalizada</h3>
    <p>
      Utiliza a prop <code>imageUrl</code> para especificar uma imagem
      personalizada. A prop <code>imageAlt</code> define o texto alternativo da
      imagem.
      <br />
      Observação: A ideia é que a imagem, link sejam gerenciados via Plone.
    </p>
    <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
      <Banner
        imageUrl="https://www.estado.rs.gov.br/upload/arquivos/202409/banner-plano-na-tua-mao.png"
        imageAlt="Banner Plano na Tua Mão"
        linkUrl="https://www.estado.rs.gov.br/na-tua-mao"
      />
    </div>
    <pre className="showCode">
      <code>{`<Banner`}</code> <br />
      <code>{`  imageUrl="https://www.estado.rs.gov.br/upload/arquivos/202409/banner-plano-na-tua-mao.png"`}</code>{' '}
      <br />
      <code>{`  imageAlt="Banner Plano na Tua Mão"`}</code> <br />
      <code>{`  linkUrl="https://www.estado.rs.gov.br/na-tua-mao"`}</code>{' '}
      <code>{`/>`}</code>
    </pre>
  </>
);
