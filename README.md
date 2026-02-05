# The Green Pasture of Growth 🌻

A calming, supportive single-page web app with a Studio Ghibli-inspired aesthetic. Click on gentle creatures for words of encouragement.

![Preview](./assets/background.png)

## Features

- 🎨 **Hand-painted Ghibli-style meadow background**
- ✨ **Glassmorphism UI** - frosted-glass animal cards and quote modal
- 🐄 **Interactive animals** - click cows and cats for motivational quotes
- 🍃 **Boost Energy button** - triggers a celebration of falling leaves and petals
- 📱 **Fully responsive** - works on mobile and desktop

## Typography

- **Titles**: Amatic SC (tall, handwritten style)
- **Quotes & Body**: Mali (friendly, rounded cursive)

## Tech Stack

- HTML5 / CSS3
- Tailwind CSS
- Vanilla JavaScript
- Playwright (integration tests)

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/green-pasture-of-growth.git
cd green-pasture-of-growth

# Install dependencies
npm install

# Build Tailwind CSS
npm run build

# Start local server
npx serve
```

Open http://localhost:3000 in your browser.

### Development

```bash
# Watch for CSS changes
npm run dev
```

### Running Tests

```bash
# Run all tests
npm test

# Run tests with UI
npm run test:ui
```

## Project Structure

```
├── index.html          # Main HTML file
├── src/
│   ├── app.js          # JavaScript logic
│   └── input.css       # Tailwind source CSS
├── dist/
│   └── output.css      # Compiled CSS (generated)
├── assets/
│   └── meadow-bg.png   # Background image
├── tests/
│   └── app.spec.js     # Playwright tests
└── package.json
```

## Quotes

Click on any animal to see one of these encouraging messages:

- "Even sunflowers need time to grow tall."
- "You did a good job. A number doesn't change your hard work."
- "Consistency > Perfection."
- "Being solid and reliable is a superpower."
- "Your worth is not a number on a spreadsheet."
- "You are planting seeds today for a garden tomorrow."
- "Happiness is a job well done, followed by a good nap."
- "You are the anchor that keeps the ship steady."
- "Sunshine, rain, and patience. You have everything you need to grow."

## License

MIT
