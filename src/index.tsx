import * as React from 'react'
import * as ReactDOM from 'react-dom'

const rootEl = document.getElementById('root')
import '../styles/main.scss'
// import './boxAnimation.scss';
import { Card } from './components/Card';
import { AnimatedGrid } from './animations/Grid/index';

function sumOfCords(index, length) {
  return index % length + Math.floor(index / length)
}

const App = () => (
  <div className="flex flex-wrap" style={{height: 800}}>
    {/* {
      [1,2,3,4,5,5,6,7,4].map((v, index) => 
        <Card className={`box box-${sumOfCords(index, 3)}`}  />
      )
    } */}
    <AnimatedGrid />
  </div>
)
ReactDOM.render(<App />, rootEl);