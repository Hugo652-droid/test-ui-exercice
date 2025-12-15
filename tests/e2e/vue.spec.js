import { test, expect } from '@playwright/test';


// See here how to get started:
// https://playwright.dev/docs/intro
test('visits the app root url', async ({ page }) => {
  //TODO: 1) les test pour vous si le site se lance correctement

  await expect(page.locator('h1')).toHaveText('You did it!');
})

test('click me button', async ({ page }) => {
  //TODO: 2) Créer un test qui clique sur le bouton "count"

  await expect(page.locator('p')).toHaveText('1')
})

test('explore pages', async ({page}) => {
  const user = {
    email: "pierre.petitroque@cailloux.ch",
    password: "Super_Pa$$w0rd"
  }
  await page.goto('/');

  //TODO: 3) Créer un test qui navigue vers la page "form", qui remplit le formulaire et le valide

  await expect(page.locator('h1')).toHaveText('Vous étes authentifié : pierre.petitroque@cailloux.ch')
})
