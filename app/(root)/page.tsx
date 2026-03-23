import { DisplayButton } from '@/components/single/DisplayButton/DisplayButton.component';

const HomePage = () => {
	return (
		<section className='grid grid-cols-[clamp(24px,calc(-1.603rem+13.239vw),165px)_repeat(2,1fr)_clamp(24px,calc(-1.603rem+13.239vw),165px)] my-3 tablet:my-16 desktop:my-16 content-end items-start justify-items-center desktop:justify-items-end tablet:items-center gap-y-8.25 tablet:px-16 desktop:px-0'>
			<header className='title flex flex-col'>
				<h1 className='text-preset-1 text-white uppercase text-center desktop:text-left'>
					<span className='block text-preset-5 mx-auto desktop:mx-0'>So, you want to travel to</span>
					Space
				</h1>
				<p className='text-white text-preset-9 text-center desktop:text-left'>
					Let&apos;s face it; if you want to go to space, you might as well genuinely go to outer space and
					not hover kind of on the edge of it. Well sit back, and relax because we&apos;ll give you a truly
					out of this world experience!
				</p>
			</header>
			<DisplayButton className='action' />
		</section>
	);
};

export default HomePage;
