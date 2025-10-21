import { BrowserRouter, Routes, Route } from "react-router-dom"
import RegisterPage from "./pages/register"
import ForgotPasswordPage from "./pages/forgot-password"
import LoginPage from "./pages/login"
import ResetPasswordPage from "./pages/reset-password"
import VerifyEmailPage from "./pages/verify-email"
import HomePage from "./pages/home"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Private Route */}
          <Route path="/" Component={HomePage}/>
          {/* Public Route */}
          <Route path="/register" Component={RegisterPage}/>
          <Route path="/login" Component={LoginPage}/>
          <Route path="/forgot-password" Component={ForgotPasswordPage}/>
          <Route path="/reset-password" Component={ResetPasswordPage}/>
          <Route path="/verify-email" Component={VerifyEmailPage}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
