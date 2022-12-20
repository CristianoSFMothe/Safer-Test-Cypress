describe('GET /customer:id', () => {
  it('list by id customer successfully', () => {
    cy.api_customer_listById()
      .then((response) => {
        expect(response.status).to.equal(200);
        expect(response.statusText).to.equal('OK');
        expect(response.body).is.not.empty;
      });
  });
});
