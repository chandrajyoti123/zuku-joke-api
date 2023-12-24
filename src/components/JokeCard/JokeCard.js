import React from 'react'
import './JokeCard.css'

export default function JokeCard({joke}) {
  return (
    <div className='joke-card-container'>
    {joke}
    </div>
  )
}
