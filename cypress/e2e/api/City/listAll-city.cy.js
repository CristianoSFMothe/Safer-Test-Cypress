describe('GET /city', () => {
  it('list all city successfully', () => {
    cy.api_city_listAll()
      .then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.not.empty
        expect(response.body[0]).to.have.property('id');
        expect(response.body[0]).to.have.property('name');
        expect(response.body[0]).to.have.property('countryCode');
        expect(response.body[0]).to.have.property('stateCode');
        expect(response.body[0]).to.have.property('codeTOM');
        expect(response.body[0]).to.have.property('stateName');
        expect(response.body[0]).to.have.property('prefixCitCodePhoneNumber');
        expect(response.statusText).to.equal('OK');
      });

  });
});
