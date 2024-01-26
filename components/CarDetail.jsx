import React, { useEffect, useState } from 'react'
import CarDetailsCard from './CarDetailsCard'
import { useParams } from 'react-router-dom'
import Shimmer from './Shimmer'

const CarDetail = () => {
  const params = useParams()
  const [carDetails, setCarDetails] = useState([])

  useEffect(() => {
    getCarDetails()
  }, [])

  const getCarDetails = async () => {
    try {
      const response = await fetch(
        `https://api.spinny.com/sp-consumer-search/product/listing/${params.id}/related/?count=5`
      )
      const json = await response.json()
      setCarDetails(json.results)
    } catch (error) {
      console.error('Error fetching car details:', error)
    }
  }

  if (carDetails.length === 0) {
    return <Shimmer />
  }
  return (
    <div>
      {carDetails.map((car) => (
        <div key={car.id}>
          <CarDetailsCard {...car} />
          {/* <img src={car.images[0].file.absurl} alt='cardetailsimg' />
          <h3>{car.model}</h3> */}
        </div>
      ))}
    </div>
  )
}

export default CarDetail

// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// // https://www.spinny.com/buy-used-cars/gurgaon/maruti-suzuki/wagon-r-10/lxi-o-cng-sector-29-2020/6200686

// const CarDetail = () => {
//   const params = useParams()
//   const [carDetails, setCarDetails] = useState('')
//   useEffect(() => {
//     getCarDetails()
//   }, [])
//   const getCarDetails = async () => {
//     const response = await fetch(
//       'https://api.spinny.com/sp-consumer-search/product/listing/6200686/related/?count=5'
//     )
//     const json = await response.json()
//     setCarDetails(json.results)
//     console.log(carDetails)
//   }
//   return (
//     <div>
//       {carDetails.map((car) => {
//         return (
//           <>
//             <h3>{car.model}</h3>
//           </>
//         )
//       })}
//     </div>
//   )
// }

// export default CarDetail
