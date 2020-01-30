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

	</div>
</template>

<script>
export default {
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
