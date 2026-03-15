import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { DotPagination } from './DotPagination.component';
import { dotPaginationDefaultItems } from './test-data';

const meta = {
	title: 'DotPagination',
	component: DotPagination,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		size: {
			control: 'radio',
			options: ['sm', 'lg'],
			description: 'Define el tamaño de la paginación',
		},
	},
} satisfies Meta<typeof DotPagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
	decorators: [
		(Story) => (
			<>
				<style>
					{`
          .dot-pagination[data-size="lg"] > button:nth-child(2){
            background-color: rgba(255, 255, 255, 0.5);
          }
        `}
				</style>
				<Story />
			</>
		),
	],
	args: {
		size: 'lg',
		slides: dotPaginationDefaultItems,
	},
};

export const Small: Story = {
	decorators: [
		(Story) => (
			<>
				<style>
					{`
          .dot-pagination[data-size="sm"] > button:nth-child(2){
            background-color: rgba(255, 255, 255, 0.5);
          }
        `}
				</style>
				<Story />
			</>
		),
	],
	args: {
		size: 'sm',
		slides: dotPaginationDefaultItems,
	},
};
