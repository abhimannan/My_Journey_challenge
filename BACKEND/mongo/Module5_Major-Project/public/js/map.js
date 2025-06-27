
  
	mapboxgl.accessToken = map_token
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        center:  listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
        zoom: 10 // starting zoom
    });

    console.log(coordinates);

      const marker = new mapboxgl.Marker({ color: 'red'})
        .setLngLat(listing.geometry.coordinates)
        .addTo(map);

        // const marker = new mapboxgl.Marker({ color: 'black', rotation: 45 })
        // .setLngLat(coordinates)
        // .addTo(map);
