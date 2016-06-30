 function initMap() {

 	var autocomplete = new google.maps.places.Autocomplete(
 		(document.getElementById('autocomplete')), {
 			types: ['geocode']
 		});

 	// weko map and marker
 	var wekodiv = document.getElementById('weko-map');
 	var weko = {lat: 41.9430471, lng: -86.5720991}

 	var wekomap = new google.maps.Map(wekodiv, {
 		center: weko,
 		zoom: 10
 	});

 	var marker = new google.maps.Marker({
 		position: weko,
 		map: wekomap
 	});

 	wekomap.addListener('center_changed', function() {
 		window.setTimeout(function() {
 			wekomap.panTo(marker.getPosition());
 		}, 5000);
 	});

 	marker.addListener('click', function() {
 		wekomap.setZoom(15);
 		wekomap.setCenter(marker.getPosition());
 	});

 	//warrren map and marker
 	var autowarren = new google.maps.places.Autocomplete(
 		(document.getElementById('autocomplete-warren')), {
 			types: ['geocode']
 		});

 	var warrendiv = document.getElementById('warren-map');
 	var warren = {lat: 41.9035673, lng: -86.6038085}

 	var warrenmap = new google.maps.Map(warrendiv, {
 		center: warren,
 		zoom: 10
 	});

 	var marker = new google.maps.Marker({
 		position: warren,
 		map: warrenmap
 	});

 	warrenmap.addListener('center_changed', function() {
 		window.setTimeout(function() {
 			warrenmap.panTo(marker.getPosition());
 		}, 5000);
 	});

 	marker.addListener('click', function() {
 		warrenmap.setZoom(15);
 		warrenmap.setCenter(marker.getPosition());
 	});
 

 //silverbeach map and marker

 var autosilver = new google.maps.places.Autocomplete(
 	(document.getElementById('autocomplete-silver')), {
 		types: ['geocode']
 	});

 var silverdiv = document.getElementById('silver-map');
 var silver = {lat: 41.9035673, lng: -86.5972425}

 var silvermap = new google.maps.Map(silverdiv, {
 	center: silver,
 	zoom: 10
 });

 var marker = new google.maps.Marker({
 	position: silver,
 	map: silvermap
 });

 silvermap.addListener('center_changed', function() {
 	window.setTimeout(function() {
 		silvermap.panTo(marker.getPosition());
 	}, 5000);
 });

 marker.addListener('click', function() {
 	silvermap.setZoom(15);
 	silvermap.setCenter(marker.getPosition());
 });

 //Tiscornia Park

  var autotiscornia = new google.maps.places.Autocomplete(
 	(document.getElementById('autocomplete-tiscornia')), {
 		types: ['geocode']
 	});

 var tiscorniadiv = document.getElementById('tiscornia-map');
 var tiscornia = {lat: 42.1148612, lng: -86.4874102}

 var tiscorniamap = new google.maps.Map(tiscorniadiv, {
 	center: tiscornia,
 	zoom: 10
 });

 var marker = new google.maps.Marker({
 	position: tiscornia,
 	map: tiscorniamap
 });

 tiscorniamap.addListener('center_changed', function() {
 	window.setTimeout(function() {
 		tiscorniamap.panTo(marker.getPosition());
 	}, 5000);
 });

 marker.addListener('click', function() {
 	tiscorniamap.setZoom(15);
 	tiscorniamap.setCenter(marker.getPosition());
 });

}