import { Checkbox } from "@/components/ui/checkbox";
import { Lobster } from "next/font/google";
const lobster = Lobster({ subsets: ["latin"], weight: "400" });

export default function Ingredients() {
	return (
		<div className=' container pt-20 pb-[13px] flex justify-between gap-10'>
			<div className='w-full'>
				<p className='font-semibold text-[36px] mb-[48px]'>Ingredients</p>
				<div className='mb-[64px]'>
					<p className='font-semibold text-[24px] mb-[33px]'>For main dish</p>
					<div className='flex items-center gap-6 pb-[27px] border-b '>
						<Checkbox id='terms1' className='' />
						<label
							htmlFor='terms1'
							className=' leading-[21.78px] peer-disabled:cursor-not-allowed peer-disabled:opacity-70 peer-checked:opacity-60 '>
							Lorem ipsum dolor sit amet
						</label>
					</div>
					<div className='flex items-center gap-6 py-[33px] border-b '>
						<Checkbox id='terms2' className='' />
						<label
							htmlFor='terms2'
							className=' leading-[21.78px] peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
							Lorem ipsum dolor sit amet
						</label>
					</div>
					<div className='flex items-center gap-6 py-[33px] border-b '>
						<Checkbox id='terms3' className='' />
						<label
							htmlFor='terms3'
							className=' leading-[21.78px] peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
							Lorem ipsum dolor sit amet
						</label>
					</div>
					<div className='flex items-center gap-6 py-[33px] border-b '>
						<Checkbox id='terms4' className='' />
						<label
							htmlFor='terms4'
							className=' leading-[21.78px] peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
							Lorem ipsum dolor sit amet
						</label>
					</div>
					<div className='flex items-center gap-6 py-[33px] border-b '>
						<Checkbox id='terms5' className='' />
						<label
							htmlFor='terms5'
							className=' leading-[21.78px] peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
							Lorem ipsum dolor sit amet
						</label>
					</div>
				</div>
				<div className=''>
					<p className='font-semibold text-[24px] mb-[33px]'>For main dish</p>
					<div className='flex items-center gap-6 pb-[27px] border-b '>
						<Checkbox id='terms6' className='' />
						<label
							htmlFor='terms6'
							className=' leading-[21.78px] peer-disabled:cursor-not-allowed peer-disabled:opacity-70 peer-checked:opacity-60'>
							Lorem ipsum dolor sit amet
						</label>
					</div>
					<div className='flex items-center gap-6 py-[33px] border-b '>
						<Checkbox id='terms7' className='' />
						<label
							htmlFor='terms7'
							className=' leading-[21.78px] peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
							Lorem ipsum dolor sit amet
						</label>
					</div>
					<div className='flex items-center gap-6 py-[33px] border-b '>
						<Checkbox id='terms8' className='' />
						<label
							htmlFor='terms8'
							className=' leading-[21.78px] peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
							Lorem ipsum dolor sit amet
						</label>
					</div>
				</div>
			</div>
			<div className='flex flex-col justify-between'>
				<div className=''>
					<p className='text-[32px] font-semibold mb-8'>Other Recipe</p>
					<div className='flex flex-col gap-6 mb-20'>
						<div className='flex gap-6'>
							<img
								src='/Simple/meetballs.png'
								alt=''
								className='w-[180px] h-[120px] rounded-3xl'
							/>
							<div className=''>
								<p className='text-[20px] font-semibold'>
									Chicken Meatball with Creamy Chees...
								</p>
								<p className='text-[14px] opacity-60 font-medium'>
									By Andreas Paula
								</p>
							</div>
						</div>
						<div className='flex gap-6'>
							<img
								src='/Simple/pasta.png'
								alt=''
								className='w-[180px] h-[120px] rounded-3xl'
							/>
							<div className=''>
								<p className='text-[20px] font-semibold'>
									The Creamiest Creamy Chicken an...
								</p>
								<p className='text-[14px] opacity-60 font-medium'>
									By Andreas Paula
								</p>
							</div>
						</div>
						<div className='flex gap-6'>
							<img
								src='/Simple/rice.png'
								alt=''
								className='w-[180px] h-[120px] rounded-3xl'
							/>
							<div className=''>
								<p className='text-[20px] font-semibold'>
									The Best Easy One Pot Chicken and Rice
								</p>
								<p className='text-[14px] opacity-60 font-medium'>
									By Andreas Paula
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className='bg-gradient-to-t from-[#1D483B] to-[#357355] pt-10 relative flex flex-col gap-[285px] items-center -z-[2] pb-8'>
					<img
						src='/Simple/Star 1.png'
						alt=''
						className='h-full w-full absolute top-0 bottom-0 left-0 right-0 -z-[1]'
					/>
					<p
						className={`text-white text-center ${lobster.className} text-[24px] leading-[30px] w-[172px]`}>
						Don’t forget to eat healthy food
					</p>
					<img
						src='/Simple/plate.png'
						alt=''
						className='absolute top-[98px] bottom-0 w-[354px] h-[336px]'
					/>
					<p className=' text-[#FFFFFF99] opacity-[60%]'>www.foodieland.com</p>
				</div>
			</div>
		</div>
	);
}
