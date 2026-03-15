import { ColorsSection } from '@/components/design-system/sections/Colors.section';
import { Header } from '@/components/design-system/sections/Header.section';
import { InteractiveElementsSection } from '@/components/design-system/sections/InteractiveElements.section';
import { TypographySection } from '@/components/design-system/sections/Typography.section';

const DesignSystemPage = () => {
	return (
		<div className='max-w-180 mx-auto px-[85px]'>
			<div className='mx-10'>
				<Header />

				<main>
					<ColorsSection />

					<TypographySection />

					<InteractiveElementsSection />
				</main>
			</div>
		</div>
	);
};

export default DesignSystemPage;
