export interface NavigationLink {
  name: string
  path: string
}

export const navigationLinks: NavigationLink[] = [
  { name: 'Print', path: '/' },
  { name: 'Signs & Banners', path: '/' },
  { name: 'Promotional Items', path: '/' },
  { name: 'Apparel', path: '/' },
]

export const secondaryLinks: NavigationLink[] = [
  { name: 'About Mimo', path: '/' },
  { name: 'Blog', path: '/' },
  { name: 'FAQs', path: '/' },
  { name: 'Get A Quote', path: '/' },
]

export const footerLinks = {
  services: [
    { name: 'Print', path: '/' },
    { name: 'Signs & Banners', path: '/' },
    { name: 'Promotional Items', path: '/' },
    { name: 'Apparel', path: '/' },
  ],
  branding: [
    { name: 'Get A Quote', path: '/' },
    { name: 'Blog', path: '/' },
    { name: 'FAQs', path: '/' },
    { name: 'About Us', path: '/' },
  ],
  legal: [
    { name: 'Terms & Conditions', path: '/' },
    { name: 'Privacy Policy', path: '/' },
  ],
}

export const socialLinks = {
  whatsapp: 'https://whatsapp.com',
  tiktok: 'https://tiktok.com',
  instagram: 'https://instagram.com',
  linkedin: 'https://linkedin.com',
}

export const contactInfo = {
  phone: '0116001100',
  phoneSecondary: '0724482047',
  email: 'supplies@mimobranding.co.ke',
  address: '2nd Floor Room 202 Eagle Industries, Kweria Rd, Off Kirinyaga Rd',
  hours: 'Mon-Sat    9am-7pm',
}
