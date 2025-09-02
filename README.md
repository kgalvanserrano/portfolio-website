# Developer Portfolio

A modern, responsive developer portfolio built with React, TypeScript, Vite, and Tailwind CSS. Originally created with GitHub Spark and now ready for deployment on your own domain.

## 🚀 Features

- Modern React 19 with TypeScript
- Responsive design with Tailwind CSS
- Animated components with Framer Motion
- Skills showcase with progress indicators
- Project portfolio section
- Contact information and social links
- Dark/Light theme support
- GitHub integration ready

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Phosphor Icons
- **UI Components**: Radix UI
- **Animations**: Framer Motion

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/kgalvanserrano/developer-portfolio.git
cd developer-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 🌐 Deployment Options

This project is configured for multiple hosting platforms. Choose the one that works best for you:

### Option 1: Vercel (Recommended)

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts
4. Your site will be live at `https://your-project.vercel.app`

Or connect your GitHub repository to Vercel for automatic deployments.

### Option 2: Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

Or connect your GitHub repository to Netlify for automatic deployments.

### Option 3: GitHub Pages

1. Enable GitHub Pages in your repository settings
2. The GitHub Actions workflow will automatically deploy on push to main
3. Your site will be available at `https://yourusername.github.io/repository-name`

### Option 4: Railway

1. Connect your GitHub repository to [Railway](https://railway.app)
2. The `railway.toml` configuration will handle the deployment automatically

### Option 5: Manual Deployment

For any static hosting provider:

1. Run: `npm run build`
2. Upload the contents of the `dist` folder to your hosting provider
3. Configure your web server to serve `index.html` for all routes

## 🎨 Customization

### Personal Information
Edit the following in `src/App.tsx`:
- Contact information (email, phone, location)
- Social media links
- Professional experience
- Skills and technologies
- Project portfolio

### Styling
- Modify `tailwind.config.js` for theme customization
- Update `src/styles/theme.css` for custom CSS variables
- Adjust component styles in the respective files

### GitHub Integration
To enable GitHub repository fetching:
1. Add your GitHub username in the contact information
2. The app will automatically fetch and display your repositories

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile devices
- Different screen orientations

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run serve` - Serve production build

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 💬 Support

If you have any questions or need help with deployment, feel free to open an issue or contact me directly.

---

Built with ❤️ by Kevin Galvan Serrano
