import { BrowserRouter, Route, Routes } from "react-router"
import { Layout } from "./layout"
import { Inventory } from "@/pages/Inventory"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/warehouse" element={<Inventory/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
