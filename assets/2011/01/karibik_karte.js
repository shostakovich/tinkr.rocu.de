/**
 * The dataset holding all data being displayed on the map
 */
var dataSet;
 
/**
 * A dataset encapsulates all data for a route (including markers)
 */
function DataSet(name) {
	this.markers = [];
	this.polylines = [];
	this.name = name;
	this.bounds = new GLatLngBounds();
}
 
/**
 * Add the given marker to a dataset, also adds the marker to the map and extends the dataset's bounds
 */
DataSet.prototype.addMarker = function (marker, map) {
	this.markers.push(marker);
	map.addOverlay(marker);
	this.bounds.extend(marker.getPoint());
}
 
/**
 * Activates the click function on the marker with the given index (zero based)
 */
DataSet.prototype.activateMarker = function (index) {
	if (index < this.markers.length) {
		GEvent.trigger(this.markers[index], 'click');
	}
}
 
/**
 * Add the given polyline to the dataset and the map and extends the dataset's bounds
 */
DataSet.prototype.addPolyline = function (polyline, map) {
	this.polylines.push(polyline);
	var polBounds = polyline.getBounds();
	this.bounds.extend(polBounds.getNorthEast());
	this.bounds.extend(polBounds.getSouthWest());
	map.addOverlay(polyline);
}
 
/**
 * Creates a marker, and returns it
 * Note that the marker is not added to the map
 */
function createMarker(point, name, text, markerType) {
	var baseIcon = new GIcon();
	baseIcon.iconSize=new GSize(32,32);
	baseIcon.shadowSize=new GSize(56,32);
	baseIcon.iconAnchor=new GPoint(16,32); // 10 29 for pushpins
	baseIcon.infoWindowAnchor=new GPoint(16,0);
	var micon = new GIcon(baseIcon, markerType, null, "http://maps.google.com/mapfiles/ms/micons/msmarker.shadow.png");
	if (markerType.indexOf('pushpin') > -1) {
		micon.shadow = "http://maps.google.com/mapfiles/ms/micons/pushpin_shadow.png";
		micon.iconAnchor=new GPoint(10, 29);
	}
	var marker = new GMarker(point, micon);
	if (text != '' && text != 'null') {
		marker.bindInfoWindowHtml(text);
	} else if (name != 'null') {
		marker.bindInfoWindowHtml(name);
	}
	return marker;
}
 
/**
 * Allows registering different onLoad event handlers, see
 * http://www.webreference.com/programming/javascript/onloads/
 */
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
			func();
		}
	}
}
 
addLoadEvent(initializeCaribianDream);

function initializeCaribianDream() {
	// Create basic map into div with given id
	var map = new GMap2(document.getElementById("map"));
	// add zoom buttons
	map.addControl(new GLargeMapControl());
	// make sure the map supports physical map type, too
	map.addMapType(G_PHYSICAL_MAP);
	// add map type switch control
	map.addControl(new GMapTypeControl());
	// add small overview map
	map.addControl(new GOverviewMapControl());
	// initialize map, center at LA at zoom to level 6
	// the values are irrelevant, this call is just to initialize the map.
	map.setCenter(new GLatLng (33.905755787445045, -118.070068359375), 6); 
	// enable zooming by scroll wheel
	map.enableScrollWheelZoom();
	// initialize data, populate the map with the markers and routes

	//map.setMapType(G_SATELLITE_MAP);
	map.setMapType(G_HYBRID_MAP);
	//map.setMapType(G_PHYSICAL_MAP);
	//map.setMapType(G_NORMAL_MAP);
	dataSet = new DataSet('Route');
	//Las Palmas
	dataSet.addMarker(createMarker(new GLatLng(28.1248227, -15.4300065), 'Las Palmas', 'Las Palmas de Gran Canaria, Gran Canaria, Spanien - Start und Ziel unserer TUI Cruises "Mein Schiff" Kreuzfahrt.','http://maps.google.com/mapfiles/ms/micons/grn-pushpin.png'), map);
	//Agadir
	dataSet.addMarker(createMarker(new GLatLng(30.400640254566156, -9.599990844726562), 'Agadir', 'Agadir, Marokko','http://maps.google.com/mapfiles/ms/micons/ylw-pushpin.png'), map);
	//Santa Cruz de Teneriffa
	dataSet.addMarker(createMarker(new GLatLng(28.2915637, -16.6291304), 'Santa Cruz de Teneriffa', 'Santa Cruz de Teneriffa, Teneriffa, Spanien','http://maps.google.com/mapfiles/ms/micons/ylw-pushpin.png'), map);
	//San Sebastian de La Gomera
	dataSet.addMarker(createMarker(new GLatLng(28.0922245, -17.111874), 'San Sebastian de La Gomera', 'San Sebastian de La Gomera, La Gomera, Spanien','http://maps.google.com/mapfiles/ms/micons/ylw-pushpin.png'), map);
	//Arrecife
	dataSet.addMarker(createMarker(new GLatLng(28.9595062, -13.5476012), 'Arrecife', 'Arrecife, Lanzarote, Spanien','http://maps.google.com/mapfiles/ms/micons/ylw-pushpin.png'), map);
	dataSet.addPolyline(new GPolyline.fromEncoded({
		color: "#ff0400",
		weight: 5,
		opacity: 1,
		points: "ynvjDvjb}Ahi@`@jE?dEa@nGoB`FaDtQyQ~CsHpBuHvBkHbAkHl@_JgLsmGcN{aCi]ewBccAslCujA{rBmtjEcobGu{cBygvCwq_@ixv@ktP}re@coEidP}uB_bO}nRgbjAolFinc@msCsia@eo^aqaGioNk`~C",
		levels: "P@DBGCEB@IAEJFHFKLJIOIFHKFIP",
		zoomFactor: 2,
		numLevels: 18
	}), map);
	dataSet.addPolyline(new GPolyline.fromEncoded({
		color: "#ff0000",
		weight: 5,
		opacity: 1,
		points: "_duxDzsyy@xeRj_bHt{Ld`dChsChnc@~iGrwg@vwNff}@rzZpknArweAps{CxbpCt_wGzegArkgEza@x`CpFzs@vCbb@`Bf\\fC~M`ApCbBxC~NjK",
		levels: "PIKHINJKKGF@BFCAEP",
		zoomFactor: 2,
		numLevels: 18
	}), map);
	dataSet.addPolyline(new GPolyline.fromEncoded({
		color: "#ff0000",
		weight: 5,
		opacity: 1,
		points: "mpylDb}abBdkEmeEdrCadCh_C_fBz{EoyClnBucAdpAe_@frBqVhnAfCznEnTloI|gArdK`dCj~P~zKhlRxwQ~jJhdPdiB`iGh]puEdNngJi]hkS}d@xiKicAh}LyeDj`RsqFdzRcqD~bIo}@zaCg_@nr@in@xv@y{AxtA_qDrlCgp@rVm[fCoY?uUmM",
		levels: "PFEHFFKFHFMIJINHFJGFLGHEJEGEHEGEP",
		zoomFactor: 2,
		numLevels: 18
	}), map);
	dataSet.addPolyline(new GPolyline.fromEncoded({
		color: "#ff1500",
		weight: 5,
		opacity: 1,
		points: "kvkjD~~lgBh]qU|PwXfLsWvCsVvCia@{@yg@yB_]}Q{tAc`@q_BmZa{@_c@mq@as@_]wf@wIcq@cAeq@fCauAbOww@jSoc_@~lEqqNha@oaFqGu{Dor@ecE_fBwfCm}A{wF{wFg_Gq|HydDkvIoyIkgUg{H}vXmuGev_@gyAumIe{@wmIkfCk_o@yoBkvjMqU_bOqUc`Ess@}uGqd@uaBe{@_fBal@gn@ss@ia@}mAwX}kBa]mxJkdB",
		levels: "PEFDHDFDIDFHEKDEGFHKGIFMGIBKHBNGJGLFHFKEHDBP",
		zoomFactor: 2,
		numLevels: 18
	}), map);
	dataSet.addPolyline(new GPolyline.fromEncoded({
		color: "#fc0000",
		weight: 5,
		opacity: 1,
		points: "eoxoD`orqAl|JtAnsBdPfwBre@tqAdn@|mA`{@jw@b{@bl@|gAhYflAzo@n`GhY~qIrbCnvoAxQvfFhYhoF|o@r|Hzo@~jFtSf{Avb@~eBhj@hjBx`BvfFtbCfzGtdDlzHb}BrsFpfCzfGzqBvwElpOxl[vjkAblhBzfAdwBhn@~eBf]j}AvUzrBlH|_DxBtgK",
		levels: "PHFJEFHFLGHGDJFCHECLFC@CHJFKEFHEP",
		zoomFactor: 2,
		numLevels: 18
	}), map);

	// center and zoom map
	map.setCenter(dataSet.bounds.getCenter(), map.getBoundsZoomLevel(dataSet.bounds));

}

