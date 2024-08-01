"use client";
import Image from "next/image";

export default function HeroSection() {
	return (
		<div className='container pt-10 flex justify-center'>
			<div className='flex  relative'>
				<div className='bg-[#E7FAFE] w-[620px] p-[50px] rounded-l-[30px]'>
					<span className='bg-white py-[10px] px-5 flex gap-[10px] rounded-[30px] w-fit mb-8'>
						<Image alt='icon' src='/Hero/image 14.png' width={24} height={24} />
						<p className='text-[14px]'>Hot Recipes</p>
					</span>
					<p className='text-[64px] font-semibold mb-6'>
						Spicy delicious chicken wings
					</p>
					<p className='opacity-60 mb-[30px]'>
						Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqut enim ad minim
					</p>
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
			</div>
		</div>
	);
}
