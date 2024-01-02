import { BrowserRouter, Route, Routes } from "react-router-dom"
import Base from "./components/Base"
import Card from "./components/Card"
import Login from "./components/Login"
import Resume from "./components/Resume"
import Crud from "./components/Crud"
import Default from "./components/Default"


function App() {

  return (
      <>
        <BrowserRouter > 
          <Routes>
            <Route 
              path="/"
              element={<Default />}
            />
            <Route 
              path="/login"
              element={<Login />}
            />
            <Route 
              path="/base"
              element={<Base />}
            />
            <Route 
              path="/card"
              element={<Card />}
            />
            <Route 
              path="/resume"
              element={<Resume />}
            />
            <Route 
              path="/crud"
              element={<Crud />}
            />
          </Routes>
        </BrowserRouter>
      </>
  )
}


export default App


