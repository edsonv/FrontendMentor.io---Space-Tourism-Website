import { DisplayButton } from '@/components/single/DisplayButton/DisplayButton.component';
import { PrimaryNavigation } from '@/components/single/PrimaryNavigation/PrimaryNavigation.component';
import { defaultItems } from '@/components/single/PrimaryNavigation/test-data';
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
						<PrimaryNavigation items={defaultItems} />
						<PrimaryNavigation items={defaultItems} />
					</div>
				</SubSection>

				{/* Subsection: Tabs */}
				{/* <SubSection title='Tab menu'>
					<div className='flex justify-center'>
						<TabList items={tabListDefaultItems} />
					</div>
				</SubSection> */}

				{/* Subsection: Dot pagination */}
				{/* <SubSection title='Dot pagination'>
					<div className='grid grid-cols-2 items-center justify-items-center'>
						<DotPagination items={dotPaginationDefaultItems} />
						<DotPagination items={dotPaginationDefaultItems} />
					</div>
				</SubSection> */}

				{/* Subsection: Numbered indicators */}
				{/* <SubSection title='Numbered indicators'>
					<div className='grid grid-cols-2 items-center justify-items-center'>
						<NumberedIndicators items={numberedIndicatorsDefaultItems} />
						<NumberedIndicators items={numberedIndicatorsDefaultItems} />
					</div>
				</SubSection> */}
			</div>
		</Section>
	);
};
