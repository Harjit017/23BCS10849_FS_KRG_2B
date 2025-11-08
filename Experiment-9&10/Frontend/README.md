# Art-is-an-AI 🎨

An AI-powered marketplace assistant platform for local artisans and NGOs, built with React, TypeScript, and modern web technologies.

## ✨ Features

### For Artisans
- 🤖 **AI Business Advisor** - 24/7 intelligent chat assistant
- 📈 **Market Price Tracker** - Real-time pricing data with interactive charts
- 📚 **Personalized Training** - Skill development with progress tracking
- ⭐ **Quality Assessment Tool** - AI-powered product quality analysis
- 📅 **Events & Workshops** - Never miss relevant opportunities
- 📄 **Smart Document Generator** - Generate legal documents instantly

### For NGOs
- 📊 **Impact Dashboard** - Comprehensive analytics and metrics
- 🧠 **Market Intelligence Hub** - Data-driven insights
- 📚 **Training Content Customizer** - Create customized learning programs
- ✅ **Quality Control Center** - Monitor artisan quality standards
- 🔗 **Supply Chain Builder** - Connect artisans with buyers
- 📄 **Automated Report Generator** - Generate professional reports

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
cd project
npm install
npm run dev
```

The application will be available at `http://localhost:5173`

## 🎨 Design System

- **Primary Color**: Green (#4CAF50) - Growth and nature
- **Secondary Colors**: Earthy tones (Terracotta, Beige, Mustard)
- **Aesthetic**: Hand-drawn doodle style with Indian cultural motifs
- **Typography**: Playful headings (Poppins, Quicksand) + Clean body (Inter, Open Sans)

## 📱 Mobile Responsive

- Mobile-first design approach
- Responsive breakpoints: Mobile (320-640px), Tablet (641-1024px), Desktop (1025px+)
- Touch-optimized interactions

## 🌐 Multi-Language Support

- English
- Hindi (हिंदी)
- Bengali (বাংলা)
- Tamil (தமிழ்)
- Telugu (తెలుగు)
- Marathi (मराठी)
- Gujarati (ગુજરાતી)

## 🔐 Authentication

- Dual interface: Artisan and NGO portals
- Guest demo mode available
- Protected routes with role-based access

## 📊 Tech Stack

- **Framework**: React 18 with TypeScript
- **Routing**: React Router v7
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Animations**: Framer Motion
- **State Management**: Zustand
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React

## 📁 Project Structure

```
project/
├── src/
│   ├── components/       # Reusable components
│   │   ├── common/      # Common components (DoodleCard, etc.)
│   │   └── layout/      # Layout components (ArtisanLayout, NGOLayout)
│   ├── pages/           # Page components
│   │   ├── artisan/     # Artisan pages
│   │   └── ngo/         # NGO pages
│   ├── store/           # Zustand stores (auth, language)
│   ├── utils/           # Utilities and mock data
│   └── main.tsx         # Entry point with routing
└── public/              # Static assets
```

## 🎯 Key Routes

### Artisan Routes
- `/artisan/dashboard` - Main dashboard
- `/artisan/ai-advisor` - AI Business Advisor chat
- `/artisan/market-prices` - Market Price Tracker
- `/artisan/training` - Training courses
- `/artisan/quality` - Quality Assessment
- `/artisan/events` - Events & Workshops
- `/artisan/documents` - Document Generator

### NGO Routes
- `/ngo/dashboard` - Main dashboard
- `/ngo/impact` - Impact Dashboard with analytics
- `/ngo/market-intelligence` - Market Intelligence Hub
- `/ngo/training` - Training Customizer
- `/ngo/quality` - Quality Control Center
- `/ngo/supply-chain` - Supply Chain Builder
- `/ngo/reports` - Report Generator

## 🎭 Demo Mode

Click "Explore Demo Mode" on the login page to experience the platform with sample data without registration.

## 🔧 Development

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run typecheck

# Linting
npm run lint
```

## 📝 Notes

- Currently uses mock data for demonstration
- Google Cloud AI integration points are marked but simulated
- All features are fully functional for demo purposes
- Ready for backend integration

## 🎨 Design Philosophy

- **Hand-drawn aesthetic** - Whimsical doodle style throughout
- **Cultural sensitivity** - Indian motifs and warm colors
- **Artisan-friendly** - Large fonts, simple navigation, clear CTAs
- **Professional NGO tools** - Data-driven, comprehensive analytics

## 🚀 Future Enhancements

- Backend API integration
- Real AI model integration (Vertex AI, Document AI, BigQuery ML)
- Payment gateway integration
- WhatsApp/SMS notifications
- Advanced analytics
- Export functionality

---

Built with ❤️ for Artisans

