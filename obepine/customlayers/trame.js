
const LAYER_URL = "https://www.geo2france.fr/geoserver/picardie_nature/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=abc_rupture_tvb&outputFormat=application%2Fjson";
const LAYER_ID = "trame";



let layer = new ol.layer.Vector({
    source: new ol.source.Vector({
        url: LAYER_URL,
        format: new ol.format.GeoJSON()
    }),
    style: new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: "rgba(241,156,121,255)",
        width: 6
      }),
      fill: new ol.style.Fill({
        color: "rgba(241,156,121,255)",
      }),
    })
});

let legend = {
  items: [
    {
      geometry: "Polygon",
      styles: [
        new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: "rgba(241,156,121,255)",
            width: 0
          }),
          fill: new ol.style.Fill({
            color: "rgba(241,156,121,255)",
          }),
        })
      ],
    }
  ],
};



var trame = new CustomLayer(LAYER_ID, layer, legend);

