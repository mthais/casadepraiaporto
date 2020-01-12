$(document).ready(() => {
    $("#formMessage").on("submit", function (e) {
        e.preventDefault();
        const name = $('#name').val();
        const replyto = $('#_replyto').val();
        const message = $('#message').val();

        if (name != "" && replyto != "" && message != "") {
            $("#btnEnviar").val('Aguarde, enviando...');
            $("#btnEnviar").attr('disabled', true);

            $.ajax({
                url: "https://formspree.io/xnqpnwdq",
                method: "POST",
                data: {
                    Nome: name,
                    Email: replyto,
                    Mensagem: message
                },
                dataType: "json",
                success: () => {
                    alert('Enviado com sucesso!');
                    $('#name').val('');
                    $('#_replyto').val('');
                    $('#message').val('');
                    $("#btnEnviar").val("Enviar Mensagem");
                    $("#btnEnviar").removeAttr('disabled');
                }
            });
        } else {
            let aux = '';
            if (name == '')
                aux += ' - Nome\n';
            if (replyto == '')
                aux += ' - Email\n';
            if (message == '')
                aux += ' - Mensagem\n';

            alert(`Preencha todos os campos!\nCampos faltando:\n${aux}`);
        }
    });
});