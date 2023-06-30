import { Card } from '../../shared/types'
export const CardComponent = ({ card }: { card: Card }) => {
  return (
    <div className="card">
      <img src={card.image} alt={card.title} className="card-image" />
      <h2 className="card-title">{card.title}</h2>
      <p className="card-category">{card.category}</p>
      <p className="card-description">{card.description}</p>
      <p className="card-price">${card.price}</p>
      <div className="card-rating">
        Rating: {card.rating.rate} ({card.rating.count} reviews)
      </div>
    </div>
  )
}
