
import {Route, Routes} from "react-router-dom";
import CalenderPage from './pages/CalenderPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import Layout from "./components/Layout";

function App() {


  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/calender' element={<CalenderPage />} />
      </Route>
    </Routes>
  )
}

export default App
