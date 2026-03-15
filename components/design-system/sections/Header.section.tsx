import Image from 'next/image';

export const Header = () => {
	return (
		<header className='my-8 flex items-center justify-between'>
			<Image
				src='/images/logo.svg'
				alt='Logo'
				width={48}
				height={48}
			/>
			<h1 className='uppercase text-[24px] font-barlow-condensed text-blue-300 tracking-[4.05px]'>Style guide</h1>
		</header>
	);
};
