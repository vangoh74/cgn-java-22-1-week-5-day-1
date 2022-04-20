import {ChangeEvent, ChangeEventHandler, useEffect, useState } from 'react';
import './App.css';
import RmaOverview from "./components/RmaOverview";
import Title from "./components/Title";
import { Card } from './model/Card';

export default function App() {
    const [characters, setCharacters] = useState<Card[]>([]);
    const [text, setText] = useState<string>("");
    const [inputText, setInputText] = useState<string>("");

    const fetchCharacters = () => {
        return fetch('https://rickandmortyapi.com/api/character')
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network error")
            })
            .catch(console.error);
    }

    useEffect(() => {
        fetchCharacters()
            .then(body => setCharacters(body.results))
    }, [])

    const onTextChange = (event : ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    const filteredCharacters = () => {
        return characters.filter(character => character.name.includes(inputText));
    };

    const onButtonClick = () => {
        setInputText(text)
    }

    return (
        <div className="App">
            <Title />
            <input onChange={onTextChange} />
            <button onClick={onButtonClick}>Filter cards</button>
            {
               filteredCharacters().length
                   ? <RmaOverview cards={filteredCharacters()}/>
                   :
                   <div className={"error-msg"}>
                       Name Does not exists!
                       <RmaOverview cards={characters}/>
                   </div>
            }
        </div>
    );
}