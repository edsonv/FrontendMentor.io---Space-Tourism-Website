'use client';

import { NumberedIndicators } from '@/components/single/NumberedIndicators/NumberedIndicators.component';
import data from '@/lib/data/data.json';
import { useWindowWidth } from '@/lib/hooks/useWindowWidth';
import Image from 'next/image';
import { useState } from 'react';

const items = data.technology;

const TechnologyPage = () => {
	const [technology, setTechnology] = useState(items[0]);
	const windowWidth = useWindowWidth();

	const technologyImage =
		windowWidth && (windowWidth >= 1440 || windowWidth < 768)
			? technology.images.portrait
			: technology.images.landscape;

	return (
		<section className='grid grid-cols-4 tablet:grid-cols-8 desktop:grid-cols-12 gap-x-2 desktop:gap-x-4 p-3 pb-4 tablet:p-5 desktop:px-[165px] desktop:py-6 items-center justify-items-center'>
			<header className='title tablet:justify-self-start'>
				<h1 className='numbered-title'>
					<span>03</span> Space Launch 101
				</h1>
			</header>

			<NumberedIndicators
				items={items}
				selected={technology}
				setSelected={setTechnology}
				className='indicators'
			/>

			<article className='article flex flex-col desktop:ml-5'>
				<h2 className='text-white/50 text-preset-4 uppercase text-center desktop:text-left'>
					The terminology... <span className='block text-white text-preset-3'>{technology.name}</span>
				</h2>
				<p className='text-preset-9 text-center desktop:text-left text-blue-300'>{technology.description}</p>
			</article>

			<picture className='image relative w-screen h-32.25 tablet:h-[357px] desktop:w-76 desktop:h-full desktop:-mr-[165px]'>
				<Image
					src={technologyImage}
					alt={technology.name}
					fill
					priority
					className='object-cover object-bottom'
				/>
			</picture>
		</section>
	);
};

export default TechnologyPage;
