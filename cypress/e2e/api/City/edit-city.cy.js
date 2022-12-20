describe('POST /city', () => {
  it('edit city successfully', () => {
    cy.api_city_editById()
      .then((response) => {
        expect(response.status).to.equal(200)
        expect(response.body).is.not.empty
        expect(response.statusText).to.equal('OK');

        expect(response.body).to.have.property('name');
        expect(response.body.name).to.eq(response.body.name);

        expect(response.body).to.have.property('countryCode');
        expect(response.body.countryCode).to.eq(response.body.countryCode);

        expect(response.body).to.have.property('stateCode');
        expect(response.body.stateCode).to.eq(response.body.stateCode);

        expect(response.body).to.have.property('codeTOM');
        expect(response.body.codeTOM).to.eq(response.body.codeTOM);

        expect(response.body).to.have.property('stateName');
        expect(response.body.stateName).to.eq(response.body.stateName);

        expect(response.body).to.have.property('prefixCitCodePhoneNumber');
        expect(response.body.prefixCitCodePhoneNumber).to.eq(response.body.prefixCitCodePhoneNumber);

      });

  });
});
