describe('GET /operational-base:id', () => {
  it('list by id operational base successfully', () => {
    cy.api_operational_base_listById()
      .then((response) => {
        expect(response.status).to.equal(200);
        expect(response.statusText).to.equal('OK');
        expect(response.body).is.not.empty;
      });
  });
});
