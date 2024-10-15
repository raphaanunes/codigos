
function contar(){
    // variaveis 
    var idNumero = document.getElementById('idNumero')
    var idSelect = document.getElementById('idSelect')
    


    //test
    if(idNumero.value.length == 0){
        window.alert('a caixa esta vazia ')
    }else{

        idSelect.innerText = ''
        let n = Number(idNumero.value)

        for(var i = 1;i <= 10; i++){
            let option = document.createElement('option')
            option.text = ` ${n} * ${i} = ${n*i} `
            idSelect.appendChild(option)
        }



    }


    
}