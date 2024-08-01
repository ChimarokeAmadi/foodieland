"use client";
import Image from "next/image";

export default function HeroSection() {
	return (
		<div className='container pt-10 flex justify-center'>
			<div className='flex  relative'>
				<div className='bg-[#E7FAFE] w-[620px] p-[50px] rounded-l-[30px] flex flex-col justify-between'>
					<div className=''>
						<span className='bg-white py-[10px] px-5 flex gap-[10px] rounded-[30px] w-fit mb-8'>
							<Image
								alt='icon'
								src='/Hero/image 14.png'
								width={24}
								height={24}
							/>
							<p className='text-[14px]'>Hot Recipes</p>
						</span>
						<p className='text-[64px] font-semibold mb-6'>
							Spicy delicious chicken wings
						</p>
						<p className='opacity-60 mb-[30px]'>
							Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
							minim
						</p>
						<div className='flex gap-4'>
							<span className='flex gap-[10px] bg-black bg-opacity-5 py-2 px-4 rounded-[30px]'>
								<Image
									alt='icon'
									src='/Hero/Timer.png'
									width={660}
									height={660}
									style={{
										width: "24px",
									}}
								/>

								<p className='font-medium text-[14px] opacity-60'>30 Minutes</p>
							</span>
							<span className='flex gap-[10px] bg-black bg-opacity-5 py-2 px-4 rounded-[30px]'>
								<Image
									alt='icon'
									src='/Hero/ForkKnife.png'
									width={660}
									height={660}
									style={{
										width: "24px",
									}}
								/>

								<p className='font-medium text-[14px] opacity-60'>Chicken</p>
							</span>
						</div>
					</div>

					<div className='flex w-full justify-between mt-[px]'>
						<div className='flex gap-4'>
							<Image
								alt='icon'
								src='/Hero/Ellipse 2.png'
								width={660}
								height={640}
								style={{
									width: "50px",
								}}
							/>

							<div className=''>
								<p className='font-bold'>John Smith</p>
								<p className='opacity-60 text-[14px]'>15 March 2022</p>
							</div>
						</div>

						<button className='bg-black rounded-2xl py-[18px] px-9 flex gap-[15px]'>
							<p className='text-[14px] font-semibold text-white'>
								View Recipes
							</p>
							<Image
								alt='icon'
								src='/Hero/PlayCircle.png'
								width={660}
								height={640}
								style={{
									width: "24px",
								}}
							/>
						</button>
					</div>
				</div>
				<div className=''>
					<Image
						alt='icon'
						src='/Hero/Mask Group.png'
						width={660}
						height={640}
						style={{
							width: "660px",
						}}
					/>
				</div>

				<div className='absolute bg-[#E7FAFE] w-10 top-5 bottom-5 -left-20 rounded-r-3xl'></div>
				<div className='absolute bg-[#E7FAFE] w-10 top-5 bottom-5 -right-20 rounded-l-3xl'></div>
			</div>
		</div>
	);
}
