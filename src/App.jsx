import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";

const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const Scan = lazy(() => import("./pages/scan"));
const Education = lazy(() => import("./pages/education"));
const Blog = lazy(() => import("./pages/blog"));
const Contact = lazy(() => import("./pages/contact"));

function App() {
    return (
        <>
            <Navbar />
            <div className="pt-20">
                <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/scan" element={<Scan />} />
                        <Route path="/education" element={<Education />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </Suspense>
            </div>
            <Footer />
        </>
    );
}

export default App;
