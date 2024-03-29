import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import clsx from 'clsx';

// Material UI
import {
  Modal,
  Button,
  makeStyles,
  useTheme,
  useMediaQuery,
} from '@material-ui/core';

// Material UI Icons
import CloseIcon from '@material-ui/icons/Close';

// Components
import RentalForm from './RentalForm';
import CarForm from './CarForm';

// Context
import ProfileContext from '../../context/profile/profileContext';
import AlertContext from '../../context/alert/alertContext';

// Define Style
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    outline: 'none',
  },
  cont: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3, 4, 3),
    borderRadius: '10px',
    outline: 'none',
  },
  form: {
    marginTop: theme.spacing(2),
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  button: {
    marginRight: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: '0px',
    top: '10px',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  h3: {
    fontWeight: '600',
    marginTop: theme.spacing(3),
  },
  span: {
    color: theme.palette.primary.main,
  },
  err: {
    color: theme.palette.error.main,
  },
  web: {
    width: 500,
  },
  mobile: {
    width: 350,
  },
  imgButton: {
    backgroundColor: 'rgba(256, 256, 256, .5) !important',
    color: 'black !important',
    borderRadius: '2px !important',
  },
  loadingGif: {
    height: '200px',
    marginBottom: theme.spacing(12),
  },
  successGif: {
    height: '200px',
  },
  errorIcon: {
    height: '100px',
    width: '100px',
    color: theme.palette.error.main,
  },
  message: {
    fontSize: '1.4em',
    textAlign: 'center',
  },
  h4: {
    fontSize: '1.6em',
    fontWeight: '500',
    color: theme.palette.primary.main,
    marginBottom: 0,
  },
  p: {
    fontSize: '1.3em',
    textAlign: 'center',
  },
}));

const FormModal = (props) => {
  // ===== CONTEXT ======
  const profileContext = useContext(ProfileContext);
  const { modal, resetForm } = profileContext;
  const alertContext = useContext(AlertContext);
  const { alerts, clearAlerts } = alertContext;

  // ===== FUNCTIONS ======
  // Handle Close
  const handleClose = async () => {
    resetForm();
    await clearAlerts();
    props.handleModal({ open: false, type: '' });
  };

  // ===== STYLE =====
  // Theme
  const theme = useTheme();

  // Media Queries
  let sup = useMediaQuery(theme.breakpoints.up('sm'));

  // Classes
  const classes = useStyles();

  return (
    <Modal
      open={modal.open}
      onClose={handleClose}
      aria-labelledby='profile-form'
      className={classes.modal}
    >
      <motion.div
        transition={{
          delay: 0.2,
          duration: 0.3,
          type: 'spring',
          damping: 10,
          stiffness: 100,
        }}
        initial={{ y: '100vh' }}
        animate={{ y: 0 }}
        className={classes.modal}
      >
        <div className={clsx(classes.cont, sup ? classes.web : classes.mobile)}>
          <Button className={classes.closeButton} onClick={handleClose}>
            <CloseIcon />
          </Button>
          <h3 className={classes.h3}>
            Add{' '}
            <span className={alerts.length === 0 ? classes.span : classes.err}>
              {modal.type === 'rentals' ? 'Offer' : 'Car'}
            </span>
          </h3>
          {modal.type === 'rentals' ? (
            <RentalForm classes={classes} handleClose={handleClose} />
          ) : (
            <CarForm classes={classes} handleClose={handleClose} />
          )}
        </div>
      </motion.div>
    </Modal>
  );
};

FormModal.propTypes = {
  handleModal: PropTypes.func.isRequired,
};

export default FormModal;
