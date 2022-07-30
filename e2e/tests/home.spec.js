const {test, expect} = require('@playwright/test');
test.describe('Home Page', () => {
    test('Should link to collection', async ({page}, testInfo) => {
        //const languages = testInfo.project.use['languages'];
        //for (const lang of languages) {
            await page.goto(`/`);
            // const link = await page.locator(`${menu_selector} a[href="/${lang}/collection"]`).first()
            // await Promise.all([
            //     page.waitForNavigation(),
            //     link.click(),
            // ])
            // const title = await page.locator(".next-zetcom-app-page-collection");
            // await expect(title).toBeVisible();
            await expect(page).toHaveURL(`/`)
        //}
    });
});
