import { useState, useEffect } from "react";
import { CardsComponent } from "../../components/cards";
import { WithLoading } from "../../hocs/with-loading";

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

const WithLoadingCards = WithLoading(CardsComponent);

const CardsPage = () => {
  const [cards, setCards] = useState<Cards>([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchCards = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products/");
      const data = (await response.json()) as Cards;
      setCards(data);
    } catch (error) {
      console.error("Error fetching cards:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    searchCards();
  }, []);

  return (
    <div>
      <h1>Cards</h1>
      <WithLoadingCards list={cards} isLoading={isLoading} />
    </div>
  );
};

export default CardsPage;
