/**
 * Created by Emily on 18/04/2016.
 */
app.run(function(amMoment) {
    amMoment.changeLocale('es');
});

app.directive('fallbackSrc', function () {
    var fallbackSrc = {
        link: function postLink(scope, iElement, iAttrs) {
            iElement.bind('error', function() {
                angular.element(this).attr("src", iAttrs.fallbackSrc);
            });
        }
    }
    return fallbackSrc;
});

app.controller('ComentarioController', function($scope, $http){
  $scope.video = 0;
  
  //Lista comentario
   $scope.coment = [];
   $scope.child = [];
    $scope.url = '/comentario/' + $("#video").val();
    
    $scope.iniciar = function(){
        $http.get($scope.url).success(function(coment){
            $scope.coment = coment.comentarios;
            $scope.child = coment.hijos;
        });
    }
    
    $scope.iniciar();
  
  
  $scope.enviar = function(){
    $scope.url = "/tutorial/comentario";
    if($('#comentario').val().length == 0){
        Materialize.toast('Ingresa un comentario porfavor', 4000);
    }else{
        $http.post($scope.url, {
          'comentario' : $('#comentario').val(),
          'video_id' : $("#video_id").val()
        }).then(function(){

          Materialize.toast('Tu comentario aparecerá cuando lo aprueben', 4000);
          $scope.comentario = "";
          $scope.iniciar();

        }, function(){

          alert("Error :(")

        });
    }
    return false;
  }


  $scope.puntaje = function($id, $punto){
        $http.get("/curso_puntaje/" + $id + "/" + $punto).success(function(response){
            $scope.obtener_puntaje($id);
            Materialize.toast("<i class='fa fa-star'> </i>" + response, 3000);
        });
    }

  $scope.puntajes = 0;
  
  $scope.obtener_puntaje = function($id){
    $http.get("/puntaje/" + $id).success(function(response){
            $scope.puntajes = response;
        });
  }
   
   $scope.obtener_puntaje($("#idcurso").val());
  
});