import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from './context/AuthContext';
import Login from "./pages/Login";
import Account from "./pages/Account";
import Signup from "./pages/Signup";

function App() {
  return (
    <div>  
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element = {<Login />} />
          <Route path="/signup" element = {<Signup />} />
          <Route path="/account" element = {<Account />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
