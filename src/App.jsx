import './App.css'
import NavBar from './components/NavBar'
import LandingPage from './components/LandingPage';
import AboutUs from './components/AboutUs';
import CardComponent from './components/CardComponent';
import { Box } from '@chakra-ui/react';
import CardContainer from './components/CardContainer';
import Footer from './components/Footer';

function App() {


  return (
    <>

      <LandingPage />
      <NavBar /> 
      <AboutUs />
      {/* <CardComponent /> */}
      <CardContainer />
      <Footer />
    </>
  )
}

export default App
