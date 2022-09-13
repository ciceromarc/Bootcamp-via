/// <reference types="cypress" />

import auth from '../../fixtures/auth.json'

it('[POST]-Teste de autenticação', () => {
    cy.request({
        method:'POST',
        url:'/api/auth',
        body:auth
    }).then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body).to.be.not.empty
        expect(response.body).to.have.property("jwt")
        cy.getCookies('https://conexaoqa.herokuapp.com').should('exist')
    })
});
it('[POST]-Teste de autenticação com usuário invalido', () => {
    cy.request({
        method:'POST',
        url:'/api/auth',
        failOnStatusCode:false,
        body:{
            "email":"Adauto@gmail.com",
            "password":"3Yw3qIGjjzg3o_6"
        }
    }).then((response)=>{
        expect(response.status).to.eq(401)   
    })
});