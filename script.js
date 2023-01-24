const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

function btnEncriptar(){
   const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}

function btnCopiar (){
    navigator.clipboard.writeText(mensagem.value).then(()=>
    {alert('Texto copiado')})
}

 function encriptar (stringEncriptada) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada;

    for (let i = 0; i < matrizCodigo.length; i++)
    {
        if(stringEncriptada.includes(matrizCodigo[i][0])) 
        {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
 }

 function btnDesencriptar(){
    const textoDesencriptado = desencriptar(mensagem.value);
     textArea.value = textoDesencriptado;
     mensagem.value = "";
 }
 
  function desencriptar (stringDesencriptada) {
     let matrizCodigo = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];
     stringDesencriptada = stringDesencriptada;
 
     for (let i = 0; i < matrizCodigo.length; i++)
     {
         if(stringDesencriptada.includes(matrizCodigo[i][0])) 
         {
             stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
         }
     }
     return stringDesencriptada;
  }

  