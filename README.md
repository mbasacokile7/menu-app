# Menu App

![Menu UI](public/images/MENU_UI.png)

## Description

Menu App is a small React application that displays a list of restaurant menu items and lets users filter them by category. This project was built as a hands-on exercise for a React course to apply core concepts such as state management, toggling UI via buttons, passing and using props, component rendering, and rendering data from an array.

## Key Concepts Practiced

- **State management**: menu items are stored in component state (`useState`) and updated when a filter is applied.
- **Toggling / Filtering**: category buttons toggle which items are shown (including an `all` option).
- **Props**: parent (`App.jsx`) passes data and functions down to child components (`Categories`, `Menu`, `MenuItem`).
- **Component rendering & data mapping**: menu items are rendered using `Array.map` across `MenuItem` components.

## Features

- View menu items with image, title, price, and description
- Filter items by category (e.g., breakfast, lunch, shakes)
- Responsive, component-based layout suitable for learning React basics

## Tech Stack

- React (functional components)
- Vite (dev server / build)
- JavaScript, CSS

## Project Structure (important files)

```
src/
├── Components/
│   ├── Categories.jsx     # category buttons
│   ├── Menu.jsx           # list wrapper
│   ├── MenuItem.jsx       # single menu item
│   └── Title.jsx          # app title
├── App.jsx                # app root, state + filter logic
├── data.js                # sample menu data
└── index.css
public/
└── images/
	└── MENU_UI.png        # screenshot used above
```

## Running locally

Prerequisites: Node.js and npm or yarn

Install and run:

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Implementation Notes

- Categories are derived from the original `data.js` using a `Set` to ensure uniqueness, with `'all'` prepended for the full list.
- The filter function lives in `App.jsx` and filters the original data (not the current filtered state) to avoid losing the full dataset.

## Screenshot

The UI screenshot is included above. Place a snapshot at `public/images/MENU_UI.png` (or update the path in this file).

## Future Enhancements

- Add search and sort functionality
- Persist user selections (localStorage)
- Add animations for filtering transitions

## Credits

Built as part of a React course exercise to practice core React concepts.

## License

MIT
