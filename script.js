const produto = document.getElementById('select')
const codigo = document.getElementById('codigo')
const quantidade = document.getElementById('quant')
const cupom = document.getElementById('cupom')
const preco = document.getElementById('valor-unitario')
const buttonAdd = document.getElementById('add-prod')
const quantProd = document.getElementById('n-prod')
const descProd = document.getElementById('desc-prod')
const precoProd = document.getElementById('preco-prod')
const cancelar = document.getElementById('cancelar')
const finalizar = document.getElementById('finalizar')


function showCodPrice(){
    codigo.innerHTML= produto.value
    setPrice()
   
}


function calcValor(){
    let valorUnitario = preco.innerHTML
    let quantPedida = quantidade.value
    let valorUnitarioToNumber = Number(valorUnitario)
    let quantPedidaToNumber = Number(quantPedida)
    const array = []
    let total = valorUnitarioToNumber * quantPedidaToNumber
   
    return precoProd.innerHTML = `${array.push()}`
}



function geraCodCupom(min, max){
    const codigo = Math.random()*(max-min)+min
    return cupom.value = `VCRLB${Math.floor(codigo)}`
}

buttonAdd.addEventListener('click', function(){
    
    let prodIndex = produto.selectedIndex
    let prodName = produto.options
    
    quantProd.innerHTML += `${quantidade.value} <br/> `
    descProd.innerHTML += `${prodName[prodIndex].text}<br/> `
    calcValor()
})

function totalCompra(){

}



finalizar.addEventListener('click', function(){
    geraCodCupom(10999, 99999)
})

cancelar.addEventListener('click', ()=>{
    quantProd.innerHTML = ''
    descProd.innerHTML =''
    precoProd.innerHTML =''
})

const tabelaPreco = {
    priceHDogSalsicha: 12.00,
    priceHDogLinguica : 13.50,
    priceHamburguer : 12.90,
    priceXBurguer : 15.00,
    priceEggBurguer : 17.50,
    priceRefri : 6.00,
    priceSuco : 8.00,
    priceAguaSGas : 3.00,
    priceAguaCgas : 4.00
    }
    



let usePrice

function setPrice(){
let prodPrice = produto.selectedIndex
if(prodPrice == '0'){
    usePrice = tabelaPreco.priceHDogSalsicha
}else if (prodPrice == '1'){
    usePrice = tabelaPreco.priceHDogLinguica
}else if(prodPrice =='2'){
    usePrice = tabelaPreco.priceHamburguer
}else if(prodPrice == '3'){
    usePrice = tabelaPreco.priceXBurguer
}else if(prodPrice =='4'){
    usePrice = tabelaPreco.priceEggBurguer
}else if(prodPrice =='5'){
    usePrice = tabelaPreco.priceRefri
}else if(prodPrice =='6'){
    usePrice = tabelaPreco.priceSuco
}else if(prodPrice == '7'){
    usePrice = tabelaPreco.priceAguaSGas
}else if(prodPrice == '8'){
    usePrice = tabelaPreco.priceAguaCgas
}else{
    usePrice = ''
}

return preco.innerHTML = `${usePrice.toFixed(2)}`

}
