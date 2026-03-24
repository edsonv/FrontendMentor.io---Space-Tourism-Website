import cn from 'clsx';
import Link from 'next/link';

export interface DisplayButtonProps {
	className?: string;
	href: string;
}

export const DisplayButton = ({ className, href }: DisplayButtonProps) => {
	return (
		<Link
			href={href}
			className={cn('display-button', className)}>
			Explore
		</Link>
	);
};
