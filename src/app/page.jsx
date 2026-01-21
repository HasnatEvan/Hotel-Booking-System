import About from "./Pages/HomePage/About";
import Feedback from "./Pages/HomePage/Feedback";
import HeroSection from "./Pages/HomePage/HeroSection";
import MorePlace from "./Pages/HomePage/MorePlace";
import Section1 from "./Pages/HomePage/Section1";
import Service from "./Pages/HomePage/Service";

const HomePage = () => {
  return (
    <div className="">
      <HeroSection></HeroSection>
      <About></About>
      <MorePlace></MorePlace>
      <Section1></Section1>
      <Feedback></Feedback>
      <Service></Service>
    </div>
  );
};

export default HomePage;
