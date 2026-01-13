# Leavewise - Annual Leave Planner

A beautiful, single-page web application that helps you plan your annual leave for a given year in the UK.

## Features

- **Year-at-a-glance calendar** - View your entire year in one scrollable view
- **Drag to select leave** - Click and drag across dates to select leave periods
- **Live ROI calculation** - See how many leave days you're using vs total days off gained
- **UK Bank Holidays** - Automatically includes bank holidays for England & Wales or Scotland
- **Custom working days** - Configure your working week (Mon-Fri by default)
- **Persistent storage** - All data saved to localStorage
- **Export options** - Generate copyable message for your manager or export to CSV

## Deployment on Render

### Static Site Deployment

1. **Push to GitHub** (or connect your existing repo)

2. **Create a new Static Site on Render**
   - Go to [render.com](https://render.com)
   - Click "New" → "Static Site"
   - Connect your repository

3. **Configure the Static Site**
   - **Name**: `leavewise` (or your preferred name)
   - **Branch**: `main`
   - **Build Command**: Leave empty (no build step needed)
   - **Publish Directory**: `.` (root directory)

4. **Deploy**
   - Click "Create Static Site"
   - Render will deploy your site and provide a URL

### Local Development

Simply open `index.html` in your browser - no build tools or server required.

## Files

```
├── index.html    # Main HTML structure
├── styles.css    # Dark glassmorphic theme
├── app.js        # All application logic
└── README.md     # This file
```

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## License

MIT
