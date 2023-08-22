import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchDetail } from '../api/api'

const Detail = () => {
  const [data,setData]=useState()
  const params = useParams()

  const fetchData =async () => {
    const res = await fetchDetail(params.id)
    setData(res.data)
  }

  useEffect(()=>{
    fetchData()
  })

  console.log(params.id)
  return (
    <div>
        <h1>Detailed Page</h1>
        
        {data && (
        
            <div key="fasdkjf" className='mb-4 border-2 p-4'>

          {console.log(data)}
            <p>Train No: {data.trainNumber}</p>
            <p>Train Name: {data.trainName}</p>
            <p>Departure Time: {data?.departureTime?.Hours}:{data?.departureTime?.Minutes}:{data?.departureTime?.Seconds}</p>
            <p>Price: AC Rs.{data?.price?.AC}, Sleeper Rs.{data?.price?.sleeper}</p>
            <p>Availability: AC: {data.seatsAvailable.AC}, Sleeper:{data.seatsAvailable.sleeper}</p>
            <p>Delayed by: {data.delayedBy} minutes</p>
            </div>
        )}
    </div>
  )
}

export default Detail