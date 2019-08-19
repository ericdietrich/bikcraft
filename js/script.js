
if (window.SimpleSlide){ //Testa se a página tem o script SimpleSlide referenciado
	new SimpleSlide({
		slide: "quote", // nome do atributo data-slide="principal"
  	time: 9000 // tempo de transição dos slides (5000 sao 5 segundos)
	})

	new SimpleSlide({
  	slide: "portfolio", // nome do atributo data-slide="principal"
  	nav: true, // se deve ou não mostrar a navegação
  	auto: true, // se o slide deve passar automaticamente
  	time: 5000 // tempo de transição dos slides
	});
}

if(window.SimpleAnime){
	new SimpleAnime();
}
