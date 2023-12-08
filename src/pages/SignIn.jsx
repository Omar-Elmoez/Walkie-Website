import { Header, SignIn as Sign, Footer } from "../components";

export default function SignIn() {
    return (
        <div className="registerBody">
            <Header page='signin' />
            <Sign />
            <Footer />
        </div>
    );
}