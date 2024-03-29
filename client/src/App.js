import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SimpleReactLightBox from "simple-react-lightbox";

// Components
import Home from "./components/pages/Home";
import Offers from "./components/pages/Offers";
import Profile from "./components/pages/Profile";
import Search from "./components/pages/Search";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import setAuthToken from "./utils/setAuthToken";
import PrivateRoute from "./components/routing/PrivateRoute";
import LoadUser from "./components/auth/LoadUser";

// Context
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import NavbarState from "./context/navbar/NavbarState";
import QueryState from "./context/query/QueryState";
import ProfileState from "./context/profile/ProfileState";
import BookingState from "./context/booking/BookingState";

// Set Auth Token in Axios
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <AlertState>
      <NavbarState>
        <AuthState>
          <QueryState>
            <ProfileState>
              <BookingState>
                <LoadUser>
                  <SimpleReactLightBox>
                    <Router>
                      <Navbar />
                      <div className="body-wrapper">
                        <Switch>
                          <Route exact path="/" component={Home} />
                          <Route exact path="/offers" component={Offers} />
                          <Route exact path="/search" component={Search} />
                          <PrivateRoute
                            exact
                            path="/profile"
                            component={Profile}
                          />
                        </Switch>
                      </div>
                      <div className="footer-wrapper">
                        <Footer />
                      </div>
                    </Router>
                  </SimpleReactLightBox>
                </LoadUser>
              </BookingState>
            </ProfileState>
          </QueryState>
        </AuthState>
      </NavbarState>
    </AlertState>
  );
}

export default App;
