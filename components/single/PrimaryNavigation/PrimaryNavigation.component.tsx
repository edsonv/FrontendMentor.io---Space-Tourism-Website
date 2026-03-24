'use client';
import { formatIntToStr } from '@/lib/formatIntToStr';
import { NavItem } from '@/lib/types';
import IconClose from '@/public/images/shared/icon-close.svg';
import IconHamburger from '@/public/images/shared/icon-hamburger.svg';
import cn from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface PrimaryNavigationProps {
	items: NavItem[];
	className?: string;
}

export const PrimaryNavigation = ({ items, className }: PrimaryNavigationProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const path = usePathname();

	return (
		<nav className={cn('primary-navigation', className, isOpen ? 'open' : '')}>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className='cursor-pointer align-middle tablet:hidden'
				aria-controls='primary-menu'
				aria-expanded={isOpen}>
				<Image
					src={isOpen ? IconClose : IconHamburger}
					alt=''
				/>
				<span className='sr-only'>Menu</span>
			</button>
			<ul
				id='primary-menu'
				className={cn(!isOpen ? 'hidden tablet:flex' : 'flex-col')}
				aria-hidden={!isOpen}>
				{items.map(({ label, href }, index) => {
					return (
						<li key={`${index}-${label}`}>
							<Link
								href={href}
								className={path === href ? 'active' : ''}
								onClick={() => setIsOpen(false)}>
								<span>{formatIntToStr(index)}</span>
								{label}
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
