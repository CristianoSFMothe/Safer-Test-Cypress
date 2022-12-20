describe('DELETE /city', () => {
  it('delete by id city successfully', () => {
    cy.api_city_deleteById()
      .then((response) => {
        expect(response.status).to.equal(200);
        expect(response.statusText).to.equal('OK');
      });
  });
});



describe('DELETE /city', () => {
  it('failed to delete city id does not exist', () => {
    cy.api_city_notFoundIdDelete()
      .then((response) => {
        expect(response.status).to.equal(404);
        expect(response.statusText).to.equal('Not Found');
        expect(response.body.message).to.equal('City not found');
        expect(response.body.error).to.equal('Not Found');
      });
  });
});
