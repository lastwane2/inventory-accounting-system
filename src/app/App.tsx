import { BrowserRouter, Route, Routes } from "react-router"
import { Layout } from "./layout"
import { Inventory } from "@/pages/Inventory"
import { Warehouse } from "@/pages/Warehouse"
import { ThemeProvider } from "@mui/material/styles"
import { theme } from "@/shared/config/theme"
import { RegistrationPage } from "@/pages/login"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/warehouse" element={<Inventory/>}/>
          <Route path="/warehouse/:id" element={<Warehouse/>}/>
          <Route path="/signup" element={<RegistrationPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
