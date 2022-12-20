describe('POST Customer', () => {
  it('edit customer successfully', () => {
    cy.api_totem_editById()
      .then((response) => {
        expect(response.status).to.equal(200)
        expect(response.body).is.not.empty
        expect(response.statusText).to.equal('OK')

        expect(response.body).to.have.property('id')
        expect(response.body.id).to.eq(response.body.id);

        expect(response.body).to.have.property('totemId')
        expect(response.body.totemId).to.eq(response.body.totemId);

        expect(response.body).to.have.property('email');
        expect(response.body.email).to.eq(response.body.email);

        expect(response.body).to.have.property('password');
        expect(response.body.password).to.eq(response.body.password);

      });

  });
});
