import { Box, Button, useColorMode } from "@chakra-ui/react";
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
import { RequiredAuth } from "./requiredAuth/RequiredAuth";

function App() {
  // let {colorMode,toggleColorMode}=useColorMode();
  return (
    <div className="App">
      <Sidebar></Sidebar>
      <Box className="body">
       {/* <Button onClick={toggleColorMode}>ggg</Button> */}
        <Routes>
          <Route
            path="/"
            element={
              <RequiredAuth>
                <Home></Home>
              </RequiredAuth>
            }
          ></Route>
          <Route
            path="/all"
            element={
              <RequiredAuth>
                <All></All>
              </RequiredAuth>
            }
          ></Route>
          <Route
            path="/personal"
            element={
              <RequiredAuth>
                <Personal></Personal>
              </RequiredAuth>
            }
          ></Route>
          <Route
            path="/official"
            element={
              <RequiredAuth>
                <Official></Official>
              </RequiredAuth>
            }
          ></Route>
          <Route
            path="/others"
            element={
              <RequiredAuth>
                <Others></Others>
              </RequiredAuth>
            }
          ></Route>
          <Route
            path="/createNew"
            element={
              <RequiredAuth>
                <CreateTodo></CreateTodo>
              </RequiredAuth>
            }
          ></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
        </Routes>
      </Box>
    </div>
  );
}

export default App;
