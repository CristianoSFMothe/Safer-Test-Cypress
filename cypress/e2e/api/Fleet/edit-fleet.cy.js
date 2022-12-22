describe('POST /city', () => {
  it('edit city successfully', () => {
    cy.api_fleet_editById()
      .then((response) => {
        expect(response.status).to.equal(200)
        expect(response.body).is.not.empty
        expect(response.statusText).to.equal('OK');

        expect(response.body).to.have.property('name');
        expect(response.body.name).to.eq(response.body.name);

        expect(response.body).to.have.property('code');
        expect(response.body.code).to.eq(response.body.code);

        expect(response.body).to.have.property('abbreviation');
        expect(response.body.abbreviation).to.eq(response.body.abbreviation);

      });

  });
});
