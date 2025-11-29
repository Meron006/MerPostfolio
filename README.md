# Mer Portfolio Website

A modern, responsive portfolio website built with React, TailwindCSS, and Vite.

## Features

- ✨ Modern, clean design with premium aesthetics
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎨 TailwindCSS for styling
- ⚡ Fast performance with Vite
- 🧩 Component-based architecture
- 🎯 ATS-friendly content
- 🔍 SEO optimized

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization Guide

### 1. Personal Information

**Hero Section** (`src/components/Hero.jsx`):
- Edit `name`, `title`, `tagline`, and `description`
- Update `socialLinks` array with your social media URLs
- Modify `techStack` array to show your technologies

**Navbar** (`src/components/Navbar.jsx`):
- Change the brand name in the logo section
- Modify `navItems` array to customize navigation

**Footer** (`src/components/Footer.jsx`):
- Update `socialLinks` array
- Change copyright text

### 2. About Page

**Bio** (`src/pages/About.jsx`):
- Edit the `bio` text to reflect your professional background
- Update the `timeline` array with your work experience

**Skills** (`src/components/SkillsGrid.jsx`):
- Modify `technicalSkills` array (name and proficiency level)
- Update `softSkills` array

### 3. Projects

**Projects List** (`src/pages/Projects.jsx`):
- Edit the `projects` array to add/remove/modify projects
- Each project should have:
  - `title`: Project name
  - `description`: Short description
  - `image`: Image URL (or `null` for placeholder)
  - `tech`: Array of technologies used
  - `features`: Array of feature strings
  - `github`: GitHub repository URL
  - `demo`: Live demo URL (optional, can be `null`)

### 4. Contact Page

**Contact Form** (`src/pages/Contact.jsx`):
- Update the `email` variable with your email address
- Modify the availability message
- Update social media links in the contact information section

**Note**: The contact form currently simulates submission. To make it functional, you'll need to:
1. Set up a backend API endpoint
2. Update the `handleSubmit` function to send data to your API
3. Or use a service like Formspree, EmailJS, or similar

### 5. Styling

**Colors** (`tailwind.config.js`):
- Modify the `primary` color palette to match your brand
- The current theme uses a blue color scheme

**Global Styles** (`src/index.css`):
- Customize base styles and utilities

## Project Structure

```
MerPortfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Layout.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectCard.jsx
│   │   └── SkillsGrid.jsx
│   ├── pages/          # Page components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   └── Projects.jsx
│   ├── App.jsx         # Main app component with routing
│   ├── main.jsx        # React entry point
│   └── index.css       # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Technologies Used

- **React 18** - UI library
- **React Router** - Client-side routing
- **TailwindCSS** - Utility-first CSS framework
- **Vite** - Build tool and dev server

## Tips for ATS Optimization

1. Use clear, descriptive section headings
2. Include relevant keywords naturally in your content
3. Keep formatting simple and clean
4. Use standard HTML structure
5. Ensure all links are functional

## Deployment

### Vercel

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Vite and configure the build

### Netlify

1. Push your code to GitHub
2. Import your repository on Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### GitHub Pages

1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Add to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
3. Run `npm run deploy`

## License

This project is open source and available for personal use.

## Support

For questions or issues, please open an issue on GitHub or contact the developer.

