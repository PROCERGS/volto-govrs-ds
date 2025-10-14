import React, { useState } from 'react';
import CustomTextarea from './CustomTextarea';

// Simple wrapper to handle state for stories
const TextareaStory = ({ initialValue = '', ...props }) => {
  const [value, setValue] = useState(initialValue);
  return <CustomTextarea {...props} value={value} onChange={setValue} />;
};

export const Default = () => (
  <>
    <TextareaStory
    id="textarea-default"
    title="Área de texto"
    placeholder="Digite seu texto aqui..."
    />
    <h1>Documentação de Default</h1>
    <p>Este é o exemplo básico do componente CustomTextarea, mostrando sua configuração mínima necessária.
    O componente requer apenas três propriedades obrigatórias: <code>id</code> (identificador único),
    <code>title</code> (rótulo do campo) e <code>placeholder</code> (texto de ajuda quando o campo está vazio).
    Este é o ponto de partida ideal para entender o componente antes de explorar suas funcionalidades avançadas
    como validação, estados visuais, diferentes tamanhos e modo escuro.</p>
  </>
);

export const WithValue = () => (
  <>
    <TextareaStory
      id="textarea-value"
      title="Área de texto com valor inicial"
      placeholder="Digite seu texto aqui..."
      initialValue="Este é um texto inicial no campo textarea."
    />
    <h1>Documentação de WithValue</h1>
    <p>Este exemplo demonstra como inicializar o componente com um valor pré-preenchido através da propriedade <code>initialValue</code>.
    Isso é útil em cenários de edição onde o usuário precisa modificar um conteúdo existente, como em formulários de atualização
    de perfil, edição de comentários ou qualquer situação onde dados já salvos precisam ser carregados para modificação.
    O valor pode ser alterado normalmente pelo usuário após o carregamento inicial.</p>
  </>
);

export const WithDescription = () => (
  <>
    <TextareaStory
      id="textarea-description"
      title="Área de texto com descrição"
      description="Esta é uma descrição útil explicando o propósito deste campo."
      placeholder="Digite seu texto aqui..."
    />
    <h1>Documentação de WithDescription</h1>
    <p>Exemplo que mostra como adicionar um texto descritivo abaixo do campo usando a propriedade <code>description</code>.
    As descrições são fundamentais para melhorar a usabilidade do formulário, pois orientam o usuário sobre o que deve
    ser preenchido, qual formato é esperado ou fornecem contexto adicional sobre a finalidade do campo. Use descrições
    para reduzir dúvidas e erros de preenchimento, especialmente em campos que possam gerar confusão.</p>
  </>
);


export const WithMaxLength = () => (
  <>
    <TextareaStory
      id="textarea-maxlength"
      title="Área de texto com limite de caracteres"
      maxLength={100}
      placeholder="Máximo de 100 caracteres..."
      description="Tente digitar mais de 100 caracteres para ver a validação."
    />
    <h1>Documentação de WithMaxLength</h1>
    <p>Demonstra como aplicar um limite máximo de caracteres usando a propriedade <code>maxLength</code>.
    O componente exibe automaticamente um contador de caracteres (X/100) para que o usuário saiba quantos
    caracteres já digitou e quantos ainda restam. Quando o limite é atingido, o campo impede a digitação
    de caracteres adicionais. Este recurso é essencial para campos que precisam respeitar restrições de
    banco de dados ou limitações de APIs externas.</p>
  </>
);


export const Disabled = () => (
  <>
    <TextareaStory
      id="textarea-disabled"
      title="Área de texto desabilitada"
      isDisabled={true}
      placeholder="Este campo está desabilitado"
      initialValue="Este textarea está desabilitado"
      description="Este campo não pode ser editado"
    />
    <h1>Documentação de Disabled</h1>
    <p>Mostra o textarea no estado desabilitado através da propriedade <code>isDisabled</code>.
    Quando desabilitado, o campo não permite nenhuma interação do usuário: não pode ser focado, editado
    ou selecionado. Além disso, recebe um estilo visual diferenciado (geralmente com opacidade reduzida)
    para indicar claramente que está inativo. Use este estado para campos que não devem ser editáveis em
    determinados contextos, como dados bloqueados, informações apenas de leitura ou campos dependentes
    de outras condições do formulário.</p>
  </>
);


export const WithPlaceholder = () => (
  <>
    <TextareaStory
      id="textarea-placeholder"
      title="Área de texto com placeholder"
      placeholder="Este é um texto de placeholder informativo..."
    />
    <h1>Documentação de WithPlaceholder</h1>
    <p>Destaca o uso da propriedade <code>placeholder</code> para exibir um texto de dica quando o campo está vazio.
    O placeholder é uma forma leve e não intrusiva de orientar o usuário sobre o tipo de conteúdo esperado, fornecendo
    exemplos ou instruções breves. Diferente da descrição, o placeholder desaparece assim que o usuário começa a digitar.
    Boas práticas: use placeholders para exemplos concretos ("Ex: João Silva") e descrições para instruções mais detalhadas.</p>
  </>
);


export const Required = () => (
  <>
    <TextareaStory
      id="textarea-required"
      title="Campo obrigatório *"
      placeholder="Este campo é obrigatório"
      description="Você deve preencher este campo antes de enviar o formulário."
    />
    <h1>Documentação de Required</h1>
    <p>Demonstra como marcar um campo como obrigatório adicionando um asterisco (*) ao título.
    Esta é uma convenção visual amplamente reconhecida para indicar campos que devem ser preenchidos
    antes do envio do formulário. Embora este exemplo mostre apenas a marcação visual, em uma implementação
    real você também deve adicionar validação programática para garantir que o campo não seja enviado vazio.
    Sempre combine indicadores visuais com validação funcional para uma melhor experiência do usuário.</p>
  </>
);


export const Left = () => (
  <>
    <TextareaStory
      id="textarea-left"
      title="Rótulo à esquerda"
      left={true}
      placeholder="Textarea com layout horizontal..."
      initialValue="Este textarea tem o rótulo posicionado à esquerda"
    />
    <h1>Documentação de Left</h1>
    <p>Mostra uma variante de layout onde o rótulo é posicionado à esquerda do campo usando a propriedade <code>left</code>.
    Este layout horizontal é útil quando você tem restrições de espaço vertical ou deseja criar formulários mais compactos.
    É comum em painéis administrativos, filtros laterais ou formulários onde múltiplos campos precisam ser visualizados
    simultaneamente. Certifique-se de que há espaço horizontal suficiente para acomodar tanto o rótulo quanto o campo
    sem comprometer a legibilidade.</p>
  </>
);


// Size variants
export const Small = () => (
  <>
    <TextareaStory
      id="textarea-small"
      title="Área de texto pequena"
      size="small"
      placeholder="Tamanho pequeno..."
    />
    <h1>Documentação de Small</h1>
    <p>Variante de tamanho pequeno definida pela propriedade <code>size="small"</code>.
    Esta versão possui padding interno reduzido e altura mínima menor, tornando-a ideal para interfaces compactas,
    formulários com muitos campos ou situações onde o espaço é limitado. Use em sidebars, modais pequenos,
    campos secundários ou quando você precisa maximizar a quantidade de informação visível na tela sem necessidade
    de muito espaço vertical para cada campo.</p>
  </>
);


export const Large = () => (
  <>
    <TextareaStory
      id="textarea-large"
      title="Área de texto grande"
      size="large"
      placeholder="Tamanho grande..."
    />
    <h1>Documentação de Large</h1>
    <p>Variante de tamanho grande definida pela propriedade <code>size="large"</code>.
    Com padding interno aumentado e maior altura mínima, esta versão é perfeita para campos que requerem entrada
    de textos mais longos e detalhados. Use para descrições extensas, comentários, mensagens, conteúdo de artigos
    ou qualquer situação onde o usuário precisa visualizar e editar várias linhas de texto confortavelmente.
    O tamanho maior também destaca a importância do campo na hierarquia visual do formulário.</p>
  </>
);


// State variants with feedback
export const Success = () => (
  <>
    <TextareaStory
      id="textarea-success"
      title="Estado de sucesso"
      State="success"
      placeholder="Estado de sucesso com borda verde"
      initialValue="Este campo está em estado de sucesso"
      description="Exibe borda verde e badge de feedback 'Campo correto'"
    />
    <h1>Documentação de Success</h1>
    <p>Estado de sucesso aplicado através da propriedade <code>State="success"</code>.
    Exibe borda verde e uma mensagem de feedback positivo para confirmar visualmente que o campo foi preenchido
    corretamente e passou na validação. Use este estado após validações bem-sucedidas para dar feedback positivo
    imediato ao usuário, aumentando a confiança de que os dados foram inseridos corretamente. Especialmente útil
    em formulários complexos ou longos onde o usuário precisa de confirmação contínua durante o preenchimento.</p>
  </>
);


export const Error = () => (
  <>
    <TextareaStory
      id="textarea-error"
      title="Estado de erro"
      State="error"
      placeholder="Estado de erro com borda vermelha"
      initialValue="Este campo está em estado de erro"
      description="Exibe borda vermelha e badge de feedback 'Campo com erro'"
    />
    <h1>Documentação de Error</h1>
    <p>Estado de erro aplicado através da propriedade <code>State="error"</code>.
    Exibe borda vermelha e uma mensagem de feedback negativo para indicar que há um problema com o valor inserido.
    Use este estado quando a validação falhar, como campos vazios obrigatórios, formatos inválidos, valores fora
    do intervalo permitido ou qualquer outro erro de validação. Sempre acompanhe estados de erro com mensagens
    claras explicando qual é o problema e como corrigi-lo, ajudando o usuário a resolver o erro rapidamente.</p>
  </>
);


export const Warning = () => (
  <>
    <TextareaStory
      id="textarea-warning"
      title="Estado de aviso"
      State="warning"
      placeholder="Estado de aviso com borda amarela"
      initialValue="Este campo está em estado de aviso"
      description="Exibe borda amarela e badge de feedback 'Atenção'"
    />
    <h1>Documentação de Warning</h1>
    <p>Estado de aviso aplicado através da propriedade <code>State="warning"</code>.
    Exibe borda amarela e uma mensagem de atenção para alertar o usuário sobre algo que requer cuidado, mas não
    necessariamente impede o envio do formulário. Use para situações como: valores incomuns mas aceitáveis, campos
    opcionais que são altamente recomendados, alertas sobre possíveis consequências de uma escolha, ou quando
    o usuário deve revisar a informação antes de prosseguir. Warnings são menos críticos que erros mas mais importantes
    que informações simples.</p>
  </>
);


export const Info = () => (
  <>
    <TextareaStory
      id="textarea-info"
      title="Estado informativo"
      State="info"
      placeholder="Estado informativo com borda azul"
      initialValue="Este campo está em estado informativo"
      description="Exibe borda azul e badge de feedback 'Informação'"
    />
    <h1>Documentação de Info</h1>
    <p>Estado informativo aplicado através da propriedade <code>State="info"</code>.
    Exibe borda azul e uma mensagem informativa para fornecer contexto adicional, dicas úteis ou informações
    complementares sobre o campo. Diferente de warnings e erros, o estado info é neutro e não indica problemas.
    Use para: explicar comportamentos específicos do campo, sugerir melhores práticas, fornecer exemplos de
    preenchimento correto, ou destacar informações importantes que ajudem o usuário a preencher o campo de forma
    mais eficiente e precisa.</p>
  </>
);


export const DarkMode = () => (
  <>
    <div style={{ background: '#071d41', padding: '2rem' }}>
      <TextareaStory
        id="textarea-dark"
        title="Modo escuro"
        darkMode={true}
        placeholder="Textarea em modo escuro..."
        initialValue="Este textarea usa o estilo de modo escuro"
        description="O textarea está estilizado para fundos escuros"
      />
    </div>
    <h1>Documentação de DarkMode</h1>
    <p>Variante otimizada para fundos escuros ativada pela propriedade <code>darkMode={true}</code>.
    Esta versão ajusta cores, contrastes e opacidades para garantir legibilidade e acessibilidade quando o componente
    é usado em seções com fundo escuro. Use em temas dark, modais escuros, sidebars ou qualquer seção da interface
    que utilize paleta de cores escura. O modo escuro não é apenas uma inversão de cores, mas um ajuste cuidadoso
    para manter a hierarquia visual e o conforto de leitura em ambientes com pouca luz.</p>
  </>
);


export const LongText = () => (
  <>
    <TextareaStory
      id="textarea-long"
      title="Área de texto com texto longo"
      initialValue={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
    />
    <h1>Documentação de LongText</h1>
    <p>Exemplo demonstrando o comportamento do componente quando preenchido com texto longo e múltiplas linhas.
    O textarea se ajusta automaticamente ao conteúdo, expandindo verticalmente conforme necessário e mantendo
    a barra de rolagem quando o conteúdo excede a altura máxima definida. Este exemplo é importante para testar
    a legibilidade, espaçamento de linhas, comportamento de scroll e performance do componente com grande volume
    de texto. Observe como o componente preserva quebras de linha e formatação do texto original.</p>
  </>
);


export const MaxLengthWithError = () => (
  <>
    <TextareaStory
      id="textarea-maxerror"
      title="Validação de limite de caracteres"
      maxLength={50}
      placeholder="Máximo de 50 caracteres..."
      initialValue="Este texto já é bastante longo e vai disparar o erro quando você adicionar mais caracteres."
      description="Limite de 50 caracteres. A mensagem de erro aparece quando excedido."
    />
    <h1>Documentação de MaxLengthWithError</h1>
    <p>Demonstra o comportamento específico quando o campo já é inicializado com um valor que excede o limite de caracteres
    definido por <code>maxLength</code>. Neste cenário, o componente exibe imediatamente uma mensagem de erro e impede
    a adição de novos caracteres, mas permite que o usuário delete caracteres para voltar ao limite permitido. Este exemplo
    é importante para situações onde dados existentes podem ter sido salvos antes da implementação de limites, ou quando
    limites são reduzidos em atualizações do sistema. A interface comunica claramente o problema e guia o usuário para
    a solução.</p>
  </>
);


export const Playground = (args) => <TextareaStory {...args} />;

Playground.args = {
  id: 'textarea-playground',
  title: 'Playground Textarea',
  placeholder: 'Enter text here...',
  description: 'This is a description',
  initialValue: '',
  size: undefined,
  State: undefined,
  darkMode: false,
  isDisabled: false,
  maxLength: undefined,
  left: false,
};

export default {
  title: 'GovRS DS/Widgets/Textarea',
  component: CustomTextarea,
  decorators: [
    (Story) => (
      <div className="ui segment form attached" style={{ width: '600px', padding: '2rem' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    id: {
      control: 'text',
      description: 'Identificador único do campo textarea',
      table: {
        type: { summary: 'string' },
        category: 'Obrigatório',
      },
    },
    title: {
      control: 'text',
      description: 'Texto do rótulo (label) exibido acima do textarea',
      table: {
        type: { summary: 'string' },
        category: 'Obrigatório',
      },
    },
    value: {
      control: 'text',
      description: 'Valor atual do textarea',
      table: {
        type: { summary: 'string' },
        category: 'Obrigatório',
      },
    },
    onChange: {
      action: 'changed',
      description: 'Função callback chamada quando o valor muda. Recebe o novo valor como string.',
      table: {
        type: { summary: '(value: string) => void' },
        category: 'Obrigatório',
      },
    },
    description: {
      control: 'text',
      description: 'Texto descritivo opcional exibido abaixo do textarea para orientar o usuário',
      table: {
        type: { summary: 'string' },
        category: 'Opcional',
        defaultValue: { summary: 'undefined' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Texto de placeholder exibido quando o textarea está vazio',
      table: {
        type: { summary: 'string' },
        category: 'Opcional',
        defaultValue: { summary: 'undefined' },
      },
    },
    maxLength: {
      control: 'number',
      description: 'Número máximo de caracteres permitidos. Exibe mensagem de erro quando excedido.',
      table: {
        type: { summary: 'number' },
        category: 'Opcional',
        defaultValue: { summary: 'undefined' },
      },
    },
    isDisabled: {
      control: 'boolean',
      description: 'Desabilita o textarea quando verdadeiro, impedindo edição',
      table: {
        type: { summary: 'boolean' },
        category: 'Opcional',
        defaultValue: { summary: 'false' },
      },
    },
    size: {
      control: 'select',
      options: [undefined, 'small', 'large'],
      description: 'Variante de tamanho do textarea. Afeta o padding interno e altura mínima.',
      table: {
        type: { summary: "'small' | 'large'" },
        category: 'Opcional',
        defaultValue: { summary: 'medium (padrão)' },
      },
    },
    State: {
      control: 'select',
      options: [undefined, 'success', 'error', 'warning', 'info'],
      description: 'Estado visual do textarea. Altera a cor da borda e exibe mensagem de feedback com ícone.',
      table: {
        type: { summary: "'success' | 'error' | 'warning' | 'info'" },
        category: 'Opcional',
        defaultValue: { summary: 'undefined' },
      },
    },
    darkMode: {
      control: 'boolean',
      description: 'Ativa o estilo de modo escuro para o textarea (para fundos escuros)',
      table: {
        type: { summary: 'boolean' },
        category: 'Opcional',
        defaultValue: { summary: 'false' },
      },
    },
    left: {
      control: 'boolean',
      description: 'Posiciona o rótulo à esquerda do textarea ao invés de acima',
      table: {
        type: { summary: 'boolean' },
        category: 'Opcional',
        defaultValue: { summary: 'false' },
      },
    },
  },
};
