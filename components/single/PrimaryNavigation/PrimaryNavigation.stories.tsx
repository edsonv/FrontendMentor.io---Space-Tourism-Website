// PrimaryNavigation.stories.ts (Ejemplo)
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { PrimaryNavigation } from './PrimaryNavigation.component';
import { defaultItems } from './test-data';

const meta = {
	title: 'PrimaryNavigation',
	component: PrimaryNavigation,
	parameters: {
		layout: 'centered', // Centra el componente en la vista de Storybook
	},
	argTypes: {
		orientation: {
			control: 'radio',
			options: ['horizontal', 'vertical'],
			description: 'Define la orientación de la barra de navegación',
		},
	},
} satisfies Meta<typeof PrimaryNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

// Historia por defecto (Horizontal)
export const Horizontal: Story = {
	args: {
		orientation: 'horizontal',
		items: defaultItems, // Pasamos el arreglo completo aquí
	},
	decorators: [
		(Story) => (
			<>
				{/*
					Since these states are strictly controlled by user interaction in
					the actual component, we can force the visual mapping in Storybook
					using a targeted style block without modifying component logic!
				*/}
				<style>{`
					.primary-navigation[data-orientation="horizontal"] > ul > li:nth-child(2) > a {
						border-bottom: 3px solid rgba(255, 255, 255, 0.5); /* Hover */
					}
					.primary-navigation[data-orientation="horizontal"] > ul > li:nth-child(3) > a {
						border-bottom: 3px solid rgba(255, 255, 255, 1); /* Active */
					}
				`}</style>
				<Story />
			</>
		),
	],
};

// Historia Vertical
export const Vertical: Story = {
	args: {
		orientation: 'vertical',
		items: defaultItems,
	},
	decorators: [
		(Story) => (
			<>
				{/*
					Since these states are strictly controlled by user interaction in
					the actual component, we can force the visual mapping in Storybook
					using a targeted style block without modifying component logic!
				*/}
				<style>{`
					.primary-navigation[data-orientation="vertical"] > ul > li:nth-child(2) > a {
						border-right: 3px solid rgba(255, 255, 255, 0.5); /* Hover */
					}
					.primary-navigation[data-orientation="vertical"] > ul > li:nth-child(3) > a {
						border-right: 3px solid rgba(255, 255, 255, 1); /* Active */
					}
				`}</style>
				<Story />
			</>
		),
	],
};
