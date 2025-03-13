# Image Directory Structure

This directory contains all the images used in the portfolio website. The images are organized into the following subdirectories:

## /about
- Contains profile images and other images related to the about section
- Recommended size for profile image: 800x800px
- File format: JPG or PNG
- Example: `profile.jpg`

## /projects
- Contains images for project showcases
- Recommended size: 1200x800px for landscape, 800x1200px for portrait
- File format: JPG or PNG
- Naming convention: `project-name-01.jpg`, `project-name-02.jpg`, etc.

## /hero
- Contains images for the hero/banner section
- Recommended size: 1920x1080px
- File format: JPG or PNG
- Example: `hero-background.jpg`

## General Guidelines
- Use descriptive file names
- Optimize images for web (compress without significant quality loss)
- Use lowercase letters and hyphens in filenames
- Keep original high-resolution versions backed up elsewhere

## Directory Structure

```
public/images/
├── projects/           # Project-specific images
│   ├── project1/      # Images for Project 1
│   │   ├── hero.jpg   # Main project image (1200x630px recommended)
│   │   ├── detail1.jpg
│   │   ├── detail2.jpg
│   │   └── mobile.jpg
│   └── project2/      # Images for Project 2
│       ├── hero.jpg
│       ├── detail1.jpg
│       └── mobile.jpg
├── about/             # Images for the About section
│   ├── profile.jpg    # Profile picture
│   └── background.jpg # Background image
└── hero/              # Hero section images
    ├── background.jpg # Hero background
    └── overlay.png    # Optional overlay elements
```

## Naming Conventions

1. Use lowercase letters and hyphens for file names
2. Use descriptive names that indicate the content
3. Include dimensions in the filename if specific sizes are required

Example:
- project1-hero-1200x630.jpg
- about-profile-square-400x400.jpg
- hero-background-full.jpg

## Recommended Image Sizes

- Project Hero Images: 1200x630px (2:1.05 ratio)
- Project Detail Images: 800x600px minimum
- Profile Picture: 400x400px (1:1 ratio)
- Hero Background: 1920x1080px (16:9 ratio)

## Image Optimization

Before adding images:
1. Compress them using tools like TinyPNG or ImageOptim
2. Use .jpg for photographs
3. Use .png for images requiring transparency
4. Use .webp when possible for better performance

## Usage in Next.js

To use these images in your components:

```jsx
// For static images
<Image
  src="/images/projects/project1/hero.jpg"
  alt="Project 1 Hero"
  width={1200}
  height={630}
/>

// For profile picture
<Image
  src="/images/about/profile.jpg"
  alt="Profile Picture"
  width={400}
  height={400}
/>
``` 