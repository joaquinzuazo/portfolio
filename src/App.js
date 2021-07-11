import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  useLocation,
  withRouter
} from "react-router-dom";

import Index from './components/Index'
import MenuNav from './components/menuNav/MenuNav'
import AboutIndex from './components/AboutIndex'
import ProjectsIndex from './components/ProjectsIndex'
import NotFound from './components/notFound/NotFound';
import 'antd/dist/antd.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
      window.scrollTo(0, 0);
  }, [pathname]);
  return props.children
}
const ScrollToTop = withRouter(_ScrollToTop)

function App(){ 
  return (
    <BrowserRouter>
      <MenuNav />
      <div className="App"> 
      <ScrollToTop>
        <Switch>
          <Route exact path="/about">
            <AboutIndex />
          </Route>
          <Route exact path="/projects/:project">
            <ProjectsIndex />
          </Route>
          <Route exact path="/">
            <Index />
          </Route>
          <Route exact path="*" >
            <NotFound />
          </Route>
        </Switch>
      </ScrollToTop>
      </div>
    </BrowserRouter>
  );
}


export default App;
