describe('GET /customer', () => {
  it('list all customer successfully', () => {
    cy.api_listAllCustomer()
      .then((response) => {
        expect(response.status).to.equal(200)
        expect(response.body).is.not.empty
        expect(response.body[0]).to.have.property('id')
        expect(response.body[0]).to.have.property('firstName')
        expect(response.body[0]).to.have.property('lastName')
        expect(response.body[0]).to.have.property('email')
        expect(response.body[0]).to.have.property('tokenAuthentication')
        expect(response.statusText).to.equal('OK')
      });

  });
});
