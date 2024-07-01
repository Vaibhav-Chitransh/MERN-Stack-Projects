import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import {Heading} from './Heading';
import './index';

ReactDOM.render(<>
  <Heading/>
  <Card sname='DARK'/>
  <Card sname='MONEY HEIST'/>
  <Card sname='ALL OF US ARE DEAD'/>
  <Card sname='STRANGER THINGS'/>
  <Card sname='DEATHNOTE'/>
  <Card sname='PEAKY BLINDERS'/>
</>, document.getElementById('root'));