//se crean variables con los id del html
let dateN = document.getElementById("f-date") ;
let calculateAge;



//se crea el escuchador
dateN.addEventListener("change",()=> {

    //se pide al usuario colocar el año de nacimiento y se parsea para que sea un entero
    let year = new Date(dateN.value)
    let finalyear = year.getFullYear();
    let Pyear = parseInt(finalyear);

    //se calcula cual es el año actual y se parsea para que sea un entero
    let actualYear = new Date()
    let yearNow = actualYear.getFullYear();
    let pyearnow =parseInt(yearNow)
     calculateAge = pyearnow - Pyear
    
     document.getElementById("calculate").innerHTML = "Su edad Actual es :"+calculateAge;
});


