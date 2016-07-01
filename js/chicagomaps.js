function initMap() {

	//Montrose

		var automontrose = new google.maps.places.Autocomplete(
		(document.getElementById('autocomplete-montrose')), {
			types: ['geocode']
		});

	var montrosediv = document.getElementById('montrose-map');
	var montrose = {lat: 41.9655324, lng: -87.6385693}

	var montrosemap = new google.maps.Map(montrosediv, {
		center: montrose,
		zoom: 10
	});

	var marker = new google.maps.Marker({
		position: montrose,
		map: montrosemap
	});

	montrosemap.addListener('center_changed', function() {
		window.setTimeout(function() {
			montrosemap.panTo(marker.getPosition());
		}, 5000);
	});

	marker.addListener('click', function() {
		montrosemap.setZoom(15);
		montrosemap.setCenter(marker.getPosition());
	});

	//Zion

			var autozion = new google.maps.places.Autocomplete(
		(document.getElementById('autocomplete-zion')), {
			types: ['geocode']
		});

	var ziondiv = document.getElementById('zion-map');
	var zion = {lat: 42.4302502, lng: -87.8168637}

	var zionmap = new google.maps.Map(ziondiv, {
		center: zion,
		zoom: 10
	});

	var marker = new google.maps.Marker({
		position: zion,
		map: zionmap
	});

	zionmap.addListener('center_changed', function() {
		window.setTimeout(function() {
			zionmap.panTo(marker.getPosition());
		}, 5000);
	});

	marker.addListener('click', function() {
		zionmap.setZoom(15);
		zionmap.setCenter(marker.getPosition());
	});

}