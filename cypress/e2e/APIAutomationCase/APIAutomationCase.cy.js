describe("Create Pet and Get the Pet detail", () => {
  let createdPetID;

  before("POST request", () => {
    const requestBody = {
      id: Math.floor(Math.random() * 1000),
      category: {
        id: Math.floor(Math.random() * 1000),
        name: Math.random().toString(5),
      },
      name: Math.random().toString(5),
      photoUrls: ["string"],
      tags: [
        {
          id: Math.floor(Math.random() * 1000),
          name: Math.random().toString(5),
        },
      ],
      status: "available",
    };
    cy.request({
      method: "POST",
      url: "https://petstore.swagger.io/v2/pet",
      body: requestBody,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("id", requestBody.id);

      createdPetID = response.body.id;
      cy.log(`Created pet ID: ${createdPetID}`);
    });
  });

  it("GET request", () => {
    cy.request({
      method: "GET",
      url: `https://petstore.swagger.io/v2/pet/${createdPetID}`,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("id", createdPetID);
    });
  });
});
