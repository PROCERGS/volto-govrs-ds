import React from 'react';
import Card from './Card';
import type { Meta, StoryObj } from '@storybook/react';


const meta = {
  title: 'GovRS/Card',
  component: Card,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    image: {
      control: 'text',
      description: 'URL for the card image',
    },
    imageAlt: {
      control: 'text',
      description: 'Alternative text for the image',
    },
    title: {
      control: 'text',
      description: 'Card title',
    },
    description: {
      control: 'text',
      description: 'Card description text',
    },
    href: {
      control: 'text',
      description: 'URL to navigate to when card is clicked',
    },
    variant: {
      control: 'select',
      options: ['default', 'horizontal', 'compact'],
      description: 'Card layout variant',
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler function',
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop',
    imageAlt: 'Beach landscape',
    title: 'Card Title',
    description: 'This is a description of the card content. It can contain multiple lines of text.',
    variant: 'post',
  },
};

export const WithoutImage: Story = {
  args: {
    title: 'Card without Image',
    description: 'This card demonstrates how it looks without an image. The content area takes up the full height of the card.',
  },
};

export const WithFooter: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop',
    imageAlt: 'Beach landscape',
    title: 'Card with Footer',
    description: 'This card includes a footer section.',
    footer: (
      <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
        <button style={{ padding: '8px 16px', background: '#1351b4', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Action
        </button>
      </div>
    ),
  },
};

export const AsLink: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop',
    imageAlt: 'Beach landscape',
    title: 'Clickable Card',
    description: 'This card is a link and will navigate to the specified URL when clicked.',
    href: 'https://www.rs.gov.br/',
  },
};

export const Horizontal: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop',
    imageAlt: 'Beach landscape',
    title: 'Horizontal Card',
    description: 'This variant displays the image on the left side and content on the right.',
    variant: 'horizontal',
  },
};

export const Compact: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop',
    imageAlt: 'Beach landscape',
    title: 'Compact Card',
    description: 'A more compact version with smaller image and padding.',
    variant: 'compact',
  },
};

export const LongContent: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop',
    imageAlt: 'Beach landscape',
    title: 'Card with Long Title and Description',
    description: 'This card demonstrates how longer content is handled. The description can span multiple lines and the card will adjust its height accordingly. This is useful for cards that need to display more detailed information to users.',
  },
};

export const CardGrid: Story = {
  render: () => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '1.5rem',
      padding: '1rem'
    }}>
      <Card
        image="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop"
        title="Beach Paradise"
        description="Discover the most beautiful beaches in Rio Grande do Sul."
        href="#"
      />
      <Card
        image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
        title="Mountain Trails"
        description="Explore hiking trails through stunning mountain landscapes."
        href="#"
      />
      <Card
        image="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=400&fit=crop"
        title="Urban Life"
        description="Experience the vibrant culture of Porto Alegre."
        href="#"
      />
      <Card
        image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop"
        title="Nature Reserves"
        description="Visit protected natural areas and wildlife sanctuaries."
        href="#"
      />
    </div>
  ),
};

export const CompactGrid: Story = {
  render: () => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '1rem',
      padding: '1rem'
    }}>
      <Card
        variant="post"
        image="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop"
        title="Beach Paradise"
        description="Beautiful beaches in RS."
      />
      <Card
        variant="post"
        image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
        title="Mountain Trails"
        description="Stunning landscapes."
      />
      <Card
        variant="post"
        image="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=400&fit=crop"
        title="Urban Life"
        description="Vibrant culture."
      />
      <Card
        variant="post"
        image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop"
        title="Nature Reserves"
        description="Protected areas."
      />
    </div>
  ),
};
