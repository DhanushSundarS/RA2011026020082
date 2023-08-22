import { useEffect, useState } from 'react'
import { fetchToken, getData } from '../api/api'
import { Link } from 'react-router-dom'

function Home() {
  const [data, setData] = useState([])
  
  const fetchData = async () => {
    const token = await fetchToken()
    console.log(token)
    const res = await getData(token)
    setData(res.data)
    console.log("hii",res.data)
  }

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <>
      {data?.map(item => (
        <Link to={`detail/${item.trainNumber}`} key={item.tainNumber}>
            <div  className='mb-4 border-2 p-4'>

          {console.log(item)}
            <p>Train No: {item.trainNumber}</p>
            <p>Train Name: {item.trainName}</p>
            <p>Departure Time: {item?.departureTime?.Hours}:{item?.departureTime?.Minutes}:{item?.departureTime?.Seconds}</p>
            <p>Price: AC Rs.{item?.price?.AC}, Sleeper Rs.{item?.price?.sleeper}</p>
            <p>Availability: AC: {item.seatsAvailable.AC}, Sleeper:{item.seatsAvailable.sleeper}</p>
            <p>Delayed by: {item.delayedBy} minutes</p>
            </div>
        </Link>
      ))}
    </>
  )
}

export default Home
