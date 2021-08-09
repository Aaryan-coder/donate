import React from 'react'
import Heading from './Heading'
import Home from './Home'
import About from './About'
import Team from './Team'
import Donate from './Donate'
import FAQ from './FAQ'
import Contact from './Contact'
import Image from './Image'
import Body from './Body'
import Find from './Find'
import Admin from './Admin'
import Register from './Register'
import Donation from './Donation'
import Clothes from './Clothes'
import {  BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App(){
  return(
    <Router>
      <div>
      <Heading />
    <Switch>
    <Route path = "/" exact component = {Title} />
    <Route path = "/Home" component = {Home} />
    <Route path = "/About" component = {About} />
    <Route path = "/Team" component = {Team} />
    <Route path = "/Donate" component = {Donate} />
    <Route path = "/FAQ" component = {FAQ} />
    <Route path = "/Contact" component = {Contact} />
    <Route path = "/Find" component = {Find} />
    <Route path = "/Admin" component = {Admin} />
    <Route path = "/Register" component = {Register} />
    <Route path = "/Donation" component = {Donation} />
    <Route path = "/Clothes" component = {Clothes} />

    </Switch>
      </div>
      </Router>
    )
}

function Title(){
  const body = "Your one donation can change the lives of many..."
  return(
    <div>
    <Image />
    <Body body = {body} />
    </div>
    )
}

export default App;