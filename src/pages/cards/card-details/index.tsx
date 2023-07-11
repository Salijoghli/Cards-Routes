import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardComponent } from "../../../components/card";
import NotFound from "../../not-found";
import { Card } from "..";

type CardDetailsParams = {
  id: string;
};

const defaultCardParams: Card = {
  category: "",
  description: "",
  id: 0,
  image: "",
  price: 0,
  rating: { count: 0, rate: 0 },
  title: "",
};

const CardDetails = () => {
  const { id } = useParams<CardDetailsParams>();
  const [card, setCard] = useState<Card>(defaultCardParams);
  const [error, setError] = useState(false);

  const fetchCardDetails = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const cardData = (await response.json()) as Card;
      setCard(cardData);
    } catch (error) {
      setError(true);
      // console.error("error fetching data : " + error);
    }
  };

  useEffect(() => {
    fetchCardDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) {
    return <NotFound />;
  }

  return (
    <div className="card-details">
      <h2>Card Details</h2>
      <CardComponent card={card} />
    </div>
  );
};

export default CardDetails;
