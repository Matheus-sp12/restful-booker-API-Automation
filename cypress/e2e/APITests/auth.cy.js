describe("Test Suit - Auth API Testing", () => {
  it("1 - POST credentials to aut endpoint with sucess", () => {
    cy.request({
      method: "POST",
      url: "/auth",
      body: {
        username: "admin",
        password: "password123",
      },
      headers: {
        "Content-Type": "application/json",
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("token");
      expect(response.body).not.to.be.empty;
      expect(response.body.token).to.be.a("string");
    });
  });

  it("2 - POST credentials to aut endpoint with sucess -  2° version", () => {
    let body = {
      username: "admin",
      password: "password123",
    };

    cy.postRequest(
      Cypress.env("auth_url"),
      { "Content-Type": "application/json" },
      body,
    ).then((response) => {
      debugger;
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("token").and.to.be.a("string");
      expect(response.body).not.to.be.empty;
      expect(response.body).to.have.property("token");
      expect(response.body.token).to.be.a("string");
      expect(response.body.token).not.to.be.empty;
      expect(response.body).to.have.property("token").and.to.be.a("string").and.not.to.be.empty;
      
    });
  });
});
