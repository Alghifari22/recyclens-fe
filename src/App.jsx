import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";
import Organik from "./pages/education/organik";
import Anorganik from "./pages/education/anorganik";
import Berbahaya from "./pages/education/berbahaya";

const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const Scan = lazy(() => import("./pages/scan"));
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
                        <Route path="/organik" element={<Organik />} />
                        <Route path="/anorganik" element={<Anorganik />} />
                        <Route path="/b3" element={<Berbahaya />} />
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
