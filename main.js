$('form').on('submit', function (e) {
    e.preventDefault();

    const inputTarefaNova = $('#input-tarefa-nova').val();
    const tarefaNova = $('<li style="display:none"></li>');

    $(`<li>${inputTarefaNova}</li>`).appendTo(tarefaNova);
    $(tarefaNova).appendTo('ul');
    $(tarefaNova).fadeIn(500);
    $('#input-tarefa-nova').val('')

    //fazer a linha na tarefa concluida quando clicada
    $(tarefaNova).click(function(){
        $(this).toggleClass('line-through')
    })
})