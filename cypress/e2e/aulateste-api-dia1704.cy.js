import {faker} from '@faker-js/faker';

describe('TESTE CONSULTA USUÁRIO', function() {

    before(function () {
        cy.request('POST', (baseUrl + '/users', {
            name: faker.person.fullName(),
            email: faker.internet.email()
        }).then(response) function() {
            var idUsuario = response.body.id;
        });

    const baseUrl = 'https://raromdb-3c39614e42d4.herokuapp.com';


    it('CONSULTA DE USUÁRIO POR ID',function() {
        cy.fixture('user')
        cy.request(baseUrl + '/users/{id}').then((response) function () {
            expect(response.status).to.equal(200);
            expect(response.body).to.deep.equal(data);
        }
    );
    });

    });
});