import "./App.css";
import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min.js";
import jwtDecode from "jwt-decode";
import { Route, Switch, Redirect } from "react-router-dom";
import http from "./services/httpService";
import { api } from "./config.js";
import Dashboard from "./components/dashboard";
import Jumotron from "./components/common/jumbotron";
import NotFound from "./components/not-found";
import NewPost from "./components/createpost";
import Log from "./components/log";
import Logout from "./components/logout";
import Register from "./components/register";
import NavBar from "./components/navbar";
import ProtectedRoute from "./components/common/protectedRoute";
import PostPage from "./components/PostPage";
import Bkbud from "./pages/bikebuddy_1.jsx";
import BikerList from "./pages/biker_list.jsx";
import HaveBike from "./pages/havebike.jsx";
import StudyOption from "./pages/study_option.jsx";
import Studyinput from "./pages/studyinput.jsx";
import Studyout from "./pages/studyout.jsx";
import Index from "./pages/index.jsx";
import Roommate from "./pages/roommate.jsx";
import Shareroom from "./pages/shareroom.jsx";
import RoomCard from "./components/RoomCard.jsx";
import Roomfinder from "./pages/roomfinderlist.jsx";
import Buy_sell from "./pages/buy_sell.jsx";
import ViewPost from "./pages/Viewpost.jsx";
import CreatePage from "./pages/Create.jsx";
import { AuthContext } from "./Store/Context.jsx";
import { Chat } from "react-bootstrap-icons";
const App = () => {
  const [user, setUser] = useState(null);
  const { setIsSellButtonVisible } = useContext(AuthContext); // Access AuthContext values
  const { sethavebikebtnvisible } = useContext(AuthContext);
  const { sethaveeventbtnvisible } = useContext(AuthContext);
  const { sethaveroombtnvisible } = useContext(AuthContext);
  const location = useLocation();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const jwt = localStorage.getItem("token");
        const user_jwt = jwtDecode(jwt);
        const user = await http.get(`${api.usersEndPoint}${user_jwt._id}`);
        setUser(user.data);
      } catch (ex) {
        // Handle errors if necessary
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    const path = location.pathname;
    setIsSellButtonVisible(
      path === "/sell" || path === "/view/:id" || path === "/buy_sell"
    );
    sethavebikebtnvisible(path === "/bike_buddy" || path === "/have_bike");
    sethaveeventbtnvisible(path === "/studyout" || path === "/studyinput");
    sethaveroombtnvisible(
      path === "/shareroom" || path === "/roomfinderlist"
    );
  }, [location, setIsSellButtonVisible]);

  return (
    <div>
      <NavBar user={user} />
      <Switch>
        <Route path="/users/login" component={Log} />
        <Route path="/users/register" component={Register} />
        <Route path="/users/logout" component={Logout} />
        <Route
          path="/dashboard"
          render={(props) => <Dashboard {...props} user={user} />}
        />
        <Route
          exact
          path="/"
          render={(props) => (
            <Jumotron
              {...props}
              setIsSellButtonVisible={setIsSellButtonVisible}
            />
          )}
        />
        <Route exact path="/bike_buddy" component={Bkbud} />
        <Route exact path="/biker_list" component={BikerList} />
        <Route exact path="/have_bike" component={HaveBike} /> 
        <Route exact path="/study_options" component={StudyOption} />
        <Route exact path="/studyinput" component={Studyinput} />
        <Route exact path="/studyout" component={Studyout} />
        <Route exact path="/roommate" component={Roommate} />
        <Route exact path="/shareroom" component={Shareroom} />
        <Route exact path="/studyout" component={Studyout} />
        <Route exact path="/roomfinderlist" component={Roomfinder} />
        <Route exact path="/buy_sell" component={Buy_sell} />
        <Route exact path="/view/:id" component={ViewPost} />
        <Route path="/sell" component={CreatePage} />
        <Route
          path="/index"
          render={(props) => <Dashboard {...props} user={user} />}
        />
        <Route path="/not-found" component={NotFound} />
        <ProtectedRoute
          path="/new-post"
          render={(props) => <NewPost {...props} user={user} />}
        />
        <Route
          path="/post/:id"
          render={(props) => <PostPage {...props} user={user} />}
        />
        <Redirect from="/users" to="/users/login" />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
};

export default App;
