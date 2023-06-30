import { Routes, Route, Link } from 'react-router-dom'
import { Home } from './pages/home'
import { CardsPage } from './pages/cards'
import { CardDetails } from './pages/card-details' // Import the card details page component
import { NotFound } from './pages/not-found'
import { Login } from './pages/login'
import './App.css'

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/cards'}>Cards</Link>
          </li>
          <li>
            <Link to={'/login'}>Log In</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cards" element={<CardsPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/card-details/:id" element={<CardDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
