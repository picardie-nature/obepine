
const LAYER_URL = "apps/obepine/data/siteObepine_4326.geojson";
const LAYER_ID = "zone";

let layer = new ol.layer.Vector({
    source: new ol.source.Vector({
        url: LAYER_URL,
        format: new ol.format.GeoJSON()
    }),
    style: new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: "rgba(45, 64,89,255)",
        width: 2
      }),
      fill: new ol.style.Fill({
        color: "rgba(0, 0, 0, 0)",
      }),
    })
});



var zone = new CustomLayer(LAYER_ID, layer, legend);

