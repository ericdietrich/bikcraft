
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

if(window.SimpleForm){
	new SimpleForm({
	  form: ".formphp", // seletor do formulário
	  button: "#enviar", // seletor do botão
	  erro: "<div id='form-erro'><h2>Erro no envio!</h2><p>Um erro ocorreu, tente para o email contato@bikcraft.com.</p></div>", // mensagem de erro
	  sucesso: "<div id='form-sucesso'><h2>Formulário enviado com sucesso</h2><p>Em breve eu entro em contato com você.</p></div>", // mensagem de sucesso
	});
}

