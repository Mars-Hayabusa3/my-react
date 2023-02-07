import './OrderPage.css'
import OrderList from './component/OrderList'
import Summary from './component/Summary'
// import { useState } from 'react'

function OrderPage() {
  // const [counts, setCounts] = useState([1, 1])

  // const calcTotalNumber = () => {
  //   let total = 0

  //   for (let i = 0; i < products.length; i++) {
  //     const element = array[i]
  //     total += counts[i]
  //   }

  //   return total
  // }

  // const calcTotalPrice = () => {
  //   let total = 0

  //   for (let i = 0; i < products.length; i++) {
  //     total += counts[i] * products[i].price
  //   }

  //   return total
  // }

  return (
    <>
      <div className="card">
        <div className="row">
          <OrderList />
          <Summary />
        </div>
      </div>
    </>
  )
}

export default OrderPage
