# Muhammad Iqbal Khan – React Native Portfolio

A modern, responsive portfolio website showcasing React Native development expertise, built with Next.js frontend and Express.js backend.

## 🚀 Live Demo

**Frontend**: [https://mikportfolio.com](https://mikportfolio.com)  
**Backend API**: [https://api.mikportfolio.com](https://api.mikportfolio.com)

## 🛠 Tech Stack

### Frontend

- **Next.js 15.4.4** - React framework with App Router
- **React 19.1.0** - UI library
- **TypeScript** - Type safety and better development experience
- **TailwindCSS v4** - Utility-first CSS framework
- **Poppins Font** - Google Fonts for typography
- **Lucide React** - Icon library

### Backend

- **Express.js** - Web application framework
- **Node.js** - JavaScript runtime
- **MongoDB** - NoSQL database (with in-memory fallback)
- **Mongoose** - Object Data Modeling
- **CORS** - Cross-Origin Resource Sharing
- **dotenv** - Environment variables management

### Development Tools

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Concurrently** - Run multiple commands
- **Nodemon** - Auto-restart server

## 📁 Project Structure

```
Portfoluo/
├── frontend/                 # Next.js frontend application
│   ├── src/
│   │   ├── app/             # App Router pages
│   │   │   ├── about/       # About page
│   │   │   ├── contact/     # Contact page
│   │   │   ├── experience/  # Experience page
│   │   │   ├── projects/    # Projects page
│   │   │   ├── skills/      # Skills page
│   │   │   ├── globals.css  # Global styles
│   │   │   ├── layout.tsx   # Root layout
│   │   │   └── page.tsx     # Home page
│   │   ├── components/      # Reusable components
│   │   │   ├── Navigation.tsx
│   │   │   ├── ThemeProvider.tsx
│   │   │   └── Toast.tsx
│   │   └── ...
│   ├── public/              # Static assets
│   │   ├── favicon.ico
│   │   ├── sitemap.xml
│   │   ├── robots.txt
│   │   └── site.webmanifest
│   ├── next.config.ts       # Next.js configuration
│   ├── tailwind.config.ts   # TailwindCSS configuration
│   └── package.json
├── backend/                 # Express.js backend application
│   ├── config/              # Configuration files
│   ├── controllers/         # Route controllers
│   ├── models/              # Database models
│   ├── routes/              # API routes
│   ├── utils/               # Utility functions
│   ├── index.js             # Server entry point
│   └── package.json
├── .gitignore              # Git ignore rules
├── .prettierrc             # Prettier configuration
├── .eslintrc.json          # ESLint configuration
├── package.json            # Root package.json
└── README.md               # This file
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18.0.0 or higher)
- **npm** (v8.0.0 or higher)
- **Git**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/mikdeveloper/react-native-portfolio.git
   cd react-native-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm run install:all
   ```

3. **Set up environment variables**

   ```bash
   # Create .env file in backend directory
   cd backend
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start development servers**
   ```bash
   npm run dev
   ```

### Development URLs

- **Frontend**: http://localhost:3000 (or next available port)
- **Backend API**: http://localhost:5000
- **Health Check**: http://localhost:5000/health

## 📝 Available Scripts

### Root Level Commands

```bash
# Development
npm run dev                    # Start both frontend and backend
npm run dev:frontend          # Start frontend only
npm run dev:backend           # Start backend only

# Production
npm run build                 # Build both frontend and backend
npm run start                 # Start production servers

# Code Quality
npm run lint                  # Lint all code
npm run format                # Format all code with Prettier
npm run format:check          # Check code formatting
npm run type-check            # TypeScript type checking

# Maintenance
npm run install:all           # Install all dependencies
npm run clean                 # Clean all node_modules
```

### Frontend Commands

```bash
cd frontend
npm run dev                   # Start development server
npm run build                 # Build for production
npm run start                 # Start production server
npm run lint                  # Lint code
npm run type-check            # TypeScript checking
```

### Backend Commands

```bash
cd backend
npm run dev                   # Start development server
npm run start                 # Start production server
npm run lint                  # Lint code
```

## 🌐 API Endpoints

### Contact Form

- **POST** `/api/contact` - Submit contact form
- **GET** `/api/contacts` - Get all contacts (admin)

### Health & Info

- **GET** `/health` - Server health check
- **GET** `/api` - API information

## 🎨 Features

### Frontend Features

- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Dark/Light Theme** - Toggle between themes
- ✅ **SEO Optimized** - Meta tags, OpenGraph, Twitter Cards
- ✅ **PWA Ready** - Progressive Web App support
- ✅ **TypeScript** - Full type safety
- ✅ **Modern UI** - TailwindCSS with custom design system
- ✅ **Contact Form** - Functional contact form with validation
- ✅ **Toast Notifications** - User feedback system

### Backend Features

- ✅ **RESTful API** - Clean API design
- ✅ **CORS Support** - Cross-origin requests
- ✅ **Error Handling** - Comprehensive error management
- ✅ **Environment Variables** - Secure configuration
- ✅ **Contact Storage** - In-memory storage (MongoDB ready)
- ✅ **Health Checks** - Server monitoring

### Development Features

- ✅ **Hot Reload** - Automatic server restart
- ✅ **Code Formatting** - Prettier integration
- ✅ **Linting** - ESLint configuration
- ✅ **Type Checking** - TypeScript validation
- ✅ **Git Hooks** - Pre-commit formatting

## 🎯 Pages & Routes

| Route         | Description      | Features                                |
| ------------- | ---------------- | --------------------------------------- |
| `/`           | Home/Hero        | Introduction, stats, tech stack         |
| `/about`      | About Me         | Personal info, skills overview          |
| `/experience` | Work History     | Timeline, education, achievements       |
| `/projects`   | Portfolio        | Featured projects, all projects         |
| `/skills`     | Technical Skills | Skills breakdown, tools, certifications |
| `/contact`    | Contact Form     | Contact form, social links              |

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the backend directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database (Optional - uses in-memory storage by default)
MONGODB_URI=mongodb://localhost:27017/portfolio

# API Configuration
CORS_ORIGIN=http://localhost:3000
```

### Customization

1. **Update Personal Information**
   - Edit `frontend/src/app/page.tsx` for hero content
   - Update `frontend/src/app/about/page.tsx` for personal info
   - Modify `frontend/src/app/experience/page.tsx` for work history

2. **Add Projects**
   - Edit `frontend/src/app/projects/page.tsx` for project data
   - Update project images in `frontend/public/`

3. **Customize Styling**
   - Modify `frontend/src/app/globals.css` for theme colors
   - Update `frontend/tailwind.config.ts` for design system

4. **SEO Configuration**
   - Update metadata in each page component
   - Modify `frontend/public/sitemap.xml`
   - Update `frontend/public/robots.txt`

## 🚀 Deployment

### Frontend Deployment (Vercel)

1. **Connect to Vercel**

   ```bash
   npm install -g vercel
   vercel login
   ```

2. **Deploy**
   ```bash
   cd frontend
   vercel --prod
   ```

### Backend Deployment (Railway/Render)

1. **Set environment variables**
2. **Deploy to Railway or Render**
3. **Update CORS origin in backend**

### Database Setup

1. **MongoDB Atlas** (Recommended)
   - Create cluster
   - Get connection string
   - Update `MONGODB_URI` in environment

2. **Local MongoDB**
   - Install MongoDB
   - Start local server
   - Update connection string

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Muhammad Iqbal Khan** - React Native Developer

- **Portfolio**: [https://mikportfolio.com](https://mikportfolio.com)
- **GitHub**: [@mikdeveloper](https://github.com/mikdeveloper)
- **LinkedIn**: [Muhammad Iqbal Khan](https://linkedin.com/in/mikdeveloper)
- **Email**: hello@mikportfolio.com

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing React framework
- **TailwindCSS** - For the utility-first CSS framework
- **Express.js** - For the robust backend framework
- **MongoDB** - For the flexible database solution

---

⭐ **Star this repository if you found it helpful!**
