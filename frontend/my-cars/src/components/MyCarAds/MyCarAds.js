import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { fetchMyCars } from '../../actions/carAcions';
import { getCars, getUserId } from '../../reducers';

// import ChooseCarsFilterForm from './ChooseCarsFilterForm';
import CarCard from '../CarCard';
import './MyCarAds.scss';

const MyCarAds = ({
    fetchMyCars,
    cars,
    userId
}) => {

    useEffect(() => {
        fetchMyCars(userId);
    }, []);

    // const [filters, setFilters] = useState({
    //     make: '',
    //     model: '',
    //     yearFrom: 1500,
    //     yearTo: 3500,
    //     minPrice: 0,
    //     maxPrice: Number.MAX_SAFE_INTEGER
    // });

    // const handleSearchCars = formFilters => {
    //     const filtersSelected = {
    //         ...formFilters,
    //         yearFrom: formFilters.yearFrom > 0 ? formFilters.yearFrom : filters.yearFrom,
    //         yearTo: formFilters.yearTo > 0 ? formFilters.yearTo : filters.yearTo,
    //         minPrice: formFilters.minPrice > 0 ? formFilters.minPrice : filters.minPrice,
    //         maxPrice: formFilters.maxPrice > 0 ? formFilters.maxPrice : filters.maxPrice,
    //         userId
    //     }
    //     setFilters(filtersSelected);
    //     searchCars(filtersSelected);
    // }

    console.log(cars);

    return (
        <div className="my-car-ads-page-wrapper">
            <div className="my-car-ads-cards-container">
                {cars.map(x => {
                    return <CarCard
                        key={x._id}
                        carInfo={x}
                        userId={userId}
                    />
                })}
            </div>
        </div>
    )
};

const mapStateToProps = state => ({
    cars: getCars(state),
    userId: getUserId(state),
});

const mapDispatchToProps = { fetchMyCars };

export default connect(mapStateToProps, mapDispatchToProps)(MyCarAds);
