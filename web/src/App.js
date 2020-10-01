import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import routes from "./routes";
import { renderRoutes } from "react-router-config"
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import * as Yup from 'yup';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

const history = createBrowserHistory();
function App() {
  
  return (
    <div className="App">
      <ToastContainer />
      <Router history={history}>{renderRoutes(routes)}</Router>
      
    </div>
  );
}

export default App;
