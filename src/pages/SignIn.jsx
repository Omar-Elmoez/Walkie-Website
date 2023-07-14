import Header from "../components/headerComp/Header";
import Sign from "../components/signInComp/SignIn";
import Footer from "../components/footerComp/Footer";

export default function SignIn() {
    return (
        <div className="registerBody">
            <Header page='signin' />
            <Sign />
            <Footer />
        </div>
    );
}