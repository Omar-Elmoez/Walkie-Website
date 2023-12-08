import { Routes, Route } from "react-router-dom";
import { Home, AboutUs, ContactUs, SignIn } from "./pages";

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/contactUs" element={<ContactUs />} />
                <Route path="/signIn" element={<SignIn />} />
                <Route path="/aboutUs" element={<AboutUs />} />
            </Routes>
        </>
    );
}