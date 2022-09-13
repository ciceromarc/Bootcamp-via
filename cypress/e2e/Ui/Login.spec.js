/// <reference types="cypress" />

import usuarios from "../../fixtures/usuarios.json"

describe('US0001-Funcionalidade login', () => {
    context('Given estou logado na pagina', () => {
});
    beforeEach(() => {
        cy.visit('login');
    });
    it('Deve fazer login com sucesso', () => {
        cy.login('cicero.tester@tester.com.be', 'Mudar@0987')
        cy.get('[data-test="dashboard-welcome"]').should('contain','Bem-vindo')
    });
    it('Deve inserir dados importados', () => {
        cy.login(usuarios[0].email, usuarios[0].senha)
        cy.title().should('eq', 'ConexaoQA')
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo')
    });
    it('Deve fazer login com sucesso-usando fixtures', () => {
        cy.fixture("usuarios").then((usr) => {
            cy.login(usr[0].email, usr[0].senha)
        })
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo')
    });

});