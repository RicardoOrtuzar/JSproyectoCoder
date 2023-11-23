
alert("Sitio para mayores de 18 años!")

let ingresaEdad = parseInt(prompt("Dime tu edad"));

if(ingresaEdad >= 18){
    alert("Puedes ingresar");

    let nombreUsuario = prompt("Ingresa tu nombre");
    let apellidoUsuario = prompt("Ingresa tu Apellido");

    if ((nombreUsuario !== "") && (apellidoUsuario!== "")){
        alert("Nombre: " +nombreUsuario +"\nApellido: " +apellidoUsuario);
    }else{
        alert("Datos mal ingresados, Ingresa Nombre y Apellido");

}
}else{
    alert("No puedes pasar");  
}

//Ciclo while

alert("A continuación escribe los productos que vas a comprar");
alert("Para terminar sólo escibre -> Terminé");

let agregaProd = prompt("Agrega los productos");

while(agregaProd != "Terminé"){
    alert("Estás agregando "+ agregaProd);
    agregaProd = prompt("Agrega otro producto");

    if(agregaProd === "Terminé"){
        alert("Gracias por comprar aquí");
    }else{

    }
}


