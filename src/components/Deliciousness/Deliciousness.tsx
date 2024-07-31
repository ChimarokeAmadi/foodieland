export default function Deliciousness() {
	return (
		<div className='container py-40'>
			<div className='px-[330px] py-20 bg-[#E7F9FD] rounded-[60px] relative overflow-hidden'>
				<div className='mx-auto flex flex-col items-center'>
					<p className='font-semibold text-[48px] text-center mb-6'>
						Deliciousness to your inbox
					</p>
					<p className='text-center opacity-60 leading-7 w-[630px] mx-auto mb-[64px]'>
						Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqut enim ad minim
					</p>

					<span className='flex bg-white py-[10px] pr-[10px] pl-8 rounded-3xl gap-[140px]'>
						<input
							type='text'
							placeholder='Your email address...'
							className='bg-white text-[14px] leading-[16.94px] tracking-[-2%] font-medium focus:outline-none'
						/>
						<button className='bg-black text-white text-[14px] leading-[16.94px] rounded-2xl tracking-[-2%] font-semibold pt-[21px] pb-[22px] pl-[47px] pr-[46px]'>
							Subscribe
						</button>
					</span>

					<img
						src='/Deliciousness/salad2.png'
						alt=''
						className='h-[400.08px] w-[409.54px] absolute -bottom-[155.74px] -left-[30.58px] top-[66.49px]'
					/>
					<img
						src='/Deliciousness/rucola-png.png'
						alt=''
						className='absolute bottom-[80px] right-[275.47px] top-[249px] w-[120.85px] h-[150.96px]'
					/>
					<img
						src='/Deliciousness/Photo-plate.png'
						alt=''
						className='h-[250.62px] w-[300px] absolute bottom-0 right-0'
					/>
				</div>
			</div>
		</div>
	);
}
