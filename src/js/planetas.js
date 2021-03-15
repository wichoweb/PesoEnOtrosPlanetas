function mostrarResultado(p,r) {
  let h2 = document.querySelector('#h2-res');
  h2.innerText = p;
  let h4 = document.querySelector('#res');
  h4.innerText = r;
 let container = document.querySelector('.res-container');
 container.style = 'display:flex';

}

// peso marte ejemplo: pT = (peso*3.7)/9.8
const main = () => {
  //obtenemos los datos (Peso de la tierra en kg, planeta a escoger)
  let pesoTierra = document.querySelector("#pesoTierra").value;
  pesoTierra = parseInt(pesoTierra);
  
  const PLANETA = document.querySelector(".list").value;
  
  //comparamos la constante planeta para seleccionar una opcion y calcular su peso
  let imagen = document.querySelector('#imagePlaneta');
  let resultado;
  switch (PLANETA) {
    case "Mercurio":
      resultado = pesoPlanetas(3.7);
      imagen.src = "./images/mercurio.png";
      mostrarResultado(PLANETA, resultado);

      break;
    case "Venus":
      resultado = pesoPlanetas(8.87);
      imagen.src = "./images/venus.png";
      mostrarResultado(PLANETA, resultado);
      break;
    case "Marte":
      resultado = pesoPlanetas(3.711);
      imagen.src = "./images/marte.png";
      mostrarResultado(PLANETA, resultado);
      break;
    case "Jupiter":
      resultado = pesoPlanetas(24.79);
      imagen.src = "./images/jupiter.png";
      mostrarResultado(PLANETA, resultado);
      break;
    case "Saturno":
      resultado = pesoPlanetas(10.44);
      imagen.src = "./images/saturno.png";
      mostrarResultado(PLANETA, resultado);
      break;
    case "Urano":
      resultado = pesoPlanetas(8.87);
      imagen.src = "./images/urano.png";
      mostrarResultado(PLANETA, resultado);
      break;
    case "Neptuno":
      resultado = pesoPlanetas(11.15);
      imagen.src = "./images/neptuno.png";
      mostrarResultado(PLANETA, resultado);
      break;
    case "Pluton":
      resultado = pesoPlanetas(0.62);
      imagen.src = "./images/pluton.png";
      mostrarResultado(PLANETA, resultado);
      break;
      default:
        alert("Coloque un planeta de la lista");
        }
        //calcula el peso en el planeta seleccionado
        function pesoPlanetas(gravedad) {
          let pesoP = 0;
          const gravedadTierra = 9.8;
          pesoP = (pesoTierra * gravedad) / gravedadTierra;
          resultado = pesoP.toFixed(2);
          return resultado;
        }
      };
      
      
      //ejecuta main al dar click en el boton
      const boton = document.querySelector("#button");
boton.addEventListener("click", main);
