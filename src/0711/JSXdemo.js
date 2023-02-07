/* eslint-disable prettier/prettier */
import React from 'react'

function JSXdemo(props) {
  return (
    <>
      <h2>JSX 各種類型值呈現</h2>
      <h2>Number</h2>
      {123 - 1}<br />
      {NaN}
      <h2>String</h2>
      {'abc'}<br />
      {'Hello!'}<br />
      {'しか'}
      <h2>Boolean (不呈現)</h2>
      {true}
      {false}
      true
      <h2>Null (不呈現)</h2>
      {null}
      <h2>Array</h2>
      {[1, 2, 3, 4]}
      <h2>Object (會壞掉)</h2>
      {/* {{ a: 7, b: 9 }} */}
      {/* Objects are not valid as a React child */}
      <h2>Function</h2>
      {() => {
        console.log('123')
      }}
      {/* Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. */}
      
    </>
  )
}

export default JSXdemo
