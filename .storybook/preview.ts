import type { Preview } from '@storybook/nextjs-vite';
import '../app/globals.css';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		backgrounds: {
			options: {
				dark: { name: 'Dark', value: 'hsl(230, 35%, 7%)' },
				light: { name: 'Light', value: '#ffffff' },
			},
		},

		a11y: {
			// 'todo' - show a11y violations in the test UI only
			// 'error' - fail CI on a11y violations
			// 'off' - skip a11y checks entirely
			test: 'todo',
		},
	},
	initialGlobals: {
		// 👇 Set the initial background color
		backgrounds: { value: 'dark' },
	},
};

export default preview;
