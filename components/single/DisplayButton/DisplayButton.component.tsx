import Link from 'next/link';

export interface DisplayButtonProps {
	size?: 'sm' | 'lg';
}

export const DisplayButton = ({ size = 'lg' }: DisplayButtonProps) => {
	return (
		<Link
			href='/'
			className='display-button'
			data-size={size}>
			Explore
		</Link>
	);
};
