import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Card, Cards } from '../../shared/types'
import { CardComponent } from '../../components/card'

export const CardsPage = () => {
  const navigate = useNavigate()
  const [cards, setCards] = useState<Cards>([])
  const [isLoading, setIsLoading] = useState(true)

  const searchCards = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('https://fakestoreapi.com/products/')
      const data = (await response.json()) as Cards
      setCards(data)
    } catch (error) {
      console.error('Error fetching cards:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    searchCards()
  }, [cards])

  return (
    <div>
      <h1>Cards</h1>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <div className="card-container">
          {cards.map(card => (
            <div
              key={card.id}
              onClick={() =>
                navigate(`/card-details/${card.id}`, { state: { card } })
              }
            >
              <CardComponent card={card} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
