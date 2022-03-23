import React from 'react'

export const GifGridItem = ({id, title, url}) => {
  return (
    <div className='gif-section-item'>
      <div className='title-item'>
        <p>{title}</p>
      </div>
      <div className='body-item'>
        <img src={url} alt={title}></img>
      </div>
    </div>
  )
}
