"use client";
import Deliciousness from "@/components/Deliciousness/Deliciousness";
import Directions from "@/components/Dynamic/Directions/Directions";
import Hero from "@/components/Dynamic/Hero/Hero";
import Ingredients from "@/components/Dynamic/Ingredients/Ingredients";
import recipes from "@/components/recipes/recipes";
import { notFound } from "next/navigation";

export default function page(props: { params: { id: string } }) {
	const {
		params: { id },
	} = props;

	const foundRecipe = recipes.find((recipe) => {
		return String(recipe.id) === id;
	});
	console.log(id);

	if (!foundRecipe) {
		notFound();
	}

	return (
		<div className=''>
			<Hero image={foundRecipe.image} name={foundRecipe.name} />
			<Ingredients />
			<Directions />
			<Deliciousness />
		</div>
	);
}
