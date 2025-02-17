import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { BASEURL } from "../config";

Given("User navigates to MercadoLibre page", async function (this: any) {
  await this.page.goto(BASEURL);
});

When("User search for cars options", async function (this: any) {
  const searchInput = await this.page.waitForSelector('input[name="as_word"]');
  await searchInput.fill("autos");
  await this.page.keyboard.press("Enter");
  await this.page.waitForLoadState("networkidle");
});

Then("It should show all the results according to the search", async function (this: any) {
  const results = await this.page.$$(".ui-search-layout__item");
  expect(results.length).toBeGreaterThan(0);
});
