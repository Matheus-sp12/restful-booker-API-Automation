describe("Test suit - Booking API Testing", () => {
  it("1 - GET all bookings", () => {
    cy.request({
      method: "GET",
      url: "/booking",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an("array");
      expect(response.body).to.have.length.at.least(1);
      expect(response.body[0]).to.have.property("bookingid");
    });
  });

  it("2 - GET booking by firsname", () => {
    cy.request({
      method: "GET",
      url: "/booking",
      qs: {
        firstname: "test",
      },
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an("array");
    });
  });

  it("4 - GET booking by id", () => {
    cy.request({
      method: "GET",
      url: "/booking/1",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.headers).to.have.property(
        "content-type",
        "application/json; charset=utf-8",
      );
      expect(response.body).to.have.property("firstname").and.to.be.a("string");
      expect(response.body).to.have.property("lastname").and.to.be.a("string");
      expect(response.body)
        .to.have.property("totalprice")
        .and.to.be.a("number");
      expect(response.body)
        .to.have.property("depositpaid")
        .and.to.be.a("boolean");
      expect(response.body)
        .to.have.property("bookingdates")
        .and.to.be.an("object");
      expect(response.body.bookingdates)
        .to.have.property("checkin")
        .and.to.be.a("string");
      expect(response.body.bookingdates)
        .to.have.property("checkout")
        .and.to.be.a("string");
    });
  });

  it.only("5 - creating a new booking with sucess", () => {
    cy.request({
      method: "POST",
      url: "/booking",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        firstname: "test",
        lastname: "user",
        totalprice: 100,
        depositpaid: true,
        bookingdates: {
          checkin: "2023-01-01",
          checkout: "2023-01-02",
        },
        additionalneeds: "Breakfast",
      },
    })
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.headers).to.have.property(
          "content-type",
          "application/json; charset=utf-8",
        );
        expect(response.body).to.be.an("object");
        expect(response.body)
          .to.have.property("bookingid")
          .and.to.be.a("number");
      });
  });
});
