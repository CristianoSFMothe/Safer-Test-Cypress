describe('DELETE /customer', () => {
  it('delete customer successfully', () => {
    cy.api_customer_deleteById()
      .then((response) => {
        expect(response.status).to.equal(200);
        expect(response.statusText).to.equal('OK');
      });
  });
});


describe('DELETE /customer', () => {
  it('failed to delete customer id does not exist', () => {
    cy.api_customer_notFoundIdDelete()
      .then((response) => {
        expect(response.status).to.equal(404);
        expect(response.statusText).to.equal('Not Found');
        expect(response.body.message).to.equal('Customer not found');
        expect(response.body.error).to.equal('Not Found');
      });
  });
});
