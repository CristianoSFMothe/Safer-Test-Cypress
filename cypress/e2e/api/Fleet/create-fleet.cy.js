describe('POST /fleet', () => {
  it('create fleet successfully', () => {
    cy.api_fleet_create()
      .then((response) => {
        expect(response.status).to.equal(201)
        expect(response.body).is.not.empty
        expect(response.statusText).to.equal('Created');

        expect(response.body).to.have.property('name');
        expect(response.body.name).to.eq(response.body.name);

        expect(response.body).to.have.property('code');
        expect(response.body.code).to.eq(response.body.code);

        expect(response.body).to.have.property('abbreviation');
        expect(response.body.abbreviation).to.eq(response.body.abbreviation);
      });

  });
});
