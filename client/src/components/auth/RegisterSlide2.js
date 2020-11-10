import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';

// Material UI
import {
  Grid,
  FormControl,
  InputLabel,
  FilledInput,
  Box,
  Button,
  useTheme,
  useMediaQuery,
  TextField,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

// Material Icons
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SendIcon from '@material-ui/icons/Send';

// Constants
import { countries } from '../constants/countries';

// Context
import AuthContext from '../../context/auth/authContext';
import {
  SET_FIRST_NAME,
  SET_FIRST_NAME_ERR,
  SET_LAST_NAME,
  SET_LAST_NAME_ERR,
  SET_NUM,
  SET_NUM_ERR,
  SET_STREET,
  SET_STREET_ERR,
  SET_ZIP,
  SET_ZIP_ERR,
  SET_CITY,
  SET_CITY_ERR,
} from '../../context/types';

const RegisterSlide2 = (props) => {
  // Context
  const authContext = useContext(AuthContext);
  const {
    firstName,
    firstNameErr,
    lastName,
    lastNameErr,
    number,
    numberErr,
    street,
    streetErr,
    zip,
    zipErr,
    city,
    cityErr,
  } = authContext;

  // Theme
  const theme = useTheme();

  // Media Queries
  let sup = useMediaQuery(theme.breakpoints.up('sm'));

  // Country to flag
  const countryToFlag = (isoCode) => {
    return typeof String.fromCodePoint !== 'undefined'
      ? isoCode
          .toUpperCase()
          .replace(/./g, (char) =>
            String.fromCodePoint(char.charCodeAt(0) + 127397)
          )
      : isoCode;
  };

  return (
    <Fragment>
      <Grid container spacing={sup ? 2 : 0}>
        <Grid item sm={6} xs={12}>
          <FormControl variant='filled' fullWidth color='primary'>
            <InputLabel
              htmlFor='firstName'
              color='primary'
              error={firstNameErr}
            >
              First Name
            </InputLabel>
            <FilledInput
              id='firstName'
              value={firstName}
              className={props.classes.radiusRight}
              onFocus={props.onChange(SET_FIRST_NAME)}
              onChange={props.onChange(SET_FIRST_NAME)}
              onBlur={() => props.onBlur(SET_FIRST_NAME_ERR)}
              error={firstNameErr}
            />
          </FormControl>
        </Grid>
        <Grid item sm={6} xs={12}>
          <FormControl variant='filled' fullWidth color='primary'>
            <InputLabel htmlFor='lastName' color='primary' error={lastNameErr}>
              Last Name
            </InputLabel>
            <FilledInput
              id='lastName'
              value={lastName}
              className={props.classes.radiusLeft}
              onFocus={props.onChange(SET_LAST_NAME)}
              onChange={props.onChange(SET_LAST_NAME)}
              onBlur={() => props.onBlur(SET_LAST_NAME_ERR)}
              error={lastNameErr}
            />
          </FormControl>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={sup ? 2 : 0}
        className={props.classes.inputSlide2}
      >
        <Grid item sm={5} xs={12}>
          <Autocomplete
            id='country'
            options={countries}
            classes={props.classes.countries}
            autoHighlight
            getOptionLabel={(option) => option.label}
            renderOption={(option) => (
              <React.Fragment>
                <span>{countryToFlag(option.code)}</span>
                {option.label} ({option.code}) +{option.phone}
              </React.Fragment>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label='Country'
                variant='filled'
                inputProps={{
                  ...params.inputProps,
                  autoComplete: 'new-password', // disable autocomplete and autofill
                }}
              />
            )}
          />
        </Grid>
        <Grid item sm={7} xs={12}>
          <FormControl variant='filled' fullWidth color='primary'>
            <InputLabel htmlFor='number' color='primary' error={numberErr}>
              Phone Number
            </InputLabel>
            <FilledInput
              id='number'
              value={number}
              onFocus={props.onChange(SET_NUM)}
              onChange={props.onChange(SET_NUM)}
              onBlur={() => props.onBlur(SET_NUM_ERR)}
              error={numberErr}
            />
          </FormControl>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={sup ? 2 : 0}
        className={props.classes.inputSlide2}
      >
        <Grid item sm={5} xs={12}>
          <FormControl
            variant='filled'
            fullWidth
            color='primary'
            error={streetErr}
          >
            <InputLabel htmlFor='street' color='primary'>
              Street
            </InputLabel>
            <FilledInput
              id='street'
              value={street}
              onFocus={props.onChange(SET_STREET)}
              onChange={props.onChange(SET_STREET)}
              onBlur={() => props.onBlur(SET_STREET_ERR)}
              error={streetErr}
            />
          </FormControl>
        </Grid>
        <Grid item sm={3} xs={12}>
          <FormControl
            variant='filled'
            fullWidth
            color='primary'
            error={zipErr}
          >
            <InputLabel htmlFor='zip' color='primary'>
              Zip
            </InputLabel>
            <FilledInput
              id='zip'
              value={zip}
              className={props.classes.radiusRight}
              onFocus={props.onChange(SET_ZIP)}
              onChange={props.onChange(SET_ZIP)}
              onBlur={() => props.onBlur(SET_ZIP_ERR)}
              error={zipErr}
            />
          </FormControl>
        </Grid>
        <Grid item sm={4} xs={12}>
          <FormControl variant='filled' fullWidth color='primary'>
            <InputLabel htmlFor='city' color='primary' error={cityErr}>
              City
            </InputLabel>
            <FilledInput
              id='city'
              value={city}
              className={props.classes.radiusLeft}
              onFocus={props.onChange(SET_CITY)}
              onChange={props.onChange(SET_CITY)}
              onBlur={() => props.onBlur(SET_CITY_ERR)}
              error={cityErr}
            />
          </FormControl>
        </Grid>
      </Grid>
      <Box mt={3} flexBasis='end'>
        <Button
          className={props.classes.button}
          startIcon={<ArrowBackIcon />}
          size='large'
          color='default'
          variant='outlined'
          onClick={() => props.onClick('back')}
        >
          Back
        </Button>
        <Button
          size='large'
          color='primary'
          variant='contained'
          onClick={() => props.onClick('next')}
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </Box>
    </Fragment>
  );
};

RegisterSlide2.propTypes = {
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default RegisterSlide2;