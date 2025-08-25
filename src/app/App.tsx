import { BrowserRouter, Route, Routes, Navigate } from "react-router"
import { Layout } from "./ui/Layout"
import { Inventory } from "@/pages/Inventory"
import { Warehouse } from "@/pages/Warehouse"
import { ThemeProvider } from "@mui/material/styles"
import { theme } from "@/shared/config"
import { LoginPage, RegistrationPage } from "@/pages/login"
import { PrivateRoute } from "./router/PrivateRoute"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRoute/>}>
          <Route path="/" element={<Navigate to="/user" replace/>}/>
          <Route path="/user" element={<Layout/>}>
            <Route path="/user/warehouse" element={<Inventory/>}/>
            <Route path="/user/warehouse/:id" element={<Warehouse/>}/>
          </Route>
        </Route>
        <Route path="/signup" element={<RegistrationPage/>}/>
        <Route path="/signin" element={<LoginPage/>}/>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
