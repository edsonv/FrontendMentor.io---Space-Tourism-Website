'use client';

import { DotPagination } from '@/components/single/DotPagination/DotPagination.component';
import data from '@/lib/data/data.json';
import Image from 'next/image';
import { useState } from 'react';

const items = data.crew;

const CrewPage = () => {
	const [crewMember, setCrewMember] = useState(items[0]);

	return (
		<section className='grid grid-cols-4 tablet:grid-cols-8 desktop:grid-cols-12 gap-x-2 desktop:gap-x-4 p-3 pb-4 tablet:p-5 desktop:px-[165px] desktop:py-6 items-center justify-items-center'>
			<header className='title tablet:justify-self-start'>
				<h1 className='numbered-title'>
					<span>02</span> Meet your crew
				</h1>
			</header>

			<DotPagination
				items={items}
				selected={crewMember}
				setSelected={setCrewMember}
				className='indicators justify-self-center desktop:justify-self-start tablet:my-3'
			/>

			<div className='article flex flex-col desktop:justify-center gap-3 mt-5 tablet:max-w-[58ch] desktop:max-w-full'>
				<h2 className='text-white/50 text-preset-4 uppercase text-center desktop:text-left'>
					{crewMember.role} <span className='block text-white text-preset-3'>{crewMember.name}</span>
				</h2>
				<p className='text-preset-9 text-center desktop:text-left text-blue-300'>{crewMember.bio}</p>
			</div>

			<div className='image relative w-full h-full mask-[linear-gradient(to_bottom,black_85%,transparent_100%)]'>
				<Image
					src={crewMember.images.webp}
					alt={crewMember.name}
					fill
					className='object-contain object-bottom'
					priority
				/>
			</div>
		</section>
	);
};

export default CrewPage;
