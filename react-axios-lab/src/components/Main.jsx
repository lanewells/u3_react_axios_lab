import { Route, Routes } from "react-router-dom"
import StarshipList from "./StarshipList"
import StarshipPage from "./StarshipPage"
import Home from "./Home"

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/starships" element={<StarshipList />} />
      <Route path="/starships/:id" element={<StarshipPage />} />
      <Route path="*" element={<h3>Page Not Found!</h3>} />
    </Routes>
  )
}

export default Main
