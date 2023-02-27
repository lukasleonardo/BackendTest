module.exports = {
  // valida cpfs com numeros repetidos
  validateCpf(cpf) {
    // valida caso cpfs com numeros repetidos
    if (
      !cpf ||
      cpf.length != 11 ||
      cpf == "00000000000" ||
      cpf == "11111111111" ||
      cpf == "22222222222" ||
      cpf == "33333333333" ||
      cpf == "44444444444" ||
      cpf == "55555555555" ||
      cpf == "66666666666" ||
      cpf == "77777777777" ||
      cpf == "88888888888" ||
      cpf == "99999999999"
    ) {
      return false;
    }
    //valida por caracteres separadores
    if (cpf.match(/[\s.-]/g) != null) {
      return false;
    }
    // chama função para validar digitos identificadores
    if (validateDv(cpf) == false) return false;

    return true;
  },
};

//valida digitos verificadores
function validateDv(cpf) {
  tamanho = cpf.length - 2;
  numeros = cpf.substring(0, tamanho);
  digitos = cpf.substring(9, 11);
  soma = 0;
  pos = 11;

  for (i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * --pos;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado != digitos.charAt(0)) {
    return false;
  }

  tamanho = tamanho + 1;
  numeros = cpf.substring(0, tamanho);
  soma = 0;
  pos = 12;
  for (i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * --pos;
    if (pos < 2) pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado != digitos.charAt(1)) return false;

  return true;
}
