import React, { useState } from 'react'

export default function Sayohat({ id, title, body, ochirish }) {
    const [kop, setKop] = useState(false);

  return (
      <div>
          <article>
          <h2>{title}</h2>
              {/* <p>{kop && body}</p>  */}
              {kop ? body : `${body.slice(0, 50)}...`}
              <button onClick={() => setKop(!kop)}>
                  {kop ? 'oz' : 'kop'}
              </button>
              <button onClick={() => ochirish(id)}>ochirish</button>
        </article>
          
    </div>
  )
}
