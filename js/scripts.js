

function verificarEmail()
{
    let email_data = email.value.split("@");
    if(email_data[0].length > 4){
        if(email.value.indexOf("@") > 0){
            if(email_data[1].indexOf(".") > 0){
                alert("Email esta ok");
            }else{
                alert("Está faltando o .");
            }
        }else{
            alert("Está faltando o @");
        }
    } else {
        alert("Email inválido, curto demais")
    }
}

function verificarSenha()
{
    if(senha.value.length >= 8){
        for(let i = 0; i < senha.value.length; i++){
            if(isNaN(parseInt(senha.value[i]))){
                console.log(senha.value[i] +" é letra")
            }else{
                console.log(senha.value[i] +" é numero")
            }
        }
        alert("Senha está ok");
    }else{
        alert("Senha pequena demais");
    }
}

function validarFormulario()
{
    event.preventDefault();
    // verificarEmail();
    verificarSenha();
}
