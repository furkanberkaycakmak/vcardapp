"use client";

import { useState, useEffect } from 'react';
import VCardProfile from './components/VCardProfile';
import ThemeSwitcher from './components/ThemeSwitcher';
import { generateVCardData } from './utils/vcard';

export default function Home() {
  const profile = {
    name: "Furkan Berkay Çakmak",
    title: "Frontend Developer",
    avatar: "/image/picture.JPEG", // Local image from public/image folder
    phone: "+90 531 932 1162",
    email: "furkanberkaycakmak@icloud.com",
    location: "İstanbul, Türkiye",
    bio: "Passionate full-stack developer with expertise in React, Next.js, and Node.js. Creating elegant and efficient solutions for complex problems.",
    socialLinks: {
      github: "https://github.com/furkanberkaycakmak",
      linkedin: "https://linkedin.com/in/furkanberkaycakmak",
      instagram: "https://instagram.com/furkanberkaycakmak",
    }
  };

  // My coding skills with confidence levels
  const skills = [
    { name: "JavaScript", level: 80 },
    { name: "React", level: 70 },
    { name: "Next.js", level: 80 },
    { name: "Node.js", level: 60 },
    { name: "TypeScript", level: 75 },
    { name: "CSS/Tailwind", level: 90 }
  ];

  return (
    <div className="min-h-screen p-4 bg-base-200">
      <div className="container mx-auto">
        { }
        <div className="flex justify-end py-4">
          <ThemeSwitcher />
        </div>

        { }
        <div className="flex justify-center">
          <VCardProfile profile={profile} skills={skills} />
        </div>

        { }
        <div className="text-center mt-8 pb-4 text-sm opacity-75">
          <p>© {new Date().getFullYear()} {profile.name} - vCard created with Next.js and DaisyUI</p>
        </div>
      </div>
    </div>
  );
}
