import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { BASE_URL } from "../globals"
import axios from "axios"

const StarshipPage = () => {
  const [starship, setStarship] = useState()

  let { id } = useParams()

  useEffect(() => {
    const getStarship = async () => {
      const response = await axios.get(`${BASE_URL}/starships/${id}`)
      setStarship(response.data)
    }
    getStarship()
  }, [id])

  return starship ? (
    <div className="detail">
      <h2>Name: {starship.name}</h2>
      <h4>Model: {starship.model}</h4>
      <h4>Class: {starship.starship_class}</h4>
      <h4>Cost: {starship.cost_in_credits}</h4>
      <h4>
        Maximum Atmosphering Speed: {starship.max_atmosphering_speed}
        buzz-lightyears
      </h4>
      <h4>Manufacturer: {starship.manufacturer}</h4>
      <h4>
        <em>Crew Members: {starship.crew}</em>
      </h4>
      <h4>
        <em>Passengers Aboard: {starship.passengers}</em>
      </h4>
      <h4>
        <em>Cargo Capacity: {starship.cargo_capacity}</em>
      </h4>
      <Link to="/starships"> Return to starship list</Link>
    </div>
  ) : (
    <h3>Starship...dysfunction...</h3>
  )
}

export default StarshipPage
