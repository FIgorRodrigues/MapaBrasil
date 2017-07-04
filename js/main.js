$(document).ready(function(){
  //Criação do Mapa logo apos a pagina ser carregada
  window.map = new ol.Map({
    target: 'map',
    layers: [ new ol.layer.Tile({
        source: new ol.source.BingMaps({
        imagerySet: 'Road',
        key: 'Avwni4RghF-p3xqZlPFAT6xRIi_smjsXz_FNIgbW9rLqSKtE5ZGAnGa9JPFoa5Zq'
      })
    }),
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([-49.5279966,-15.3611793]),
      zoom: 4,
      minZoom:3,
      maxZoom:18
    }),
    controls:ol.control.defaults().extend([
          new ol.control.ScaleLine(),
          
      ]),
    });
});
