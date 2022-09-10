import React from 'react';
import Burger from '../assets/burger-1.jpg';
import Curry from '../assets/curry-2.jpg';
import Dessert from '../assets/dessert-1.jpg';

const HeadlineCards = () => {
	return (
		<div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
			<div className='rounded-xl relative'>
				<div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
					<p className='font-bold text-2xl px-3 pt-4'>Sun's Out, BOGO's Out</p>
					<p className='px-3'>Through 8/26</p>
					<button className='border-white bg-white text-black mx-3 absolute bottom-4'>
						Order Now
					</button>
				</div>
				<img
					src={Burger}
					alt='Burger'
					className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
				/>
			</div>

			<div className='rounded-xl relative'>
				<div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
					<p className='font-bold text-2xl px-3 pt-4'>New Restaurants</p>
					<p className='px-3'>Added Daily</p>
					<button className='border-white bg-white text-black mx-3 absolute bottom-4'>
						Order Now
					</button>
				</div>
				<img
					src={Curry}
					alt='Curry'
					className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
				/>
			</div>

			<div className='rounded-xl relative'>
				<div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
					<p className='font-bold text-2xl px-3 pt-4'>
						We Deliver Desserts Too
					</p>
					<p className='px-3'>Tasty Treats</p>
					<button className='border-white bg-white text-black mx-3 absolute bottom-4'>
						Order Now
					</button>
				</div>
				<img
					src={Dessert}
					alt='Dessert'
					className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
				/>
			</div>
		</div>
	);
};

export default HeadlineCards;
