describe('should not register in the following situations...', () => {

  it('should not register a city with empty fields', () => {
    cy.api_city_emptyFields()
      .then((response) => {
        expect(response.status).to.equal(400)
        expect(response.body).is.not.empty
        expect(response.statusText).to.equal('Bad Request')
        expect(response.body.message).to.eql([
          'countryCode should not be empty',
          'countryCode must be a valid enum value',
          'stateCode should not be empty',
          'codeTOM should not be empty',
          'prefixCitCodePhoneNumber should not be empty'
        ]);
        expect(response.body.error).to.equal('Bad Request')
      });

  });

});
