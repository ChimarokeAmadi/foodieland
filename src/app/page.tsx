import HeroSection from "@/components/Hero/HeroSection";
import Categories from "@/components/Categories/Categories";
import Simple from "@/components/Simple/Simple";

export default function Home() {
	return (
		<main className=''>
			<HeroSection />
			<Categories />
			<Simple />
		</main>
	);
}
