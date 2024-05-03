// Selecionando elementos e armazenando em variáveis
const form = document.querySelector('form');
const numeroA = document.getElementById('numeroA');
const numeroB = document.getElementById('numeroB');
const successMessage = document.querySelector('.sucess-message');
const errorMessage = document.querySelector('.error-message');

//  função para "escutar" e lidar com a submissão do formulário, executando as funções dentro quando o botão "Calcular" é clicado.
form.addEventListener('submit', function(e) {
    // previne o comportamento padrão de envio do formulário
    e.preventDefault();
    

    // Converte os valores dos campos de entrada para float para garantir de que um número será usado no calculo
    const numberA = parseFloat(numeroA.value);
    const numberB = parseFloat(numeroB.value);

    // Verifica se o número B é maior que o número A
    if (numberB > numberA) {
        // moistra a mensagem de sucesso e esconde a mensagem de erro
        successMessage.textContent = "Formulário válido";
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';
    } else {        
        // mostra a mensagem de erro e esconde a mensagem de sucesso
        errorMessage.textContent = "Formulário inválido";
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }
});
