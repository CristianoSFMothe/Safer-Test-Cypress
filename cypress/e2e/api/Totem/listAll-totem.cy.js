describe('GET /totem', () => {
  it('list all totem successfully', () => {
    cy.api_totem_listAll()
      .then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.not.empty
        expect(response.body[0]).to.have.property('id');
        expect(response.body[0]).to.have.property('totemId');
        expect(response.body[0]).to.have.property('email');
        expect(response.body[0]).to.have.property('password');
        expect(response.body[0]).to.have.property('statusTotenPinPad');
        expect(response.body[0]).to.have.property('statusTotenPrinter');
        expect(response.statusText).to.equal('OK');
      });

  });
});
