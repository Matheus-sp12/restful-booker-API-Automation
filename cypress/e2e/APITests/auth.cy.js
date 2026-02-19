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
    });
  });
});
