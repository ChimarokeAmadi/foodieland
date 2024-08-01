export default function Everyone() {
	return (
		<div
			className='container flex pt-[143px] justify-between pb-40 scroll-smooth'
			id='#about'>
			<div className='mt-[169px] mb-[72px] w-fit flex flex-col justify-between space-y-[72px]'>
				<div className='space-y-6 '>
					<p className='font-semibold text-[48px] tracking-[-4%] leading-[58.09px]'>
						Everyone can be a <br /> chef in their own kitchen
					</p>

					<p className='opacity-[60%] leading-7 w-[508px]'>
						Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
					</p>
				</div>

				<button className='bg-black pt-[21px] pb-[22px] pr-[52px] pl-[53px] text-white text-[14px] rounded-2xl w-fit'>
					Learn More
				</button>
			</div>
			<div className=''>
				<div className='h-full relative'>
					<img
						src='/Everyone/chef.png'
						alt=''
						className='mr-[50px] h-[597px] w-[660px]'
					/>

					<div className='absolute bg-gradient-to-t from-[#E7F9FD] top-[97px] bottom-0 left-[59px] -right-[50px] min-h-[500px] min-w-[651px] -z-10 rounded-[30px]'></div>
					<img
						src='/Everyone/tomato.png'
						alt=''
						className='size-[50px] absolute left-[34px] bottom-[124px]'
					/>
					<img
						src='/Everyone/meat2.png'
						alt=''
						className='size-[80px] absolute left-[102px] top-[70px] -rotate-[15%]'
					/>
					<img
						src='/Everyone/onion.png'
						alt=''
						className='size-[50px] absolute top-[97px] right-[130.76px] -rotate-[15%]'
					/>
					<img
						src='/Everyone/leaf.png'
						alt=''
						className='size-[80px] absolute top-[167px] -right-[14px]'
					/>
				</div>
			</div>
		</div>
	);
}
