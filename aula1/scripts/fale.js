const estadosBrasil = [
    { sigla: "AC", nome: "Acre" },
    { sigla: "AL", nome: "Alagoas" },
    { sigla: "AP", nome: "Amapá" },
    { sigla: "AM", nome: "Amazonas" },
    { sigla: "BA", nome: "Bahia" },
    { sigla: "CE", nome: "Ceará" },
    { sigla: "DF", nome: "Distrito Federal" },
    { sigla: "ES", nome: "Espírito Santo" },
    { sigla: "GO", nome: "Goiás" },
    { sigla: "MA", nome: "Maranhão" },
    { sigla: "MT", nome: "Mato Grosso" },
    { sigla: "MS", nome: "Mato Grosso do Sul" },
    { sigla: "MG", nome: "Minas Gerais" },
    { sigla: "PA", nome: "Pará" },
    { sigla: "PB", nome: "Paraíba" },
    { sigla: "PR", nome: "Paraná" },
    { sigla: "PE", nome: "Pernambuco" },
    { sigla: "PI", nome: "Piauí" },
    { sigla: "RJ", nome: "Rio de Janeiro" },
    { sigla: "RN", nome: "Rio Grande do Norte" },
    { sigla: "RS", nome: "Rio Grande do Sul" },
    { sigla: "RO", nome: "Rondônia" },
    { sigla: "RR", nome: "Roraima" },
    { sigla: "SC", nome: "Santa Catarina" },
    { sigla: "SP", nome: "São Paulo" },
    { sigla: "SE", nome: "Sergipe" },
    { sigla: "TO", nome: "Tocantins" }
  ];

  const municipiosAmazonas = [
    "Alvarães",
    "Amaturá",
    "Anamã",
    "Anori",
    "Apuí",
    "Atalaia do Norte",
    "Autazes",
    "Barcelos",
    "Barreirinha",
    "Benjamin Constant",
    "Beruri",
    "Boa Vista do Ramos",
    "Boca do Acre",
    "Borba",
    "Caapiranga",
    "Canutama",
    "Carauari",
    "Careiro",
    "Careiro da Várzea",
    "Coari",
    "Codajás",
    "Eirunepé",
    "Envira",
    "Fonte Boa",
    "Guajará",
    "Humaitá",
    "Ipixuna",
    "Iranduba",
    "Itacoatiara",
    "Itamarati",
    "Itapiranga",
    "Japurá",
    "Juruá",
    "Jutaí",
    "Lábrea",
    "Manacapuru",
    "Manaquiri",
    "Manaus",
    "Manicoré",
    "Maraã",
    "Maués",
    "Nhamundá",
    "Nova Olinda do Norte",
    "Novo Airão",
    "Novo Aripuanã",
    "Parintins",
    "Pauini",
    "Presidente Figueiredo",
    "Rio Preto da Eva",
    "Santa Isabel do Rio Negro",
    "Santo Antônio do Içá",
    "São Gabriel da Cachoeira",
    "São Paulo de Olivença",
    "São Sebastião do Uatumã",
    "Silves",
    "Tabatinga",
    "Tapauá",
    "Tefé",
    "Tonantins",
    "Uarini",
    "Urucará",
    "Urucurituba"
  ];
  

function verSenha() {
    let senha1 = document.getElementById('senha1')
    let senha2 = document.getElementById('senha2')
    let verDesver = document.getElementById('verDesver')

    if (senha1.type == 'password' ||
        senha2.type == 'password') {
        senha1.type = 'text'
        senha2.type = 'text'
        verDesver.value = 'Desver'
    } else {
        senha1.type = 'password'
        senha2.type = 'password'
        verDesver.value = 'Ver'
    }

}

function conferirSenha() {
    let senha1 = document.getElementById('senha1')
    let senha2 = document.getElementById('senha2')
    if (senha1.value !== '') {
        senha2.disabled = false
        if (senha2.value != '') {
            if (senha1.value !== senha2.value) {
                senha1.classList.add('erroSenha')
                senha2.classList.add('erroSenha')
            } else {
                senha1.classList.remove('erroSenha')
                senha2.classList.remove('erroSenha')
            }
        }
    }else{
        senha2.disabled = true;
    }

}

function abrirNaturalidade(){
    let pais = document.getElementById('pais')
    let estado = document.getElementById('estado')

    if (pais.value == 'BR'){
        for (let i =0 ; i< estadosBrasil.length; i++){
            let option = document.createElement("option")
            option.setAttribute("value", estadosBrasil[i].sigla)
            option.textContent = estadosBrasil[i].nome
            estado.appendChild(option)
        }
        estado.hidden = false   
    }else{
        estado.hidden = true
    }
}

function verCidade(){
    let cidade = document.getElementById('cidade')
    let estado = document.getElementById('estado')

    if (estado.value == 'AM'){
        for (let i =0 ; i< municipiosAmazonas.length; i++){
            let option = document.createElement("option")
            option.textContent = municipiosAmazonas[i]
            cidade.appendChild(option)
        }
        cidade.hidden = false   
    }else{
        cidade.hidden = true
    }
}