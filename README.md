# Vanessa Cuevas Arroyo - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features dark/light mode, smooth animations, and a professional design showcasing software engineering expertise.

## 🌟 Live Demo

**Deployed Site**: [https://deluxe-sawine-db8a1c.netlify.app](https://deluxe-sawine-db8a1c.netlify.app)

## 🚀 Features

- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Dark/Light Mode**: Toggle between themes with persistent preference
- **Smooth Animations**: Framer Motion-inspired animations and micro-interactions
- **Modern UI**: Clean, professional design with gradient accents
- **Performance Optimized**: Built with Vite for fast loading and development
- **Accessibility**: WCAG compliant with proper semantic HTML
- **SEO Optimized**: Meta tags and structured content

## 🛠️ Tech Stack

### Core Technologies
- **React 18.3.1** - Modern React with hooks and functional components
- **TypeScript 5.5.3** - Type-safe JavaScript for better development experience
- **Vite 5.4.2** - Fast build tool and development server

### Styling & UI
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Lucide React 0.344.0** - Beautiful, customizable icons
- **PostCSS 8.4.35** - CSS processing with Autoprefixer

### Routing & Navigation
- **React Router DOM 7.7.1** - Client-side routing for single-page application

### Development Tools
- **ESLint 9.9.1** - Code linting and formatting
- **TypeScript ESLint 8.3.0** - TypeScript-specific linting rules
- **Autoprefixer 10.4.18** - Automatic CSS vendor prefixing

## 📦 Installation & Setup

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Local Development

1. **Clone the repository** (once you've created it on GitHub):
```bash
git clone https://github.com/YOUR_USERNAME/vanessa-portfolio.git
cd vanessa-portfolio
```

2. **Install dependencies**:
```bash
npm install
```

3. **Start development server**:
```bash
npm run dev
```

4. **Open in browser**:
Navigate to `http://localhost:5173`

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## 🏗️ Project Structure

```
src/
├── components/           # React components
│   ├── About.tsx        # About section with highlights
│   ├── Contact.tsx      # Contact form and information
│   ├── Experience.tsx   # Professional timeline
│   ├── Footer.tsx       # Site footer with links
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Landing section
│   ├── Projects.tsx     # Project showcase with modal
│   └── Skills.tsx       # Technical skills grid
├── contexts/            # React contexts
│   └── ThemeContext.tsx # Dark/light theme management
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles and Tailwind imports

public/
├── CV_VaneCuevas_2025.pdf    # Resume download
├── 996f0b67-852e-4dc8-a400-045c803d7053.jpeg  # Profile image
└── vite.svg                  # Vite logo
```

## 🎨 Design System

### Color Palette
- **Primary**: Purple gradient (`from-purple-600 to-violet-600`)
- **Secondary**: Various purple shades for accents
- **Neutral**: Gray scale for text and backgrounds
- **Success**: Green for positive states
- **Dark Mode**: Comprehensive dark theme support

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800, 900
- **Responsive**: Fluid typography scaling

### Animations
- **Fade In**: Staggered entrance animations
- **Hover Effects**: Smooth transitions on interactive elements
- **Theme Toggle**: Seamless dark/light mode transitions

## 🚀 Deployment Guide

### Option 1: Netlify (Recommended)

#### Automatic Deployment from GitHub:

1. **Create GitHub Repository**:
```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial portfolio website"

# Add remote origin (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/vanessa-portfolio.git

# Push to GitHub
git push -u origin main
```

2. **Deploy to Netlify**:
   - Go to [Netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository
   - Set build settings:
     - **Build command**: `npm run build`
     - **Publish directory**: `dist`
   - Click "Deploy site"

3. **Automatic Updates**:
   - Any push to the main branch will trigger automatic redeployment
   - Check deployment status in Netlify dashboard

#### Manual Deployment:

1. **Build the project**:
```bash
npm run build
```

2. **Deploy dist folder**:
   - Drag and drop the `dist` folder to Netlify
   - Or use Netlify CLI: `netlify deploy --prod --dir=dist`

### Option 2: Vercel

1. **Install Vercel CLI**:
```bash
npm i -g vercel
```

2. **Deploy**:
```bash
vercel --prod
```

### Option 3: GitHub Pages

1. **Install gh-pages**:
```bash
npm install --save-dev gh-pages
```

2. **Add to package.json**:
```json
{
  "scripts": {
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://YOUR_USERNAME.github.io/vanessa-portfolio"
}
```

3. **Deploy**:
```bash
npm run build
npm run deploy
```

## 🔄 Development Workflow

### Making Changes

1. **Create feature branch**:
```bash
git checkout -b feature/new-feature
```

2. **Make changes and test**:
```bash
npm run dev  # Test locally
npm run build  # Test production build
```

3. **Commit and push**:
```bash
git add .
git commit -m "Add new feature"
git push origin feature/new-feature
```

4. **Create Pull Request** on GitHub

5. **Merge to main** - This will trigger automatic deployment

### Monitoring Deployments

- **Netlify**: Check dashboard at [app.netlify.com](https://app.netlify.com)
- **Build logs**: View detailed build and deployment logs
- **Preview deployments**: Each PR gets a preview URL
- **Rollback**: Easy rollback to previous deployments

## 🔧 Configuration

### Environment Variables
Currently, no environment variables are required. All configuration is handled through:
- `tailwind.config.js` - Tailwind CSS configuration
- `vite.config.ts` - Vite build configuration
- `tsconfig.json` - TypeScript configuration

### Customization

#### Adding New Sections:
1. Create component in `src/components/`
2. Import and add to `App.tsx`
3. Add navigation link in `Header.tsx`

#### Updating Content:
- **Personal Info**: Update in respective components
- **Projects**: Modify `projects` array in `Projects.tsx`
- **Skills**: Update `skillCategories` in `Skills.tsx`
- **Experience**: Modify `experiences` array in `Experience.tsx`

#### Styling Changes:
- **Colors**: Update Tailwind classes or extend in `tailwind.config.js`
- **Fonts**: Change Google Fonts import in `index.html`
- **Animations**: Modify Tailwind animation classes

## 📱 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile**: iOS Safari, Chrome Mobile, Samsung Internet
- **Responsive**: Breakpoints at 768px (md) and 1024px (lg)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Vanessa Cuevas Arroyo**
- Email: vanessa.cuevas@example.com
- LinkedIn: [linkedin.com/in/vanecuevar](https://www.linkedin.com/in/vanecuevar/)
- GitHub: [github.com/vanecuevas](https://github.com/vanecuevar98)

---

**Built with ❤️ and lots of coffee** ☕

*Last updated: January 2025*