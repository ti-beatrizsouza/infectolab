function esconderTudo(){

document
.querySelectorAll(".screen")
.forEach(tela=>{

tela.classList.add("hidden");

});

}

function mostrar(id){

esconderTudo();

document
.getElementById(id)
.classList.remove("hidden");

}

function abrirPaciente(){

mostrar("paciente");

}

function voltarContexto(){

mostrar("contexto");

}

function abrirDecisao(){

mostrar("decisao");

}

function voltarPaciente(){

mostrar("paciente");

}

function abrirLab(){

mostrar("laboratorio");

}

function resposta(opcao){

mostrar("resultado");

const titulo =
document.getElementById("resultadoTitulo");

const texto =
document.getElementById("resultadoTexto");

if(opcao === "b"){

titulo.innerHTML =
"CONDUTA CORRETA";

texto.innerHTML = `

<p>

Identificação precoce da malária.

</p>

<p class="reward">

+300 pontos

</p>

`;

}else{

titulo.innerHTML =
"CONDUTA INCORRETA";

texto.innerHTML = `

<p>

Houve atraso terapêutico.

</p>

<p class="penalty">

-100 pontos

</p>

`;

}

}

function fazerLogin(){

const email =
document.getElementById("email").value.trim();

const senha =
document.getElementById("senha").value.trim();

const erro =
document.getElementById("erroLogin");

if(
email === "beatrizsaory@gmail.com"
&&
senha === "12345aluno"
){

window.location.href =
"aluno.html";

return;

}

if(
email === "emersonleao@gmail.com"
&&
senha === "12345professor"
){

window.location.href =
"professor.html";

return;

}

erro.innerHTML =
"Login inválido.";

}