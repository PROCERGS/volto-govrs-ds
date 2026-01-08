import React from 'react';
import Menu from './Menu';
import { 
  faUser, faHeart, faBook, faMagnifyingGlass, faBell, 
  faCircleInfo, faCalendarDays, faGear, faGlobe 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebookF, faInstagram, faTwitter, faYoutube, faLinkedin 
} from '@fortawesome/free-brands-svg-icons';

export default {
  title: 'Components/Menu',
  component: Menu,
  parameters: {
    layout: 'fullscreen',
  },
};

const CodeBlock = ({ title, code }) => (
  <div style={{ marginBottom: '32px' }}>
    <h4 style={{marginBottom: '12px' }}>{title}</h4>
    <pre style={{
      backgroundColor: '#f5f5f5',
      color: '#333',
      padding: '20px',
      borderRadius: '4px',
      fontSize: '14px',
      overflowX: 'auto',
      border: '1px solid #ddd',
      lineHeight: '1.5'
    }}>
      <code>{code}</code>
    </pre>
  </div>
);

export const Documentacao = () => (
  <div style={{ padding: '40px', maxWidth: '950px', fontFamily: 'sans-serif' }}>
    <h1 style={{marginBottom: '12px' }}>
      Componente de Menu
    </h1>
    
    <CodeBlock 
      title="1. Exemplo Básico de Chamada"
      code={`import Menu from './components/Menu';\nimport { faBars } from '@fortawesome/free-solid-svg-icons';\n\n<Menu items={[{ title: 'Início', url: '/', leftIcon: faBars }]} />`} 
    />

    <CodeBlock 
      title="2. Cabeçalho: Logo"
      code={`<Menu logo="imagem.svg" />`} 
    />

    <CodeBlock 
      title="3. Itens e Subitens (Recursivo)"
      code={`import { faBook, faUser } from '@fortawesome/free-solid-svg-icons';\n\nconst items = [\n  {\n    title: 'Nível 1',\n    leftIcon: faBook,\n    links: [\n      { label: 'Nível 2', leftIcon: faUser, links: [{ label: 'Nível 3' }] }\n    ]\n  }\n];`} 
    />

    <CodeBlock 
      title="4. Rodapé: Links (Seta externa automática)"
      code={`<Menu \n  footerLinks={[\n    { label: 'Portal Externo', url: 'https://www.google.com' },\n    { label: 'Página Interna', url: '/privacidade' }\n  ]}\n  socialIcons={[{ icon: faFacebookF, url: '#' }]}\n  copyrightText="© 2026 Governo do RS"\n/>`} 
    />
  </div>
);
Documentacao.storyName = "Documentação";

const InteractiveTemplate = (args) => {
  const codeString = `
import Menu from './components/Menu';
import { faBook, faGear, faUser, faCircleInfo, faHeart, faBell, faCalendarDays, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const App = () => (
  <Menu 
    logo="${args.logo}"
    copyrightText="${args.copyrightText}"
    items: [
    {
      title: 'Item',
      leftIcon: faBook,
      links: [
        { 
          label: 'Item nível 2', 
          leftIcon: faGear,
          links: [
            { label: 'Item nível 3', url: '#', leftIcon: faUser },
            { label: 'Item nível 3', url: '#', leftIcon: faCircleInfo },
          ]
        },
        { label: 'Páginas Estáticas', url: '#', leftIcon: faHeart }
      ]
    },
    {
      title: 'Item',
      leftIcon: faBell,
      links: [{ label: 'Item nível 2', url: '#', leftIcon: faCalendarDays }]
    },
    { title: 'Item Simples', leftIcon: faGlobe, url: '#' }
    ]
    footerLinks={[
      { label: 'Link Externo Google', url: 'https://www.google.com' },
      { label: 'Acessibilidade', url: '#' }
    ]}
    socialIcons={[
      { icon: faFacebookF, url: '#' },
      { icon: faTwitter, url: '#' }
    ]}
    copyrightText="© 2026 Governo do RS"
  />
);`.trim();

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '40px', background: '#fff' }}>
        <h3 style={{ marginBottom: '16px' }}>Acionar Menu</h3>
        <Menu {...args} />
        <h3 style={{ marginBottom: '16px' }}>Código Completo do Exemplo</h3>
        <pre style={{ backgroundColor: '#f5f5f5', padding: '24px', borderRadius: '4px', fontSize: '14px', border: '1px solid #ddd' }}>
          <code>{codeString}</code>
        </pre>
      </div>
    </div>
  );
};

export const ExemploCompleto = InteractiveTemplate.bind({});
ExemploCompleto.storyName = "Exemplo Interativo";
ExemploCompleto.args = {
  logo: "ui-image.png",
  copyrightText: "© 2026 Documentação Procergs",
  items: [
    {
      title: 'Item',
      leftIcon: faBook,
      links: [
        { 
          label: 'Item nível 2', 
          leftIcon: faGear,
          links: [
            { label: 'Item nível 3', url: '#', leftIcon: faUser },
            { label: 'Item nível 3', url: '#', leftIcon: faCircleInfo },
          ]
        },
        { label: 'Páginas Estáticas', url: '#', leftIcon: faHeart }
      ]
    },
    {
      title: 'Item',
      leftIcon: faBell,
      links: [{ label: 'Item nível 2', url: '#', leftIcon: faCalendarDays }]
    },
    { title: 'Item Simples', leftIcon: faGlobe, url: '#' }
  ],
  footerLinks: [
    { label: 'Google (Externo)', url: 'https://www.google.com' },
    { label: 'Privacidade', url: '#' }
  ],
  socialIcons: [
    { icon: faFacebookF, url: '#' },
    { icon: faInstagram, url: '#' },
    { icon: faLinkedin, url: '#' }
  ],
  copyrightText:"© 2026 Governo do RS"
};