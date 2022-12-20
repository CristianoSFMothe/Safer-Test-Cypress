describe('PUT /customer', () => {
  it('edit customer successfully', () => {
    cy.api_editFields()
      .then((response) => {
        expect(response.status).to.equal(200)
        expect(response.body).is.not.empty
        expect(response.statusText).to.equal('OK')

        expect(response.body).to.have.property('id')
        expect(response.body.id).to.eq(response.body.id);

        expect(response.body).to.have.property('firstName')
        expect(response.body.firstName).to.eq(response.body.firstName);

        expect(response.body).to.have.property('email');
        expect(response.body.email).to.eq(response.body.email);

      });

  });
});
