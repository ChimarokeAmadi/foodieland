"use client";

import React, { createContext, useState, ReactNode, useEffect } from "react";

interface LikedFoodContextType {
	likedFood: number[];
	setLikedFood: (likedFood: number[]) => void;
}

export const LikedFoodContext = createContext<LikedFoodContextType>({
	likedFood: [],
	setLikedFood: () => {},
});

interface LikedFoodProviderProps {
	children: ReactNode;
}

export const LikedFoodProvider: React.FC<LikedFoodProviderProps> = ({
	children,
}) => {
	const [likedFood, setLikedFood] = useState<number[] | undefined>();

	useEffect(() => {
		let data = localStorage.getItem("foodieland_like_state");
		if (data !== null) {
			return setLikedFood(JSON.parse(data));
		}
		setLikedFood([]);
	}, []);

	useEffect(() => {
		if (likedFood !== undefined) {
			localStorage.setItem("foodieland_like_state", JSON.stringify(likedFood));
		}
	}, [likedFood]);

	return (
		<LikedFoodContext.Provider
			value={{ likedFood: likedFood || [], setLikedFood }}>
			{children}
		</LikedFoodContext.Provider>
	);
};
