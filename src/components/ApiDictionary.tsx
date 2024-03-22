import React, { useState } from "react";
import axios from 'axios';
import { ApiCard } from "./ApiCard";

const url = 'https://api.dictionaryapi.dev/api/v2/entries/en';

export const ApiDictionary = () => {
	const [word, setWord] = useState('');
	const [definition, setDefinition] = useState('');

	const getData = async () => {
		const response = await axios.get(`${url}/${word}`);
		const data = (response).data;
		return data;
	}

	const handleGetDefinition = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const data = await getData();
		const _definition = data[0].meanings[0].definitions[0].definition;
		setDefinition(_definition);
	}

	return (
		<form>
			<ApiCard>
				<input value={word} onChange={(e) => setWord(e.target.value)} />
				<button onClick={(e) => handleGetDefinition(e)}>Get definition</button>
				<p>{definition}</p>
			</ApiCard>
		</form>
	)
}