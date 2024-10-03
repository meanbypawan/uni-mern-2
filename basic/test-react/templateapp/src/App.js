import logo from './logo.svg';
import Header from './components/Header';
import Service from './components/Service';
import NewCar from './components/NewCar';
import FeaturedCar from './components/FeaturedCar';
import Brand from './components/Brand';
import Footer from './components/Footer';
import { Component } from 'react';

export default class App extends Component{
  render(){
    return <>
      <Header/>
      <Service/>
      <NewCar/>
      <FeaturedCar/>
      <Brand/>
      <Footer/>
    </>
  }
}
