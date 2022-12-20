describe('GET /totem', () => {
  it('list totem by id successfully', () => {
    cy.api_totem_listById()
      .then((response) => {
        expect(response.status).to.equal(200);
        expect(response.statusText).to.equal('OK');
        expect(response.body).is.not.empty;
      });
  });
});
