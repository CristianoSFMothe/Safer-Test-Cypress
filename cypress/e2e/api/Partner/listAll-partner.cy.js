describe('GET /partner', () => {
  it('list all partner successfully', () => {
    cy.api_partner_listAll()
      .then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).is.not.empty
        expect(response.body[0]).to.have.property('id');
        expect(response.body[0]).to.have.property('fantasyName');
        expect(response.body[0]).to.have.property('cnpjEin');
        expect(response.body[0]).to.have.property('name');
        expect(response.body[0]).to.have.property('address');
        expect(response.body[0]).to.have.property('addressNumber');
        expect(response.body[0]).to.have.property('addressZipCode');
        expect(response.body[0]).to.have.property('addressZipCode');
        expect(response.body[0]).to.have.property('cityId');
        expect(response.body[0]).to.have.property('phone');
        expect(response.statusText).to.equal('OK');
      });

  });
});
