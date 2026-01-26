import AboutHero from "../Pages/AboutPage.jsx/AboutHero";
import OurTeam from "../Pages/AboutPage.jsx/OurTeam";
import Section1 from "../Pages/AboutPage.jsx/Section1";
import Section2 from "../Pages/AboutPage.jsx/Section2";
import VideoSection from "../Pages/AboutPage.jsx/VideoSection";
import Feedback from "../Pages/HomePage/Feedback";
import Service from "../Pages/HomePage/Service";


const page = () => {
    return (
        <div>
            <AboutHero></AboutHero>
            <Section1></Section1>
            <Section2></Section2>
            <VideoSection></VideoSection>
            <OurTeam></OurTeam>
            <Service></Service>
            <Feedback></Feedback>
        </div>
    );
};

export default page;