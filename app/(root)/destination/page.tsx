'use client';
import { TabList } from '@/components/single/TabList/TabList.component';
import data from '@/lib/data/data.json';
import Image from 'next/image';
import { useState } from 'react';

const items = data.destinations;

const DestinationPage = () => {
	const [destination, setDestination] = useState(items[0]);

	return (
		<section className='grid grid-cols-4 tablet:grid-cols-8 desktop:grid-cols-12 gap-x-2 desktop:gap-x-4 p-3 pb-4 tablet:p-5 desktop:px-[165px] desktop:py-6 items-center justify-items-center'>
			<header className='title tablet:justify-self-start'>
				<h1 className='numbered-title'>
					<span>01</span> Pick your destination
				</h1>
			</header>

			<div className='image relative w-18.75 h-18.75 tablet:w-37.5 tablet:h-37.5 desktop:w-full desktop:h-full'>
				<Image
					src={destination.images.webp}
					alt={destination.name}
					fill
					priority
					className='object-contain object-center desktop:px-3.75'
				/>
			</div>

			<div className='article flex flex-col'>
				<TabList
					items={items}
					selected={destination}
					setSelected={setDestination}
					className='indicators self-center desktop:self-start'
				/>

				<div className='flex flex-col items-center desktop:items-start'>
					<h2 className='text-white text-preset-2 uppercase'>{destination.name}</h2>
					<p className='text-preset-9 text-center desktop:text-left text-blue-300'>
						{destination.description}
					</p>
					<div className='h-px bg-white/25 my-5 w-full'></div>
					<div className='grid tablet:grid-cols-2 gap-3 tablet:gap-10 uppercase'>
						<div className='flex flex-col gap-1.5 items-center desktop:items-start'>
							<span className='block text-preset-7 text-blue-300'>avg. distance</span>
							<span className='text-white text-preset-6'>{destination.distance}</span>
						</div>
						<div className='flex flex-col gap-1.5 items-center desktop:items-start'>
							<span className='block text-preset-7 text-blue-300'>est. travel time</span>
							<span className='text-white text-preset-6'>{destination.travel}</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default DestinationPage;
