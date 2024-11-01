# 3D Portfolio Website with React.js and Three.js

This project is a 3D portfolio website built using **React.js**, **Three.js**, and **React Three Fiber**. It showcases 3D models, animations, and interactive web design to create a visually appealing and modern portfolio. The tutorial was followed from [Build & Deploy an Amazing 3D Portfolio with React.js & Three.js](https://www.youtube.com/), and this project is a recreation with personal customizations.

## Table of Contents
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)

## Features
- Interactive 3D models and animations using **Three.js**
- Responsive design for all screen sizes
- Smooth animations and hover effects
- Integration with **React Three Fiber** for a more declarative 3D scene setup
- Use of modern web technologies like **Vite** and **Tailwind CSS**
- Dynamic lighting, camera controls, and materials for realistic effects
- Custom 3D models for showcasing portfolio items

## Demo
[Click Here](https://portfolio-3d-trananh.netlify.app/) to check the website

### Pictures

![image](https://github.com/user-attachments/assets/b8dad78c-aff1-42e9-83f7-9a79a08605d7)

![image](https://github.com/user-attachments/assets/ecb77429-cea3-4bdd-981d-de6e4d89627e)

![image](https://github.com/user-attachments/assets/991f9d7b-d654-4b4d-85a2-40c2f9a901e2)

![image](https://github.com/user-attachments/assets/c72692d7-7808-4352-95c9-45b1a03d8a95)


## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/3d-portfolio-website.git
   cd 3d-portfolio-website
2. **Install the dependencies**:
   ```bash
   npm install
3. **Start the development server**:
    ```bash
   npm run dev
    
## Technologies Used
- React.js – Frontend library for building the user interface
- Three.js – 3D graphics library for rendering 3D models and scenes
- React Three Fiber – React renderer for Three.js
- Vite – Fast build tool and development server
- Tailwind CSS – Utility-first CSS framework for styling
- GLTF Models – 3D models used in the project

## Project Structure
```bash
├── public/                  # Public assets like models and textures
├── src/                     # Main source code
│   ├── components/          # Reusable components (Navbar, Footer, etc.)
│   ├── sections/            # Page sections (Home, Projects, About, Contact)
│   ├── styles/              # Global and component-specific styles
│   ├── App.jsx              # Main app component
│   └── index.jsx            # Entry point
├── package.json             # Project configuration
└── vite.config.js           # Vite configuration
