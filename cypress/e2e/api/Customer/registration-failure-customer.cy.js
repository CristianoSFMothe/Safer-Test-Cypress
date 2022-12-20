describe('You should not register in the following situations', () => {
  context('how much the email already exists', () => {

    it('should not register when the email already exists', () => {

      cy.api_customer_emailExisting()
        .then((response) => {
          expect(response.status).to.equal(404)
          expect(response.body).is.not.empty
          expect(response.statusText).to.equal('Not Found');
          expect(response.body.message).to.equal('Email already exists');
        });

    });

    it('should not register when the token already exists', () => {

      cy.api_customer_tokenExisting()
        .then((response) => {
          expect(response.status).to.equal(404)
          expect(response.body).is.not.empty
          expect(response.statusText).to.equal('Not Found');
          expect(response.body.message).to.equal('token Authentication already exists');
        });

    });

    it('should not register when some field is empty', () => {

      cy.api_customer_emptyFields()
        .then((response) => {
          expect(response.status).to.equal(400)
          expect(response.body).is.not.empty
          expect(response.statusText).to.equal('Bad Request')
          expect(response.body.message).to.eql([
            "firstName should not be empty",
            "lastName should not be empty",
            "email must be an email",
            "email should not be empty",
            "phone should not be empty",
            "tokenAuthentication should not be empty"
          ]);
          expect(response.body.error).to.equal('Bad Request')
        });

    });

  });
});
