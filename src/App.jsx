import TransportSharingPage from "./components/transport_sharing";
// import ExplorePage from "./components/explore_page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuPage from "./components/menuPage";
import LoginPage from "./components/loginscreen";
function App() {
  return (
   <BrowserRouter>
    <Routes>
      {/* Menu Page */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/menu" element={<MenuPage />} />
      <Route path = "/transport-sharing" element={<TransportSharingPage />}/>
    </Routes>
   </BrowserRouter>
  );
}
    
export default App;