<template>
	<div id="app">
		<h1>Diretivas</h1>
		<hr>
		<p v-text="'Usando a diretiva v-text'"></p>
		<p v-html="'Usando a diretiva <strong> v-html </strong>'"></p>
		<hr>
		<!-- <p v-destaque>Usando diretiva personalizada</p> -->
		<p v-destaque="'lightgreen'">Usando diretiva personalizada</p>
		<p v-destaque="cor">Usando diretiva personalizada</p>

		<hr>
		<!-- Anatomia de uma diretiva -->
		<!-- <p v-diretiva:argumento.modificador="valor"> </p> -->

		<!-- Passando um argumento pra diretiva -->
		<p v-destaque:fundo ="cor">Usando diretiva personalizada</p>
		<hr>

		<!-- Usando um modificador -->
		<p v-destaque:fundo.atrasar ="cor">Usando diretiva personalizada</p>

		<!-- Diretiva registrada localmente -->
		<p v-destaque-local:fundo.atrasar ="cor">Usando diretiva personalizada (local)</p>
		<hr>

		<!-- Usando múltiplos modificadores -->
		<p v-destaque-local:fundo.atrasar.alternar ="cor">Usando múltiplos modificadores</p>


	</div>
</template>

<script>
export default {
	directives: {
		'destaque-local' : {
			bind(el, binding, vnode){
				
				const aplicarCor = cor => {
					if (binding.arg === "fundo") {
						el.style.backgroundColor = cor
					} else {
						el.style.color = cor
					}
				}


				let atraso = 0
				if (binding.modifiers['atrasar']) atraso = 3000
				
				setTimeout(() => {
					if (binding.modifiers['alternar']){
						 setInterval(() =>{
							 corAtual = corAtual === cor1 ? cor2 : cor1
							 aplicarCor(corAtual)
						 }, 1000)
					}else{
						aplicarCor(binding.value)
					}

					const cor1 = binding.value
					const cor2 = 'purple'
					let corAtual = cor1

				}, atraso)
			}
		}
	},
	data(){
		return{
			cor: "lightblue"
		}
	}
	
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
