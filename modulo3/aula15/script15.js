let cep = document.querySelector('.cep').value

if (cep != "") {

    var validacep = /^[0-9]{8}$/;

    if(validacep.test(cep)) {

        document.querySelector('.rua').value="...";
        document.getElementById('bairro').value="...";
        document.getElementById('cidade').value="...";
        document.getElementById('uf').value="...";

        var script = document.createElement('script');

        script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

        document.body.appendChild(script);
    } 
}