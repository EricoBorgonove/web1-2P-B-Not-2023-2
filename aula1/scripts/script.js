// alert('')
let numero = 0

function dizerOla(){
    // alert('Olá')
    numero ++
    document.getElementById('contador').innerHTML = numero
}
function somar(){
    let numero1= document.querySelector('#numero1').value
    let numero2 = document.querySelector('#numero2').value

    document.querySelector('#resultado').value = Number(numero1)
     + Number(numero2)
}
function validarSenha(){
    const senha = '123'
    const user = 'adm'

    senhaDig = document.getElementById('pass').value
    usuarioDig = document.getElementById('usuario').value
    console.log (typeof senhaDig)
    console.log (usuarioDig)

    if (user === usuarioDig && senha === senhaDig){
        alert ('Acesso Concedido')
    }else{
        alert('Usuario ou Senha Incorretos!')
    }
}







// dizerOla()