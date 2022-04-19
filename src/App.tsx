import {ChangeEvent, ChangeEventHandler, useEffect, useState } from 'react';
import './App.css';
import RmaOverview from "./components/RmaOverview";
import Title from "./components/Title";
import { Card } from './model/Card';

export default function App() {
    const [characters, setCharacters] = useState<Card[]>([]);
    const [text, setText] = useState<string>("");
    //const [filteredCards, setFilteredCards] = useState<Card[]>([]);

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
        //char(characters.filter(character => character.name.includes(event.target.value)));
        //console.log(filteredCards);
    };

    const filteredCharacters = () => {
        return characters.filter(character => character.name.includes(text));
    }

    const onButtonClick = () => {
        // ToDo
    }

    return (
        <div className="App">
            <Title />
            <input onChange={onTextChange} />
            <button onClick={onButtonClick}>Filter cards</button>
            <RmaOverview cards={filteredCharacters()}/>
        </div>
    );
}

/*
        <div className="App">
            <Title />
            <input onChange={onTextChange} />
            <button onClick={onButtonClick}>Filter cards</button>
            <RmaOverview cards={filteredCards}/>
        </div>*/

/*
    const [text, setText] = useState<string>("dfsgsdfg");
    const [filteredCards, setFilteredCards] = useState<Card[]>(cards);

    const onTextChange = (event : ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
        setFilteredCards(cards.filter(card => card.name.includes(event.target.value)));
        console.log(filteredCards);
        };

    const onButtonClick = () => {
        // ToDo
    }*/
