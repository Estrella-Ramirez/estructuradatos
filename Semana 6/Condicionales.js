function viajar(destino) {
    if(destino === "Brasi") {
             console.log("Gire a la derecha");
    } else if(destino === "Argentina") {
             console.log("Gire a la izquierda");
    } else {
             console.log("Nos perdimos");''
    }
  };
  viajar("Brasil");
  viajar("Argentina");

function puedeManejar(edad) {
    if(edad >= 18) {
             console.log( true );
    } 
    console.log( false );
  }
  
  puedeManejar(17);
