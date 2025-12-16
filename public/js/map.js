
//stored in env file for secutity


  mapboxgl.accessToken = mapToken;

  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v12",
    center:listing.geometry.coordinates,
    zoom: 4,
  });

  // <!-- ✅ ADD THIS CODE RIGHT HERE -->
  const marker = new mapboxgl.Marker({
    color: "red",
    draggable: true
  })
    .setLngLat(listing.geometry.coordinates)
    .setPopup(
      new mapboxgl.Popup({ offset: 25 }).setHTML(
        `<h4>${listing.location}</h4><p>Exact Location provided after booking</p>`
      )
    )
    .addTo(map);

 

