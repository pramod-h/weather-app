export const WEATHER_QUERY = 
`query {
  getCityByName(name: "Bengaluru") {
    name
    country
    coord {
      lon
      lat
    }
    weather {
      summary {
        title
        description
        icon
      }
      temperature {
        actual
      }
      clouds {
        humidity
      }
      wind {
        deg
        speed
      }
    }
  }
}`