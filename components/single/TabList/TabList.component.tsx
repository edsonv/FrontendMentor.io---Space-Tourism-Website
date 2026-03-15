'use client';

import { useState } from 'react';

interface Item {
	label: string;
}

interface TabListProps {
	items: Item[];
}

export const TabList = ({ items }: TabListProps) => {
	const [selected, setSelected] = useState(items[0]);

	return (
		<div className='tab-menu'>
			{items.map(({ label }, index) => (
				<button
					key={`${label}-${index}`}
					role='tab'
					aria-selected={selected.label === label}
					onClick={() => setSelected(items[index])}>
					{label}
				</button>
			))}
		</div>
	);
};
