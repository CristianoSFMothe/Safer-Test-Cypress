describe('GET /operationa-base', () => {
  it('list all operational base successfully', () => {
    cy.api_operational_base_listAll()
      .then((response) => {
        expect(response.status).to.equal(200)
        expect(response.body).is.not.empty
        expect(response.statusText).to.equal('OK')
        expect(response.body[0]).to.have.property('id')
        expect(response.body[0]).to.have.property('iataCode')
        expect(response.body[0]).to.have.property('address')
        expect(response.body[0]).to.have.property('addressNumber')
        expect(response.body[0]).to.have.property('addressZipCode')
        expect(response.body[0]).to.have.property('type')
        expect(response.body[0]).to.have.property('point')
        expect(response.body[0]).to.have.property('stopPointType')
        expect(response.body[0]).to.have.property('qrCode')
        expect(response.body[0]).to.have.property('ratioArea')
        expect(response.body[0]).to.have.property('maximumWaiting')
        expect(response.body[0]).to.have.property('minimumWaiting')
        expect(response.body[0]).to.have.property('enableAlert')
        expect(response.body[0]).to.have.property('cityId')
      });

  });
});
