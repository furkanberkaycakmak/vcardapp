interface VCardData {
  name: string;
  title: string;
  phone: string;
  email: string;
  location: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

export const generateVCardData = (data: VCardData): string => {
  const { name, title, phone, email, location, socialLinks } = data;

  let vcard = `BEGIN:VCARD
VERSION:3.0
FN:${name}
TITLE:${title}
TEL;TYPE=CELL:${phone}
EMAIL:${email}
ADR;TYPE=HOME:;;${location};;;
`;

  if (socialLinks.github) {
    vcard += `URL;TYPE=GitHub:${socialLinks.github}\n`;
  }

  if (socialLinks.linkedin) {
    vcard += `URL;TYPE=LinkedIn:${socialLinks.linkedin}\n`;
  }

  if (socialLinks.twitter) {
    vcard += `URL;TYPE=Twitter:${socialLinks.twitter}\n`;
  }

  if (socialLinks.instagram) {
    vcard += `URL;TYPE=Instagram:${socialLinks.instagram}\n`;
  }

  vcard += 'END:VCARD';

  return vcard;
}; 