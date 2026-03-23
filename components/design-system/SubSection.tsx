import React from 'react';
import { Separator } from './Separator';

export const SubSection = ({ children, title }: { children: React.ReactNode; title: string }) => {
	return (
		<div>
			<h3 className='text-blue-300 text-preset-9 capitalize'>{title}</h3>

			<Separator />

			{children}
		</div>
	);
};
