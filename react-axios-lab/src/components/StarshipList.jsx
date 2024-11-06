import { BASE_URL } from "../globals"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const StarshipList = () => {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    const getStarships = async () => {
      const response = await axios.get(`${BASE_URL}/starships`)
      setStarships(response.data.results)
    }
    getStarships()
  }, [])

  let navigate = useNavigate()

  const showStarship = (url) => {
    const id = url.split("/").slice(-2, -1)[0]
    navigate(`/starships/${id}`)
  }

  return (
    <>
      {starships.map((starship) => (
        <div
          key={starship.url}
          onClick={() => showStarship(starship.url)}
          className="card"
        >
          <h3>{starship.name}</h3>
        </div>
      ))}
    </>
  )
}

export default StarshipList
