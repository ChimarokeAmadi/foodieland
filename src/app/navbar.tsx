import { Lobster } from "next/font/google";
const lobster = Lobster({ subsets: ["latin"], weight: "400" });

export default function Navbar() {
	return (
		<nav className='pt-[46px] pb-[45px] px-20 border-b border-black border-opacity-10'>
			<div className='container flex justify-between '>
				<div className=''>
					<p className={`${lobster.className} text-[24px]`}>
						Foodieland<span className='text-orange-600'>.</span>
					</p>
				</div>

				<ul className='flex gap-[60px] items-center font-medium'>
					<li className=''>
						<a href='' className=''>
							Home
						</a>
					</li>
					<li className=''>
						<a href='' className=''>
							Recipes
						</a>
					</li>
					<li className=''>
						<a href='' className=''>
							Blog
						</a>
					</li>
					<li className=''>
						<a href='' className=''>
							Contact
						</a>
					</li>
					<li className=''>
						<a href='' className=''>
							About us
						</a>
					</li>
				</ul>

				<div className='flex gap-10 items-center'>
					<img
						src='/Nav/001-facebook.jpg'
						alt=''
						className='h-[19.84pxpx] w-[9.92px]'
					/>
					<img src='/Nav/Path.jpg' alt='' className='h-[17.88px] w-[22px]' />
					<img src='/Nav/004-instagram.jpg' alt='' className='size-[22px]' />
				</div>
			</div>
		</nav>
	);
}
