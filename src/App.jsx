

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Home from "./pages/Home";
import HotelList from "./pages/HotelList";
import HotelDetails from "./pages/HotelDetails";
import Booking from "./pages/Booking";
import UserProfile from "./pages/UserProfile";
import About from "./pages/About";
import Contact from "./pages/Contact";

import "./styles.css";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>

      <AuthProvider>
        
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hotels" element={<HotelList />} />
            <Route path="/hotels/:hotelId" element={<HotelDetails />} />
            <Route path="/hotels/:hotelId/booking" element={<Booking />} />
            <Route path="/user" element={<UserProfile />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    
  </QueryClientProvider>
);

export default App;
