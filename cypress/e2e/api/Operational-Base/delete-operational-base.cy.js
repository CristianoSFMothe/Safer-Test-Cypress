describe('DELETE /operational-base', () => {
  it('delete operational base successfully', () => {
    cy.api_operational_base_deleteById()
      .then((response) => {
        expect(response.status).to.equal(200);
        expect(response.statusText).to.equal('OK');
      });
  });
});


describe('DELETE /operational-base', () => {
  it('failed to delete operational base id does not exist', () => {
    cy.api_operational_base_notFoundIdDelete()
      .then((response) => {
        expect(response.status).to.equal(404);
        expect(response.statusText).to.equal('Not Found');
        expect(response.body.message).to.equal('OperationalBase not found');
        expect(response.body.error).to.equal('Not Found');
      });
  });
});
