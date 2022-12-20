describe('DELETE /totem', () => {
  it('delete by id totem successfully', () => {
    cy.api_totem_deleteById()
      .then((response) => {
        expect(response.status).to.equal(200);
        expect(response.statusText).to.equal('OK');
      });
  });
});



describe('DELETE /totem', () => {
  it('failed to delete totem id does not exist', () => {
    cy.api_totem_notFoundIdDelete()
      .then((response) => {
        expect(response.status).to.equal(404);
        expect(response.statusText).to.equal('Not Found');
        expect(response.body.message).to.equal('Totem not found');
        expect(response.body.error).to.equal('Not Found');
      });
  });
});
