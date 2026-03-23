'use client';

import { PrimaryNavigation } from '@/components/single/PrimaryNavigation/PrimaryNavigation.component';
import { MAIN_NAV_ITEMS } from '@/lib/constants/navigationItems';
import Logo from '@/public/images/shared/logo.svg';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const path = usePathname();

	let wrapperClass = '';
	if (path === '/') wrapperClass = 'home-wrapper';
	if (path === '/destination') wrapperClass = 'destination-wrapper';
	if (path === '/crew') wrapperClass = 'crew-wrapper';
	if (path === '/technology') wrapperClass = 'technology-wrapper';

	return (
		<div className={wrapperClass || 'home-wrapper'}>
			<header className='relative flex justify-between items-center p-3 pb-0 tablet:pr-0 desktop:pt-5 desktop:pl-8 desktop:pr-0'>
				<div>
					<Image
						src={Logo}
						alt='Logo'
						className='logo'
					/>
				</div>
				<div className='bg-white/25 h-px w-[40vw] absolute right-81.25 hidden desktop:block z-10'></div>
				<PrimaryNavigation items={MAIN_NAV_ITEMS} />
			</header>
			<main className='grid min-h-full grow'>{children}</main>
		</div>
	);
}
