function ir(){
    var usuarios=["elias","jose"];
    var passwords=[1258,1258];
        for(var i=0;i<10;i++){
    
        if(document.form.password.value==passwords[i] && document.form.login.value==usuarios[i]){
            alert("bienbenido"+" ---> "+usuarios[i]);
            window.location="internet.html.html";
            break;
        } 
          
     }
     if(document.form.password.value!=passwords[i] && document.form.login.value==usuarios[i]){
        alert("ingrese  el campo password correcto")
     
        }
        else if(document.form.login.value!=usuarios[i] && document.form.password.value==passwords[i]){
        alert("ingrese el campo usuario correcto")
     
        } 
        else if(document.form.password.value!=passwords[i] && document.form.login.value!=usuarios[i]){
          alert("ingrese password y usuarios correctos");
   
        }
    }
    function validar(){
      var usuario=document.getElementById("usuario1").value;
      var contraseña=document.getElementById("contraseña1").value;
     if(usuario===""){
       alert("el campo usuario esta  vacio");
       return false;
     }
     else if(contraseña===""){
      alert("el campo password esta vacio");
      return false;
     }
     else if(isNaN(contraseña)){
      alert("el password debe ser numeros");
      return false;
     }
     else if(usuario != "" && contraseña != ""){
      ir();
     }
    }
    function validar_registro(){
      var exprecion;
      var nombre=document.getElementById("nombre").value;
      var usuario=document.getElementById("usuario").value;
      var gmail=document.getElementById("email").value;
      var contraseña=document.getElementById("contraseña").value;
      exprecion=/\w+@\w+\.+[a-z]/;
     if(nombre===""){
      alert("el campo nombre esta vacio");
      return false;
     }
     else if(usuario===""){
       alert("el campo usuario esta  vacio");
       return false;
     }
     else if(gmail===""){
      alert("el campo gmail esta vacio")
      return false;
     }
     else if(!exprecion.test(gmail)){
      alert("escriba de manera correcta el gmail")
      return false;
      }
     else if(contraseña===""){
      alert("el campo password esta vacio");
      return false;
     }
     
     else if(isNaN(contraseña)){
      alert("el password debe ser numeros");
      return false;
     }
     else if(usuario != ""&& contraseña != ""&& nombre!="" && gmail!=""){
      alert("POR  EL MOMENTO NO SE PUEDE  REGISTRAR DEBIO A UNA FALLA EN EL PROGRAMA, MIL DISCULPAS")
     }
    }
    function validar_gmail(){
      var gmail=document.getElementById("email").value;
      var exprecion;
      exprecion=/\w+@\w+\.+[a-z]/;
      if(gmail===""){
      alert("el campo gmail esta vacio")
      return false;
      }
      else if(!exprecion.test(gmail)){
      alert("escriba de manera correcta el gmail")
      return false;
      }
      else if(gmail!=""){
        alert("se le a mandado un mesaje con su usuario y contraseña al email escrito");
        window.location="index.html";
      }
    }