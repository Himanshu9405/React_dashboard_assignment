# React Dashboard Project

## Overview
This project is a React-based dashboard application designed for efficient, scalable, and modern web development. It integrates tools like Tailwind CSS for styling and includes a production-ready build setup. 
The project includes the following key features:

 Dashboard Tab:
 
  -Charts for visual representation of monthly revenue along with export functionality in csv format.
  
  -A chart comparing actual sales vs. targeted sales along with export functionality in csv format.
  
  -A chart showing customer segment data.
  
  -Cards summarizing key data points.

 Settings Tab: 
 
  -Basic settings functionality (if applicable—add more if needed).

 Light/Dark Mode: 
 
  -Implemented using Tailwind CSS's dark mode feature, allowing users to toggle between light and dark themes seamlessly.

 React Lazy Loading: 
 
  -Implemented React Lazy loading to optimize the performmance of the React App.

## Features
- Modular React components for maintainability.
- Tailwind CSS for utility-first styling.
- Production build configuration.

## Setup Instructions

### Prerequisites
- **Node.js** (v16 or later recommended)
- **npm** or **yarn**

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Himanshu9405/React_dashboard_assignment.git

   ```
2. Navigate to the project directory:
   ```bash
   cd React_dashboard_assignment
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
   
### Development
Start the development server:
```bash
npm start
# or
yarn start
```
Access the app at `http://localhost:3000`.

### Production Build
Generate a production-ready build:
```bash
npm run build
# or
yarn build
```
The output will be available in the `build/` directory.

## Architecture Overview

### File Structure
- **`src/`**: Contains all source files, including:
  - `components/`: Reusable React components.
  - `pages/`: Page-level components.
  - `utils/`: Utility functions.
- **`public/`**: Static assets such as images and the main `index.html`.
- **`build/`**: Generated output after running the build command.

### Key Technologies
- **React**: Frontend framework for building user interfaces.
- **Redux Toolkit**: Npm Package Redux Toolkit is used for managing the global state.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Webpack** (via Create React App): Module bundler for efficient builds.

## Key Decisions and Trade-offs
1. **Create React App (CRA):**
   - Pros: Simplified setup, pre-configured environment.
   - Cons: Limited control over Webpack configuration without ejecting.
2. **Tailwind CSS:**
   - Pros: Rapid styling, avoids repetitive CSS classes.
   - Cons: Requires initial configuration and familiarity.

## Known Issues/Limitations
1. **Build Size:**
   - The production build size could be optimized further by customizing Webpack or using advanced tree-shaking techniques.
2. **Browser Compatibility:**
   - The app is tested on modern browsers but may have issues with older versions.

## Future Enhancements
- Add unit tests using Jest or React Testing Library.
- Integrate a CI/CD pipeline for streamlined deployments.

## Contributing
1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes and push to the branch.
4. Open a pull request.

## License
This project is licensed under the [MIT License](LICENSE).

---
For any issues or questions, please contact the maintainers at [himanshuagarwal9405@gmail.com].
