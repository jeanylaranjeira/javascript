function trocaTema(){
  tema = document.getElementById('tema').value;  
  
  if (tema == "Mario") {
    newFundo = "img/mario.png";
    newFoto = "img/mario2.png";
    altura = "100%";
    right = "-100px";
    bottom = "0px";
    titulo = "Super Mário Brós";
    cor = "#737EF2";
  }
  else if (tema == "Masha"){
    newFundo = "img/masha.jpg";
    newFoto = "img/masha2.png";    
    altura = "85%";
    right = "-100px";
    bottom = "0px";
    titulo = "Masha e o Urso";
    cor = "#822662";
  }
  else{
    newFundo = "img/pjmasks4.jpg";
    newFoto = "img/pjmasks2.png";  
    altura = "85%";
    right = "0px";
    bottom = "-70px";
    titulo = "Os PjMasks";
    cor = "#AE1E22";
  }
  
  document.body.style.backgroundImage = "url(" + newFundo + ")";
  document.getElementById('foto').src = newFoto;
  document.getElementById('foto').style.height = altura;
  document.getElementById('foto').style.right = right;
  document.getElementById('foto').style.bottom = bottom;
  document.getElementById('titulo').value = titulo;
  document.getElementById('titulo').style.color = cor;
}


function calc(valor,marcado){
 
  total = document.getElementById('total').value;
  
  if (marcado){
    total = Number(total) + Number(valor);
  }
  else{
    total = Number(total) - Number(valor);
    
  }
  
  document.getElementById('total').value = total;
}

function alerta(){
  total = document.getElementById('total').value;
  if (total == 0){
    msg = "Você deve selecionar pelo menos 1 elemento da lista";
  }
  else{
    msg = "Obrigada pela Preferêcia.";
  
    if (total >= 1000) {
      total = total * 0.9;
      msg += "Você recebeu um desconto de 10%.";
    }

    msg += "Valor a Pagar R$ " + total;

  }
  
/* usando modal do bootstrap
  document.getElementById('mensagem').value = msg;
  $('#teste').modal('show');
  */
 alert(msg);
}