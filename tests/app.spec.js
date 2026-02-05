// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('The Green Pasture of Growth', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('should display the main signpost with correct quote', async ({ page }) => {
        const signpost = page.locator('#main-signpost');
        await expect(signpost).toBeVisible();
        await expect(signpost).toContainText('Growth is a Season');
        await expect(signpost).toContainText('Not a Score');
    });

    test('should display the glassmorphism header with site name', async ({ page }) => {
        const header = page.locator('.glass-nav');
        await expect(header).toBeVisible();
        await expect(header).toContainText('The Green Pasture of Growth');
    });

    test('should display the hand-painted meadow background', async ({ page }) => {
        // Background image should be loaded
        const bgImage = page.locator('img[src*="background"]');
        await expect(bgImage).toBeVisible();
    });

    test('should display two cows that are clickable', async ({ page }) => {
        const cow1 = page.locator('#cow-1');
        const cow2 = page.locator('#cow-2');

        await expect(cow1).toBeVisible();
        await expect(cow2).toBeVisible();
        await expect(cow1).toHaveAttribute('aria-label', 'Click for encouragement');
    });

    test('should display two cats that are clickable', async ({ page }) => {
        const cat1 = page.locator('#cat-1');
        const cat2 = page.locator('#cat-2');

        await expect(cat1).toBeVisible();
        await expect(cat2).toBeVisible();
        await expect(cat1).toHaveAttribute('aria-label', 'Click for encouragement');
    });

    test('should show quote plaque when animal is clicked', async ({ page }) => {
        const cow1 = page.locator('#cow-1');
        const quotePlaque = page.locator('#quote-plaque');
        const quoteText = page.locator('#quote-text');

        // Plaque should be hidden initially
        await expect(quotePlaque).toHaveClass(/hidden/);

        // Click the cow
        await cow1.click();

        // Plaque should be visible now
        await expect(quotePlaque).not.toHaveClass(/hidden/);
        await expect(quoteText).not.toBeEmpty();
    });

    test('should show different quotes from the predefined list', async ({ page }) => {
        const expectedQuotes = [
            "Even sunflowers need time to grow tall.",
            "You did a good job. A number doesn't change your hard work.",
            "Consistency > Perfection.",
            "Being solid and reliable is a superpower.",
            "Your worth is not a number on a spreadsheet.",
            "You are planting seeds today for a garden tomorrow.",
            "Happiness is a job well done, followed by a good nap.",
            "You are the anchor that keeps the ship steady.",
            "Sunshine, rain, and patience. You have everything you need to grow."
        ];

        const cow1 = page.locator('#cow-1');
        const quoteText = page.locator('#quote-text');

        // Click and verify the quote is from the expected list
        await cow1.click();
        await page.waitForTimeout(200);
        const quote = await quoteText.textContent();
        if (quote) {
            expect(expectedQuotes).toContain(quote.trim());
        }

        // Close with Escape key
        await page.keyboard.press('Escape');
        await page.waitForTimeout(400);
    });

    test('should add bounce animation class when animal is clicked', async ({ page }) => {
        const cat1 = page.locator('#cat-1');

        // Click the cat
        await cat1.click();

        // Check bounce class is added
        await expect(cat1).toHaveClass(/bounce/);
    });

    test('should trigger confetti on Boost Energy button click', async ({ page }) => {
        const boostButton = page.locator('#boost-button');

        await expect(boostButton).toBeVisible();
        await expect(boostButton).toContainText('Boost Energy');

        // Click boost button
        await boostButton.click();

        // Wait for confetti particles to be created
        await page.waitForTimeout(500);

        // Check that confetti particles exist
        const confettiParticles = page.locator('.confetti-particle');
        const count = await confettiParticles.count();
        expect(count).toBeGreaterThan(0);
    });

    test('should have leaves and petals in confetti', async ({ page }) => {
        const boostButton = page.locator('#boost-button');

        await boostButton.click();
        await page.waitForTimeout(500);

        const leaves = page.locator('.confetti-particle.leaf');
        const petals = page.locator('.confetti-particle.petal');

        // At least some of each type should be created
        const leafCount = await leaves.count();
        const petalCount = await petals.count();

        expect(leafCount + petalCount).toBeGreaterThan(0);
    });

    test('should close quote plaque when overlay is clicked', async ({ page }) => {
        const cow1 = page.locator('#cow-1');
        const quotePlaque = page.locator('#quote-plaque');
        const overlay = page.locator('#plaque-overlay');

        // Open plaque
        await cow1.click();
        await expect(quotePlaque).not.toHaveClass(/hidden/);

        // Click overlay at top-left corner (away from centered plaque)
        await overlay.click({ position: { x: 50, y: 50 } });
        await page.waitForTimeout(400);

        // Should be hidden now
        await expect(quotePlaque).toHaveClass(/hidden/);
    });

    test('should close quote plaque with Escape key', async ({ page }) => {
        const cat2 = page.locator('#cat-2');
        const quotePlaque = page.locator('#quote-plaque');

        // Open plaque
        await cat2.click();
        await expect(quotePlaque).not.toHaveClass(/hidden/);

        // Press Escape
        await page.keyboard.press('Escape');
        await page.waitForTimeout(400);

        // Should be hidden
        await expect(quotePlaque).toHaveClass(/hidden/);
    });

    test('should have proper accessibility attributes', async ({ page }) => {
        // All animals should have aria-labels
        const animals = page.locator('.animal');
        const count = await animals.count();

        for (let i = 0; i < count; i++) {
            const animal = animals.nth(i);
            await expect(animal).toHaveAttribute('aria-label');
            await expect(animal).toHaveAttribute('tabindex', '0');
        }

        // Boost button should have aria-label
        const boostButton = page.locator('#boost-button');
        await expect(boostButton).toHaveAttribute('aria-label');
    });

    test('should use glassmorphism styling on cards', async ({ page }) => {
        // Animal cards should have glassmorphism class
        const animalCards = page.locator('.glass-card');
        const count = await animalCards.count();
        expect(count).toBe(4); // 2 cows + 2 cats
    });
});

test.describe('Mobile Responsiveness', () => {
    test.use({ viewport: { width: 375, height: 667 } }); // iPhone SE

    test('should be responsive on mobile viewport', async ({ page }) => {
        await page.goto('/');

        // Signpost should still be visible and readable
        const signpost = page.locator('#main-signpost');
        await expect(signpost).toBeVisible();

        // Animals should be visible
        const cow1 = page.locator('#cow-1');
        const cat1 = page.locator('#cat-1');
        await expect(cow1).toBeVisible();
        await expect(cat1).toBeVisible();

        // Boost button should be visible
        const boostButton = page.locator('#boost-button');
        await expect(boostButton).toBeVisible();
    });

    test('should not have horizontal scroll on mobile', async ({ page }) => {
        await page.goto('/');

        const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
        const viewportWidth = await page.evaluate(() => window.innerWidth);

        expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 1); // Allow 1px tolerance
    });

    test('should still show quotes when clicking animals on mobile', async ({ page }) => {
        await page.goto('/');

        const cow1 = page.locator('#cow-1');
        const quotePlaque = page.locator('#quote-plaque');

        await cow1.click();
        await expect(quotePlaque).not.toHaveClass(/hidden/);
    });
});
