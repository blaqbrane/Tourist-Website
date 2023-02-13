import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Locations from "./Components/Locations";
import Boarding from "./Components/Boarding";
import Container from "./Components/Container";
import Slider from "./Components/Slider";
import Footer from "./Components/Footer";
// import Timeline from "./Components/Timeline";
function App() {
  return (
    <>
     <Navbar/>
     <About/>
     <Locations/>
     <Boarding/>
     <Container/>
     <Slider/>
     {/* <Timeline/> */}
     <Footer/>
    </>
  );
}
export default App;