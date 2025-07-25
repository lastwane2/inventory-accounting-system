import { BrowserRouter, Route, Routes } from "react-router"
import { Layout } from "./layout"
import { Inventory } from "@/pages/Inventory"
import { Warehouse } from "@/pages/Warehouse"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/warehouse" element={<Inventory/>}/>
          <Route path="/warehouse/:id" element={<Warehouse/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
