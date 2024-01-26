import { Container } from 'react-bootstrap';
import CarCard from './CarCard';
import { carsData } from '../config';
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer.jsx';
import { Link } from 'react-router-dom';

const Body = () => {
  //const searchText = "Maruti"
  const [searchText, setSearchText] = useState('');
  const [allCars, setAllCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  useEffect(() => {
    getCarsData();
  }, []);

  const getCarsData = async () => {
    //  https://api.spinny.com/sp-consumer-search/product/listing/?page=1&include_booked=false&o=popular
    const response = await fetch(
      'https://corsproxy.org/?https%3A%2F%2Fapi.spinny.com%2Fsp-consumer-search%2Fproduct%2Flisting%2F%3Fpage%3D1%26include_booked%3Dfalse%26o%3Dpopular'
    );
    const json = await response.json();
    setAllCars(json.results);
    setFilteredCars(json.results);
    console.log(json.results);
  };

  if (filteredCars?.length === 0) {
    return <Shimmer />;
  }

  return (
    <Container>
      <div className='text-center mt-4'>
        <input
          type='text'
          placeholder='Search..'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          onClick={() => {
            const filterData = allCars.filter((car) => {
              return car.make.toLowerCase().includes(searchText.toLowerCase());
            });
            console.log(filterData);
            setFilteredCars(filterData);
          }}
        >
          Search
        </button>
      </div>
      <div className='d-flex flex-wrap justify-content-center my-3'>
        {filteredCars.map((car) => {
          return (
            <Link to={'car/' + car.id}>
              <CarCard key={car.id} {...car} />
            </Link>
          );
        })}
      </div>
    </Container>
  );
};

export default Body;
