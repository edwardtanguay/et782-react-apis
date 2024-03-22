import axios from "axios";
import React, { useState } from "react";
import { ApiCard } from "./ApiCard";

const nasaApiKey = import.meta.env.VITE_NASA_KEY;

export const ApiNasa = () => {
	const [date, setDate] = useState('');
	const [explanation, setExplanation] = useState('');
	const [imageUrl, setImageUrl] = useState('');

	const handleGetPhoto = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		(async () => {
			const url = `https://api.nasa.gov/planetary/apod?api_key=${nasaApiKey}&date=${date}`;
			const response = await axios.get(url);
			const data = response.data;
			const _explanation = data.explanation;
			const _imageUrl = data.url;
			setExplanation(_explanation);
			setImageUrl(_imageUrl);
		})();
	}

	return (
		<form>
			<ApiCard>
				<input value={date} onChange={(e) => setDate(e.target.value)} />
				<button onClick={(e) => handleGetPhoto(e)}>Get photo of the day</button>
				<img src={imageUrl} />
				<p>{explanation}</p>
			</ApiCard>
		</form>
	)
}