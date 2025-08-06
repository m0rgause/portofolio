# 🚀 Ahmad Baihaki Nur - Interactive Portfolio

An interactive, modern, and responsive portfolio website built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, **DaisyUI**, and **Framer Motion**. This portfolio showcases my skills as a Fullstack Developer with beautiful animations, smooth transitions, and an engaging user experience.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![Next.js](https://img.shields.io/badge/Next.js-15.0.3-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.1-38B2AC)

## ✨ Features

### 🎨 **Modern Design & Animations**
- **Smooth Framer Motion animations** with staggered reveals
- **Interactive hero section** with typing animation effect
- **Glassmorphism effects** and modern UI components
- **Responsive design** that works perfectly on all devices
- **Dark/Light mode toggle** with smooth transitions

### 🧩 **Interactive Components**
- **Animated project cards** with hover effects and 3D transforms
- **Skills showcase** with technology icons and smooth animations
- **Experience timeline** with professional work history
- **Contact form** with modern styling and validation
- **Scroll-to-top button** with fade-in/out animations
- **Loading screen** with progress bar and smooth transitions

### 🎯 **User Experience**
- **Smooth scrolling** between sections
- **Custom scrollbars** for better visual appeal
- **Accessibility features** with reduced motion support
- **Fast loading** with optimized images and components
- **SEO optimized** with proper meta tags and structure

### 💻 **Technical Features**
- **Type-safe TypeScript** implementation
- **Component-based architecture** for maintainability
- **Modern CSS** with Tailwind utilities and custom animations
- **Performance optimized** with Next.js 15 features
- **Mobile-first responsive design**

## 🛠️ Tech Stack

### **Frontend**
- [Next.js 15](https://nextjs.org/) - React framework with App Router
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [DaisyUI](https://daisyui.com/) - Tailwind CSS components
- [Framer Motion](https://www.framer.com/motion/) - Animation library

### **Icons & Assets**
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library
- [Simple Icons](https://simpleicons.org/) - Brand icons for technologies
- Custom SVG animations and graphics

### **Development Tools**
- ESLint - Code linting
- PostCSS - CSS processing
- Git - Version control

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/m0rgause/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── Hero.tsx           # Hero section with animations
│   ├── Skills.tsx         # Skills showcase
│   ├── Experience.tsx     # Work experience timeline
│   ├── ProjectCard.tsx    # Interactive project cards
│   ├── ThemeToggle.tsx    # Dark/light mode switcher
│   ├── LoadingScreen.tsx  # Loading animation
│   ├── ScrollToTop.tsx    # Scroll to top button
│   ├── ParticlesBackground.tsx # Animated background
│   └── navbar.tsx         # Navigation component
public/
├── assets/               # Images and static files
└── favicon.ico          # Site favicon
```

## 🎨 Design System

### **Color Palette**
- **Primary**: `hsl(var(--p))` - Main brand color
- **Secondary**: `hsl(var(--s))` - Accent color
- **Accent**: `hsl(var(--a))` - Highlight color
- **Base**: `hsl(var(--b1))` - Background colors

### **Typography**
- **Headings**: Geist Sans - Clean, modern font
- **Body**: Inter - Highly readable for content
- **Code**: Geist Mono - Monospace font

### **Animations**
- **Entrance**: Smooth fade-in with staggered children
- **Hover**: Scale and color transitions
- **Scroll**: Parallax and reveal effects
- **Loading**: Progressive enhancement

## 📱 Responsive Design

- **Mobile**: 375px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+
- **Large**: 1440px+

## 🚀 Deployment

This portfolio is deployed on GitHub Pages. To deploy:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

## 🔧 Customization

### **Changing Colors**
Edit the DaisyUI theme in `tailwind.config.ts`:

```typescript
daisyui: {
  themes: [
    {
      mytheme: {
        "primary": "#your-color",
        "secondary": "#your-color",
        // ... other colors
      },
    },
  ],
}
```

### **Adding New Sections**
1. Create a new component in `src/components/`
2. Add animations using Framer Motion
3. Import and use in your pages

### **Modifying Animations**
All animations use Framer Motion. Customize in component files:

```typescript
const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

Ahmad Baihaki Nur - [baihaki.dev@gmail.com](mailto:baihaki.dev@gmail.com)

- **LinkedIn**: [Ahmad Baihaki Nur](https://www.linkedin.com/in/ahmad-baihaki-nur-257803216/)
- **GitHub**: [@m0rgause](https://github.com/m0rgause)
- **Portfolio**: [Live Demo](https://m0rgause.github.io/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Framer** for the powerful animation library
- **Tailwind CSS** for the utility-first approach
- **DaisyUI** for beautiful components
- **React Icons** for the comprehensive icon set

---

⭐ **Star this repository if you found it helpful!**

Made with ❤️ by [Ahmad Baihaki Nur](https://github.com/m0rgause)
