# Portfolio Template Documentation

Welcome to the Portfolio Template! This document provides essential information about the structure and navigation of the portfolio template. Feel free to modify and use this template in any way you want!

## Prequisites
Before you begin, ensure you have some knowledge of the following:

- NodeJS
- NPM
- React / Vue (latest verison)
- TypeScript
- Tailwind CSS

## Installation and Local Development

To set up the portfolio template on your local machine, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the root directory of the project in your terminal.
3. Run `npm install` to install all dependencies.
4. Start the development server by running:

   ```
   bash
   npm run dev  
   ```

## Project Structure 
The web-page sections have been split into components so that it is easier to keep track of modifications. Here's what the directory looks like along with a short description: 

- src 
    - assets
        - (necessary assets for web-page)
    
    - components
        - Button.tsx [Custom Button Component]
        - Experience.tsx [Experience Component]
        - Project.tsx [Project Component]
        - SideBarItem.tsx [SideBarItem Component]

    - layouts 
        - ExperiencePage.tsx 
            - Component used to display your experience using the 'experience' component
        - HomePage.tsx
            - Component used to display your name, greetings, and current position 
        - PageHeader.tsx
            - Component used to display a navigation bar to sections in the web-page
        - ProjectsPage.tsx
            - Component used to display your projects using the 'project' component 
        - SideBar.tsx
            - Component used to display a simple sidebar with some buttons for links or info
        - SkillsPage.tsx
            - Component used to display your skills using the 'skill' component

## Editing the Portfolio 

Start by navigating to <ins>App.tsx</ins>. This file outlines the overall structure of the portfolio. Here you can modify or swap out layout components as needed. 

From there you can navigate to each individual layout and then to the components where you can add your own components or expand on existing ones. I've also made some additional changes to the [tailwind.config.js] file as well as the main [index.css] file. Here are some changes that you can make in either one:

- tailwind.config.js
    - Add custom colors
    - Add custom animations

- index.css
    - Modify scroll bar to be used on webpage 

## Deployment

When you're ready to build the portfolio for production, run:

    ``` 
    bash
    npm run build
    ```

This command creates a dist directory with optimized files ready for deployment.

# Conclusion

Hope you enjoy the template and have fun making your own portfolio! I hope this can at inspire others to create their own unique portfolios! 