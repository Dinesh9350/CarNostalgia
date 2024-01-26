import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Button } from 'react-bootstrap'

const CarDetailsCard = ({
  images,
  make_year,
  make,
  model,
  mileage,
  fuel_type,
  transmission,
  price,
  hub,
}) => {
  return (
    <div
      className=''
      style={{
        margin: `50px`,
        display: `flex`,
        flexDirection: `row`,
        justifyContent: `center`,
      }}
    >
      <div
        className='d-md-flex align-items-center e-card e-card-horizontal border'
        style={{ width: `50rem` }}
      >
        <div className='p-3'>
          <img
            src={images[0].file.absurl}
            alt='Sample'
            style={{ height: `180px` }}
          />
        </div>
        <div className='e-card-stacked p-3 d-sm-flex flex-column justify-content-start align-items-start'>
          <div className='e-card-header '>
            <div className='e-card-header-caption'>
              <div className='e-card-header-title  '>
                <h5>
                  {make_year} {make} {model}
                </h5>
              </div>
            </div>
          </div>
          <div className='e-card-content '>
            <span>{`${Math.floor(mileage / 1000)}km `}</span>
            <span>&#x2022; {fuel_type + ' '}</span>
            <span>&#x2022; {transmission + ' '}</span>∙
            <h5 className='m-0'>{`${(price / 100000).toFixed(2)} Lakhs`}</h5>
            <span className=''>{hub}</span>
          </div>
          <Button className='m-1 bg-success'>Free Test Drive</Button>
          <Button className='m-1 bg-primary'>Book Now</Button>
        </div>
      </div>
    </div>
  )
}

export default CarDetailsCard
