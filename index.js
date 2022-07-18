
/*function run(){
    let tagen = document.querySelector('#tagen').value;
    let person = document.querySelector('#person').value;


   
    let withBreakfast = document.querySelector('#essen').checked;
   
    let preis = document.querySelector('#preis');
    preis = (tagen * 50) + (person * 10) + ((withBreakfast * 8)* person);

    withBreakfast == true ? result.innerHTML = `Insgesamt ${preis} €`: result.innerHTML = `Insgesamt ${preis} €`;
};*/

const preisProNacht = 50;
const jedePerson = 10;
const frühstückPreis = 8;

function run() {
  const nacht = document.querySelector("#tagen").value;
  const guest = document.querySelector("#person").value;
  const mitFrühstück = document.querySelector("#essen").checked;

  document.querySelector("#result").innerHTML="Insgesamt: " + calc (nacht,guest,mitFrühstück) + " €";
};

function calc(nacht, guest, mitFrühstück) {
    let preis = (preisProNacht + jedePerson * (guest - 1)) * nacht;
    if (mitFrühstück == true) {
        preis = preis + frühstückPreis * guest * nacht;
    } else {
        preis       
    }
    return preis;
};
