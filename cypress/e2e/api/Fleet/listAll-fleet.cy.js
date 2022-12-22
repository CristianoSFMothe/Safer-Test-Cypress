describe('GET /fleet', () => {
  it('list all fleet successfully', () => {
    cy.api_fleet_listAll()
      .then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.not.empty
        expect(response.body[0]).to.have.property('id');
        expect(response.body[0]).to.have.property('name');
        expect(response.body[0]).to.have.property('code');
        expect(response.body[0]).to.have.property('abbreviation');;
        expect(response.statusText).to.equal('OK');
      });

  });
});
