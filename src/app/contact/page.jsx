import ContactFrom from "../Pages/ContactPage/ContactFrom";
import ContactHero from "../Pages/ContactPage/ContactHero";
import Section1 from "../Pages/ContactPage/Section1";

const page = () => {
    return (
        <div>
            <ContactHero></ContactHero>
            <Section1></Section1>
            <ContactFrom></ContactFrom>
        </div>
    );
};

export default page;