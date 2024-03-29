document.addEventListener("DOMContentLoaded", function () {
  // Define as constantes

  // Primeiro box para a mensagem.
  const messageInput = document.getElementById(
    "messageInput"
  ) as HTMLTextAreaElement;

  // Degundo box para a mensagem em código.
  const codeInput = document.getElementById("codeInput") as HTMLTextAreaElement;

  // Botão de codificar
  const encodeButton = document.getElementById(
    "encodeButton"
  ) as HTMLButtonElement;

  // Botão de decodificar
  const decodeButton = document.getElementById(
    "decodeButton"
  ) as HTMLButtonElement;

  //Botão de Limpar Tudo
  const limpar = document.getElementById(
    "limparButton"
  ) as HTMLButtonElement;

  // Resultados, um para a mensagem final codificada e outro para a mensagem decodificada
  // Serão exibidas na tela dependendo do que for escolhido.
  let resultadoCodificado = document.getElementsByClassName(
    "msg_codificada"
  )[0] as HTMLParagraphElement;
  let resultadoDecodificado = document.getElementsByClassName(
    "msg_decodificada"
  )[0] as HTMLParagraphElement;

  // Se o botão de codificar for pressionado.
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

    if (mensagemCodificadaInvertida.length % 2 == 0) {
      let mensagemReorganizada = "";
      // Percorre os caracteres dois a dois
      for (let i = 0; i < mensagemCodificadaInvertida.length; i += 2) {
        mensagemReorganizada +=
          mensagemCodificadaInvertida[i + 1] + mensagemCodificadaInvertida[i];
      }
      resultadoCodificado.innerText = mensagemReorganizada;
    } else {
      resultadoCodificado.innerText = mensagemCodificadaInvertida;
    }
  }); //fim da codificação.

  // Se o botão decodificar for pressionado
  decodeButton.addEventListener("click", function () {
    let mensagem = codeInput.value.toUpperCase();
    // Reorganiza a mensagem duas a duas caso tenha número par de letras
    if (mensagem.length % 2 == 0) {
      let mensagemReorganizada = "";
      // Percorre os caracteres dois a dois
      for (let i = 0; i < mensagem.length; i += 2) {
        mensagemReorganizada += mensagem[i + 1] + mensagem[i];
      }
      mensagem = mensagemReorganizada;
    }

    let chave = mensagem.charAt(0);
    mensagem = mensagem.slice(1);
    let codigoAsciiChave = chave.charCodeAt(0) - 64;
    let codigoAsciiChaveNegativo = -codigoAsciiChave;

    resultadoDecodificado.innerText = codigoAsciiChaveNegativo.toString();

    let mensagemDescriptografada = "";

    for (let i = 0; i < mensagem.length; i++) {
      let codigoAscii = mensagem.charCodeAt(i);

      if (codigoAscii >= 65 && codigoAscii <= 90) {
        // Se o caractere é uma letra maiúscula
        let novoCodigoAscii =
          ((codigoAscii - 65 + codigoAsciiChaveNegativo + 26) % 26) + 65;
        mensagemDescriptografada += String.fromCharCode(novoCodigoAscii);
      } else {
        mensagemDescriptografada += mensagem[i]; // Se não for uma letra, mantém o caractere original
      }
    }

    mensagemDescriptografada = mensagemDescriptografada.slice(0, -1);
    mensagem = mensagemDescriptografada.split("").reverse().join("");
    // Exibe a mensagem descriptografada
    resultadoDecodificado.innerText = mensagem;
  });

  limpar.addEventListener("click", function () {
    messageInput.value = "";
    codeInput.value = "";
    resultadoCodificado.innerText = "NULL";
    resultadoDecodificado.innerText = "NULL";
  });
});
