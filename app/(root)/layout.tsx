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
			<div className='grid grid-rows-[auto_1fr] min-h-screen max-w-180 mx-auto'>
				<header className='relative grid grid-cols-[auto_1fr_1fr] justify-between items-center p-3 pb-0 tablet:pr-0 desktop:pt-5 desktop:pl-8 desktop:pr-0'>
					<div className='col-start-1'>
						<Image
							src={Logo}
							alt='Logo'
							className='logo'
						/>
					</div>
					<div className='bg-white/25 h-px w-full hidden desktop:block z-10 col-start-2 ml-7.5'></div>
					<PrimaryNavigation
						items={MAIN_NAV_ITEMS}
						className='col-start-3 justify-self-end'
					/>
				</header>
				<main className='grid min-h-full grow'>{children}</main>
			</div>
		</div>
	);
}
