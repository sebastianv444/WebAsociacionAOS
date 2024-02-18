const div = document.querySelector(".contenido-secundario"),
        texto = "Un calendario de gatos es una joya visual que combina la organización del tiempo con el irresistible carisma de nuestros amigos felinos. Cada página del calendario está adornada con cautivadoras imágenes de gatos en una variedad de situaciones muy graciosas desde poses cómicas hasta expresiones adorables. Las fotografías capturan la diversidad de razas, colores y comportamientos felinos, creando un viaje mensual a través de la elegancia, la curiosidad y la esencia de estos animales. En definitiva, un calendario de gatos es mucho más que una herramienta práctica; es una celebración diaria de la conexión única entre humanos y estos adorables animales."

function efectoTextTyping(elemento,texto,i = 0){
    elemento.textContent += texto[i]
    
    if(i === texto.length-1) return;

    setTimeout(() => efectoTextTyping(div,texto,i + 1), 50)
}

efectoTextTyping(div,texto)