import { DisplayButton } from '@/components/single/DisplayButton/DisplayButton.component';
import { DotPagination } from '@/components/single/DotPagination/DotPagination.component';
import { dotPaginationDefaultItems } from '@/components/single/DotPagination/test-data';
import { NumberedIndicators } from '@/components/single/NumberedIndicators/NumberedIndicators.component';
import { numberedIndicatorsDefaultItems } from '@/components/single/NumberedIndicators/test-data';
import { PrimaryNavigation } from '@/components/single/PrimaryNavigation/PrimaryNavigation.component';
import { defaultItems } from '@/components/single/PrimaryNavigation/test-data';
import { TabList } from '@/components/single/TabList/TabList.component';
import { tabListDefaultItems } from '@/components/single/TabList/test-data';
import { Section } from '../Section';
import { SubSection } from '../SubSection';

export const InteractiveElementsSection = () => {
	return (
		<Section
			order='03'
			title='Interactive Elements'>
			<div className='grid gap-9'>
				{/* Subsection: Display Button */}
				<SubSection title='Display button'>
					<div className='grid grid-cols-2 items-center justify-items-center'>
						<DisplayButton />
						<DisplayButton size='sm' />
					</div>
				</SubSection>

				{/* Subsection: Navigation */}
				<SubSection title='Primary navigation'>
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
				</SubSection>

				{/* Subsection: Tabs */}
				<SubSection title='Tab menu'>
					<div className='flex justify-center'>
						<TabList items={tabListDefaultItems} />
					</div>
				</SubSection>

				{/* Subsection: Dot pagination */}
				<SubSection title='Dot pagination'>
					<div className='grid grid-cols-2 items-center justify-items-center'>
						<DotPagination slides={dotPaginationDefaultItems} />
						<DotPagination
							slides={dotPaginationDefaultItems}
							size='sm'
						/>
					</div>
				</SubSection>

				{/* Subsection: Numbered indicators */}
				<SubSection title='Numbered indicators'>
					<div className='grid grid-cols-2 items-center justify-items-center'>
						<NumberedIndicators slides={numberedIndicatorsDefaultItems} />
						<NumberedIndicators
							slides={numberedIndicatorsDefaultItems}
							size='sm'
						/>
					</div>
				</SubSection>
			</div>
		</Section>
	);
};
