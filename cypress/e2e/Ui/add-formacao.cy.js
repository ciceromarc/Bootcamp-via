/// <reference types="cypress" />
const formacaoPage = require ('../../support/formacao/formacao-pages')

describe('Funcionalidade-Adicionar Formação', () => {
    beforeEach(() => {
        cy.fixture("usuarios").then((user) => {
            cy.login(user[0].email, user[0].senha)
        })
        cy.visit('adicionar-formacao')
    });
    it('Deve adicionar formação com sucesso', () => {
        formacaoPage.addFormacao('Uninove', 'Graduado','Analise de desenvolvimento','02/02/2016','12/12/2021',' Aqui você aprende com melhores especialistas do mercado')
        cy.get('.container > :nth-child(6)').should('be.visible')
    });
    it('Deve adicionar formação atual com sucesso', () => {
        formacaoPage.formacaoAtual('Uninove', 'Graduado','Analise de desenvolvimento','02/02/2016',' Aqui você aprende com melhores especialistas do mercado')
        cy.get(':nth-child(7) > thead > tr > :nth-child(1)').should('exist')
        cy.get('.large').should('be.visible')
        cy.get('[data-test="alert"]').should('have.text','Formação Acadêmica Adicionada')
    });
    it.only('Deve excluir conta existente com sucesso ', () => {
        formacaoPage.addFormacao('Uninove', 'Graduado','Analise de desenvolvimento','02/02/2016','12/12/2021',' Aqui você aprende com melhores especialistas do mercado')
        cy.get('[data-test="education-delete"]').should('contain', 'Excluir')
        
        
    });
});