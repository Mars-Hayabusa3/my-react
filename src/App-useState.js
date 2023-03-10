import { useState } from 'react'
import './menu.css'

function App() {
  // 目前的所有的選單項目
  const menuItems = ['首頁', '關於我們', '產品']
  // -1代表一開始沒有被按的項目
  const [activeMenu, setActiveMenu] = useState('產品')

  return (
    <ul>
      {menuItems.map((v, i) => {
        return (
          <li
            key={i}
            onClick={() => {
              setActiveMenu(v) // 收到 i 的 key 之後 把對應的 menu v 設定成 active
            }}
          >
            <a href="#/" className={activeMenu === v ? 'active' : ''}>
              {v}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default App
