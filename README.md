# Aureliano Ceballos - Portfolio

A modern, responsive portfolio website showcasing my work as a Full-Stack Developer. Built with React and Framer Motion for smooth animations and exceptional user experience.

## 🌟 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Fully responsive across all devices and screen sizes
- **Interactive Elements**: Hover effects, smooth scrolling, and animated components
- **Contact Form**: Functional contact form with validation and Formspree integration
- **Project Showcase**: Detailed project presentations with technology stacks
- **Skills Visualization**: Interactive skill progress bars and technology categories
- **Performance Optimized**: Fast loading times and optimized animations

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **Framer Motion** - Smooth animations and transitions
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Comprehensive icon library

### Form Handling
- **Formspree** - Contact form backend service
- **Form Validation** - Real-time client-side validation

### Deployment
- **Vercel** - Static site hosting with proxy configuration
- **GitHub** - Version control and project management

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/aurelianno/aurelianoceballos-portfolio.git
   cd aurelianoceballos-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the portfolio

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx      # Navigation header
│   ├── Footer.jsx      # Site footer
│   ├── LoadingSpinner.jsx # Loading component
│   └── ScrollToTop.jsx # Scroll to top button
├── pages/              # Page components
│   ├── Home.jsx        # Main home page
│   └── NotFound.jsx    # 404 error page
├── sections/           # Main content sections
│   ├── Hero.jsx        # Landing section
│   ├── About.jsx       # About me section
│   ├── Skills.jsx      # Technical skills
│   ├── Projects.jsx    # Project showcase
│   └── Contact.jsx     # Contact form
├── assets/             # Static assets
│   └── images/         # Image files
├── App.jsx             # Main app component
└── main.jsx            # Application entry point
```

## 🌐 Deployment Architecture

This portfolio uses a sophisticated deployment setup:

- **Portfolio**: `aurelianoceballos.com` (Vercel)
- **TaskTracker+**: `aurelianoceballos.com/tasktracker` (proxied to Render)
- **Professional URL structure** with seamless integration

### Proxy Configuration

The portfolio includes Vercel proxy configuration to seamlessly integrate deployed applications:

```json
{
  "rewrites": [
    {
      "source": "/tasktracker/:path*",
      "destination": "https://tasktracker-plus.onrender.com/:path*"
    }
  ]
}
```

## 🎨 Customization

### Personal Information
Update the following files to customize your portfolio:

- **Personal Details**: Edit `src/sections/About.jsx` and `src/sections/Hero.jsx`
- **Skills**: Modify the `skillCategories` array in `src/sections/Skills.jsx`
- **Projects**: Update the `projects` array in `src/sections/Projects.jsx`
- **Contact Info**: Change contact details in `src/sections/Contact.jsx` and `src/components/Footer.jsx`

### Styling
- **Colors**: Modify Tailwind classes throughout components
- **Animations**: Adjust Framer Motion variants in each component
- **Layout**: Update responsive breakpoints and grid layouts

### Form Configuration
To use your own Formspree endpoint:

1. Create a form at [Formspree.io](https://formspree.io)
2. Replace the form endpoint in `src/sections/Contact.jsx`:
   ```javascript
   const response = await fetch("YOUR_FORMSPREE_ENDPOINT", {
   ```

## 🚀 Deployment

### Vercel (Current Setup)

Your portfolio is currently deployed on Vercel. The deployment is automatically configured:

1. **Automatic Deployments**
   - Connected to your GitHub repository
   - Automatic deployments on every push to main branch
   - Preview deployments for pull requests

2. **Build Configuration**
   - Build command: `npm run build`
   - Output directory: `dist`
   - Framework preset: Vite

3. **Custom Domain**
   - Your custom domain is automatically configured
   - SSL certificates are handled automatically

### Alternative Platforms

The project can be deployed to other static hosting services:
- **Netlify**: Connect GitHub repository with similar build settings
- **GitHub Pages**: Use GitHub Actions for deployment
- **Firebase Hosting**: Use Firebase CLI

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Performance Features

- **Lazy Loading**: Images and components load efficiently
- **Optimized Animations**: Smooth 60fps animations with Framer Motion
- **Minimal Bundle**: Optimized build size for fast loading
- **SEO Ready**: Proper meta tags and semantic HTML
- **Proxy Integration**: Seamless app integration without separate domains

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: ceballos4@outlook.com
- **Phone**: 602-316-4018
- **LinkedIn**: [Aureliano Ceballos](https://www.linkedin.com/in/aureliano-ceballos-17b085186/)
- **GitHub**: [@aurelianno](https://github.com/aurelianno)

## 🙏 Acknowledgments

- **Framer Motion** for smooth animations
- **Tailwind CSS** for utility-first styling
- **React Icons** for comprehensive icon library
- **Formspree** for contact form functionality

---