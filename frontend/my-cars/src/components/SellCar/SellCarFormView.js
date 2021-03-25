import React from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { ErrorMessage } from 'formik';

import { years } from '../../constants/globalConstants';
import { carMakes, getMakeModels } from '../../utils/carsData';

const SellCarFormView = ({
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    handleBlur,
    handleSelectCarMake,
    selectedCarMake,
}) => (
    <form className="login-form" autoComplete="off">

        <FormControl variant="outlined" fullWidth>
            <InputLabel >Make</InputLabel>
            <Select
                name="make"
                value={values.make}
                onChange={(e) => {

                    console.log(selectedCarMake);
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
            <InputLabel >Year</InputLabel>
            <Select
                name="year"
                type="number"
                value={values.year}
                onChange={handleChange}
                label="Year"
                error={errors.year && touched.year}
            >
                {years
                    .map(year => (
                        <MenuItem key={year} value={year}>
                            {year}
                        </MenuItem>
                    ))}
            </Select>
            <ErrorMessage name="year" component="div" className="invalid-field-message" />
        </FormControl>

        <div>
            <TextField
                required
                name="price"
                type="number"
                value={values.price}
                onChange={handleChange}
                onBlur={handleBlur}
                label="Price"
                error={errors.price && touched.price}
                margin="normal"
                variant="outlined"
            />
            <ErrorMessage name="price" component="div" className="invalid-field-message" />
        </div>

        <div >
			<TextField
				name="description"
				value={values.description}
				onChange={handleChange}
				label="Description"
				error={errors.description && touched.description}
				margin="normal"
				variant="outlined"
				multiline
				rows={4}
				fullWidth
			/>
			<ErrorMessage name="description" component="div" className="invalid-field-message" />
		</div>

        <div >
            <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
                Sell your car
            </Button>
        </div>
    </form>
);

export default SellCarFormView;
