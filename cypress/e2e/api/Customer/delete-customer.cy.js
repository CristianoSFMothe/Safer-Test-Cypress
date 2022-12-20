describe('DELETE /customer', () => {
  it('delete customer successfully', () => {
    cy.api_deleteByIdCustomer()
      .then((response) => {
        expect(response.status).to.equal(200);
        expect(response.statusText).to.equal('OK');
      });
  });
});
