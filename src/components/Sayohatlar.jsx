import React from 'react'
import Sayohat from './Sayohat'

export default function Sayohatlar({sayohatlar, ochirish}) {
  return (
      <div>
          {sayohatlar.map((item) => {
              return (
                  <Sayohat key={item.id} {...item} ochirish={ochirish} />
              )
          })}
    </div>
  )
}
