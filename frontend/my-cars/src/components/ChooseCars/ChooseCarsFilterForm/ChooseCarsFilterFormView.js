import React from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { ErrorMessage } from 'formik';

import { years } from '../../../constants/globalConstants';
import { carMakes, getMakeModels } from '../../../utils/carsData';

const ChooseCarsFilterForm = ({
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    handleBlur,
    handleSelectCarMake,
    selectedCarMake,
}) => (
    <form className="choose-car-form" autoComplete="off">

        <FormControl variant="outlined" fullWidth>
            <InputLabel >Make</InputLabel>
            <Select
                name="make"
                value={values.make}
                onChange={(e) => {
                    handleChange(e);
                    handleSelectCarMake(e.target.value);
                }}
                label="Make"
                error={errors.make && touched.make}
            >
                {carMakes
                    .map(make => (
                        <MenuItem key={make} value={make}>
                            {make}
                        </MenuItem>
                    ))}
            </Select>
            <ErrorMessage name="make" component="div" className="invalid-field-message" />
        </FormControl>


        <FormControl variant="outlined" fullWidth>
            <InputLabel >Model</InputLabel>
            <Select
                name="model"
                value={values.model}
                onChange={handleChange}
                label="Model"
                error={errors.model && touched.model}
            >
                {selectedCarMake && getMakeModels(selectedCarMake)
                    .map(model => (
                        <MenuItem key={model} value={model}>
                            {model}
                        </MenuItem>
                    ))}
            </Select>
            <ErrorMessage name="model" component="div" className="invalid-field-message" />
        </FormControl>

        <FormControl variant="outlined" fullWidth>
            <InputLabel >Year From</InputLabel>
            <Select
                name="yearFrom"
                type="number"
                value={values.yearFrom}
                onChange={handleChange}
                label="Year From"
                error={errors.yearFrom && touched.yearFrom}
            >
                {years
                    .map(year => (
                        <MenuItem key={year} value={year}>
                            {year}
                        </MenuItem>
                    ))}
            </Select>
            <ErrorMessage name="yearFrom" component="div" className="invalid-field-message" />
        </FormControl>

        <FormControl variant="outlined" fullWidth>
            <InputLabel >Year To</InputLabel>
            <Select
                name="yearTo"
                type="number"
                value={values.yearTo}
                onChange={handleChange}
                label="Year To"
                error={errors.yearTo && touched.yearTo}
            >
                {years
                    .map(year => (
                        <MenuItem key={year} value={year}>
                            {year}
                        </MenuItem>
                    ))}
            </Select>
            <ErrorMessage name="yearTo" component="div" className="invalid-field-message" />
        </FormControl>

        <div>
            <TextField
                required
                name="minPrice"
                type="number"
                value={values.minPrice}
                onChange={handleChange}
                onBlur={handleBlur}
                label="Price From"
                error={errors.minPrice && touched.minPrice}
                margin="normal"
                variant="outlined"
            />
            <ErrorMessage name="minPrice" component="div" className="invalid-field-message" />
        </div>

        <div>
            <TextField
                required
                name="maxPrice"
                type="number"
                value={values.maxPrice}
                onChange={handleChange}
                onBlur={handleBlur}
                label="Price To"
                error={errors.maxPrice && touched.maxPrice}
                margin="normal"
                variant="outlined"
            />
            <ErrorMessage name="maxPrice" component="div" className="invalid-field-message" />
        </div>

        <div >
            <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
                Search Cars
            </Button>
        </div>
    </form>
);

export default ChooseCarsFilterForm;
