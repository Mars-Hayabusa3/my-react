import { useState } from 'react'

function TWTowns() {
  const cities = ['台北市', '桃園市']
  const towns = [
    ['中山區', '中正區', '大安區'],
    ['桃園區', '中壢區', '龍潭區'],
  ]

  const [citiesIndex, setCitiesIndex] = useState(-1) // 選中哪個城市

  return (
    <>
      <h2>台灣縣市區域連動下拉選單</h2>
      <select
        value={citiesIndex}
        onChange={(e) => {
          setCitiesIndex(Number(e.target.value)) // e.target.value 是字串，要轉為數字
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
      <select>
        <option>請選擇區域</option>
        {citiesIndex !== -1 && // eslint-disable-next-line no-lone-blocks, prettier/prettier
          towns[citiesIndex].map((v, i) => { {/* towns[0] = 台北市的區 等 */}
            return <option key={i}>{v}</option>
          })}
      </select>
    </>
  )
}

export default TWTowns
