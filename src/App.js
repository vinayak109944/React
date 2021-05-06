import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import React, { Component } from 'react';
import Message from './components/Message'
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGuest from './components/UserGuest';
import NameList from './components/NameList';
import StyleSheets from './components/StyleSheets';
import Inline from './components/Inline';
import './appstyles.css'
import styles from './appStyle.modules.css'
import Form from './components/Form';




function App() {
  return (
    <div className="App">
      <Form></Form>
     {/* <h1 className='error'>Error</h1>
     <h2 className={styles.su}>Success</h2> */}
      {/* <Inline></Inline> */}
      {/* <StyleSheets primary={true}></StyleSheets> */}
      {/* <NameList></NameList> */}
      {/* <UserGuest></UserGuest> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <EventBind></EventBind> */}
      {/* <Message></Message>  */}
      {/* <Greet name = 'vinayak'></Greet> */}
     {/* <Welcome name='vinay'></Welcome>
      
      <FunctionClick></FunctionClick>
      <ClassClick></ClassClick> */}
      {/*  */}
   {/* 
    <Counter></Counter>
  
   
   <Greet name = 'umesh'></Greet>

   <Hello></Hello> */}

    </div>
  );
}

export default App;
