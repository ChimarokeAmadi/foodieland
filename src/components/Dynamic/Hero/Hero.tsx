import Image from "next/image";
export default function Hero(props: { image: string; name: string }) {
	return (
		<div className='container'>
			<div className='flex justify-between mb-[64px]'>
				<div className='space-y-[48px]'>
					<p className='text-[64px] font-semibold w-[777px]'>{props.name}</p>
					<div className='divide-x-[1px] flex '>
						<div className='flex  gap-4 pr-[58px]'>
							<Image
								src='/Hero/Ellipse 2.png'
								alt=''
								height={1}
								width={1}
								className='size-[50px]'
							/>
							<div className='flex flex-col gap-2 justify-center'>
								<p className='font-bold'>John Smith</p>
								<p className='font-medium opacity-60 tracking-[-2%] text-[14px]'>
									15 March 2022
								</p>
							</div>
						</div>
						<div className='flex gap-4 px-8 items-center'>
							<Image
								src='/Dynamic/Hero/Timer.png'
								alt='timer'
								height={100}
								width={100}
								style={{
									height: "24px",
									width: "24px",
								}}
							/>
							<div className='space-y-2'>
								<p className='text-[12px] font-medium tracking-[2px]'>
									PREP TIME
								</p>
								<p className='opacity-60 text-[14px] '>15 Minutes</p>
							</div>
						</div>
						<div className='flex gap-4 px-8 items-center'>
							<Image
								src='/Dynamic/Hero/Timer.png'
								alt='timer'
								height={100}
								width={100}
								style={{
									height: "24px",
									width: "24px",
								}}
							/>
							<div className='space-y-2'>
								<p className='text-[12px] font-medium tracking-[2px]'>
									COOK TIME
								</p>
								<p className='opacity-60 text-[14px]'>15 Minutes</p>
							</div>
						</div>
						<div className='pl-8 flex gap-[10px] items-center'>
							<Image
								src='/Hero/ForkKnife.png'
								alt='timer'
								height={100}
								width={100}
								style={{
									height: "24px",
									width: "24px",
								}}
							/>
							<p className='opacity-60 text-[14px]'>Chicken</p>
						</div>
					</div>
				</div>
				<div className='flex items-end gap-8 mb-4'>
					<div className='flex flex-col gap-4 items-center'>
						<button className='rounded-[100%] p-7 bg-[#E7FAFE] h-fit '>
							<Image
								src='/Dynamic/Hero/printer.png'
								height={1}
								width={1}
								alt=''
								className='size-6'
							/>
						</button>

						<p className='tracking-[2px] text-[12px]'>PRINT</p>
					</div>
					<div className='flex flex-col gap-4 items-center'>
						<button className='rounded-[100%] p-7 bg-[#E7FAFE] h-fit '>
							<Image
								src='/Dynamic/Hero/share.png'
								alt=''
								height={1}
								width={1}
								className='size-6'
							/>
						</button>

						<p className='tracking-[2px] text-[12px]'>SHARE</p>
					</div>
				</div>
			</div>
			<div className='flex justify-between'>
				<div className='relative h-fit w-fit'>
					<Image
						src={props.image}
						alt='image'
						style={{ borderRadius: "30px", width: "840px", height: "600px" }}
						width={840}
						height={600}
						className='rounded-[30px] w-[840px]'
					/>
					<Image
						src='/Dynamic/Hero/PlayButton.png'
						alt=''
						style={{ width: "120px", height: "120px" }}
						width={120}
						height={120}
						className='size-[120px] absolute top-[220px] left-[360px]'
					/>
				</div>

				<div className='bg-[#E7FAFE] rounded-[30px] p-8 w-[400px] flex flex-col justify-between'>
					<div className=''>
						<p className='text-[24px] font-semibold mb-6'>
							Nutrition Information
						</p>
						<div className=''>
							<div className='flex w-full border-b border-black border-opacity-10 justify-between pb-4'>
								<p className='opacity-60 text-[18px] font-semibold'>Calories</p>
								<p className='text-right text-[18px] font-semibold'>
									219.9 kcal
								</p>
							</div>
							<div className='flex w-full border-b border-black border-opacity-10 justify-between py-4'>
								<p className='opacity-60 text-[18px] font-semibold'>
									Total Fat
								</p>
								<p className='text-right text-[18px] font-semibold'>10.7 g</p>
							</div>
							<div className='flex w-full border-b border-black border-opacity-10 justify-between py-4'>
								<p className='opacity-60 text-[18px] font-semibold'>Protein</p>
								<p className='text-right text-[18px] font-semibold'>7.9 g</p>
							</div>
							<div className='flex w-full border-b border-black border-opacity-10 justify-between py-4'>
								<p className='opacity-60 text-[18px] font-semibold'>
									Carbohydrate
								</p>
								<p className='text-right text-[18px] font-semibold'>22.3 g</p>
							</div>
							<div className='flex w-full border-b border-black border-opacity-10 justify-between py-4'>
								<p className='opacity-60 text-[18px] font-semibold'>
									Cholesterol
								</p>
								<p className='text-right text-[18px] font-semibold'>37.4 mg</p>
							</div>
						</div>
					</div>
					<p className=' text-center opacity-60'>
						adipiscing elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua.
					</p>
				</div>
			</div>
			<div className='w-full pt-20'>
				<p className='opacity-60'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</p>
			</div>
		</div>
	);
}
