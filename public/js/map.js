mapboxgl.accessToken = mapToken;
// console.log(coordinates);
// console.log(mapToken);
const map = new mapboxgl.Map({
    container: 'map', // container ID
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: listing.geometry.coordinates, // starting position [lng(E), lat(N)]
    zoom: 9 // starting zoom
});


// console.log(coordinates);

// Create a default Marker and add it to the map.
const marker = new mapboxgl.Marker({color: 'red'})
    .setLngLat(listing.geometry.coordinates)  // Listing.geometry.coordinates => lng, lat
    .setPopup(new mapboxgl.Popup({offset: 25}).setHTML(
        `<h4>${listing.title}</h4><p>Exact Location will be provided after booking.</P>`
    ))
    .addTo(map)


//// Working Code !!!
// const popup = new mapboxgl.Popup()
// .setLngLat([12.554709, 55.70651])
// .setHTML("<h1>Hello World!</h1>")
// .addTo(map);