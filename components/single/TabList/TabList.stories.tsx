import { Meta, StoryObj } from '@storybook/nextjs-vite';
import { TabList } from './TabList.component';
import { tabListDefaultItems } from './test-data';

const meta = {
	title: 'TabMenu',
	component: TabList,
	decorators: [
		(Story) => (
			<>
				<style>
					{`
            .tab-menu > button:nth-child(2) {
            color: white;
            border-bottom: 3px solid rgba(255, 255, 255, 0.5);
            }
          `}
				</style>
				<Story />
			</>
		),
	],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof TabList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		items: tabListDefaultItems,
	},
};
