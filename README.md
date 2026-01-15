<p align="center">
  <img src="main_logo.png" alt="Timewell Logo" width="400">
</p>

# Timewell - Annual Leave Planner

A beautiful, intuitive web application for planning your annual leave with maximum efficiency. Designed for UK workers who want to visualise their year ahead and make the most of their holiday allowance.

**Live at: [timewell.uk](https://timewell.uk)**

## Why Timewell?

Planning annual leave shouldn't require wrestling with clunky HR systems or confusing spreadsheets. Timewell was built out of frustration with:

- **Complex HR portals** - Workday, SAP, and other enterprise systems that make simple tasks complicated
- **Lack of visualisation** - Most tools show you a list, not a calendar view of your year
- **No efficiency insights** - Nobody tells you how to maximise your days off by leveraging weekends and bank holidays

Timewell solves all of this with a clean, visual interface that shows your entire year at a glance.

## Features

### Core Functionality
- **Year-at-a-glance calendar** - See your entire year in one scrollable view with clear month separation
- **Click-to-select leave** - Click a start date, then click an end date to book leave. Simple.
- **Drag selection** - Or drag across dates for quick selection
- **UK Bank Holidays** - Automatically includes bank holidays for England & Wales or Scotland (2024-2029)
- **Custom working days** - Configure your working week (Mon-Fri by default, or any combination)

### ROI Insights
- **Live ROI calculation** - See your "Return on Investment" as you plan
- **Days off gained** - Understand how many actual days off you get vs leave days used
- **Smart weekend bridging** - The ROI calculation automatically includes connected weekends and bank holidays

### Practical Tools
- **Generate Plan** - Export a clean list of dates to book with your line manager
- **Manager Message** - Auto-generate a polite email requesting your leave
- **Persistent storage** - All data saved locally in your browser
- **Undo support** - Made a mistake? Ctrl+Z to undo

### Visual Polish
- **Dark glassmorphic theme** - Easy on the eyes, inspired by Apple and Linear design
- **Today highlighting** - Always know where you are in the year
- **Past day dimming** - Focus on what's ahead
- **Alternating month colours** - Easily distinguish month boundaries

## How ROI Works

ROI (Return on Investment) shows how efficiently you're using your leave days.

**Formula:** `Total Days Off / Leave Days Used`

For example:
- Take Thursday and Friday off before a weekend
- You use **2 leave days** but get **4 days off** (Thu, Fri, Sat, Sun)
- ROI = 4/2 = **2.0x**

The calculation automatically extends to include:
- Connected weekends before/after your leave
- Bank holidays that touch your leave period
- Your configured non-working days

## Deployment

### Hosted on Cloudflare Pages

Timewell is hosted on Cloudflare Pages at [timewell.uk](https://timewell.uk).

To deploy your own instance:

1. Fork or clone this repository
2. Connect to Cloudflare Pages
3. Configure:
   - **Build command:** (leave empty - no build step)
   - **Build output directory:** `/` (root)
4. Deploy

### Local Development

Simply open `index.html` in your browser - no build tools, no server, no dependencies.

```bash
# Clone the repo
git clone https://github.com/yourusername/timewell.git

# Open in browser
open index.html
```

## Files

```
timewell/
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

## Privacy

All data is stored locally in your browser's localStorage. Nothing is sent to any server. Your leave plans stay on your device.

## Contributing

Contributions welcome! Feel free to open issues or submit pull requests.

## Credits

Designed and built by **Hal Wall** - Data Engineer & Graphic Designer

If you find Timewell useful, consider [buying me a coffee](https://buymeacoffee.com/halwall)!

## License

MIT
