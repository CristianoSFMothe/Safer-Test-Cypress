describe('POST /customer', () => {
  it('create customer successfully', () => {
    cy.api_customer_create()
        .then((response) => {
          expect(response.status).to.equal(201)
          expect(response.body).is.not.empty
          expect(response.statusText).to.equal('Created');

          expect(response.body).to.have.property('firstName');
          expect(response.body.firstName).to.eq(response.body.firstName);

          expect(response.body).to.have.property('lastName');
          expect(response.body.lastName).to.eq(response.body.lastName);

          expect(response.body).to.have.property('email');
          expect(response.body.email).to.eq(response.body.email);

          expect(response.body).to.have.property('tokenAuthentication');
          expect(response.body.tokenAuthentication).to.eq(response.body.tokenAuthentication);

          expect(response.body).to.have.property('checkAcessibility');
          expect(response.body.checkAcessibility).to.eq(response.body.checkAcessibility);

          expect(response.body).to.have.property('checkEmail');
          expect(response.body.checkEmail).to.eq(response.body.checkEmail);

          expect(response.body).to.have.property('checkPhone');
          expect(response.body.checkPhone).to.eq(response.body.checkPhone);
        });

  });
});
