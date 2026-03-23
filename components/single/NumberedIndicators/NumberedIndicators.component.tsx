'use client';
import cn from 'clsx';

interface Item {
	name: string;
	images: {
		portrait: string;
		landscape: string;
	};
	description: string;
}

interface NumberedIndicatorsProps {
	items: Item[];
	selected: Item;
	setSelected: (item: Item) => void;
	className?: string;
}

export const NumberedIndicators = ({ items, selected, setSelected, className }: NumberedIndicatorsProps) => {
	return (
		<div className={cn('numbered-indicators', className)}>
			{items.map(({ name }, index) => (
				<button
					key={index}
					className='numbered-indicator'
					role='tab'
					aria-selected={selected.name === name}
					onClick={() => setSelected(items[index])}>
					{index + 1}
				</button>
			))}
		</div>
	);
};
