import Header from "../components/headerComp/Header";
import Hero from "../components/heroComp/Hero";
import OurData from "../components/ourDataComp/OurData";
import Footer from "../components/footerComp/Footer";


export default function AboutUs() {
    return (
        <>
            <Header page='aboutus' />
            <Hero />
            <OurData />
            <Footer />
        </>
    );
}