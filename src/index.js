import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Header from "./components/Header"
import Home from "./pages/Home"
import Upload from "./pages/Upload"
import './App.css';

function App() {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route component={Upload} path= "/upload" />
        <Route component={Home} path= "/" />
      </Switch>
    </HashRouter>
  );
}

export default App;


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

