import {Card} from "../model/Card";
import PostCard from "./PostCard";
import './RmaOverview.css';

type RmaOverviewProps = {
    cards : Card[]
}

export default function RmaOverview(props : RmaOverviewProps) {
    return (
        <div className={"gallery"}>
            { props.cards.map( card => <PostCard card={card}/>) }
        </div>
        );

}