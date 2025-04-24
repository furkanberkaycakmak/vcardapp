vCard - Digital Business Card

A modern digital business card built with Next.js and styled with DaisyUI. This project creates a beautiful, responsive vCard that showcases your profile, skills, and contact information.


##  Live Demo

Check out the live demo at: [https://vcardapp-three.vercel.app/](https://vcardapp-three.vercel.app/)

##  Features

- 💼 Professional profile display with avatar
- 🎯 Skills showcase with progress bars
- 🌙 Dark/Light theme toggle
- 📱 Fully responsive design
- 🔗 Social media links integration
- 🚀 Fast loading and optimized performance

##  Tech Stack

- **Next.js** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **DaisyUI** - Component library for Tailwind
- **React Icons** - Icon library

##  Getting Started

### Prerequisites

- Node.js (v14 or newer)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/furkanberkaycakmak/vcardapp.git
cd vcardapp
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view your vCard in the browser.

## 🔧 Customization

### Personalizing Your vCard

Edit the `app/page.tsx` file to update your personal information:

```typescript
const profile = {
  name: "Your Name",
  title: "Your Title",
  avatar: "/image/your-photo.jpg", // Add your photo to public/image folder
  phone: "+90 123 456 7890",
  email: "your.email@example.com",
  location: "Your Location",
  bio: "Your short biography or description",
  socialLinks: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    instagram: "https://instagram.com/yourusername",
  }
};

// Update your skills
const skills = [
  { name: "Skill 1", level: 90 },
  { name: "Skill 2", level: 85 },
  // Add more skills as needed
];
```

### Adding Your Photo

1. Place your photo in the `public/image/` directory
2. Update the avatar path in your profile object

### Changing Themes

This project uses DaisyUI themes. You can customize available themes in `tailwind.config.js`:

```javascript
daisyui: {
  themes: ["light", "dark"], // Add more themes or customize
},
```

## 📱 Responsive Design

The vCard is built to be responsive across all devices:
- Mobile-first approach
- Adapts to tablets and desktop screens
- Optimized reading experience on all devices

## 🌐 Deployment

### Deploying to Vercel

1. Push your code to a GitHub repository
2. Visit [Vercel](https://vercel.com)
3. Create a new project and import your GitHub repository
4. Vercel will automatically detect Next.js and configure the build settings
5. Deploy and share your new vCard with the world!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📄 License

This project is [MIT](https://choosealicense.com/licenses/mit/) licensed.

---

Made with ❤️ by [Furkan Berkay ÇAKMAK](https://github.com/furkanberkaycakmak)
