import {Dashboard,Team,History} from "./views"
import {Routes,Route} from "react-router-dom"
import './App.css'

function App() {

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/history" element={<History/>}/>
      </Routes>
    </div>
  )
}

export default App
