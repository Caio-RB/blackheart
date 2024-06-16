export default{
	template:`
	<section id="banner">
		<p class="section__title">Bem-vindo!</p>
		<p class="section__text">Novos capitulos mensalmente</p>
		<a v-bind:href="'#' + chapters" class="btn banner__btn">Ler Agora</a>
	</section>
	`
}
