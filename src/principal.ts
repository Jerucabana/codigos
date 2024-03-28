document.addEventListener("DOMContentLoaded", function () {
    const messageInput = document.getElementById(
      "messageInput"
    ) as HTMLTextAreaElement;
    const encodeButton = document.getElementById(
      "encodeButton"
    ) as HTMLButtonElement;
    let resultado = document.getElementsByClassName("msg_codificada")[0] as HTMLParagraphElement;

    encodeButton.addEventListener("click", function () {
      let mensagem = messageInput.value.toUpperCase();
      mensagem = "F" + mensagem;
      let numeroAleatorio = Math.floor(Math.random() * 25) + 1;
  
      let mensagemCodificada = "";
  
      // Lê a mensagem caractere por caractere e codifica
      for (let i = 0; i < mensagem.length; i++) {
        let codigoAscii = mensagem.charCodeAt(i);
  
        if (codigoAscii >= 65 && codigoAscii <= 90) {
          // Se o caractere é uma letra maiúscula
          let novoCodigoAscii = ((codigoAscii - 65 + numeroAleatorio) % 26) + 65;
          mensagemCodificada += String.fromCharCode(novoCodigoAscii);
        } else {
          mensagemCodificada += mensagem[i]; // Se não for uma letra, mantém o caractere original
        }
      }

      let chave = String.fromCharCode(numeroAleatorio + 64);
      mensagemCodificada += chave;
      let mensagemCodificadaInvertida = mensagemCodificada
        .split("")
        .reverse()
        .join("");
      //mensagemCodificadaInvertida += chave;
      
      if (mensagemCodificadaInvertida.length % 2 == 0) {
        let mensagemReorganizada = "";
  
        // Percorre os caracteres dois a dois
        for (let i = 0; i < mensagemCodificadaInvertida.length; i += 2) {
          mensagemReorganizada +=
            mensagemCodificadaInvertida[i + 1] + mensagemCodificadaInvertida[i];
        }
        resultado.innerText = mensagemReorganizada;
      } else {
        resultado.innerText = mensagemCodificadaInvertida;
      }

    });
  });