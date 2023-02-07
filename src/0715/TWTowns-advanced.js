import { useState } from 'react'
import { cities, towns, postcodes } from './data/towns'

function TWTowns() {
  const [citiesIndex, setCitiesIndex] = useState(-1) // 選中哪個城市
  const [townsIndex, setTownsIndex] = useState(-1)

  return (
    <>
      <h2>台灣縣市區域連動下拉選單</h2>
      <select
        value={citiesIndex}
        onChange={(e) => {
          setCitiesIndex(Number(e.target.value)) // e.target.value 是字串，要轉為數字

          setTownsIndex(-1) // 重置鄉鎮市 index 的值為 -1
        }}
      >
        <option value="-1">請選擇縣市</option>
        {cities.map((v, i) => {
          return (
            <option key={i} value={i}>
              {v}
            </option>
          )
        })}
      </select>
      <select
        value={townsIndex}
        onChange={(e) => {
          setTownsIndex(Number(e.target.value))
        }}
      >
        <option>請選擇區域</option>
        {citiesIndex > -1 && // eslint-disable-next-line no-lone-blocks, prettier/prettier
          towns[citiesIndex].map((v, i) => { {/* towns[0] = 台北市的區 等 */}
            return (
              <option key={i} value={i}>
                {v}
              </option>
            )
          })}
      </select>
      <p>
        郵遞區號：
        {citiesIndex > -1 &&
          townsIndex > -1 &&
          postcodes[citiesIndex][townsIndex]}
      </p>
    </>
  )
}

export default TWTowns
