/// <reference types="cypress" />

const experienciaPage = require ('../../support/Experiencia/experiencia-pages')
describe('Funcionalidade:Adicionar experiencia', () => {
    beforeEach(() => {
        cy.fixture("usuarios").then((user) => {
            cy.login(user[0].email, user[0].senha)
        })
        cy.visit('adicionar-experiencia')
    });
    it('Deve adicionar experiencia com sucesso', () => {
        experienciaPage.addExperiencia('QA', 'VIA', 'SP','01/01/2020','02/03/2022', 'TESTES QA')
        cy.get('[data-test="experience-delete"]').should('be.visible')

    });
    it('Deve adicionar experiencia atual com sucesso', () => {
       experienciaPage.addExperienciaAtual('QUALIDADE', 'VIA', 'SP','01/01/2020','TESTES QA')
       cy.get(':nth-child(5) > thead > tr > :nth-child(1)').should('be.visible')
    });
});