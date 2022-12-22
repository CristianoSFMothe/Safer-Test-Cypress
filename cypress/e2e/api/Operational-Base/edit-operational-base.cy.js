describe('PUT /operational-base', () => {
  it('edit operational base successfully', () => {
    cy.api_operational_base_editById()
      .then((response) => {
        expect(response.status).to.equal(200)
        expect(response.body).is.not.empty
        expect(response.statusText).to.equal('OK')

        expect(response.body).to.have.property('iataCode');
        expect(response.body.iataCode).to.eq(response.body.iataCode);

        expect(response.body).to.have.property('name');
        expect(response.body.name).to.eq(response.body.name);

        expect(response.body).to.have.property('address');
        expect(response.body.address).to.eq(response.body.address);

        expect(response.body).to.have.property('addressNumber');
        expect(response.body.addressNumber).to.eq(response.body.addressNumber);

        expect(response.body).to.have.property('addressZipCode');
        expect(response.body.addressZipCode).to.eq(response.body.addressZipCode);

        expect(response.body).to.have.property('type');
        expect(response.body.type).to.eq(response.body.type);

        expect(response.body).to.have.property('point');
        expect(response.body.point).to.eq(response.body.point);

        expect(response.body).to.have.property('stopPointType');
        expect(response.body.stopPointType).to.eq(response.body.stopPointType);

        expect(response.body).to.have.property('qrCode');
        expect(response.body.qrCode).to.eq(response.body.qrCode);

        expect(response.body).to.have.property('ratioArea');
        expect(response.body.ratioArea).to.eq(response.body.ratioArea);

        expect(response.body).to.have.property('maximumWaiting');
        expect(response.body.maximumWaiting).to.eq(response.body.maximumWaiting);

        expect(response.body).to.have.property('minimumWaiting');
        expect(response.body.minimumWaiting).to.eq(response.body.minimumWaiting);

        expect(response.body).to.have.property('enableAlert');
        expect(response.body.enableAlert).to.eq(response.body.enableAlert);

        expect(response.body).to.have.property('cityId');
        expect(response.body.cityId).to.eq(response.body.cityId);

      });

  });
});
