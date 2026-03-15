import { DisplayButton } from '@/components/single/DisplayButton/DisplayButton.component';
import { DotPagination } from '@/components/single/DotPagination/DotPagination.component';
import { dotPaginationDefaultItems } from '@/components/single/DotPagination/test-data';
import { PrimaryNavigation } from '@/components/single/PrimaryNavigation/PrimaryNavigation.component';
import { defaultItems } from '@/components/single/PrimaryNavigation/test-data';
import { TabList } from '@/components/single/TabList/TabList.component';
import { tabListDefaultItems } from '@/components/single/TabList/test-data';
import { Section } from '../Section';
import { Separator } from '../Separator';

export const InteractiveElementsSection = () => {
	return (
		<Section
			order='03'
			title='Interactive Elements'>
			<div className='grid gap-9'>
				{/* Subsection: Display Button */}
				<div>
					<h3 className='text-blue-300 text-preset-9'>Display Button</h3>

					<Separator />

					<div className='grid grid-cols-2 items-center justify-items-center'>
						<DisplayButton />
						<DisplayButton size='sm' />
					</div>
				</div>

				{/* Subsection: Navigation */}
				<div>
					<h3 className='text-blue-300 text-preset-9'>Navigation</h3>

					<Separator />

					<div className='grid grid-cols-2 items-center justify-items-center'>
						<PrimaryNavigation
							items={defaultItems}
							orientation='horizontal'
						/>
						<PrimaryNavigation
							items={defaultItems}
							orientation='vertical'
						/>
					</div>
				</div>

				{/* Subsection: Tabs */}
				<div>
					<h3 className='text-blue-300 text-preset-9'>Tabs</h3>

					<Separator />

					<div className='flex justify-center'>
						<TabList items={tabListDefaultItems} />
					</div>
				</div>

				{/* Subsection: Dot pagination */}
				<div>
					<h3 className='text-blue-300 text-preset-9'>Dot pagination</h3>

					<Separator />

					<div className='grid grid-cols-2 items-center justify-items-center'>
						<DotPagination slides={dotPaginationDefaultItems} />
						<DotPagination
							slides={dotPaginationDefaultItems}
							size='sm'
						/>
					</div>
				</div>
			</div>
		</Section>
	);
};
