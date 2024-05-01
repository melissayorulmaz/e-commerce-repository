import React from 'react'
import DesktopCloths from "../components/shoppageComponents/DesktopCloths";
import FilterSide from '../components/shoppageComponents/FilterSide';
import CategoryList from '../components/shoppageComponents/CategoryList';

function ShopPage() {
  return (
    <div>
    <DesktopCloths />
    <FilterSide />
    <CategoryList />
    </div>
  )
}

export default ShopPage
