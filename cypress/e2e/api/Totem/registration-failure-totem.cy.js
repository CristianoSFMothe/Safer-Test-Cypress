describe('should not register in the following situations...', () => {
  context('how much the email already exists', () => {

    it('should not register when the email already exists', () => {

      cy.api_totem_emailExisting()
        .then((response) => {
          expect(response.status).to.equal(404)
          expect(response.body).is.not.empty
          expect(response.statusText).to.equal('Not Found');
          expect(response.body.message).to.equal('Email already exists');
        });

    });

    it('should not register when the totem already exists', () => {

      cy.api_totem_totemIdExisting()
        .then((response) => {
          expect(response.status).to.equal(404)
          expect(response.body).is.not.empty
          expect(response.statusText).to.equal('Not Found');
          expect(response.body.message).to.equal('Totem id already exists');
        });

    });

    it('should not register when some field is empty', () => {

      cy.api_totem_emptyFields()
        .then((response) => {
          expect(response.status).to.equal(400)
          expect(response.body).is.not.empty
          expect(response.statusText).to.equal('Bad Request')
          expect(response.body.message).to.eql([
            "totemId should not be empty",
            "totemId must be longer than or equal to 3 characters",
            "email must be an email",
            "email must be longer than or equal to 3 characters",
            "email should not be empty",
            "password should not be empty",
            "password must be longer than or equal to 3 characters",
            "statusTotenPinPad must be a boolean value",
            "statusTotenPinPad should not be empty",
            "statusTotenPrinter must be a boolean value",
            "statusTotenPrinter should not be empty"
          ]);
          expect(response.body.error).to.equal('Bad Request')
        });

    });

  });
});
