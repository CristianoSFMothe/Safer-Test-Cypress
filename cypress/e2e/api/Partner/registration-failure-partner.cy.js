describe('should not register in the following situations...', () => {
  context('how much the email already exists', () => {

    it('should not register when the CNPJEin already exists', () => {

      cy.api_partner_CNPJExisting()
        .then((response) => {
          expect(response.status).to.equal(404)
          expect(response.body).is.not.empty
          expect(response.statusText).to.equal('Not Found');
          expect(response.body.error).to.equal('Not Found');
          expect(response.body.message).to.equal('CNPJEin already exists');
        });

    });

    it('should not register when some field is empty', () => {

      cy.api_partner_emptyFields()
        .then((response) => {
          expect(response.status).to.equal(400)
          expect(response.body).is.not.empty
          expect(response.statusText).to.equal('Bad Request')
          expect(response.body.message).to.eql([
            "fantasyName should not be empty",
            "cnpjEin should not be empty",
            "name should not be empty",
            "address should not be empty",
            "addressNumber should not be empty",
            "addressZipCode should not be empty",
            "cityId should not be empty",
            "phone should not be empty"
          ]);
          expect(response.body.error).to.equal('Bad Request')
        });

    });

  });
});
