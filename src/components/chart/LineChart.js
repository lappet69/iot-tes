/* eslint-disable no-unused-vars */
import React from 'react'
import {Line} from 'react-chartjs-2'
import {Cart as ChartJS} from 'chart.js/auto'
import { useSelector } from 'react-redux'

const LineChart =({chartData}) => {
  const dataDefault = useSelector((state)=>state.API.CHART)



  return  (
    <Line data={chartData ? chartData : dataDefault}/>
  )
}

export default LineChart