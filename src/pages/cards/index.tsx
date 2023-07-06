import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { CardComponent } from "../../components/card";

export type Card = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { count: number; rate: number };
  title: string;
};

export type Cards = Array<Card>;

const CardsPage = () => {
  const navigate = useNavigate();
  const [cards, setCards] = useState<Cards>([]);

  const searchCards = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products/");
      const data = (await response.json()) as Cards;
      setCards(data);
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };

  useEffect(() => {
    searchCards();
  }, []);

  return (
    <div>
      <h1>Cards</h1>
      <div className="card-container">
        {cards.map((card) => (
          <div key={card.id} onClick={() => navigate(`/cards/${card.id}`)}>
            <CardComponent card={card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsPage;
