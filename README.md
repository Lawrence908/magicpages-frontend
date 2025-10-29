# Magic Pages Frontend - Development Environment

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Docker and Docker Compose (for containerized deployment)

### Development Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

### Docker Deployment

Build and run with Docker Compose:

```bash
docker compose up --build
```

The application will be available at `http://localhost:3000`

### Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section with blue background
│   ├── StepsSection.tsx # 4-step process section
│   └── Footer.tsx      # Footer with accessibility
├── App.tsx              # Main app component
├── main.tsx             # React entry point
└── index.css            # Global styles with Tailwind
```

### Brand Colors

- **Magic Blue**: `#1e3a8a` (Royal blue for hero background)
- **Magic Yellow**: `#fbbf24` (Bright yellow for CTAs)
- **Magic Purple**: `#7c3aed` (Purple for buttons)
- **Magic Gray**: `#374151` (Dark gray for text)

### Features

- ✅ Responsive design matching Magic Pages brand
- ✅ Animated star decorations
- ✅ Modern React with TypeScript
- ✅ Tailwind CSS for styling
- ✅ Docker containerization
- ✅ Nginx production server
- ✅ SEO-optimized HTML structure
- ✅ Accessibility features

### Next Steps

This template provides the foundation for:
- E-commerce integration
- Customer management system
- Payment processing
- Content management
- User authentication
