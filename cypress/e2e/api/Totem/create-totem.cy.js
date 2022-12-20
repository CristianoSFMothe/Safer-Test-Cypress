describe('POST /totem', () => {
  it('create totem successfully', () => {
    cy.api_totem_create()
      .then((response) => {
        expect(response.status).to.equal(201)
        expect(response.body).is.not.empty
        expect(response.statusText).to.equal('Created');

        expect(response.body).to.have.property('totemId');
        expect(response.body.totemId).to.eq(response.body.totemId);

        expect(response.body).to.have.property('password');
        expect(response.body.password).to.eq(response.body.password);
      });

  });
});
