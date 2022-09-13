class ExperienciaPage {
    //mapear todos os elemento que for usado ==>>ações

    get #posicao() {return cy.get('[data-test="experience-title"]') }
    get #empresa() { return cy.get('[data-test="experience-company"] > .MuiInputBase-root > .MuiInputBase-input') }
    get #local() { return cy.get('[data-test="experience-location"] > .MuiInputBase-root > .MuiInputBase-input') }
    get #dataInicio() { return cy.get('#from') }
    get #dataFim() { return cy.get('#to') }
    get #descricao() { return cy.get('#to') }
    get #buttonAdd() { return cy.get('[data-test="experience-submit"]') }
    get #atual() { return cy.get('[data-indeterminate="false"]')}

    addExperiencia(posicao, empresa, local, dataInicio, dataFim, descricao){
      
        this.#posicao.type(posicao)
        this.#empresa.type(empresa)
        this.#local.type(local)
        this.#dataInicio.type(dataInicio)
        this.#dataFim.type(dataFim)
        this.#descricao.type(descricao)
        this.#buttonAdd.click()

    }
    addExperienciaAtual(posicao, empresa, local, dataInicio, descricao){

        this.#posicao.type(posicao)
        this.#empresa.type(empresa)
        this.#local.type(local)
        this.#dataInicio.type(dataInicio)
        this.#descricao.type(descricao)
        this.#atual.click()
        this.#buttonAdd.click()

    }
}




module.exports = new ExperienciaPage()