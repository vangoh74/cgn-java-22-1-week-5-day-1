import {Card} from "../model/Card";
import './PostCard.css';

type PostCardProps = {
    card : Card;
}
export default function PostCard({card} : PostCardProps){
    return <div className={'post-card'}>
        <h2>{card.name}</h2>
        <img className={'card-Image'} src={card.image} />
        <p><h3> {card.species} </h3></p>
        <p>{card.origin.name}</p>
    </div>
}