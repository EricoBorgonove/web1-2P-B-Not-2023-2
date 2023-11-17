const frasesApaixonantes = [
    "Você é a razão do meu sorriso todos os dias.",
    "Ao seu lado, cada momento se torna especial.",
    "Você transforma dias comuns em momentos mágicos.",
    "Meu amor por você cresce mais e mais a cada dia.",
    "Estar com você é como um sonho do qual nunca quero acordar.",
    "Você é meu porto seguro em qualquer tempestade.",
    "Seu sorriso é o sol que ilumina minha vida.",
    "Em seus braços, encontro a paz que sempre procurei.",
    "Você é a melodia mais doce no concerto da minha vida.",
    "Cada estrela no céu reflete a luz do nosso amor.",
    "Seu amor é a chama que aquece meu coração.",
    "Com você, cada segundo é um precioso tesouro.",
    "Você é o sonho que se tornou realidade.",
    "Minha vida ganhou cor desde que você chegou.",
    "Você é a poesia mais bela que o destino escreveu para mim.",
    "Seu amor me dá forças para enfrentar qualquer desafio.",
    "Cada dia ao seu lado é um capítulo feliz na minha história.",
    "Seu toque é a cura para todas as minhas tristezas.",
    "Você é a estrela que guia meu caminho.",
    "Com você, cada momento é uma aventura apaixonante.",
    "Nossos corações dançam ao ritmo do amor eterno.",
    "Você colore os meus dias com as cores do arco-íris.",
    "Seu beijo é o doce sabor da paixão.",
    "Sua presença transforma o ordinário em extraordinário.",
    "Cada risada sua é uma melodia que encanta meu coração.",
    "Juntos, somos mais fortes, mais felizes, mais completos.",
    "Seu olhar é um convite para uma viagem ao paraíso.",
    "Sua voz é a trilha sonora dos meus sonhos mais doces.",
    "Em seus olhos, encontro o reflexo da minha alma.",
    "Seu carinho é a brisa suave em um dia de verão.",
    "Você é o encontro perfeito entre o sonho e a realidade.",
    "Nossa história é a mais bela já contada.",
    "Você é a inspiração de todos os meus versos de amor.",
    "Cada momento ao seu lado é um presente que a vida me deu.",
    "Seu sorriso tem o poder de iluminar os meus dias mais sombrios.",
    "Você é o abraço que encaixa perfeitamente em mim.",
    "Em você, encontrei o amor que sempre sonhei.",
    "Nossa conexão é a magia mais pura que existe.",
    "Você é a paz que meu coração sempre buscou.",
    "Cada palavra sua é uma carícia na minha alma.",
    "Nosso amor é uma viagem sem fim pelo universo da paixão.",
    "Você é a peça que completa o quebra-cabeça do meu coração.",
    "Seu amor é o farol que guia meus dias.",
    "Cada beijo seu é uma promessa de felicidade eterna.",
    "Seu amor é o ritmo que faz meu coração dançar.",
    "Você é a canção que meu coração canta em silêncio.",
    "Nosso amor é o elo mais forte que une dois corações.",
    "Com você, cada instante é uma celebração do amor.",
    "Você é o milagre que eu sempre agradecerei.",
    "Nosso amor é a obra-prima que juntos criamos."
];

const frasesDesmotivacionais = [
    "O caminho é longo, mas desistir é mais fácil.",
    "Lembre-se, você é único, assim como todos os outros.",
    "A esperança é o primeiro passo no caminho da decepção.",
    "O segredo do fracasso é tentar agradar a todos.",
    "A vida é cheia de surpresas, mas nunca quando você precisa delas.",
    "Se nada der certo hoje, amanhã também não vai.",
    "Não siga seus sonhos, eles estão tão perdidos quanto você.",
    "Não se preocupe, pior do que está não fica. Ah, pera...",
    "A vida é uma comédia para quem pensa e uma tragédia para quem sente.",
    "O otimismo é a falta de informação.",
    "Melhor desistir do que nunca ter tentado, certo?",
    "Se a vida te dá limões, é porque frutas são baratas.",
    "Trabalho em equipe é importante; permite que você culpe outra pessoa.",
    "Não importa o quanto você se esforce, sempre existe um chinês melhor.",
    "Você não pode se decepcionar se nunca tiver expectativas.",
    "Não se compare com os outros, você também é ruim à sua maneira.",
    "A desistência é o caminho mais curto para o fracasso.",
    "Se você não consegue convencê-los, confunda-os.",
    "Errar é humano, mas culpar outra pessoa é mais humano ainda.",
    "Nunca subestime sua incapacidade de fazer as coisas direito.",
    "Se você acha que ninguém se importa, tente pagar as contas atrasado.",
    "Apenas lembre-se, você não é inútil. Você serve de mau exemplo.",
    "Não é preguiça, é modo de economia de energia.",
    "Seja você mesmo, todos os outros já estão ocupados sendo melhores.",
    "A vida é curta demais para coisas longas demais.",
    "Não importa o quão devagar você vá, desde que você pare.",
    "Se você não pode mudar, pelo menos confunda.",
    "Se você acha que está no caminho certo, talvez esteja só parado.",
    "A vida não é sobre encontrar a si mesmo, é sobre criar um bom álibi.",
    "Não deixe o amanhã fazer o que você pode deixar para depois.",
    "Lembre-se: não é só você que não está se esforçando o suficiente.",
    "Você nunca será velho demais para aprender a desistir.",
    "Não é que eu esteja pessimista, é que o mundo é ruim mesmo.",
    "Se você não espera nada de ninguém, nunca se decepciona.",
    "Não é porque as coisas são difíceis que não tentamos; é porque não tentamos que são difíceis.",
    "A vida é como um espelho, melhor quebrar logo e acabar com isso.",
    "O importante não é vencer, é fazer o outro perder.",
    "Toda regra tem exceção, exceto esta.",
    "Se você não consegue ser parte da solução, seja um bom exemplo do problema.",
    "Se você não pode ajudar, atrapalhe. Afinal, o importante é participar.",
    "Por que cair na real se você pode cair na cama?",
    "O importante não é saber, mas ter o contato de quem sabe.",
    "Se no começo você não tem sucesso, bem-vindo ao clube.",
    "Não desanime com o fracasso, ele é apenas uma forma de começar de novo de forma mais criativa.",
    "Você não pode perder o que você nunca teve.",
    "Se você não se destaca pela inteligência, destaque-se pela burrice.",
    "Não é que eu tenha medo de morrer. É que eu não quero estar lá quando isso acontecer.",
    "Nem tudo é fácil na vida, mas desistir é.",
    "A vida é cheia de possibilidades, pena que não são para você.",
    "A luz no fim do túnel é um trem vindo na sua direção."
];


function carregarBotoes(){
    const frases = document.getElementById('frases')
    const frasesD = document.getElementById('frasesD')
    for (let i =0 ; i< frasesApaixonantes.length ; i++ ){
        let botao = document.createElement("button");
        botao.textContent = i
        botao.setAttribute('onclick', `verFrase(${i})`)
        frases.appendChild(botao)
    }
    for (let i =0 ; i< frasesDesmotivacionais.length ; i++ ){
        let botao = document.createElement("button");
        botao.textContent = i
        botao.setAttribute('onclick', `verFraseD(${i})`)
        frasesD.appendChild(botao)
    }
}

function verFrase (i){
    const frase =  document.getElementById('frase')
    frase.innerHTML= frasesApaixonantes[i]
}
function verFraseD (i){
    const fraseD =  document.getElementById('fraseD')
    fraseD.innerHTML= frasesDesmotivacionais[i]
}


carregarBotoes()