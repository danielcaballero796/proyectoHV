

//configuracion de firebase
var config = {
    apiKey: "AIzaSyDvrpfJ5zKAUy8Gt54emxJkZsehkINT9J4",
    authDomain: "my-hv-1b6f7.firebaseapp.com",
    databaseURL: "https://my-hv-1b6f7.firebaseio.com",
    projectId: "my-hv-1b6f7",
    storageBucket: "my-hv-1b6f7.appspot.com",
    messagingSenderId: "1035574146503"
  };
  firebase.initializeApp(config);

//datos del formulario
$("#formcontacto").submit(function (e) {
    e.preventDefault();
    
    //referencia a un nuevo hijo llamado contacto
    var refload = firebase.database().ref().child("contacto")

    //arreglo con la informacion del formulario
    var data = {
        "nombre": $("#nombre").val(),
        "correo": $("#correo").val(),
        "telefono": $("#telefono").val(),
        "fecha": $("#fecha").val(),
        "comentario": $("#comentario").val()
    };

    //envio a la base de datos
    refload.push(data);
    
    //despliega la alerta que indica que fue enviado el mensaje
      swal({
        title: "Enviado!",
        text: "Se ha enviado correctamente el formulario",
        icon: "success",
      }).then(function () {
            refresh();//llama la funcion de limpiar campos
      })

});

$("#btnborrar").on('click',function () {
  refresh();
});



/**
 * Funcion para limpiar los input del formulario
 */
  function refresh(){
    $("#nombre").val(""),
    $("#correo").val(""),
    $("#telefono").val(""),
    $("#fecha").val(""),
    $("#comentario").val("")
  }