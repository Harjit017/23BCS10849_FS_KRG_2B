import React from "react";
import FlashCard from "./FlashCard";
import Card1 from "../assets/Card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";

const items = [
    { id: 1, title: "Handwoven Basket", img: Card1 },
    { id: 2, title: "Hand-painted Pottery", img: card2 },
    { id: 3, title: "Embroidered Cloth", img: card3 },

];

export default function FlashCardGrid(){
    return (
        <div id="collection" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {items.map((it, idx) => (
                <FlashCard key={it.id} {...it} index={idx} />
            ))}
        </div>
    );
}
