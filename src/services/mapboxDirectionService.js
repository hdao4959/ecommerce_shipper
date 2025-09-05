import axios from "axios"
import env from "../configs/env"

const getDirections = async (pointA, pointB) => {
  try {
    const response =  await axios.get(`https://api.mapbox.com/directions/v5/mapbox/driving/${pointA.join(',')};${pointB.join(',')}?geometries=geojson&access_token=${env.VITE_MAPBOX_TOKEN}`)
    return response.data
  } catch (error) {
    throw error
  }
}


export default {
  getDirections
}