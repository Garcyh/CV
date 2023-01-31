/* Para mostrar solo la seccion que quiero pense en asigar a cada div un id con un numero,
y recorrer todos los div con la siguiente función
*/
function ocultar(unID){
    for(i=1;i<6;i++){
        if (i!=unID){
            document.getElementById(i.toString()).style.display = "none";
        }
    }
}
//Así cada vez que pulse el boton la seccion que quiero ver, oculto las demas solo mostrando la que deseo y no repetir tanto codigo 
document.getElementById("datospPersonales").addEventListener("click",function(){
    document.getElementById("1").style.display = "initial"
    ocultar(1)
})
document.getElementById("introduccion").addEventListener("click",function(){
    document.getElementById("2").style.display = "initial"
    ocultar(2)
})
document.getElementById("formacionAcademica").addEventListener("click",function(){
    document.getElementById("3").style.display = "initial"
    ocultar(3)
})
document.getElementById("conocimientos").addEventListener("click",function(){
    document.getElementById("4").style.display = "initial"
    ocultar(4)
})
document.getElementById("experienciaLaboral").addEventListener("click",function(){
    console.log("El boton funciona")
    document.getElementById("5").style.display = "initial"
    ocultar(5)
})

document.getElementById("Todo").addEventListener("click",function(){
    console.log("El boton funciona")
    document.getElementById("1").style.display = "initial"
    document.getElementById("2").style.display = "initial"
    document.getElementById("3").style.display = "initial"
    document.getElementById("4").style.display = "initial"
    document.getElementById("5").style.display = "initial"
})


//Esta es la forma que logre obtener los datos de del json que proporciona la api
async function fetchPersonaJSON() {
    const response = await fetch("https://randomuser.me/api/");
    const persona = await response.json();
    return persona;
}
fetchPersonaJSON().then(persona => {
    persona; 
    document.getElementById("FotoDePerfil").src = persona.results[0].picture.large;
    document.getElementById("nombreCompleto").innerHTML = persona.results[0].name.first +" "+persona.results[0].name.last;
    document.getElementById("nombre").innerHTML = persona.results[0].name.first;
    document.getElementById("apellido").innerHTML = persona.results[0].name.last;
    document.getElementById("nacimiento").innerHTML = persona.results[0].dob.date;
    document.getElementById("nacionalidad").innerHTML = persona.results[0].nat;
    document.getElementById("mail").innerHTML = persona.results[0].email;
    document.getElementById("tel").innerHTML = persona.results[0].phone;
    console.log(persona);
});



