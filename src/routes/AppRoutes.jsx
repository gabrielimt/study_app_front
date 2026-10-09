import { BrowserRouter } from "react-router-dom";

import Home from './page/Home'
import Login from './page/Login'

export default function AppRoutes(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}