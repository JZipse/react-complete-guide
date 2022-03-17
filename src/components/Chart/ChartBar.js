import React from 'react'

import './CharBar.css'

const ChartBar = ({value, maxVal, label}) => {

    let barHeight = '0%';
    if(maxVal > 0){
        barHeight = Math.round((value/maxVal) * 100) + '%'
    }

  return (
    <div className='chart-bar'>
        <div className='chart-bar__inner'>
            <div className='chart-bar__fill' style={{height: barHeight}}></div>
        </div>
        <div className='chart-bar__label'>{label}</div>
    </div>
  )
}

export default ChartBar