import React, { Fragment, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

// Material UI
import { Typography, Button, Box } from '@material-ui/core';

// Material UI Icons
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

// Assets
import ServerErrorSVG from '../../assets/featback/server_error.svg';

// Components
import Success from '../layout/Success';
import Alerts from '../layout/Alerts';

// Context
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';

// ======= MODUL RETURNS ========

const RegisterSlide3 = (props) => {
  // ========= CONTEXT ========
  // Auth Context
  const authContext = useContext(AuthContext);
  const { serverErr } = authContext;
  // Alert Context
  const alertContext = useContext(AlertContext);
  const { setAlert, clearAlerts } = alertContext;

  // ======= FUNCTIONS ========
  useEffect(() => {
    if (serverErr !== undefined) {
      serverErr.forEach((element) => {
        setAlert(element.msg, 'error', 0);
      });
    }
    // eslint-disable-next-line
  }, serverErr);

  // Handle on click
  const handelClick = async () => {
    const alertsCleared = await clearAlerts();
    if (alertsCleared) {
      props.onClick('back');
    }
  };

  return (
    <Fragment>
      {serverErr === undefined ? (
        <Fragment>
          <Success classes={props.classes} />
          <Typography className={props.classes.slide3Message}>
            Welcome on <span className={props.classes.span}>board!</span>
          </Typography>
          <Box mt={4}>
            <Button
              size='large'
              color='primary'
              variant='contained'
              onClick={() => props.onClick('close')}
            >
              Close
            </Button>
          </Box>
        </Fragment>
      ) : (
        <Fragment>
          <img
            src={ServerErrorSVG}
            alt='error'
            className={props.classes.errorIcon}
          />
          <Box mt={2}>
            <Typography className={props.classes.slide3Message}>
              Opps! Looks like something went{' '}
              <span className={props.classes.span}>wrong</span>
            </Typography>
          </Box>
          <Box mt={2} width='100%'>
            <Alerts />
          </Box>
          <Box mt={3} flexBasis='end'>
            <Button
              startIcon={<ArrowBackIcon />}
              size='large'
              color='default'
              variant='outlined'
              onClick={handelClick}
            >
              Back
            </Button>
          </Box>
        </Fragment>
      )}
    </Fragment>
  );
};

RegisterSlide3.propTypes = {
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default RegisterSlide3;
