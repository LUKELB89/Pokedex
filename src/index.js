import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Card from './Card';
import 'tachyons';
import { pokemon } from './pokemon';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Card id={pokemon[0].id} name={pokemon[0].name} type={pokemon[0].type} info={pokemon[0].info}/>
      <Card id={pokemon[1].id} name={pokemon[1].name} type={pokemon[1].type} info={pokemon[1].info}/>
      <Card id={pokemon[2].id} name={pokemon[2].name} type={pokemon[2].type} info={pokemon[2].info}/>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
