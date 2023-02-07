import './counter.css'
import { render } from 'react-dom'

const Counter = (
    <div className="container">
      <div className="chevron chevron-up" />
      <div className="number">256</div>
      <div className="chevron chevron-down" />
    </div>
  );
  
function App (){
  render(Counter);
}

export default App