describe('should not register in the following situations...', () => {

  it('should not register a city with empty fields', () => {
    cy.api_fleet_emptyFields()
      .then((response) => {
        expect(response.status).to.equal(400)
        expect(response.body).is.not.empty
        expect(response.statusText).to.equal('Bad Request')
        expect(response.body.message).to.eql([
          'code should not be empty',
          'abbreviation should not be empty'
        ]);
        expect(response.body.error).to.equal('Bad Request')
      });

  });

});
