// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

/// <reference types="Cypress" />
 import auth from '../fixtures/auth.json'


Cypress.Commands.add('navigate', (route) => {
    cy.intercept(route).as('loadpage')
    cy.visit(route, { timeout: 30000 })
    cy.wait('@loadpage')
})

Cypress.Commands.add("login", (email, senha) => {
    cy.visit('login')
    cy.get('[data-test="login-email"]').type(email)   
    cy.get('[data-test="login-password"]').type(senha)
    cy.get('[data-test="login-submit"]').click()
})

Cypress.Commands.add("cadastro", (nome, email, senha) => {
    cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type(nome, email, senha)
    cy.get('[data-test="register-email"]').type(email)
    cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type(senha, { log: true })
    cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type(senha, { log: true })
    cy.get('[data-test="register-submit"]').click()   
})

Cypress.Commands.add("perfil", (empresa, conhecimento, biografia ) => {
    cy.get('[data-test="dashboard-createProfile"]').click()
    cy.get('#mui-component-select-status').click()
    cy.get('[data-test="status-2"]').click()
    cy.get('[data-test="profile-company"] > .MuiInputBase-root > .MuiInputBase-input').type(empresa)
    cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').type(conhecimento)
    cy.get('[rows="1"]').type(biografia,{delay:0})
    cy.get('[data-test="profile-submit"]').click()
   
})
Cypress.Commands.add("tokenJWT",()=>{
    cy.request({
        method:'POST',
        url:'/api/auth',
        body:auth
    }).then((response)=>{
        return response.body.jwt
    })
})

Cypress.Commands.add("criarPostagem",(token, value)=>{
    cy.request({
        method:'POST',
        url:'/api/posts',
        headers: {
            Cookie: token
        },
        body:{
            text: value
        }
    })
})

Cypress.Commands.add("criarPerfil",()=>{
    cy.request({
        method:'POST',
        url:'/api/profile',
        body:profile
    }).then((response)=>{
        return response.body._id
    })
})

