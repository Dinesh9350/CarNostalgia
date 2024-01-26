import { Card } from 'react-bootstrap'

const CarCard = ({
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
    <Card className='card' style={{ width: '18rem' }}>
      <Card.Img variant='top' src={images[0].file.absurl} />
      <Card.Body>
        <Card.Title className='one-line m-0'>
          {make_year} {make} {model}
        </Card.Title>
        <div className=''>
          <span>{`${Math.floor(mileage / 1000)}km `}</span>
          <span>&#x2022; {fuel_type + ' '}</span>
          <span>&#x2022; {transmission + ' '}</span>∙
          <h5 className='m-0'>{`${(price / 100000).toFixed(2)} Lakhs`}</h5>
          <span className='one-line'>{hub}</span>
        </div>
      </Card.Body>
    </Card>
  )
}
export default CarCard
