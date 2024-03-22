import axios from "axios";
import React, { useState } from "react";

const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

export const ApiNasa = () => {
	const [date, setDate] = useState('');
	const [explanation, setExplanation] = useState('');
	const [imageUrl, setImageUrl] = useState('');

	const handleGetPhoto = (e:React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		(async () => {
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
			<div className="flex gap-5 flex-col bg-slate-200 p-6 w-[20rem] rounded">
				<input value={date} onChange={(e) => setDate(e.target.value)} />
				<button onClick={(e) => handleGetPhoto(e)}>Get photo of the day</button>
				<img src={imageUrl}/>
				<p>{explanation}</p>
			</div>
		</form>
	)
}