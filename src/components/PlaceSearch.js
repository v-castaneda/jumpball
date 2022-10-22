async function PlaceSearch() {
  
  const options = {
   method: 'GET',
   headers: {
     accept: 'application/json',
     Authorization: 'fsq3PmzmuPoCRTEmYwOwXmqe12XWqNIHUthUpjUWk4Z08wY='
   }
  };

  let search = 'basketball court'
  let limit = 5
  let lat = 40.665810
  let lon = -74.263960
  let response = await fetch(
    `https://api.foursquare.com/v3/places/search?&query=${search}&limit=${limit}&ll=${lat}%2C${lon}`, 
    options)
  let data = await response.text()
  let parsedData = JSON.parse(data)
  let businesses = parsedData.results

  return businesses

}

export default PlaceSearch