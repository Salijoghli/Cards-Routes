import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardComponent } from "../../../components/card";
import NotFound from "../../not-found";
import { Card } from "..";
type CardDetailsParams = {
  id: string;
};

export const CardDetails = () => {
  const { id } = useParams<CardDetailsParams>();
  const [card, setCard] = useState<Card>();
  const [error, isError] = useState(false);

  const fetchCardDetails = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const cardData = (await response.json()) as Card;
      setCard(cardData);
    } catch (error) {
      isError(true);
      console.error("error fetching data : " + error);
    }
  };

  useEffect(() => {
    fetchCardDetails();
  });

  if (error) {
    return <NotFound />;
  }
  if (!card) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card-details">
      <h2>Card Details</h2>
      <CardComponent card={card} />
    </div>
  );
};
