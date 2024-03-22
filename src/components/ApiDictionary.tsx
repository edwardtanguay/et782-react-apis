import React, { useState } from "react"

const url = 'https://api.dictionaryapi.dev/api/v2/entries/en';

export const ApiDictionary = () => {
	const [word, setWord] = useState('house');

	const handleGetDefinition = (e:React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		alert('clicked')
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