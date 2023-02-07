import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import About from './0719-router/About'
import Home from './0719-router/Home'
import Product from './0719-router/Product'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  )
}

// 網址使用 localhost:3000/about 時會

export default App

// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

// import Home from './pages/Home'
// import About from './pages/About'
// import Product from './pages/Product'

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="about" element={<About />} />
//         <Route path="product" element={<Product />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App
