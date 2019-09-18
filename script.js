function calcular(){
    var num = document.getElementById('txtn')
    var dois = document.getElementById('txtu')
       
   
if(num.value.length == 0){
    alert('Valor invalido! tente novamente.')
}else{
    var n = Number(num.value)
    var c = 1
    dois.innerHTML=''
    for(var p = c; p <= 10; p++){
         var item = document.createElement('option')//criando elemento option
         item.text = `${n} x ${p} = ${n*p} `
         item.value =`${c}`//em outras linguagens vai servir para saber qual elemento foi selecionado
         dois.appendChild(item)//Adicionando um elemento filho


    }
}
}