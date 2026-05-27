function trocarTela(atual,proxima){

document
.getElementById(atual)
.classList.add("hidden");

document
.getElementById(proxima)
.classList.remove("hidden");

}

function abrirCaso(){

trocarTela("home","contexto");

}

function abrirPaciente(){

trocarTela("contexto","paciente");

}

function abrirDecisao(){

trocarTela("paciente","decisao");

}

function abrirLaboratorio(){

trocarTela("resultado","laboratorio");

}

function escolha(opcao){

trocarTela("decisao","resultado");

const titulo =
document.getElementById("resultadoTitulo");

const texto =
document.getElementById("resultadoTexto");

if(opcao === "a"){

titulo.innerHTML =
"ALTERNATIVA A — INCORRETA";

texto.innerHTML =
`
<ul>

<li>Atraso diagnóstico</li>

<li>Agravamento clínico</li>

<li>Aumento da parasitemia</li>

<li>Risco de transmissão comunitária</li>

</ul>

<h2 class="penalty">
Penalidade: -150 pontos
</h2>
`;

}

if(opcao === "b"){

titulo.innerHTML =
"ALTERNATIVA B — CORRETA";

texto.innerHTML =
`
<ul>

<li>Identificação precoce</li>

<li>Interrupção da transmissão</li>

<li>Tratamento oportuno</li>

</ul>

<h2 class="reward">
Recompensa: +300 pontos
</h2>
`;

}

if(opcao === "c"){

titulo.innerHTML =
"ALTERNATIVA C — INCORRETA";

texto.innerHTML =
`
<ul>

<li>Uso inadequado de antimicrobianos</li>

<li>Atraso terapêutico</li>

<li>Piora clínica</li>

</ul>

<h2 class="penalty">
Penalidade: -100 pontos
</h2>
`;

}

}