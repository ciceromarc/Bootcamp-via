class FormacaoPage{

get #escola(){ return cy.get('[data-test="education-school"] > .MuiInputBase-root > .MuiInputBase-input')}
get #grau(){ return cy.get('[data-test="education-degree"]')}
get #curso(){ return cy.get('[data-test="education-fieldOfStudy"] > .MuiInputBase-root > .MuiInputBase-input')}
get #dataInicio(){ return cy.get('#from')}
get #dataFim (){ return cy.get('#to')}
get #atual(){return cy.get('.MuiFormControlLabel-root')}
get #descricao(){ return cy.get('[rows="1"]')}
get #buttonClick(){ return cy.get('[data-test="education-submit"]')}

addFormacao(escola, grau, curso, dataInicio, dataFim, descricao){
    this.#escola.type(escola)
    this.#grau.type(grau)
    this.#curso.type(curso)
    this.#dataInicio.type(dataInicio)
    this.#dataFim.type(dataFim)
    this.#descricao.type(descricao)
    this.#buttonClick.click()
}
formacaoAtual(escola, grau, curso, dataInicio,descricao){
    this.#escola.type(escola)
    this.#grau.type(grau)
    this.#curso.type(curso)
    this.#dataInicio.type(dataInicio)
    this.#atual.click()
    this.#descricao.type(descricao)
    this.#buttonClick.click()
}

}

module.exports = new FormacaoPage()

