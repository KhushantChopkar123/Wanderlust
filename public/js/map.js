
//stored in env file for secutity

mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v12",
  center: listing.geometry.coordinates,
  zoom: 4,
});

map.addControl(new mapboxgl.NavigationControl());

const marker = new mapboxgl.Marker({
  color: "red",
})
  .setLngLat(listing.geometry.coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
      `<h5>${listing.location}</h5>
       <p>Exact location provided after booking</p>`
    )
  )
  .addTo(map);

 

