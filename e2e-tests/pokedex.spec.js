const { test, describe, expect } = require('@playwright/test')

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })
  test('clicking a pokemon redirects to pokemon detail page',async ({ page }) => {
    await page.goto('')
    await page.getByText('squirtle').click()
    await expect(page.getByText('torrent')).toBeVisible()
  })
})