import React from 'react';
import Button from './../components/widgets/Button/Button';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Widgets/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    Class: {
      control: { type: 'select' },
      options: [1, 2, 3],
      description: 'Button class: 1 = primary, 2 = secondary, 3 = tertiary',
    },
    Size: {
      control: { type: 'select' },
      options: ['small', 'large', undefined],
      description: 'Button size',
    },
    State: {
      control: { type: 'select' },
      options: ['loading', 'disabled', 'active', undefined],
      description: 'Button state',
    },
    DarkMode: {
      control: 'boolean',
      description: 'Enable dark mode',
    },
    Circle: {
      control: 'boolean',
      description: 'Make button circular',
    },
    Block: {
      control: 'boolean',
      description: 'Make button full width',
    },
    OnClick: {
      action: 'clicked',
      description: 'Click handler',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Primary Buttons
export const Primary: Story = {
  args: {
    Class: 1,
    children: 'Primary Button',
  },
};

export const PrimarySmall: Story = {
  args: {
    Class: 1,
    Size: 'small',
    children: 'Small Primary',
  },
};

export const PrimaryLarge: Story = {
  args: {
    Class: 1,
    Size: 'large',
    children: 'Large Primary',
  },
};

// Secondary Buttons
export const Secondary: Story = {
  args: {
    Class: 2,
    children: 'Secondary Button',
  },
};

export const SecondarySmall: Story = {
  args: {
    Class: 2,
    Size: 'small',
    children: 'Small Secondary',
  },
};

export const SecondaryLarge: Story = {
  args: {
    Class: 2,
    Size: 'large',
    children: 'Large Secondary',
  },
};

// Tertiary Buttons
export const Tertiary: Story = {
  args: {
    Class: 3,
    children: 'Tertiary Button',
  },
};

// Button States
export const Loading: Story = {
  args: {
    Class: 1,
    State: 'loading',
    children: 'Loading...',
  },
};

export const Disabled: Story = {
  args: {
    Class: 1,
    State: 'disabled',
    children: 'Disabled Button',
  },
};

export const Active: Story = {
  args: {
    Class: 1,
    State: 'active',
    children: 'Active Button',
  },
};

// Circle Buttons
export const Circle: Story = {
  args: {
    Class: 1,
    Circle: true,
    children: '+',
  },
};

export const CircleSecondary: Story = {
  args: {
    Class: 2,
    Circle: true,
    children: '×',
  },
};

// Block Buttons
export const Block: Story = {
  args: {
    Class: 1,
    Block: true,
    children: 'Block Button',
  },
};

export const BlockSecondary: Story = {
  args: {
    Class: 2,
    Block: true,
    children: 'Block Secondary',
  },
};

// Dark Mode
export const DarkMode: Story = {
  args: {
    Class: 1,
    DarkMode: true,
    children: 'Dark Mode Button',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const DarkModeSecondary: Story = {
  args: {
    Class: 2,
    DarkMode: true,
    children: 'Dark Mode Secondary',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const Interactive: Story = {
  render: () => {
    const [msg, setMsg] = React.useState('');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
        <Button Class={1} OnClick={() => setMsg('Button clicked!')}>
          Click Me!
        </Button>
        <div style={{ minHeight: 20, marginTop: 6, color: msg ? '#111' : '#666', fontSize: 14 }}>
          {msg || 'Nenhuma ação ainda.'}
        </div>
      </div>
    );
  },
};

// All Variants Showcase
export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        maxWidth: '500px',
      }}
    >
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <Button Class={1}>Primary</Button>
        <Button Class={2}>Secondary</Button>
        <Button Class={3}>Tertiary</Button>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <Button Class={1} Size="small">
          Small
        </Button>
        <Button Class={1}>Normal</Button>
        <Button Class={1} Size="large">
          Large
        </Button>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <Button Class={1} State="loading">
          Loading
        </Button>
        <Button Class={1} State="disabled">
          Disabled
        </Button>
        <Button Class={1} State="active">
          Active
        </Button>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <Button Class={1} Circle>
          +
        </Button>
        <Button Class={2} Circle>
          −
        </Button>
        <Button Class={3} Circle>
          ×
        </Button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <Button Class={1} Block>
          Block Primary
        </Button>
        <Button Class={2} Block>
          Block Secondary
        </Button>
      </div>
    </div>
  ),
};
