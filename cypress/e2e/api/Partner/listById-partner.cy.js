describe('GET /partner', () => {
  it('list partner by id successfully', () => {
    cy.api_partner_listById()
      .then((response) => {
        expect(response.status).to.equal(200);
        expect(response.statusText).to.equal('OK');
        expect(response.body).is.not.empty;
      });
  });
});
