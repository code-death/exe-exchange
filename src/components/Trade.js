import React from 'react'
import '../App.css'
import Navbar from './Navbar'


const positionData = [
    {
        direction: 'Buy',
        size: '6.77',
        price: '10'
    },
    {
        direction: 'Sell',
        size: '5.32',
        price: '100'
    },
    {
        direction: 'Buy',
        size: '10.54',
        price: '8'
    },
    {
        direction: 'Sell',
        size: '3.12',
        price: '6'
    },
]

export default function Trade() {
  return (
    <>
    <Navbar />
    <div className='trade'>
        <div className='tradeBlock'>
            <div className='selectorBlock'>
                <button className='selector selectorLeft'>
                    Buy EXE from USDC
                </button>
                <button className='selector selectorRight'>
                    Sell EXE for USDC
                </button>
            </div>
            <div className='selectorBlock'>
                <button className='selector selectorLeft'>
                    Maker (Limit)
                </button>
                <button className='selector selectorRight'>
                    Taker (Market)
                </button>
            </div>
            <p style ={{margin: '20px 0'}}>Current Price : $ 30.00</p>
            <input type="text" name="amount" className='input inputAmount' placeholder='Enter Amount'/>
            <input type="text" name="price" className='input inputPrice' placeholder='Enter Price'/>
            <p style ={{margin: '20px 0'}}>Output : $ 30.00</p>
            <button className='metamask-connect heroButton'>Swap</button>
        </div>
        <div className='tradeBlock'>
        <div className='selectorBlock'>
                {positionData.map(item => (<div className='infoBlock'>
                    <span className='infoItem'>{item.direction}</span>
                    <span className='infoItem'>Size: {item.size}</span>
                    <span className='infoItem'>Price: {item.price}</span>
                    <button className='endButton'>end</button>
                </div>))}
            </div>
        </div>
        <div className='tradeBlock'>
        <div className='selectorBlock'>
                <button className='selector selectorLeft'>
                    Buy EXE from USDC
                </button>
                <button className='selector selectorRight'>
                    Sell EXE for USDC
                </button>
            </div>
        </div>
    </div></>
  )
}
