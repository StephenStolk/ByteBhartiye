import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HomeScreen from "./pages/HomeScreen";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar />
      <HomeScreen />
    </>
  );
};

export default App;
