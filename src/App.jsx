import { Routes, Route } from "react-router-dom";
import { Home, AboutUs, ContactUs, SignIn } from "./pages";

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