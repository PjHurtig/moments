import React from 'react'
import NoResults from '../assets/no-results.png'
import Asset from './Asset'

const NotFound = () => {
  return (
    <div>
      <Asset src={NoResults} message="Sorry, the page you're looking for doesn't exist" />
    </div>
  )
}

export default NotFound