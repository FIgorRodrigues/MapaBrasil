//Carrega Latitude e Longitude dos estados e faz a filtragem por estado selecionado
function filtrarEstados(str){
  $.getJSON('https://raw.githubusercontent.com/FIgorRodrigues/JsonLatLongEstados/master/localizacao.json', 
    function(data){
      $.each(data, function(key, val){
        if (str == val.nome) {
        map.setView(new ol.View({
          center: ol.proj.fromLonLat([val.long,val.lat]),
          zoom: 5
         }));
        }
      });
    })
    .fail(function(error) {
        console.log("Error-Status: "+error.status);
        alert("Falha na conexão, tente novamente!");
    });
}
