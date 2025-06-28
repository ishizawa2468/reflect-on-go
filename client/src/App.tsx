import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { Register } from "./components/Register";
import { User } from "./components/User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
