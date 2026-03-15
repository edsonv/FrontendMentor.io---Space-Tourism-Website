import { Section } from '../Section';
import { TypographyCard } from '../TypographyCard';

export const TypographySection = () => {
	return (
		<Section
			order='02'
			title='typography'>
			<div className='grid grid-cols-2 gap-7.5 text-white'>
				{/* Left column */}
				<div className='flex flex-col gap-9'>
					<TypographyCard
						title='Text preset 1 - Bellefair Regular'
						subtitle='144px - 171.9% Line Height (Normal) - 0px Letter Spacing'
						example='Earth'
						className='text-preset-1'
					/>
					<TypographyCard
						title='Text preset 2 - Bellefair Regular'
						subtitle='100px - 114.6% Line Height (Normal) - 0px Letter Spacing'
						example='Venus'
						className='text-preset-2'
					/>
					<TypographyCard
						title='Text preset 3 - Bellefair Regular'
						subtitle='56px - 64.2% Line Height (Normal) - 0px Letter Spacing'
						example='Jupiter & Saturn'
						className='text-preset-3'
					/>
					<TypographyCard
						title='Text preset 4 - Bellefair Regular'
						subtitle='32px - 36.7% Line Height (Normal) - 0px Letter Spacing'
						example='Uranus, Neptune & Pluto'
						className='text-preset-4'
					/>
					<TypographyCard
						title='Text preset 5 - Barlow Condensed Regular'
						subtitle='28px - 33.6% Line Height (Normal) - 4px Letter Spacing'
						example='Haumea, Sedna, Eris & Ceres'
						className='text-preset-5'
					/>
				</div>

				{/* Right column */}
				<div className='flex flex-col gap-9'>
					<TypographyCard
						title='Text preset 6 - Bellefair Regular'
						subtitle='28px - 32.1% Line Height (Normal) - 0px Letter Spacing'
						example='384,400 KM'
						className='text-preset-6'
					/>
					<TypographyCard
						title='Text preset 7 - Barlow Condensed Regular'
						subtitle='14px - 16.8% Line Height (Normal) - 2px Letter Spacing'
						example='avg. distance'
						className='text-preset-7'
					/>
					<TypographyCard
						title='Text preset 8 - Barlow Condensed Regular'
						subtitle='16px - 19.2% Line Height (Normal) - 2px Letter Spacing'
						example='Europa'
						className='text-preset-8'
					/>
					<TypographyCard
						title='Text Preset 9 -  Barlow Regular'
						subtitle='18px - 180% Line Height (Normal - 0px Letter Spacing'
						example='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi.'
						className='text-preset-9 normal-case!'
					/>
				</div>
			</div>
		</Section>
	);
};
