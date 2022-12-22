describe('You should not register in the following situations', () => {

    it('should not register when some field is empty', () => {

      cy.api_operational_base_emptyFields()
        .then((response) => {
          expect(response.status).to.equal(400)
          expect(response.body).is.not.empty
          expect(response.statusText).to.equal('Bad Request')
          expect(response.body.message).to.eql([
            "iataCode should not be empty",
            "address should not be empty",
            "addressNumber must be a number conforming to the specified constraints",
            "addressNumber should not be empty",
            "addressZipCode must be a number conforming to the specified constraints",
            "addressZipCode should not be empty",
            "type should not be empty",
            "type must be a valid enum value",
            "stopPointType should not be empty",
            "stopPointType must be a valid enum value",
            "qrCode should not be empty",
            "ratioArea must be a number conforming to the specified constraints",
            "maximumWaiting must be a number conforming to the specified constraints",
            "maximumWaiting should not be empty",
            "minimumWaiting must be a number conforming to the specified constraints",
            "minimumWaiting should not be empty",
            "enableAlert must be a boolean value",
            "enableAlert should not be empty",
            "cityId should not be empty"
          ]);
          expect(response.body.error).to.equal('Bad Request')
        });

    });

});
