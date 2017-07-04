      //Carrega todos os Estados no Select de estados
      $.getJSON('https://raw.githubusercontent.com/FIgorRodrigues/Estados-e-Cidades-Brasil/master/Estados-e-Cidades-Brasil.json', 
        function (data){ 
        $.each(data, function (key, val) {
          let options = '<option value="' + val.nome + '">' + val.nome + '</option>';
          $("#estado").append(options);        
        });          
        
        //Carrega todas as cidades no Select de cidades
        $("#estado").change(function () {      
          $("#cidade").empty();
          $("#cidade").append('<option value=" ">Selecione Município</option>'); 
          let str = $("#estado option:selected").val(); 
          //Preenchimento e Filtragem das cidades pelo estado escolhido e zoom no local do estado no mapa. 
          if(str != " "){
          let options_cidades='';  
            $.each(data, function (key, val) {
              if(val.nome == str) {
                $.each(val.cidades, function (key_city, val_city) {
                  options_cidades += '<option value="' + val_city + '">' + val_city + '</option>';
                });             
              }
            });
            $("#cidade").append(options_cidades); 
            filtrarEstados(str);   
          }
          //Volta p estado "Inicial" do Mapa
          else{
            map.setView(new ol.View({
              center: ol.proj.fromLonLat([-49.5279966,-15.3611793]),
              zoom: 4
            }));
          }
        }); 
      });