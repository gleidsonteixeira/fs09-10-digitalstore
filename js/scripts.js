

function verificarEmail()
{
    let email_data = email.value.split("@");
    if(email_data[0].length > 4){
        if(email.value.indexOf("@") > 0){
            if(!email_data[1].indexOf(".") > 0){
                email_alert.innerHTML = " (Está faltando o .)";
            }
        }else{
            email_alert.innerHTML = " (Está faltando o @)";
        }
    } else {
        email_alert.innerHTML = " (Email inválido, curto demais)";
    }
}

function verificarSenha()
{
    if(senha.value.length >= 8){
        let temNumero = 0;
        let soLetras = [];
        for(let i = 0; i < senha.value.length; i++){
            if(!isNaN(parseInt(senha.value[i]))){
                temNumero++;
            }else{
                soLetras.push(senha.value[i]);
            }
        }
        if(temNumero > 0){
            let temMauisculo = 0;
            soLetras.forEach(letra => {
                if(letra === letra.toUpperCase()){
                    temMauisculo++;
                }
            });
            if(!temMauisculo > 0){
                senha_alert.innerHTML = " (Tem que ter uma letra Maiuscula)";   
            }
        }else{
            senha_alert.innerHTML = " (Tem que ter um numero)";
        }
    }else{
        senha_alert.innerHTML = " (Senha pequena demais)";
    }
}

function validarFormulario()
{
    event.preventDefault();
    verificarEmail();
    verificarSenha();
}
