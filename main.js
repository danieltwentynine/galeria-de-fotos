$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown()
    })

    $('#btn-cancelar').click(function(){
        $('form').slideUp()
    })

    $('form').on('submit', function(e){
        e.preventDefault()

        const urlNovaImagem = $('#urlNovaImg').val()
        const novoItem = $('<li style="display: none"></li>')
        $(`<img src="${urlNovaImagem}">`).appendTo(novoItem)
        $(`
            <div class="overlay-img-link">
                <a href="${urlNovaImagem}" target="_blank" title="Ver tamanho real da foto">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(1000)
        $('#urlNovaImg').val('')
    })
})