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
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import ParentFRInput from './components/ParentFRInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverIncrement';
import Counter2 from './components/Counter2';
import HoverIncrement from './components/HoverIncrement';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/UserContext';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import EmployeeList from './EmployeeComponent/EmployeeList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CreateEmployee from './EmployeeComponent/CreateEmployee'
import UpdateEmployee from './EmployeeComponent/UpdateEmployee'



 



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path = "/" exact component ={EmployeeList}></Route>
          <Route path = "/all"  component ={EmployeeList}></Route>
          <Route path = "/add" component ={CreateEmployee}></Route>
          <Route path = "/update/:empid" component ={UpdateEmployee}></Route>

          
        </Switch>
    
     </Router>
      {/* <PostForm></PostForm> */}
      {/* <PostList></PostList> */}
      {/* <UserProvider value = 'Vinayak'>
      <ComponentC></ComponentC>
      </UserProvider> */}
      {/* <Counter2 render ={(count,incrementHandler)=> <ClickCounter count={count} incrementHandler={incrementHandler}></ClickCounter>}></Counter2>
      <Counter2 render ={(count,incrementHandler)=> <HoverCounter count={count} incrementHandler={incrementHandler}></HoverCounter>}></Counter2> */}

      {/* <ClickCounter name ="Vinayak"></ClickCounter>
      <HoverCounter></HoverCounter> */}
      {/* <ErrorBoundary>
      <Hero HeroName = "Batman"></Hero>

      </ErrorBoundary>
      <ErrorBoundary>
      <Hero HeroName = "siperman"></Hero>

      </ErrorBoundary>
      <ErrorBoundary>
      <Hero HeroName = "Joker"></Hero>
      </ErrorBoundary> */}


      {/* <PortalDemo></PortalDemo> */}
      {/* <ParentFRInput></ParentFRInput> */}
      {/* <FocusInput></FocusInput> */}
      {/* <RefsDemo></RefsDemo> */}
      {/* <PureComp></PureComp> */}
      {/* <Table></Table> */}
      {/* <FragmentDemo></FragmentDemo> */}
      {/* <Form></Form> */}
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
