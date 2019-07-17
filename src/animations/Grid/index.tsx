import * as React from 'react';
import './grid.scss';

const Header = () => (
  <div className='bg-red-400' style={{ width: '100%', height: 150 }} />
)

const Card = () => (
  <div className='card bg-red-700' style={{ height: 150, boxSizing: 'border-box'}}/>
)
export const AnimatedGrid = () => (
  <div className='container mx-auto'>
    <Header />
    <div className='flex flex-wrap justify-between my-4'>
      {
        [1,2,3,4,5].map(() => <Card />)
      }
    </div>
  </div>
)