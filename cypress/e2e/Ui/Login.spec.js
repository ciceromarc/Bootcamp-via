/// <reference types="cypress" />

describe('US0001 - Funcionalidade Login', () => {
    context('Given estou logado na pagina', () => {
        
    });
    beforeEach(() => {
        cy.visit('login');
    });
    it('Deve fazer login com sucesso', () => {
      
        cy.login('cicero.tester@tester.com.be', 'Mudar@0987')
       cy.get('[data-test="dashboard-welcome"]').should('contain','Bem-vindo')
    });
});

