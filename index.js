
function run(){
    let tagen = document.querySelector('#tagen').value;
    let person = document.querySelector('#person').value;


   
    let withBreakfast = document.querySelector('#essen').checked;
   
    let preis = document.querySelector('#preis');
    preis = (tagen * 50) + (person * 10) + ((withBreakfast * 8)* person);

    withBreakfast == true ? result.innerHTML = `Insgesamt ${preis} €`: result.innerHTML = `Insgesamt ${preis} €`;
};


