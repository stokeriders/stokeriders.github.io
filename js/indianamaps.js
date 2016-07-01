function initMap() {

	//casino

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

	//miller

		var automiller = new google.maps.places.Autocomplete(
		(document.getElementById('autocomplete-miller')), {
			types: ['geocode']
		});

	var millerdiv = document.getElementById('miller-map');
	var miller = {lat: 41.6199104, lng: -87.2700966}

	var millermap = new google.maps.Map(millerdiv, {
		center: miller,
		zoom: 10
	});

	var marker = new google.maps.Marker({
		position: miller,
		map: millermap
	});

	millermap.addListener('center_changed', function() {
		window.setTimeout(function() {
			millermap.panTo(marker.getPosition());
		}, 5000);
	});

	marker.addListener('click', function() {
		millermap.setZoom(15);
		millermap.setCenter(marker.getPosition());
	});

	//lake street

	var autolakes = new google.maps.places.Autocomplete(
		(document.getElementById('autocomplete-lakes')), {
			types: ['geocode']
		});

	var lakesdiv = document.getElementById('lakes-map');
	var lakes = {lat: 41.6188986, lng: -87.2709974}

	var lakesmap = new google.maps.Map(lakesdiv, {
		center: lakes,
		zoom: 10
	});

	var marker = new google.maps.Marker({
		position: lakes,
		map: lakesmap
	});

	lakesmap.addListener('center_changed', function() {
		window.setTimeout(function() {
			lakesmap.panTo(marker.getPosition());
		}, 5000);
	});

	marker.addListener('click', function() {
		lakesmap.setZoom(15);
		lakesmap.setCenter(marker.getPosition());
	});

	// michigan beach

	var automcb = new google.maps.places.Autocomplete(
		(document.getElementById('autocomplete-mcb')), {
			types: ['geocode']
		});

	var mcbdiv = document.getElementById('mcb-map');
	var mcb = {lat: 41.7294029, lng: -86.9271301}

	var mcbmap = new google.maps.Map(mcbdiv, {
		center: mcb,
		zoom: 10
	});

	var marker = new google.maps.Marker({
		position: mcb,
		map: mcbmap
	});

	mcbmap.addListener('center_changed', function() {
		window.setTimeout(function() {
			mcbmap.panTo(marker.getPosition());
		}, 5000);
	});

	marker.addListener('click', function() {
		mcbmap.setZoom(15);
		mcbmap.setCenter(marker.getPosition());
	});

}