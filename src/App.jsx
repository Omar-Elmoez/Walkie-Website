import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import SignIn from "./pages/SignIn";

export default function App() {


    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/ContactUs" element={<ContactUs />} />
                <Route path="/SignIn" element={<SignIn />} />
                <Route path="/AboutUs" element={<AboutUs />} />
            </Routes>
        </>
    );
}