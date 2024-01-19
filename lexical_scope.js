function mensagemPai() {
	const msg = 'mensagem lexical'
	function mensagemFilho(){
		console.log(msg)
	}
	return mensagemFilho
}
const mensagem = mensagemPai()
msg()