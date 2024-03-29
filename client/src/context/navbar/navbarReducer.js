import {
  SET_MENU,
  SET_LOGIN_FORM,
  SET_REGISTER_FORM,
  SET_MESSAGES_MENU,
} from '../types';

const NavbarReducer = (state, action) => {
  switch (action.type) {
    // open menu
    case SET_MENU:
      return {
        ...state,
        menuOpen: action.payload,
      };
    case SET_MESSAGES_MENU: {
      return {
        ...state,
        messagesOpen: action.payload,
      };
    }
    case SET_LOGIN_FORM:
      return {
        ...state,
        loginFormOpen: action.payload,
      };
    case SET_REGISTER_FORM:
      return {
        ...state,
        registerFormOpen: action.payload,
      };
    default:
      return;
  }
};

export default NavbarReducer;
