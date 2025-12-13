# 👋 Introduce Myself - Personal Portfolio

A modern, responsive portfolio website showcasing professional experience and expertise. Built with **Next.js 16** and **Tailwind CSS** for a clean, fast, and maintainable codebase.

## ✨ Features

- **🎯 Hero Section** - Eye-catching introduction with name, title, and social links (GitHub, LinkedIn)
- **💼 Experience Timeline** - Display professional work history with company, role, period, and location
- **📱 Fully Responsive** - Mobile-first design that looks great on all devices (mobile, tablet, desktop)
- **⚡ High Performance** - Static site generation with Next.js, optimized for speed
- **🎨 Modern Design** - Clean, minimalist interface with custom color palette and smooth hover effects
- **🔧 Easy to Customize** - Centralized data structure for quick content updates

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm (or yarn/pnpm)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd introduce-myself
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website

The site will auto-reload as you make changes to files.

## 📁 Project Structure

```
app/
├── layout.tsx              # Global layout with Navbar & Footer
├── page.tsx                # Homepage - combines Welcome & Experience sections
├── globals.css             # Global styles
├── components/
│   ├── welcome/            # Hero section with intro & social links
│   ├── experience/         # Experience timeline component
│   ├── navbar/             # Top navigation bar
│   ├── footer/             # Footer component
│   └── line/               # Decorative divider component
└── data/
    └── experiences.tsx     # Experience data (single source of truth)
```

## ✏️ How to Customize

### Update Your Experience History

Edit `app/data/experiences.tsx` and modify the `experiences` array:

```typescript
{
  id: 1,
  title: "Your Job Title",
  company: "Company Name",
  period: "MM/YYYY - MM/YYYY",
  startDate: "YYYY-MM",
  endDate: "YYYY-MM",  // or null for current position
  current: true,
  location: "City, Country",
  description: "Brief company description...",
  responsibilities: ["Task 1", "Task 2", "Task 3"],
  technologies: ["Tech1", "Tech2", "Tech3"],
  type: "full-time"  // or "part-time"
}
```

The Experience component will automatically display your updates.

### Customize Your Hero Section

Edit `app/components/welcome/welcome.tsx`:
- Update your name, title, and bio text
- Change social media links (GitHub, LinkedIn URLs)
- Modify styling with Tailwind classes

### Modify Colors & Branding

Edit `tailwind.config.ts` to extend the theme:
- Primary colors: `#000000` (black), `#4D4D4D` (dark gray), `#FAFAFA` (off-white)
- Typography: JetBrains Mono (default), Cascadia Code (code blocks)

### Update Metadata

Edit `app/layout.tsx` to change page title and description:
```typescript
export const metadata: Metadata = {
  title: "Your Name - Portfolio",
  description: "Your professional introduction...",
};
```

## 🏗️ Build & Deployment

### Development
```bash
npm run dev    # Start dev server on port 3000
```

### Production Build
```bash
npm run build  # Create optimized production build
npm run start  # Run production server
```

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub/GitLab
2. Connect your repository to Vercel
3. Vercel automatically detects Next.js and deploys with optimal settings
4. Your site will be live with a custom domain

[Learn more about deploying Next.js](https://nextjs.org/docs/app/building-your-application/deploying)

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) - React framework for production
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) - Icon library
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type safety

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Next.js features and API
- [Tailwind CSS Docs](https://tailwindcss.com/docs) - Styling utilities
- [React Documentation](https://react.dev/) - React concepts and hooks

## 📄 License

This project is open source and available under the MIT License.

---

Made with ❤️ by Wachayathorn Singsena
