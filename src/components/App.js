
import React from 'react';
import Header from './Header';
import Dog from './Dog';


export default function App() {
  return (
    <div>
      <Header/>
      <Dog name='skip' age={6} weight='600 lbs' />
    </div>
  );
}
