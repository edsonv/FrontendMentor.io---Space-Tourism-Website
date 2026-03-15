'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItems {
	pos: string;
	label: string;
	href: string;
}

interface PrimaryNavigationProps {
	orientation?: 'horizontal' | 'vertical';
	items: NavItems[];
}

export const PrimaryNavigation = ({ orientation = 'horizontal', items }: PrimaryNavigationProps) => {
	const path = usePathname();

	return (
		<nav
			className='primary-navigation'
			data-orientation={orientation}>
			<ul>
				{items.map(({ pos, label, href }) => {
					return (
						<li key={pos}>
							<Link
								href={href}
								className={path === href ? 'active' : ''}>
								<span>{pos}</span>
								{label}
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
