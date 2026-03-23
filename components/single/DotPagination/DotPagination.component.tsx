'use client';
import cn from 'clsx';

interface Slide {
	name: string;
	images: {
		png: string;
		webp: string;
	};
	role: string;
	bio: string;
}

interface DotPaginationProps {
	items: Slide[];
	selected: Slide;
	setSelected: (slide: Slide) => void;
	className?: string;
}
export const DotPagination = ({ items, selected, setSelected, className }: DotPaginationProps) => {
	return (
		<div className={cn('dot-pagination', className)}>
			{items.map(({ name }, index) => (
				<button
					key={`${name}-${index}`}
					onClick={() => setSelected(items[index])}
					aria-selected={selected.name === name}
					role='tab'>
					<span className='sr-only'>{name}</span>
				</button>
			))}
		</div>
	);
};
