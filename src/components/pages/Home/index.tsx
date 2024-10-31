import About from "../../AboutUs";
import Accordion from "../../Accordion/Accordion";
import OurContacts from "../../Contacts/Index";
import Footer from "../../Footer";
import FormQuestion from "../../FormQuestions";
import Header from "../../Header/header";
import OurTeam from "../../OurTeam";
import PerfectCouple from "../../PerfectCouple";
import Sneakers from "../../sneakers";

const Home = () => {
    return (
        <div>
            <Header />
            <Sneakers/>
            <About />
            <PerfectCouple/>
            <OurTeam/>
            <Accordion />
            <OurContacts/>
            <FormQuestion />
            <Footer/>
        </div>
    );
}

export default Home;