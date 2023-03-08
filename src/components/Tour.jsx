import React, { useState } from 'react'

export default function Tour({id, name, info, price, image , removeItem}) {

  const [readMore, setReadMore] = useState(false);



  return (
      <div>
      <h2>{name}</h2>
      <img src={image} alt="" />
      <p>{price}</p>
      <p>{readMore ? info : `${info.slice(0,200)}...`}</p>
      <button onClick={() => setReadMore(!readMore)}>
        {readMore ? 'less' : 'more'}
      </button>
      <button onClick={() => removeItem(id)} >remove</button>
    </div>
  )
}
