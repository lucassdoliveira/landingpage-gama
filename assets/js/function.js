const  form = document.getElementById("form")

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    
    if(!nome || !email)
    {
        var span       = document.createElement('span')
        span.className = 'erro'
        span.innerHTML = 'Revise seu cadastro antes de salvar'
            
        let content = document.getElementById('content')
        content.appendChild(span);

        return;
    }

    let data = {
        nome,
        email
    }

    let convertData = JSON.stringify(data)
    localStorage.setItem('lead', convertData)

    // SUCESSO NO CADASTRO
    let botao = document.getElementById('btn-quero');
    botao.disabled = true;

    var span       = document.createElement('span')
    span.className = 'sucesso'
    span.innerHTML = 'Parabéns, seu email foi registrado'
        
    let content = document.getElementById('content')
    content.appendChild(span);
})