function initMap() {

	var autocasino = new google.maps.places.Autocomplete(
		(document.getElementById('autocomplete-casino')), {
			types: ['geocode']
		});

	var casinodiv = document.getElementById('casino-map');
	var casino = {lat: 41.6882695, lng: -87.5022484}

	var casinomap = new google.maps.Map(casinodiv, {
		center: casino,
		zoom: 10
	});

	var marker = new google.maps.Marker({
		position: casino,
		map: casinomap
	});

	casinomap.addListener('center_changed', function() {
		window.setTimeout(function() {
			casinomap.panTo(marker.getPosition());
		}, 5000);
	});

	marker.addListener('click', function() {
		casinomap.setZoom(15);
		casinomap.setCenter(marker.getPosition());
	});

}