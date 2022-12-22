describe('GET /city', () => {
  it('list city by id successfully', () => {
    cy.api_fleet_listById()
      .then((response) => {
        expect(response.status).to.equal(200);
        expect(response.statusText).to.equal('OK');
        expect(response.body).is.not.empty;
      });
  });
});
