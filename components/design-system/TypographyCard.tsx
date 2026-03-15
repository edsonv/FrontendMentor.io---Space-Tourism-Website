import { Separator } from './Separator';

interface TypographyCardProps {
	title: string;
	subtitle: string;
	example: string;
	className: string;
}

export const TypographyCard = ({ title, subtitle, example, className }: TypographyCardProps) => {
	return (
		<div>
			<div>
				<h3 className='text-preset-9 font-bold text-blue-300 capitalize'>{title}</h3>
				<p className='text-preset-9 text-blue-300 '>{subtitle}</p>
			</div>

			<Separator />

			<div>
				<p className={`${className} uppercase`}>{example}</p>
			</div>
		</div>
	);
};
