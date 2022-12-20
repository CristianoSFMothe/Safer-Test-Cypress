describe('DELETE /partner', () => {
  it('delete by id partner successfully', () => {
    cy.api_partner_deleteById()
      .then((response) => {
        expect(response.status).to.equal(200);
        expect(response.statusText).to.equal('OK');
      });
  });
});



describe('DELETE /partner', () => {
  it('failed to delete partner id does not exist', () => {
    cy.api_partner_notFoundIdDelete()
      .then((response) => {
        expect(response.status).to.equal(404);
        expect(response.statusText).to.equal('Not Found');
        expect(response.body.message).to.equal('Partner not found');
        expect(response.body.error).to.equal('Not Found');
      });
  });
});
