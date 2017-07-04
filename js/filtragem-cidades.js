  //Filtro por cidade
  $("#cidade").change(function(){
    let cidade = $("#cidade option:selected").val();
    let estado = $("#estado option:selected").val();
    if(cidade != " "){
      //Utilizando serviço da API:"nominatim.openstreetmap.org/search/"
      $.getJSON('http://nominatim.openstreetmap.org/search/'+cidade+','+estado+'? format=json',
      function(data){
        let lon = parseFloat(data[0].lon);
        let lat = parseFloat(data[0].lat);
        map.setView(new ol.View({
          center: ol.proj.fromLonLat([lon,lat]),
          zoom: 9
        }));
      })
      .fail(function(error) {
        console.log("Error-Status: "+error.status);
        alert("Falha na conexão, tente novamente!");
      });
    }
  });