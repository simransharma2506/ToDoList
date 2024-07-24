import { BrowserRouter,Routes,Route } from "react-router-dom"
import Registration from "./Components/Registration"
const App = () =>{
  return(
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Registration/>}>
      </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;