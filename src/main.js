import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('destaque', {
	bind(el, binding, vnode){
		// Passando o valor diretamento
		// el.style.backgroundColor = 'lightgreen'
		
		// Recebendo o valor como value
		// el.style.backgroundColor = binding.value

		// tratando a utilização de argumento
		// if (binding.arg === "fundo") {
		// 	el.style.backgroundColor = binding.value
		// } else {
		// 	el.style.color = binding.value
		// }

		// tratando a utilização de modificadores
		let atraso = 0
		if (binding.modifiers['atrasar']) atraso = 3000
		
		setTimeout(() => {
			if (binding.arg === "fundo") {
				el.style.backgroundColor = binding.value
			} else {
				el.style.color = binding.value
			}
		}, atraso)

	}
})

new Vue({
	render: h => h(App),
}).$mount('#app')
