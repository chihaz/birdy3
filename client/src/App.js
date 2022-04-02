import React from "react";
import Sidebar from "./feed/Sidebare";
import Feed from "./feed/Feed";
import Widgets from "./feed/Widgets";
import ConnexionPop from "./home/ConnexionPop";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./home/Home"
import Inscription from "./home/Inscription"
import Profile from "./Profile/Profile"
import Message from "./Message/message";


function App() {
  return (
    <Router>
      <Switch>

        <Route path="/" exact>
          <Home/>
        </Route>

        <Route path="/Connexion" exact>
          <ConnexionPop/>
        </Route>
        
        <Route path="/Inscription" exact>
          <Inscription/>
        </Route>


        <Route path="/Profile" exact>
        <div className="app">
            <Sidebar/>
            <Profile />
            <Widgets/>
          </div>
        </Route>

        <Route path="/Acceuil" exact>
          <div className="app">
            {/*twitter est decomposer en 3 parties, BarreLateral fixe, le feed qui fait apparaiytre
            les differents contenue et une barre de widget qui est aussi fixe */ }
            <Sidebar/>
            <Feed />
            {/*<Widgets />*/}
            <Widgets/>
          </div>
        </Route>

          
        <Route path="/Message" exact>
          <div className="app">
              {/*twitter est decomposer en 3 parties, BarreLateral fixe, le feed qui fait apparaiytre
              les differents contenue et une barre de widget qui est aussi fixe */ }
              <Sidebar/>
              <Message/>
              <Widgets/>
          </div>
        </Route>
      </Switch>
    </Router>
   
  );
}

export default App;
