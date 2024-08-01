"use client";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";

export default function Directions() {
	return (
		<div className='container '>
			<div className='w-[840px]'>
				<p className='text-[36px] font-semibold mb-8'>Directions</p>
				<div className='   '>
					<div className='flex gap-10 py-[33px] border-b'>
						<Checkbox id='term1' className='' />
						<div className=''>
							<ol className=' text-[24px] '>
								<li>
									<div className=' flex flex-col gap-6'>
										<label
											htmlFor='term1'
											className=' text-[24px] leading-[21.78px] peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-semibold'>
											1. Lorem ipsum dolor sit amet
										</label>
										<p className='text-[16px] opacity-60'>
											Nemo enim ipsam voluptatem quia voluptas sit aspernatur
											aut odit aut fugit, sed quia consequuntur magni dolores
											eos qui ratione voluptatem sequi nesciunt. Neque porro
											quisquam est, qui dolorem ipsum quia dolor sit amet,
											consectetur, adipisci velit, sed quia non numquam eius
											modi tempora incidunt ut labore et dolore magnam aliquam
											quaerat voluptatem.
										</p>
										<Image
											alt='image'
											src='/Dynamic/Directions/Rectangle 23.png'
											width={792}
											height={400}
											style={{
												width: "792px",
												height: "400px",
												marginTop: "48px",
												marginBottom: "48px",
											}}
										/>
										<p className='text-[16px] opacity-60'>
											Nemo enim ipsam voluptatem quia voluptas sit aspernatur
											aut odit aut fugit, sed quia consequuntur magni dolores
											eos qui ratione voluptatem sequi nesciunt. Neque porro
											quisquam est, qui dolorem ipsum quia dolor sit amet,
											consectetur, adipisci velit, sed quia non numquam eius
											modi tempora incidunt ut labore et dolore magnam aliquam
											quaerat voluptatem.
										</p>
									</div>
								</li>
							</ol>
						</div>
					</div>

					<div className='flex gap-10 py-[33px] border-b'>
						<Checkbox id='term2' className='' />
						<div className=''>
							<ol className=' text-[24px] '>
								<li>
									<div className=' flex flex-col gap-6'>
										<label
											htmlFor='term1'
											className=' text-[24px] leading-[21.78px] peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-semibold'>
											2. Lorem ipsum dolor sit amet
										</label>
										<p className='text-[16px] opacity-60'>
											Nemo enim ipsam voluptatem quia voluptas sit aspernatur
											aut odit aut fugit, sed quia consequuntur magni dolores
											eos qui ratione voluptatem sequi nesciunt. Neque porro
											quisquam est, qui dolorem ipsum quia dolor sit amet,
											consectetur, adipisci velit, sed quia non numquam eius
											modi tempora incidunt ut labore et dolore magnam aliquam
											quaerat voluptatem.
										</p>
									</div>
								</li>
							</ol>
						</div>
					</div>

					<div className='flex gap-10 py-[33px] border-b'>
						<Checkbox id='term3' className='' />
						<div className=''>
							<ol className=' text-[24px] '>
								<li>
									<div className=' flex flex-col gap-6'>
										<label
											htmlFor='term1'
											className=' text-[24px] leading-[21.78px] peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-semibold'>
											3. Lorem ipsum dolor sit amet
										</label>
										<p className='text-[16px] opacity-60'>
											Nemo enim ipsam voluptatem quia voluptas sit aspernatur
											aut odit aut fugit, sed quia consequuntur magni dolores
											eos qui ratione voluptatem sequi nesciunt. Neque porro
											quisquam est, qui dolorem ipsum quia dolor sit amet,
											consectetur, adipisci velit, sed quia non numquam eius
											modi tempora incidunt ut labore et dolore magnam aliquam
											quaerat voluptatem.
										</p>
									</div>
								</li>
							</ol>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
