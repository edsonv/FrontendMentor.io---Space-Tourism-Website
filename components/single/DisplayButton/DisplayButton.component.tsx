import cn from 'clsx';
import Link from 'next/link';

export interface DisplayButtonProps {
	size?: 'sm' | 'lg';
	className?: string;
}

export const DisplayButton = ({ size = 'lg', className }: DisplayButtonProps) => {
	return (
		<Link
			href='/'
			className={cn('display-button', className)}
			data-size={size}>
			Explore
		</Link>
	);
};
