import { Lobster } from "next/font/google";
import Link from "next/link";
const lobster = Lobster({ subsets: ["latin"], weight: "400" });

export default function Footer() {
	return (
		<footer className='container divide-y-[1px] flex flex-col'>
			<div className='flex justify-between w-full items-center pb-12'>
				<div className='space-y-4'>
					<Link href=''>
						<p className={`${lobster.className} text-[24px]`}>
							Foodieland<span className='text-orange-600'>.</span>
						</p>
					</Link>

					<p className='leading-7 opacity-60'>
						Lorem ipsum dolor sit amet, consectetuipisicing elit,
					</p>
				</div>

				<ul className='flex gap-[60px] font-medium leading-[19.36px] tracking-[-2%]'>
					<li className=''>
						<Link href=''>Recipes</Link>
					</li>
					<li className=''>
						<Link href=''>Blog</Link>
					</li>
					<li className=''>
						<Link href=''>Contact</Link>
					</li>
					<li className=''>
						<Link href=''>About us</Link>
					</li>
				</ul>
			</div>

			<div className='py-12  relative'>
				<div className=' w-full'>
					<p className='text-center opacity-60 font-footer'>
						© 2020 Flowbase. Powered by
						<span className='text-orange-500 bg-opacity-100 '>
							{" "}
							Webflow
						</span>{" "}
					</p>
				</div>

				<div className='flex gap-10 items-center absolute right-0 bottom-[49px]'>
					<Link href=''>
						<img
							src='/Nav/001-facebook.jpg'
							alt=''
							className='h-[19.84pxpx] w-[9.92px]'
						/>
					</Link>
					<Link href=''>
						<img src='/Nav/Path.jpg' alt='' className='h-[17.88px] w-[22px]' />
					</Link>
					<Link href=''>
						<svg
							width='33'
							height='32'
							viewBox='0 0 23 22'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M7.83667 0H16.0867C19.883 0 22.9617 3.07862 22.9617 6.875V15.125C22.9617 18.9214 19.883 22 16.0867 22H7.83667C4.04029 22 0.96167 18.9214 0.96167 15.125V6.875C0.96167 3.07862 4.04029 0 7.83667 0ZM16.0867 19.9375C18.7404 19.9375 20.8992 17.7787 20.8992 15.125V6.875C20.8992 4.22125 18.7404 2.0625 16.0867 2.0625H7.83667C5.18292 2.0625 3.02417 4.22125 3.02417 6.875V15.125C3.02417 17.7787 5.18292 19.9375 7.83667 19.9375H16.0867Z'
								fill='black'
							/>
							<path
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M6.46167 11C6.46167 7.96263 8.92429 5.5 11.9617 5.5C14.999 5.5 17.4617 7.96263 17.4617 11C17.4617 14.0374 14.999 16.5 11.9617 16.5C8.92429 16.5 6.46167 14.0374 6.46167 11ZM8.52417 11C8.52417 12.8948 10.0669 14.4375 11.9617 14.4375C13.8564 14.4375 15.3992 12.8948 15.3992 11C15.3992 9.10388 13.8564 7.5625 11.9617 7.5625C10.0669 7.5625 8.52417 9.10388 8.52417 11Z'
								fill='black'
							/>
							<circle cx='17.8742' cy='5.08761' r='0.732875' fill='black' />
						</svg>
					</Link>
				</div>
			</div>
		</footer>
	);
}
