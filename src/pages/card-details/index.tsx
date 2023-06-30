import { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { CardComponent } from '../../components/card'
import { Card } from '../../shared/types'

type CardDetailsParams = {
  id: string
}

export const CardDetails = () => {
  const { id } = useParams<CardDetailsParams>()
  const [card, setCard] = useState<Card>()

  //   const cardData = useLocation().state as Card
  //   console.log(cardData)

  const fetchCardDetails = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const cardData = (await response.json()) as Card
    setCard(cardData)
  }

  useEffect(() => {
    fetchCardDetails()
  }, [id])

  if (!card) {
    return <div>Loading...</div>
  }

  return (
    <div className="card-details">
      <h2>Card Details</h2>
      <CardComponent card={card} />
    </div>
  )
}
