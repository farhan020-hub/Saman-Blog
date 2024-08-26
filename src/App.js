import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import BlogList from "./components/pages/BlogList";
import Blog from "./components/pages/Blog";
import About from "./components/pages/About";
import Landingpage from "./components/pages/Landingpage";
import Contact from "./components/contact/Contact";
import 'flowbite/dist/flowbite.css';
import Footer from "./components/footer/Footer";



function App() {
  return (
    <BrowserRouter>
    <div className="App bg-wheat">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:postId" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
    </div>
  </BrowserRouter>
  );
}

export default App;
