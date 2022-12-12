import React from 'react'
import CardViewDashboard from '../cardView/CardViewDashboard';
import { Link } from 'react-router-dom'

export default function List({props}) {
  return (
    <div className='sm:flex px-8 gap-3 py-8 ' >
      <Link to="promotion/">
        {props.map((propsF, index) => (
          <CardViewDashboard key={index} name={propsF.name} iniciada={propsF.iniciada} desc={propsF.desc} img={propsF.img} onClick={() => this.goToCarddetails('cardId1')}></CardViewDashboard>
        ))}
      </Link>
    </div>
  )
}
