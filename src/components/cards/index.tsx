import { Cards } from "../../pages/cards";
import { CardComponent } from "../card";
import { useNavigate } from "react-router-dom";

export const CardsComponent = ({ cards }: { cards: Cards }) => {
  const navigate = useNavigate();
  if (!cards) {
    return <p>No cards available.</p>;
  }
  return (
    <div className="card-container">
      {cards.map((card) => (
        <div key={card.id} onClick={() => navigate(`/cards/${card.id}`)}>
          <CardComponent card={card} />
        </div>
      ))}
    </div>
  );
};
