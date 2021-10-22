function validacaoCpf(cpf){
    
    if(cpf.length != 11){
        window.alert("Digite apenas os 11 digitos do cpf");
        return false;
    }
    else{

        var numeros = cpf.substring(0,9);
        var digitos = cpf.substring(9);

        //VALIDAÇÃO DO PRIMEIRO DIGITO
        var resultado = 0;
        for(var i = 10; i > 1; i--){
            resultado += numeros.charAt(10 - i) * i;
        }
        resultado = (resultado * 10) % 11 == 10 ? 0 : (resultado * 10) % 11; //operador ternário, substitui um if
       
        if(resultado != digitos.charAt(0)){
            return false;
        }

        //VALIDAÇÃO DO SEGUNDO DIGITO
        var resultado = 0;
        for(var j = 11; j > 1; j--){
            resultado += cpf.charAt(11 - j) * j;
        }
        resultado = (resultado * 10) % 11 >= 10? 0 : (resultado * 10) % 11;

        if(resultado != digitos.charAt(1)){
            return false;
        }

        return true;
    }

}

function validar(){
    console.log("javaScript carregado");
    document.getElementById('valido').style.display = "none";
    document.getElementById('invalido').style.display = " none";

    var cpf = document.getElementById('idcpf').value;

    var resultado = validacaoCpf(cpf);

    if(resultado){
        document.getElementById('valido').style.display = "block";
    }
    else{
        document.getElementById('invalido').style.display = "block";
    }
}