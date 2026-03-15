interface ColorCardProps {
	name: string;
	hex: string;
	rgb: string;
	hsl: string;
	color: string;
	bgColor: string;
	rgbColor: string
}

export const ColorCard = ({ name, hex, rgb, hsl, color, bgColor, rgbColor }: ColorCardProps) => {
	return (
		<div className='flex flex-col gap-2'>
			<div className={`${bgColor} border border-blue-300 px-3 pt-9 pb-3`}>
				<p className={`${rgbColor} text-[24px] font-bellefair`}>{hex}</p>
				<p className={`${color} text-[24px] font-bellefair`}>{name.toUpperCase()}</p>
			</div>
			<div>
				<p className='text-white'>
					<span className='text-blue-300 text-preset-9 mr-6'>RGB</span>
					<span className='text-preset-9'>{rgb}</span>
				</p>
				<p className='text-white'>
					<span className='text-blue-300 text-preset-9 mr-6'>HSL</span>
					<span className='text-preset-9'>{hsl}</span>
				</p>
			</div>
		</div>
	);
};
