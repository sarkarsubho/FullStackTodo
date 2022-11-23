import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Sidebar } from "./components/Sidebar";
import { All } from "./pages/All";
import { CreateTodo } from "./pages/CreateTodo";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Official } from "./pages/Official";
import { Others } from "./pages/Others";
import { Personal } from "./pages/Personal";
import { Register } from "./pages/Register";

function App() {
  return (
    <div className="App">
      <Sidebar></Sidebar>
      <Box className="body">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/all" element={<All></All>}></Route>
          <Route path="/personal" element={<Personal></Personal>}></Route>
          <Route path="/official" element={<Official></Official>}></Route>
          <Route path="/others" element={<Others></Others>}></Route>
          <Route path="/createNew" element={<CreateTodo></CreateTodo>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>

        </Routes>
      </Box>
    </div>
  );
}

export default App;
