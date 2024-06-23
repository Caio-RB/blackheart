export default{
	template:`
		<section id="chapters">
			<span class="about__title">
				<p>Capitulos</p>	
			</span>
			<div class="chapters__container">
				<!--<form class="chapters__search">
					<input type="text" class="search" placeholder="pesquisar capitulo">
			     		
					<button class="search__button" id="search__main">
			     			<i class='bx bx-search-alt-2'></i>
					</button>
				</form>-->
				<table class="chapters__table">
					<tr class="">
						<th>Capitulo</th>
						<th>Titulo</th>
						<th>Data</th>
					</tr>
					<tr class="table__rows">
						<td><a href="#">01</a></td>
						<td><a href="#"> A Criança do inferno</a></td>
						<td>12/07/2024</td>
					</tr>
					<tr class="table__rows">
						<td><a href="#">02</a></td>
						<td><a href="#">Vazio</a></td>
						<td>12/07/2024</td>
				        </tr>
				 </table>
		</section>
	`
}
