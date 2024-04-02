// Função para codificar uma mensagem usando o código de Vigenère
function codificarVigenere(mensagem: string, chave: string): string {
  // Convertendo a mensagem e a chave para letras maiúsculas
  mensagem = mensagem.toUpperCase();
  chave = chave.toUpperCase();

  let mensagemCodificada = "";

  // Iterando sobre cada caractere da mensagem
  for (let i = 0; i < mensagem.length; i++) {
    // Obtendo o código ASCII do caractere atual da mensagem
    let charCode = mensagem.charCodeAt(i);

    // Verificando se o caractere é uma letra do alfabeto
    if (charCode >= 65 && charCode <= 90) {
      // Obtendo o deslocamento (índice da chave) para este caractere
      let chaveIndex = i % chave.length;
      let deslocamento = chave.charCodeAt(chaveIndex) - 65;

      // Aplicando o deslocamento ao caractere atual e garantindo que permaneça no intervalo de letras maiúsculas
      let novoCharCode = ((charCode - 65 + deslocamento) % 26) + 65;

      // Convertendo o novo código ASCII de volta para uma letra e concatenando à mensagem codificada
      mensagemCodificada += String.fromCharCode(novoCharCode);
    } else {
      // Se o caractere não for uma letra, mantém o caractere original na mensagem codificada
      mensagemCodificada += mensagem[i];
    }
  }

  return mensagemCodificada;
}

function decodificarVigenere(
  mensagemCodificada: string,
  chave: string
): string {
  // Convertendo a mensagem codificada e a chave para letras maiúsculas
  mensagemCodificada = mensagemCodificada.toUpperCase();
  chave = chave.toUpperCase();

  let mensagemDecodificada = "";

  // Iterando sobre cada caractere da mensagem codificada
  for (let i = 0; i < mensagemCodificada.length; i++) {
    // Obtendo o código ASCII do caractere atual da mensagem codificada
    let charCode = mensagemCodificada.charCodeAt(i);

    // Verificando se o caractere é uma letra do alfabeto
    if (charCode >= 65 && charCode <= 90) {
      // Obtendo o deslocamento (índice da chave) para este caractere
      let chaveIndex = i % chave.length;
      let deslocamento = chave.charCodeAt(chaveIndex) - 65;

      // Aplicando o deslocamento inverso ao caractere atual e garantindo que permaneça no intervalo de letras maiúsculas
      let novoCharCode = ((charCode - 65 - deslocamento + 26) % 26) + 65;

      // Convertendo o novo código ASCII de volta para uma letra e concatenando à mensagem decodificada
      mensagemDecodificada += String.fromCharCode(novoCharCode);
    } else {
      // Se o caractere não for uma letra, mantém o caractere original na mensagem decodificada
      mensagemDecodificada += mensagemCodificada[i];
    }
  }

  return mensagemDecodificada;
}

document.addEventListener("DOMContentLoaded", function () {
  let botaoCodificar = document.getElementById(
    "botaoCodificar"
  ) as HTMLButtonElement;
  let botaoDecodificar = document.getElementById(
    "botaoDecodificar"
  ) as HTMLButtonElement;
  let botaoLimpar = document.getElementById("botaoLimpar") as HTMLButtonElement;

  if (botaoCodificar) {
    botaoCodificar.addEventListener("click", function () {
      // Obter os valores da mensagem e da chave
      let mensagemInput = document.getElementById(
        "mensagem"
      ) as HTMLTextAreaElement;
      let chaveInput = document.getElementById("chave") as HTMLInputElement;
      let mensagem = mensagemInput.value;
      let chave = chaveInput.value;

      // Chamar a função de codificação
      let mensagemCodificada = codificarVigenere(mensagem, chave);

      // Exibir o resultado na caixa de texto
      let mensagemCodificadaInput = document.getElementById(
        "mensagemCodificada"
      ) as HTMLInputElement;
      mensagemCodificadaInput.value = mensagemCodificada;
    });
  }

  if (botaoDecodificar) {
    botaoDecodificar.addEventListener("click", function () {
      // Obter os valores da mensagem codificada e da chave
      let mensagemCodificadaInput = document.getElementById(
        "mensagemCodificada"
      ) as HTMLInputElement;
      let chaveInput = document.getElementById("chave") as HTMLInputElement;
      let mensagemCodificada = mensagemCodificadaInput.value;
      let chave = chaveInput.value;

      // Chamar a função de decodificação
      let mensagemDecodificada = decodificarVigenere(mensagemCodificada, chave);

      // Exibir o resultado na caixa de texto
      let mensagemDecodificadaInput = document.getElementById(
        "mensagemDecodificada"
      ) as HTMLInputElement;
      mensagemDecodificadaInput.value = mensagemDecodificada;
    });
  }

  if (botaoLimpar) {
    botaoLimpar.addEventListener("click", function () {
      let chave = document.getElementById("chave") as HTMLInputElement;
      let mensagemvalor = document.getElementById(
        "mensagem"
      ) as HTMLTextAreaElement;
      let mensagemCodificada = document.getElementById(
        "mensagemCodificada"
      ) as HTMLTextAreaElement;
      let mensagemDecodificada = document.getElementById(
        "mensagemDecodificada"
      ) as HTMLTextAreaElement;
      chave.value = "";
      mensagemvalor.value = "";
      mensagemCodificada.value = "";
      mensagemDecodificada.value = "";
    });
  }
});
