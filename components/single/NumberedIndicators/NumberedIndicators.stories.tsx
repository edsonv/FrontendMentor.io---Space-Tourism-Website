import { Meta, StoryObj } from '@storybook/nextjs-vite';
import { NumberedIndicators } from './NumberedIndicators.component';
import { numberedIndicatorsDefaultItems } from './test-data';

const meta = {
	title: 'Numbered indicators',
	component: NumberedIndicators,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		size: {
			control: 'radio',
			options: ['sm', 'lg'],
		},
		orientation: {
			control: 'radio',
			options: ['horizontal', 'vertical'],
		},
	},
} satisfies Meta<typeof NumberedIndicators>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
	decorators: [
		(Story) => (
			<>
				<style>{`
        .numbered-indicators > button:nth-child(2){background-color: rgba(255, 255, 255, 0.5);
        }
        `}</style>
				<Story />
			</>
		),
	],
	args: {
		size: 'lg',
		orientation: 'horizontal',
		slides: numberedIndicatorsDefaultItems,
	},
};

export const Small: Story = {
	decorators: [
		(Story) => (
			<>
				<style>{`
        .numbered-indicators > button:nth-child(2){background-color: rgba(255, 255, 255, 0.5);
        }
        `}</style>
				<Story />
			</>
		),
	],
	args: {
		size: 'sm',
		orientation: 'horizontal',
		slides: numberedIndicatorsDefaultItems,
	},
};
