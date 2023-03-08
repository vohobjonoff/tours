import React from 'react';
import Tour from './Tour'

export default function Tours({ tours, removeItem }) {

  return (
      <div>
          {tours.map((tour) => {
              return (
                  <Tour key={tour.id} {...tour} removeItem={removeItem}  />
              )
          })}
    </div>
  )
}
