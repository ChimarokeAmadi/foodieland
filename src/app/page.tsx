import HeroSection from "@/components/Hero/HeroSection";
import Categories from "@/components/Categories/Categories";
import Simple from "@/components/Simple/Simple";
import Everyone from "@/components/Everyone/Everyone";
import Instagram from "@/components/Instagram/Instagram";

export default function Home() {
	return (
		<main className=''>
			<HeroSection />
			<Categories />
			<Simple />
			<Everyone />
			<Instagram />
		</main>
	);
}
