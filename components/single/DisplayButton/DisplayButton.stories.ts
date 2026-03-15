import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { DisplayButton } from './DisplayButton.component';

const meta = {
	title: 'Display Button',
	component: DisplayButton,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		size: {
			control: 'radio',
			options: ['lg', 'sm'],
		},
	},
} satisfies Meta<typeof DisplayButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		size: 'lg',
	},
};

export const Mobile: Story = {
	args: {
		size: 'sm',
	},
};
