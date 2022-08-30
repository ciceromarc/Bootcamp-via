/// <reference types="cypress" />
const faker =require('faker-br')

describe('US0002-Funcionalidade: Cadadastro', () => {
    //antes de tudo 
    beforeEach(() => {
        cy.visit('cadastrar');
    });
    it('Deve fazer cadastro com sucesso', () => {
        var nome = faker.name.firstName()
        var email = faker.internet.email()
        var senha = faker.internet.password(senha)
        var loren =faker.lorem.paragraph()

        cy.cadastro(nome, email, senha)
        cy.get('.large').should('be.visible')    
        cy.perfil('VIA QA', 'TESTER', loren)
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo')
    });
});