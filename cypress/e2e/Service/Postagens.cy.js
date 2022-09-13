/// <reference types="cypress" />

let token
describe('Testes de Criação de Postagens', () => {
   

    beforeEach(() => {
        cy.tokenJWT().then((auth) => {
            token = auth
        })
    });
    it('[POST]-Criação de postagem', () => {
        cy.request({
            method: 'POST',
            url: '/api/posts',
            headers: {
                Cookies: token
            },
            body: {
                "text": "Postagem pelo cypress"
            }
        }).then((response) => {
            expect(response.status).to.eq(201)
        })
    })    
    
});

describe('Teste de consulta', () => {
        beforeEach(() => {
            cy.tokenJWT().then((auth) => {
                token = auth
            })
        });
        it('[GET]-Consultar uma postagem', () => {
            cy.request({
                method: 'GET',
                url: '/api/posts',
                headers: {
                    Cookies: token
                },
            }).then((response) => {
                expect(response.status).to.eq(200)
                
            })
        })
        it('[GET]-Consultar uma postagem por ID', () => {
            cy.criarPostagem(token, "PostagemID").then((response)=>{
                let id = response.body._id
                cy.request({
                    method: 'GET',
                    url: `/api/posts/${id}`,
                    headers: {
                        Cookie: token
                    },
                }).then((response) => {
                    expect(response.status).to.eq(200)
                })
            })  
        }) 
    });
describe('Teste de exclusão', () => {
    beforeEach(() => {
        cy.tokenJWT().then((auth) => {
            token = auth
        })
    });
    it('[DELETE]-Excluir uma postagem', () => {
        cy.criarPostagem(token, "PostagemID").then((response)=>{
            let id = response.body._id
            cy.request({
                method: 'DELETE',
                failOnStatusCode: false,
                url: `/api/posts/${id}`,
                headers: {
                    Cookie: token
                },
            }).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.msg).to.eq('Post removido')
            })
        })  
    })  
});

describe('Teste de exclusão', () => {
    beforeEach(() => {
        cy.tokenJWT().then((auth) => {
            token = auth
        })
    });
    it('[PUT]-Alteração uma postagem', () => {
        cy.criarPostagem(token, "PostagemID").then((response)=>{
            let id = response.body._id
            cy.request({
                method: 'PUT',
                failOnStatusCode: false,
                url: `/api/posts/like/${id}`,
                headers: {
                    Cookie: token
                },
            }).then((response) => {
                expect(response.status).to.eq(200)   
            })
        })  
    })  
});