describe('POST /partner', () => {
  it('edit partner successfully', () => {
    cy.api_partner_editById()
      .then((response) => {
        expect(response.status).to.equal(200)
        expect(response.body).is.not.empty
        expect(response.statusText).to.equal('OK');

        expect(response.body).to.have.property('fantasyName');
        expect(response.body.fantasyName).to.eq(response.body.fantasyName);

        expect(response.body).to.have.property('cnpjEin');
        expect(response.body.cnpjEin).to.eq(response.body.cnpjEin);

        expect(response.body).to.have.property('name');
        expect(response.body.name).to.eq(response.body.name);

        expect(response.body).to.have.property('address');
        expect(response.body.address).to.eq(response.body.address);

        expect(response.body).to.have.property('addressNumber');
        expect(response.body.addressNumber).to.eq(response.body.addressNumber);

        expect(response.body).to.have.property('addressZipCode');
        expect(response.body.addressZipCode).to.eq(response.body.addressZipCode);

        expect(response.body).to.have.property('cityId');
        expect(response.body.cityId).to.eq(response.body.cityId);

        expect(response.body).to.have.property('phone');
        expect(response.body.phone).to.eq(response.body.phone);

      });

  });
});
