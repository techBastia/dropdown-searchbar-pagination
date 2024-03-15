import React from 'react'
import Paginations from './Paginations'

export const Pagination = () => {
    const data = ["item1", "item2", "item3", "item4", "item5", "item6", "item7", "item8", "item9", "item10"];
    const itemsPerPage = 3;
  return (
    <div>
    <Paginations data={data} itemsPerPage={itemsPerPage} />
    </div>
  )
}
