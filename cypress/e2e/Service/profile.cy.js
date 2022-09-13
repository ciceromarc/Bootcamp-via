/// <reference types="cypress" />

let id
let token
describe('Testes de Perfil', () => {


    beforeEach(() => {
        cy.tokenJWT().then((auth) => {
            token = auth
        })
    });
        it('[PUT]-Criação de experiencia no perfil', () => {
            cy.request({
            method: 'PUT',
            url: '/api/profile/experience',
            headers: {
                Cookies: token
            },
            body: {
                "title": "Gerente",
                "company": "VIA-HUB",
                "location": "SÃO PAULO",
                "from": "2022-09-12",
                "to": "2022-09-12",
                "current": false,
                "description": "TESTES  DE QA"
            }
        }).then((response) => {
            id = response.body.experience[0]._id
            expect(response.status).to.eq(200)
            expect(response.body.experience[0]).to.have.property("_id")


        })
    })

describe('Consulta experiência no perfil', () => {
        beforeEach(() => {
            cy.tokenJWT().then((auth) => {
                token = auth
            })
        });
        it('[GET]-Consultar perfil por ID', () => {
            cy.request({
                method: 'GET',
                url: `/api/profile/me/${id}`,
                headers: {
                    Cookies: token
                },
            }).then((response) => {
                expect(response.status).to.eq(200)

            })
        })
    });
describe('Teste de alteração', () => {
        beforeEach(() => {
            cy.tokenJWT().then((auth) => {
                token = auth
            })
        });


        it('[POST]-Alterar experiência dentro do perfil', () => {
            cy.request({
                method: 'POST',
                url: '/api/profile',
                headers: {
                    Cookies: token
                },
                body: {

                    "company": "Via varejo",
                    "status": "Ativo",
                    "location": "SAO PAULO",
                    "website": "www.via.com.br",
                    "skills": "Quality Assurece-TI",
                    "bio": "O melhor do varejo você encontra aqui!!!",
                    "githubusername": "www.githubvia.com.br",
                    "youtube": "www.youtube.com.br/viavarejo",
                    "twitter": "@via",
                    "facebook": "www.facebook.com/viavarejo",
                    "linkedin": "www.linkedin.com/viavarejo",
                    "instagram": "string",
                    "medium": "www.medium.com.br/viavarejo"

                }
            }).then((response) => {
                expect(response.status).to.eq(200)
            })
        })
    });

describe('Teste de exclusão de experiência', () => {
        beforeEach(() => {
            cy.tokenJWT().then((auth) => {
                token = auth
            })
        });

        it('[DELTE]-Excluir experiência do perfil', () => {
            cy.request({
                method: 'DELETE',
                url: `/api/profile/experience/${id}`,
                headers: {
                    Cookies: token
                },
            }).then((response) => {
                expect(response.status).to.eq(200)

            })
        })
    });
})

