// import logo from './logo.svg';
// import './App.css';
// // import Mypage from './page/Mypage'; <Mypage />

// function App() {
//   return ( <><div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//     </header>
//   </div></>
//   );
// }

import { useState } from 'react'

function App() {
  const [total, setTotal] = useState(0)

  return (
    <h1 onClick={() => {
      setTotal(total + 1)
    }}>
      {total}
    </h1>
  )
}

export default App;
