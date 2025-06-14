# Realfy

A modern real estate platform built with Vue 3, TypeScript, and Vite.

## 🚀 Features

- Modern UI with Tailwind CSS
- Responsive design
- Interactive components with Swiper
- Smooth animations with Vue3 Marquee and GSAP
- Type-safe development with TypeScript

## 🛠️ Tech Stack

- **Frontend Framework:** Vue 3 with Composition API
- **Build Tool:** Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:**
  - Swiper for testimonials
  - Vue3 Marquee for agents
- **Animations:**
  - GSAP for scroll-triggered animations
  - Vue3 Marquee for continuous animations
- **Development Tools:**
  - TypeScript for type safety
  - Vue TSConfig for Vue-specific TypeScript configuration

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/rowleks/realfy.git
cd realfy
```

2. Install dependencies:

```bash
yarn install
```

3. Start the development server:

```bash
yarn dev
```

## 🏗️ Project Structure

```
realfy/
├── src/
│   ├── assets/      # Static assets
│   ├── components/  # Reusable Vue components
│   ├── layouts/     # Layout components
│   ├── utils/       # Utility functions
│   │   ├── animations/  # GSAP animation utilities
│   │   │   ├── base.ts  # Base animation utilities
│   │   │   └── [component].ts  # Component-specific animations
│   │   └── data/    # Data fetching utilities
│   ├── views/       # Page components
│   ├── App.vue      # Root component
│   └── main.ts      # Application entry point
├── public/          # Public static files
└── ...config files
```

## 🎨 Animation System

The project uses GSAP (GreenSock Animation Platform) for creating smooth, scroll-triggered animations. The animation system is modular and organized as follows:

### Base Animation Utilities (`base.ts`)

- Common animation functions and types
- ScrollTrigger configuration
- Animation creation helpers
- Cleanup utilities

### Component-Specific Animations

Each component has its own animation file in the `utils/animations` folder:

- `miniListing.ts` - Property listings animations
- `miniAbout.ts` - About section animations
- `miniBlogList.ts` - Blog section animations
- `categories.ts` - Property categories animations
- `contactSection.ts` - Contact section animations
- `metricsSection.ts` - Metrics section animations
- `processSection.ts` - Process section animations
- `agents.ts` - Agents section animations
- `testimonials.ts` - Testimonials section animations
- `faqSection.ts` - FAQ section animations

### Animation Features

- Scroll-triggered animations
- Staggered animations for lists and grids
- Fade and slide effects
- Scale transformations
- Responsive animation triggers
- Proper cleanup on component unmount

## 📸 Screenshots

### Hero Section

![Hero Section](https://raw.githubusercontent.com/rowleks/realfy/main/public/header.png)

### Property Listings

![Property Listings](https://raw.githubusercontent.com/rowleks/realfy/main/public/listings.png)

### Blog Section

![Blog Section](https://raw.githubusercontent.com/rowleks/realfy/main/public/blogs.png)

### FAQ Section

![FAQ Section](https://raw.githubusercontent.com/rowleks/realfy/main/public/faq.png)

### Footer

![Footer Section](https://raw.githubusercontent.com/rowleks/realfy/main/public/footer.png)

## 🚀 Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build

## 🔧 Configuration

The project uses several configuration files:

- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration
- `postcss.config.mjs` - PostCSS configuration
- `tailwind.config.js` - Tailwind CSS configuration

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

MIT License

Copyright (c) 2025 Realfy

## 👥 Contributing

I'd love your input! I want to make contributing to Realfy as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

### Any contributions you make will be under the MIT Software License

In short, when you submit code changes, your submissions are understood to be under the same [MIT License](http://choosealicense.com/licenses/mit/) that covers the project. Feel free to contact me if that's a concern.

### Report bugs using GitHub's [issue tracker](https://github.com/rowleks/realfy/issues)

I use GitHub issues to track public bugs. Report a bug by [opening a new issue](https://github.com/rowleks/realfy/issues/new); it's that easy!

### Write bug reports with detail, background, and sample code

**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can.
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

### Use a Consistent Coding Style

- Use TypeScript for type safety
- Follow Vue 3 Composition API best practices
- Use Tailwind CSS for styling
- 2 spaces for indentation rather than tabs
- You can try running `yarn lint` for style unification

### License

By contributing, you agree that your contributions will be licensed under its MIT License.
