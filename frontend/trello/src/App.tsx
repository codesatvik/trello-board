import { Dashboard } from "./screens/dashboard"
import { Auth } from "./screens/auth"
import { Board } from "./screens/board"
import { BrowserRouter, Routes, Route } from "react-router";


function App() { 
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Auth />} />
        <Route path="/signup" element={ <Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/board/:boardId" element={ <Board />} />
    </Routes>
    </BrowserRouter>
  </div>
}
export default App