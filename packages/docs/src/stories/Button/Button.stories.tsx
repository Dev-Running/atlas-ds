import { Button, ButtonProps } from '@devrunning/react'
import { Meta, StoryObj } from '@storybook/react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Forms/Button',
  component: Button,
  argTypes: {
    children: {
      control: 'text',
      description: 'The content of the button',
      type: 'string',
      defaultValue: {
        summary: 'Empty',
        detail: 'Insert a text',
      },
    },
    intent: {
      options: ['primary', 'light', 'outlinedGradientHomeStart'],
      description: "'primary', 'light', 'outlinedGradientHomeStart'",
      type: 'string',
      defaultValue: {
        summary: 'primary',
      },
      control: 'select',
    },
    size: {
      options: ['base', 'lg'],
      description: "'base', 'lg'",
      control: 'select',
      defaultValue: {
        summary: 'lg',
      },
    },
    weight: {
      options: ['light', 'normal', 'medium', 'semi-bold', 'bold'],
      description: "'normal', 'bold', 'semi-bold', 'medium', 'light'",
      control: 'select',
      defaultValue: {
        summary: 'semi-bold',
      },
    },
    'text-size': {
      options: ['sm', 'md', 'lg'],
      description: "'sm', 'md', 'lg'",
      control: 'select',
      defaultValue: {
        summary: 'md',
      },
    },
    rounded: {
      options: ['md'],
      description: "'md'",
      control: 'select',
      defaultValue: {
        summary: 'md',
      },
      name: 'rounded',
      type: 'string',
    },
    onClick: {
      table: {
        disable: true,
      },
      action: 'clicked',
    },
    as: {
      table: {
        disable: true,
      },
    },
    ref: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    intent: 'primary',
    weight: 'bold',
    'text-size': 'sm',
    rounded: 'md',
    children: 'Button',
  },
  parameters: {
    docs: {},
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as Meta<ButtonProps>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: StoryObj<typeof Button> = (args) => (
//   <Button {...args}> {args.children}</Button>
// )

export const Primary: StoryObj<ButtonProps> = {
  args: {
    intent: 'primary',
    size: 'base',
    'text-size': 'sm',
    weight: 'semi-bold',
    // @ts-ignore
    children: 'CRIAR CONTA',
  },
}

export const Light: StoryObj<ButtonProps> = {
  args: {
    intent: 'light',
    size: 'lg',
    'text-size': 'sm',
    weight: 'semi-bold',
    // @ts-ignore
    children: 'INICIAR JORNADA',
  },
}

export const HomeStart: StoryObj<ButtonProps> = {
  args: {
    intent: 'outlinedGradientHomeStart',
    size: 'lg',
    'text-size': 'sm',
    weight: 'semi-bold',
    // @ts-ignore
    children: 'TODOS OS CURSOS',
  },
}
// More on args: https://storybook.js.org/docs/react/writing-stories/args

// export const Light = Template.bind({})

// Light.args = {
//   intent: 'light',
//   size: 'lg',
//   children: 'INICIAR JORNADA',
// }

// export const HomeStart = Template.bind({})
// HomeStart.args = {
//   intent: 'outlinedGradientHomeStart',
//   size: 'lg',
//   children: 'TODOS OS CURSOS',
// }
