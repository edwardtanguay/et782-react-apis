import React, { useState } from "react";
import axios from 'axios';

const url = 'https://api.dictionaryapi.dev/api/v2/entries/en';

export const ApiDictionary = () => {
	const [word, setWord] = useState('horse');

	const getData = async () => {
		const response = await axios.get(`${url}/${word}`);
		const data = (response).data;
		return data;
	}

	const handleGetDefinition = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const data = await getData();
		console.log('test', data[0].meanings[0].definitions[0].definition);
	}

	return (
		<form>
			<div className="flex gap-5 flex-col bg-slate-200 p-6 w-[20rem] rounded">
				<input value={word} onChange={(e) => setWord(e.target.value)} />
				<button onClick={(e) => handleGetDefinition(e)}>Get definition</button>
				<p>(definition)</p>
			</div>
		</form>
	)
}