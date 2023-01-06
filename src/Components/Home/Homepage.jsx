import React from 'react'
import Benefits from '../Benefits/BenefitsList'
import Categories from '../Categories/CategoryList'
import Prom from '../Prom/Prom'

//------------------------------------  COMPONENT DEVELOPMENT  ------------------------------------//
export const Home = () => {
  return (
    <div>
      <Prom></Prom>
      <Categories></Categories>
      <Benefits></Benefits>
    </div>
  )
}
