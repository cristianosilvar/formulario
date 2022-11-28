var preenchimento = 1
let estados = ['','Acre','Alagoas', 'Amapá','Amazonas', 'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso','Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima',' Santa catarina', 'São Paulo', 'Sergipe','Tocantins']

// A partir do valor do parâmetro a estrutura de decisão analisa se este valor está dentro dos requesitos, retornando o valor 'true' caso esteja e 'false' caso não esteja.

function inptnome(nome) {
  if (nome.length <= 3) {
    return false
  } else {
    return true
  }
}

function inptemail(email) {
  if (email.indexOf('@') == -1 || email.indexOf('.') == -1) {
    return false
  } else {
    return true
  }
}

function inptcpf(cpf) {    
  if(cpf.length == 3 || cpf.length == 7) {
    document.getElementById('cpf').value = cpf += '.'
  } else if (cpf.length == 11) {
    document.getElementById('cpf').value = cpf += '-'
  }
  if (TestaCPF(cpf) == false) {
    return false
  } else {
    return true
  }
}

function inptrg(rg) {
  if(rg.length == 2 || rg.length == 6) {
    document.getElementById('rg').value = rg += '.'
  } else if (rg.length == 10) {
    document.getElementById('rg').value = rg += '-'
  }

  var rg1 = rg.replace('.','')
  var rg2 = rg1.replace('.','')
  var rgNovo = rg2.replace('-','')

  if(/[^\d]/.test(rgNovo)) {
    return 'falseNumero'
  } else {
    if (rgNovo  == "000000000" ||
      rgNovo 	== "111111111" ||
      rgNovo 	== "222222222" ||
      rgNovo 	== "333333333" ||
      rgNovo 	== "444444444" ||
      rgNovo 	== "555555555" ||
      rgNovo 	== "666666666" ||
      rgNovo 	== "777777777" ||
      rgNovo 	== "888888888" ||
      rgNovo 	== "999999999") 
    {
      return 'falseInvalido'
    }
    else if (rgNovo.length <= 8) {
      return 'falseInvalido'
    } else {
      return 'true'
    }
  }   
} 

function inptcidade(cidade) {
  if (cidade.length <= 5) {
    return false
  } else {
    return true
  }
}

function inptestado(estado) {
  if (estado == '') {
    return false
  } else {
    return true
  }
} 

// Realiza os testes para verificar se cada input segue o seu devido requisito

function teste(campo) {
  // Variáveis são declaradas e recebem o valor do input

  let nome = document.getElementById('nome').value
  let email = document.getElementById('email').value
  let cpf = document.getElementById('cpf').value
  let rg = document.getElementById('rg').value
  let cidade = document.getElementById('cidade').value
  let estado = document.getElementById('estado').value

  // Compara o atual valor do parâmetro 'campo' para que seja executada as funções referentes apenas ao campo que foi acionado 

  if (campo == 'Nome') {
    // Executa a função referente a esse campo, passando como valor de parâmetro a variável declarada acima

    if(inptnome(nome) == false) {
      // Caso o valor de retorno da função seja igual 'false' o alerta referente a esse campo será ativo e haverá a revisão para analisar os inputs gerais para desativação do submit do formulário 

      ativarAlerta(campo)
      revisao()
    }
    else {
      // Caso o valor de retorno da função seja diferente de 'false' o alerta referente a esse campo será desativado e haverá a revisão para analisar os inputs gerais para a ativação do submit do formulário 

      desativarAlerta(campo)
      revisao()
    }
  } 
  if (campo == 'Email') {
    if(inptemail(email) == false) {
      ativarAlerta(campo)
      revisao()
    } else {
      desativarAlerta(campo)
      revisao()
    }
  }
  if (campo == 'Cpf') {
    if(inptcpf(cpf) == false) {
      ativarAlerta(campo)
      revisao()
    } else {
      desativarAlerta(campo)
      revisao()
    }
  }
  
  if (campo == 'Rg') {
    if(inptrg(rg) == 'falseNumero') {
      ativarAlerta(campo+'1')
      desativarAlerta(campo+'2')
      revisao()
    } 
    else if (inptrg(rg) == 'falseInvalido') {
      ativarAlerta(campo+'2')
      desativarAlerta(campo+'1')
      revisao()
    } else {
      desativarAlerta(campo+'1')
      desativarAlerta(campo+'2')
      revisao()
    }
  }

  if (campo == 'Cidade') {
    if(inptcidade(cidade) == false) {
      ativarAlerta(campo)
      revisao()
    }
    else {
      desativarAlerta(campo)
      revisao()
    }
  } 
  
  if (campo == 'Estado') {
    if(inptestado(estado) == false) {
      revisao()
    }
    else {
      revisao()
    }
  } 
}

// Revisa todos os campos para ativar ou desativar o botão submit do formulário

function revisao() {
  // Variáveis são declaradas e recebem o valor do input

  let nome = document.getElementById('nome').value
  let email = document.getElementById('email').value
  let cpf = document.getElementById('cpf').value
  let rg = document.getElementById('rg').value
  let cidade = document.getElementById('cidade').value
  let estado = document.getElementById('estado').value

  // Compara se todas as funções dos inputs retornam valor 'true' e ativa o botão submit do formulário

  if (inptnome(nome) == true && 
  inptemail(email) == true &&
  inptcpf(cpf) == true &&
  inptrg(rg) == 'true' &&
  inptcidade(cidade) == true &&
  inptestado(estado) == true) {
    ativarBotao()
  } else {
    // Caso uma ou mais funções retornem outro valor o botão submit do formulário é desativado

    desativarBotao()
  }
}

// Passa o valor 'true' para desativar o botão e 'false' para ativá-lo

function ativarBotao() {
  document.getElementById('botao').disabled = false
}

function desativarBotao() {
  document.getElementById('botao').disabled = true
}

// Através do valor do parâmetro 'campo' o alerta do campo referido é ativado ou desativado

function ativarAlerta(campo) {
  document.getElementById('alerta'+campo).style.display = 'block'
}

function desativarAlerta(campo) {
  document.getElementById('alerta'+campo).style.display = 'none'
}

function enviarForm() {
  // Variáveis são declaradas e recebem o valor do input

  var nome = document.getElementById('nome').value
  var email = document.getElementById('email').value
  var cpf = document.getElementById('cpf').value
  var rg = document.getElementById('rg').value
  var cidade = document.getElementById('cidade').value
  var estado = document.getElementById('estado').value

  // Analisa se nenhum campo está vazio, em seguida cria um pequeno relatório com as informações do atual preenchimento e as exibe no console do navegador

  if (nome.length != 0
  && email.length != 0
  && cpf.length != 0
  && rg.length != 0
  && cidade.length != 0
  && estado != '') {
    console.log(`Preenchimento número ${parseInt(preenchimento)}\nNome: ${nome}\nEmail: ${email}\nCPF: ${cpf}\nRG:${rg}\nCidade: ${cidade}\nEstado: ${estados[estado]}`)
    limpaForm()
    abrirMensagem()
    // Incrementa o valor '1' ao valor da variável 
    preenchimento++
  }
}

// O valor de todos os input é declarado igual a ""

function limpaForm() {
  document.getElementById('nome').value = ""
  document.getElementById('email').value = ""
  document.getElementById('cpf').value = ""
  document.getElementById('rg').value = ""
  document.getElementById('cidade').value = ""
  document.getElementById('estado').value  = ""
}

// Exibe a mensagem de cadastro efetuado

function abrirMensagem() {
  document.getElementById('mensagem').style.display = 'flex'

  setTimeout(function fecharMensagem() {
    document.getElementById('mensagem').style.display = 'none'
  }, 5000);
}

// Fecha a mensagem de cadatro efetuado, caso seja requerido fechar antes de terminar o tempo padrão da animação

function fecharMensagem() {
  document.getElementById('mensagem').style.display = 'none'
}

// Função para testar se o CPF é valido
// Pegue do site DevMedia e com poucas alterações

function TestaCPF(strCPF) {
  var Soma;
  var Resto;
  Soma = 0;

  var cpf1 = strCPF.replace('.','')
  var cpf2 = cpf1.replace('.','')
  var cpfSemMask = cpf2.replace('-','')
  

  if (cpfSemMask  == "00000000000" ||
      cpfSemMask 	== "11111111111" ||
      cpfSemMask 	== "22222222222" ||
      cpfSemMask 	== "33333333333" ||
      cpfSemMask 	== "44444444444" ||
      cpfSemMask 	== "55555555555" ||
      cpfSemMask 	== "66666666666" ||
      cpfSemMask 	== "77777777777" ||
      cpfSemMask 	== "88888888888" ||
      cpfSemMask 	== "99999999999")
  return false;

for (i=1; i<=9; i++) Soma = Soma + parseInt(cpfSemMask.substring(i-1, i)) * (11 - i);
Resto = (Soma * 10) % 11;

  if ((Resto == 10) || (Resto == 11))  Resto = 0;
  if (Resto != parseInt(cpfSemMask.substring(9, 10)) ) return false;

Soma = 0;
  for (i = 1; i <= 10; i++) Soma = Soma + parseInt(cpfSemMask.substring(i-1, i)) * (12 - i);
  Resto = (Soma * 10) % 11;

  if ((Resto == 10) || (Resto == 11))  Resto = 0;
  if (Resto != parseInt(cpfSemMask.substring(10, 11) ) ) return false;
  return true;
}