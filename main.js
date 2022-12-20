const botoncalcularperimetrocuadrado = document.getElementById('botoncalcularperimetrocuadrado');
const botoncalcularAreacuadrado = document.getElementById('botoncalcularAreaCuadrado')

const title = document.getElementById('title')

const botoncalcularperimetrotriangulo = document.getElementById('botoncalcularperimetrotriangulo')
const botoncalcularAreaCuadradotriangulo = document.getElementById('botoncalcularAreaCuadradotriangulo')

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
const perimetroTriangulo = (lado1 ,lado2, base) =>{
   return lado1 + lado2 + base
}

const areaTriangulo = (base ,altura) =>{
  return (base *altura)/2;
}



 const calcularPerimetroTriangulo = ()=> {
   const lado1 = document.getElementById("inputTriangulo1")
   const lado2 = document.getElementById("inputTriangulo2")
   const base= document.getElementById("inputTriangulo3")
   const lado11 = parseFloat(lado1.value)
   const lado22 = parseFloat(lado2.value)
   const base11 = parseFloat(base.value)
   
   
   const perimetro =  perimetroTriangulo(lado11 ,lado22, base11)
   title.textContent = perimetro
}
   botoncalcularperimetrotriangulo.addEventListener( 'click', () => { 
   calcularPerimetroTriangulo()
})
   const calcularAreaTriangulo =()=>{
      const lado1 = document.getElementById("inputTriangulo1")
      const lado2 = document.getElementById("inputTriangulo2")
      const base= document.getElementById("inputTriangulo3")
      const lado11 = parseFloat(lado1.value)
      const lado22 = parseFloat(lado2.value)
      const base11 = parseFloat(base.value)

      const altura1 = lado11 +lado22
      const area = areaTriangulo(base11,altura1)
      title.textContent = area
   }
   botoncalcularAreaCuadradotriangulo.addEventListener( 'click', () => { 
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