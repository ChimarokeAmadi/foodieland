export default function Categories() {
	const categories = [
		{
			image: "/Categories/Breakfast 25.png",
			name: "Breakfast",
		},
		{
			image: "/Categories/Vegan.png",
			name: "Vegan",
		},
		{
			image: "/Categories/Meat.png",
			name: "Meat",
		},
		{
			image: "/Categories/Desert.png",
			name: "Desert",
		},
		{
			image: "/Categories/Lunch.png",
			name: "Lunch",
		},
		{
			image: "/Categories/Chocolate.png",
			name: "Chocolate",
		},
	];

	return (
		<div className='container pt-40 pb-[183px] space-y-[80px] flex flex-col items-center'>
			<div className='flex w-full justify-between'>
				<p className='font-semibold text-[48px] leading-[58.09px] tracking-[-2%]'>
					Categories
				</p>
				<button className='leading-[19.36px] font-semibold py-5 px-[27px] bg-[#E7FAFE] rounded-2xl'>
					View All Categories
				</button>
			</div>

			<div className='flex gap-10 w-full justify-between'>
				{categories.map((category, index) => (
					<div
						className={`flex flex-col justify-center gap-[50px] px-10 pb-[30px] w-[1fr] ${
							(index == 0 &&
								"bg-gradient-to-t from-[#7082461A] bg-opacity-[10%] rounded-3xl ") ||
							(index == 1 &&
								"bg-gradient-to-t from-[#6CC63F1A] bg-opacity-[10%] rounded-3xl ") ||
							(index == 2 &&
								"bg-gradient-to-t from-[#fbeceb] bg-opacity-[10%] rounded-3xl ") ||
							(index == 3 && "bg-gradient-to-t from-[#fef4e3]  rounded-3xl ") ||
							(index == 4 &&
								"bg-gradient-to-t from-[#0000000D] bg-opacity-[10%] rounded-3xl ") ||
							(index == 5 &&
								"bg-gradient-to-t from-[#0000000D] bg-opacity-[10%] rounded-3xl ")
						}`}
						key={index}>
						<div className='before:blur-lg before:translate-x-3 before:translate-y-5'>
							<div className='relative'>
								<img src={category.image} alt='' className={`size-[100px]  `} />
								<img
									src={category.image}
									alt=''
									className={`size-[100px]  absolute top-5 left-5 opacity-[50%] -z-10 blur-lg`}
								/>
							</div>
						</div>
						<p className='text-center font-semibold text-[18px] leading-[21.78px] tracking-[-2%]'>
							{category.name}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}
