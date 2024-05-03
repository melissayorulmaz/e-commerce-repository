import React from 'react'
import DesktopCloths from "../components/shoppageComponents/DesktopCloths";
import FilterSide from '../components/shoppageComponents/FilterSide';
import CategoryList from '../components/shoppageComponents/CategoryList';
import Sponsors from '../components/shoppageComponents/Sponsors';

function ShopPage() {
  return (
    <div>
    <DesktopCloths />
    <FilterSide />
    <CategoryList />
    <Sponsors />
    </div>
  )
}

export default ShopPage
