import { ColorCard } from '../ColorCard';
import { Section } from '../Section';
import { Separator } from '../Separator';

export const ColorsSection = () => {
	return (
		<Section
			order='01'
			title='colors'>
			{/* Blue section */}
			<div>
				<h3 className='text-blue-300 text-preset-9'>Blue</h3>

				<Separator />

				<div className='grid grid-cols-2 gap-3.75'>
					{/* First color */}
					<ColorCard
						name='blue-900'
						hex='#0B0D17'
						rgb='11, 13, 23'
						hsl='230°, 35%, 7%'
						color='text-white'
						bgColor='bg-blue-900'
						rgbColor='text-white/50'
					/>

					{/* Second color */}
					<ColorCard
						name='blue-300'
						hex='#D0D6F9'
						rgb='208, 214, 249'
						hsl='231°, 77%, 90%'
						color='text-blue-900'
						bgColor='bg-blue-300'
						rgbColor='text-blue-900/50'
					/>
				</div>
			</div>

			{/* White section */}
			<div>
				<h3 className='text-blue-300 text-preset-9'>White</h3>

				<Separator />

				<div className='grid grid-cols-2 gap-3.75'>
					{/* First color */}
					<ColorCard
						name='white'
						hex='#FFFFFF'
						rgb='255, 255, 255'
						hsl='0°, 0%, 100%'
						color='text-blue-900'
						bgColor='bg-white'
						rgbColor='text-blue-900/50'
					/>
				</div>
			</div>
		</Section>
	);
};
