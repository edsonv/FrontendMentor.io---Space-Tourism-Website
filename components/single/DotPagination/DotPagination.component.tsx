'use client';

import { useState } from 'react';

interface Slide {
	title: string;
}

interface DotPaginationProps {
	slides: Slide[];
	size?: 'sm' | 'lg';
}
export const DotPagination = ({ slides, size = 'lg' }: DotPaginationProps) => {
	const [selected, setSelected] = useState(slides[0]);

	return (
		<div
			className='dot-pagination'
			data-size={size}>
			{slides.map(({ title }, index) => (
				<button
					key={`${title}-${index}`}
					onClick={() => setSelected(slides[index])}
					aria-selected={selected.title === title}
					role='tab'>
					<span className='sr-only'>{title}</span>
				</button>
			))}
		</div>
	);
};
