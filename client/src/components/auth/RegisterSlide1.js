import React, { Fragment, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

// Material UI
import {
  FilledInput,
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
  Button,
  Box,
} from '@material-ui/core';

// Material UI Icons
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

// Components
import Loading from '../featback/Loading';

// Context
import AuthContext from '../../context/auth/authContext';
import {
  SET_USERNAME,
  SET_USERNAME_ERR,
  SET_EMAIL,
  SET_EMAIL_ERR,
  SET_PW,
  SET_PW_ERR,
  SET_PW_RPT,
  SET_PW_RPT_ERR,
} from '../../context/types';

const RegisterSlide1 = (props) => {
  // ========= CONTEXT ========
  // Auth Context
  const authContext = useContext(AuthContext);
  const {
    registerStage,
    loading,
    userName,
    userNameErr,
    email,
    emailErr,
    userExists,
    password,
    passwordErr,
    passwordRpt,
    passwordRptErr,
    setShowPw,
    showPw,
    setSlide,
  } = authContext;

  // ======= FUNCTIONS ========

  // Set Slide
  useEffect(() => {
    // if no errors check loading
    if (
      !userNameErr &&
      !emailErr &&
      !passwordErr &&
      !passwordRptErr &&
      userExists.takenName === '' &&
      userExists.takenEmail === ''
    ) {
      // if loading false next slide
      if (!loading) {
        // set slide
        setSlide('next');
      }
    }
    // eslint-disable-next-line
  }, [userNameErr, emailErr, passwordErr, passwordRptErr, userExists, loading]);

  // Handle Mouse Down
  const handlePwMouseDown = (e) => {
    e.preventDefault();
  };

  // Handle PW Button
  const handleShowPw = () => {
    if (showPw) {
      setShowPw(false);
    } else {
      setShowPw(true);
    }
  };

  // ======= MODUL RETURNS ========

  return (
    <Fragment>
      <Fragment>
        <FormControl variant='filled' fullWidth color='primary'>
          <InputLabel
            htmlFor='userName'
            color='primary'
            error={userNameErr || userExists.takenName !== ''}
          >
            Username
          </InputLabel>
          <FilledInput
            id='userName'
            value={userName}
            onFocus={props.onChange(SET_USERNAME)}
            onChange={props.onChange(SET_USERNAME)}
            onBlur={() => props.onBlur(SET_USERNAME_ERR)}
            error={userNameErr || userExists.takenName !== ''}
          />
        </FormControl>
        <FormControl
          variant='filled'
          fullWidth
          color='primary'
          className={props.classes.inputSlide1}
          error={emailErr || userExists.takenEmail !== ''}
        >
          <InputLabel htmlFor='email' color='primary' error={emailErr}>
            Email
          </InputLabel>
          <FilledInput
            id='email'
            value={email}
            type='email'
            onFocus={props.onChange(SET_EMAIL)}
            onChange={props.onChange(SET_EMAIL)}
            onBlur={() => props.onBlur(SET_EMAIL_ERR)}
            error={emailErr || userExists.takenEmail !== ''}
          />
        </FormControl>
        <FormControl
          variant='filled'
          fullWidth
          colors='primary'
          className={props.classes.inputSlide1}
        >
          <InputLabel htmlFor='password' color='primary' error={passwordErr}>
            Password
          </InputLabel>
          <FilledInput
            id='password'
            type={showPw ? 'text' : 'password'}
            value={password}
            onFocus={props.onChange(SET_PW)}
            onChange={props.onChange(SET_PW)}
            onBlur={() => props.onBlur(SET_PW_ERR)}
            error={passwordErr}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleShowPw}
                  onMouseDown={handlePwMouseDown}
                  edge='end'
                >
                  {showPw ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            color='primary'
          />
        </FormControl>
        <FormControl
          variant='filled'
          fullWidth
          colors='primary'
          className={props.classes.input}
        >
          <InputLabel
            htmlFor='passwordRpt'
            color='primary'
            error={passwordRptErr}
          >
            Repeat Password
          </InputLabel>
          <FilledInput
            id='passwordRpt'
            type={showPw ? 'text' : 'password'}
            color='primary'
            value={passwordRpt}
            onFocus={props.onChange(SET_PW_RPT)}
            onChange={props.onChange(SET_PW_RPT)}
            onBlur={() => props.onBlur(SET_PW_RPT_ERR)}
            error={passwordRptErr}
          />
        </FormControl>
        <Box mt={3}>
          <Button
            size='large'
            color='primary'
            variant='contained'
            onClick={() => props.onClick('next')}
            endIcon={<ArrowForwardIcon />}
          >
            Next
          </Button>
        </Box>
      </Fragment>
    </Fragment>
  );
};

RegisterSlide1.propTypes = {
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default RegisterSlide1;
