# Harvard University 2005 Website Replica

A modern React recreation of Harvard University's website from 2005, built with contemporary development practices while maintaining the original design aesthetic.

## Project Overview

This project recreates the Harvard University homepage as it appeared on June 30, 2005, using modern React with TypeScript. The design faithfully reproduces the original layout, typography, and visual elements while implementing clean, maintainable code with reusable components.

## Features

- ⚛️ **Modern React 18** with TypeScript
- 🏗️ **Component-based Architecture** - Each feature is a separate, reusable component
- 📱 **Responsive Design** - Works on modern devices while maintaining 2005 aesthetics
- 🎨 **CSS Modules** - Scoped styling with no inline styles
- 🔧 **Vite** - Fast development and build tooling
- 📁 **Clean File Structure** - No file exceeds 200 lines of code
- 🎯 **TypeScript** - Full type safety throughout the application

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header/
│   │   ├── Navigation/
│   │   ├── MainContent/
│   │   └── Footer/
│   ├── sections/
│   │   ├── FeaturedSection/
│   │   ├── SchoolsSection/
│   │   └── NewsSection/
│   └── ui/
│       ├── HarvardShield/
│       ├── TopNavigation/
│       ├── QuickLinks/
│       └── NewsItem/
├── styles/
│   └── global.css
├── App.tsx
└── main.tsx
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd harvard-2005-replica
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:3000`

### Building for Production

```bash
npm run build
```

## Design Principles

- **Component Separation**: Each feature is built as a separate, reusable component
- **Clean Code**: Files are kept under 200 lines with meaningful variable and function names
- **TypeScript Types**: All variables and functions are properly typed
- **No Inline Styles**: All styling is moved to separate CSS files
- **Responsive**: Modern responsive design while preserving 2005 aesthetics

## Original Design Reference

This project recreates the Harvard University homepage from the Wayback Machine:
https://web.archive.org/web/20050630235916/http://www.harvard.edu/

## Assets

The `public/images/` directory should contain period-appropriate images including:
- Harvard shield/logo
- Navigation bullet points
- Featured research images
- Staff photos

## Development Guidelines

- Create new components for each new feature
- Maintain clean, readable code with comments for complex sections
- Test components separately before integration
- Use Git versioning and commit regularly
- Follow TypeScript best practices

## License

This project is for educational and demonstration purposes, recreating a historical website design.
