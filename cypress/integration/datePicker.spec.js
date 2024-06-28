const startDate = "13";
const endDate = "31";
const year = "2020";
const month = "May";

describe("Testing DatePicker Object", () => {
  it("Testing", () => {
    cy.visit("https://material.angular.io/components/datepicker/overview");

    cy.get("#date-range-picker-overview").scrollIntoView();
    cy.xpath("(//button[@aria-label='Open calendar'])[3]")
      .scrollIntoView()
      .click({ force: true });

    cy.xpath(
      "(//button[@aria-label='Choose month and year']//span[contains(text(), '2024')])[1]"
    )
      .scrollIntoView()
      .click({
        force: true,
      });

    cy.xpath(`//button[@aria-label='${year}']`)
      .scrollIntoView()
      .click({ force: true });

    cy.xpath(`//button[@aria-label='${month} ${year}']`)
      .scrollIntoView()
      .click({ force: true });

    cy.get("body").then(($body) => {
      const button1 = $body.find(
        `button[aria-label='${month} ${startDate}, ${year}']`
      );
      const button2 = $body.find(
        `button[aria-label='${month} ${endDate}, ${year}']`
      );
      cy.log(button1.length);
      cy.log(button2.length);

      if (button1.length == 0 || button2.length == 0) {
        cy.log("Enter valid startDate and endDate");
      } else {
        cy.xpath(`//button[@aria-label='${month} ${startDate}, ${year}']`)
          .scrollIntoView()
          .click({ force: true });

        // Select the end date
        cy.xpath(`//button[@aria-label='${month} ${endDate}, ${year}']`)
          .scrollIntoView()
          .click({ force: true });
      }
    });
  });
});
