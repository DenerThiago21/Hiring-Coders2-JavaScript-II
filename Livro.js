class Livro {
    constructor() {
        this._id = null;
        this._nome = '';
        this._autor = '';
        this._categoria = '';
        this._paginas = null;
        this._leu = false;
        this._recomenda = false;
    }

    set autor(autor) { this._autor = autor; }
    set nome(nome) { this._nome = nome; }
    set categoria(categoria) { this._categoria = categoria; }
    set paginas(paginas) { this._paginas = paginas; }
    set leu(leu) { this._leu = leu; }
    set recomenda(recomenda) { this._recomenda = recomenda; }

}
module.exports = Livro;