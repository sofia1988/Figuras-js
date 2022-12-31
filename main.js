const botoncalcularperimetrocuadrado = document.getElementById('botoncalcularperimetrocuadrado');
const botoncalcularAreacuadrado = document.getElementById('botoncalcularAreaCuadrado')

const title = document.getElementById('title')

const botoncalcularperimetrotriangulo = document.getElementById('botoncalcularperimetrotriangulo')
const botoncalcularAreatriangulo = document.getElementById('botoncalcularAreatriangulo')


const botoncalculardiametroCirculo = document.getElementById('botoncalculardiametroCirculo')
const botoncalcularperimetrocirculo = document.getElementById('botoncalcularperimetrocirculo')
const botoncalcularAreacirculo = document.getElementById('botoncalcularAreacirculo')





// cuadrado

const perimetroCuadrado =(lado)=> {
   return lado * 4;
}

const areaCuadrado = (lado) => {
     return lado * lado;
 }

const calcularPerimetroCuadrado =()=>{
   const input = document.getElementById("inputCuadrado")
   const value = input.value
   const perimetro = perimetroCuadrado(value)
   title.textContent = perimetro
}


botoncalcularperimetrocuadrado.addEventListener( 'click', () => { 
   calcularPerimetroCuadrado()
})
 

const calcularAreaCuadrado =()=>{
   const input = document.getElementById("inputCuadrado")
   const value = input.value
   const perimetro = areaCuadrado(value)
   title.textContent = perimetro
}


botoncalcularAreacuadrado.addEventListener( 'click', () => { 
   calcularAreaCuadrado()
})
// cuadrado

// triangulo
 

const areaTriangulo = (base ,altura) =>{
   return (base *altura)/2;
 }



const perimetroTriangulo = (lado1 ,lado2, base) =>{
    return lado1 + lado2 + base
}
let lado1;
let lado2;
let base;
 const calcularPerimetroTriangulo = ()=> {
   const input = document.getElementById("inputTriangulo").value
   let numbers = input.split(' ');
   lado1 = parseInt( numbers[0]);
   lado2= parseInt( numbers[1]);
   base = parseInt( numbers[2]);
 
   const perimetro =  perimetroTriangulo(lado1 ,lado2, base)
   title.textContent = perimetro
 }

botoncalcularperimetrotriangulo.addEventListener( 'click', () => { 
    calcularPerimetroTriangulo()
   })

   let base2;
   let altura;
 const calcularAreaTriangulo = ()=> {
   const input = document.getElementById("inputTriangulo").value
   let numbers = input.split(' ');
   base2 = parseInt( numbers[0]);
   altura= parseInt( numbers[1]);
 
 
   const area = areaTriangulo(base2, altura)
   title.textContent = area
 }

 botoncalcularAreatriangulo.addEventListener( 'click', () => { 
   calcularAreaTriangulo()
   })



 
// triangulo

// circulo
const diametroCirculo =(radio)=>{
   return radio * 2;
}
const PI = Math.PI;

const perimetroCirculo =(radio)=>{
   const diametro = diametroCirculo(radio);
   return diametro * PI;
}

const areaCirculo =(radio) =>{
  return (radio * radio ) * PI
}

const calcularDiametroCirculo =()=>{
   const input = document.getElementById("inputCirculo")
   const value = input.value
   const diametro = diametroCirculo(value)
   title.textContent = diametro
  
}


botoncalculardiametroCirculo.addEventListener( 'click', () => { 
   calcularDiametroCirculo()
  
})

const calcularPerimetroCirculo =()=>{
   const input = document.getElementById("inputCirculo")
   const value = input.value
   const perimetro = perimetroCirculo(value)
   title.textContent = perimetro
 
}


botoncalcularperimetrocirculo.addEventListener( 'click', () => { 
   calcularPerimetroCirculo()
})


const calcularAreaCirculo =()=>{
   const input = document.getElementById("inputCirculo")
   const value = input.value
   const area = areaCirculo(value)
   title.textContent = area
}


botoncalcularAreacirculo.addEventListener( 'click', () => { 
   calcularAreaCirculo()
})
// circulo