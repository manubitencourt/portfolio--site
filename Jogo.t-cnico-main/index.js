let vida = 1
let inventario = []
let nomeDoPersonagem = "Saman Soltani"
let fase = 1
 
jogar()
 
function jogar(){
    vida = 1
    inventario = []
    alert(`Olá, bem vindo!\nSeu nome é  ${nomeDoPersonagem} você mora no Irã, e você pratica a canoagem, este jogo será uma jornada da sua vida!`)
    while(vida > 0){
       
        switch(fase) {
            case 1:
                fase1()
                break
            case 2:
                fase2()
                break
            case 3:
                fase3()
                break
            case 4:
                fase4()
                break
            case 5:
                fase5()
                break
            case 6:
                fase6()
                break
            case 7:
                fase7()
                break
            case 8:
                fase8()
                break
            case 9:
                fase9()
                break
            case 10:
                fase10()
                break
        }
        }
        alert("morreu")
        fase = 1 
        jogar() 
    }
 
 
// while (vida > 0){
 
//     console.log(`Olá, bem vindo!\nSeu nome é  ${nomeDoPersonagem} você mora no Irã, e você pratica a canoagem, este jogo será uma jornada da sua vida!`)
 
// }
 
function fase1(){
let resposta = prompt("Você e sua família foram convidados para um campeonato de canoagem, você aceita ir? ").toLowerCase()
    if (resposta == "sim"){
        alert ("Você se divertiu muito! Você ganhou conhecimento e 10 pontos de vida")
        inventario.push("conhecimento")
        vida += 10
    }
    else if (resposta == "não"){
    alert("Você não foi ao campeonato, então seu dia foi entediante e chato, você não ganhou nada")
   }
   fase = 2
 
}
function fase2 (){
    console.log("Você e seu pai foram pescar, lá ele te contou que sempre gostou muito de canoagem, e isso te inspirou a começar canoagem. ")
    let interação = prompt("Chegou o seu aniversário! \n Você ganhou um presente de sua avó, deseja abri-lo? ").toLowerCase()
    if (interação == "sim"){
    alert("Você ganhou um remo de aniversário!! E também ganhou coragem e 5 pontos de vida :)")
    inventario.push("coragem")
    vida += 5
    }
    else if (interação == "não")
    alert("Você perdeu 1 ponto de vida")
    vida -= 1
 
    fase = 3
}
function fase3(){
    alert("Lembra daquele campeonato que a sua família foi? então, gostaram de você, e te convidaram para fazer uma prova de velocidade na canoagem!")
    let pergunta = prompt("Você aceita ir?").toLowerCase()
    if (pergunta == "sim"){
        alert("Você ganhou a prova! Meus parabéns!!")
        console.log("Você ganhou 10 anos consecutivos, e se tornou a melhor competidora de canoagem do Irã!, você ganhou muita inteligência e 10 pontos de vida!")
      inventario.push("inteligência")
      vida += 10
    }
    else if (pergunta == "não"){
        alert("Você não ganhou nada.")
 
    }
    fase = 4
}
 
function fase4(){
    alert("Devido a aquelas competições que você foi que era fora do Irã, o governo te expulsou do país por não representar eles por completo nas competições ")
    console.log("Você ficou muito triste por ter que se separar de seus pais e irmãos, mas não tinha escolha, então teve que ir embora. ")
    alert("Foi um processo longo ate decidir para onde você ia ir e como veria sua família depois disso. ")
    alert("Depois de um mês muito corrido e focado em sair do país, você finalmente decidiu para onde iria: Você vai para a Áustria, Uhuuull!!")
   alert("Você conseguiu um jeito de ir para a Áustria e se despediu de seus pais, é hora de começar uma nova vida!")
   fase = 5
}
function fase5(){
    let interação = prompt("Você chegou na Áustria!! E foi recebido por uma família que são amigos de seus pais, eles te convidaram para ir ver um rio famoso lá da Áustria, você deseja ir? ").toLowerCase()
    if (interação == "sim"){
        alert("Vocês se divertiram muito e tiveram uma tarde maravilhosa. Lá vocês conseguiram se conhecer melhor e você contou mais sobre a sua trajetória na canoagem")
        alert("Você descobriu que o Daniel (amigo de seu pai), conhece um professor de canoagem muito famoso e Daniel falou que poderia te indicar para entrar, você ficou muito feliz com essa notícia e não poderia esperar para começar")
        alert("Você ganhou 5 pontos e felicidade")
        vida += 5
        inventario.push("felicidade")
        fase = 6
    }
    else if (interação == "não") {
    alert("Você perdeu uma oportunidade única, volte ao início do jogo")
    fase = 1
    jogar()
    }
    
 
}
function fase6(){
    alert("Chegou o grande dia de ir conhecer este professor e fazer o teste para treinar com ele.  ")
    alert("Você e Daniel foram até o lugar que ele treina seus alunos e você começou a fazer o teste")
    alert("Treinador: ela é realmente muito boa, vejo futuro nessa garota!")
    alert("Daniel: ela ficaria muito feliz se conseguisse treinar com você. Esperamos que dê certo.")
    alert("Havia muitas outras meninas fazendo o teste para treinar com ele, você começou a ficar nervosa, mas o Daniel te acalmou e garantiu que você conseguiria")
    alert("Treinador: tenho os resultados e também o nome de quem vai treinar comigo, e é: SAMAN!!")
    alert("Você ficou muito feliz e orgulhosa com o resultado, com isso ganhou 5 pontos de vida e orgulho ")
    vida += 5
    inventario.push("orgulho")
    fase = 7
}
function fase7(){
   alert("Já se passaram 1 mês treinando com o famoso Treinador, na última semana você treinou como louca, seu Treinador pegou pesado com você, pois tinha muitas técnicas que você não sabia.")
   let faltar = prompt("Você acordou muito cansada, e está pensando se vai faltar o treino, você vai faltar?").toLowerCase()
   if (faltar == "não"){
    alert("Seu treino foi cheio de aprendizados e depois do treino seu Treinador falou que estava muito orgulhoso de você, vocês viraram amigos!")
    alert("Você ganhou 10 pontos de vida e ganhou técnica")
    vida += 10
    inventario.push("técnica")
    fase = 8 
   }
   else if(faltar == "sim"){
    alert("Você perdeu um dia muito importante, seu Treinador ficou bravo que o fez perder seu tempo, ele não vai te dar mais aulas")
    fase = 1 
    jogar()
   }
   
}
function fase8(){
    alert("Sua vida está muito boa na Áustria, mas você está com muita saudade da sua família e amigos do Irã")
    alert("Daniel e sua esposa decidiram fazer uma surpresa para te recompensar pelo seu esforço nos ultimos tempos na canoagem.")
    alert("Eles trouxeram sua família para morar na Áustria, e você passou o dia todo com eles")
    alert("Chegou a noite, e seu pai te convidou para irem ir nadar de manhã no dia seguinte para vocês terem um momento de pai e filha.")
    let passear = prompt ("Você deseja ir?").toLowerCase()
    if (passear == "sim"){
        alert("Vocês se divertiram muito, e se conectaram novamente, você falou que seu senho era ir para as olímpiadas algum dia.")
        alert("Seu pai: você vai conseguir, filha! Acredito em você. ")
        alert("Você ganhou 10 pontos e amor")
        vida += 10
        inventario.push("amor")
    }
    else if(passear == "não"){
    alert("Seu pai ficou chateado com você, mas entendeu que você estava cansada, você perdeu 2 pontos")
    vida -= 2
    }
    fase = 9
}
function fase9(){
    console.log("Se passaram 5 anos e agora você está com 26 anos, você está treinando para ir para as olímpiadas de 2024.")
    alert("Seu treinador comentou que tem um grupo de refugiados que está também treinando para as olímpiadas, ele te candidatou de surpresa, agora você tem que ir fazer o teste")
    let teste = prompt("Você vai no teste? ").toLowerCase()
    if (teste == "sim"){
        alert("Você se destacou no teste, e conseguiu passar, VOCÊ VAI PARA AS OLÍMPIADAS UHUUUULLL")
        fase = 10 
    }
    else if (teste == "não"){
        alert("Você não realizou seu sonho, tente de novo")
        fase = 1 
        jogar()
    }
    
}
function fase10(){
console.log("Você chegou nas olímpiadas de Paris de 2024, UHUUUULLL")
alert("Sua prova é ás 10:00 da manhã, já são 08:00 e você está se aquecendo, daqui a pouco você já vai competir ")
alert("Sua família toda estava lá, eles te deram muito apoio, e você estava muito confiante mas também nervosa ")
let decisaoFinal = prompt("Você foi competir, e estava muito acirrada a competição, tinha um atalho no rio aonde você poderia ir mais rápido, aceita ir? ")
if (decisaoFinal == "sim" & vida >= 50){
    alert("VOCÊ GANHOU PRIMEIRO LUGAR NAS OLÍMÍADAS 2024, MEUS PARABÉNS")
}
else if (decisaoFinal == "não" & vida < 50){
console.log("Você não chegou a tempo, infelizmente você perdeu :( Reinicie o jogo ")

jogar()

}
fase = 1 
}
 


