import { HashRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/Header";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Categories from "./pages/categories";
import Services from "./pages/services";

function App() {
   return (
      <div className="container py-3">
         <Header />
         <HashRouter>
            <Routes>
               <Route index element={<Home />} />
               <Route path="login" element={<Login />} />
               <Route path="register" element={<Register />} />
               <Route path="categories" element={<Categories />} />
               <Route path="services" element={<Services />} />
            </Routes>
         </HashRouter>
         <Footer />
      </div>
   );
}

export default App;
