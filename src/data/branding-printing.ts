export interface ServiceItem {
  title: string
  description: string
  image: string
  link: string
}

export const brandingPrinting: ServiceItem[] = [
  {
    title: 'Print',
    description: 'Marketing, Packaging, Gifting, Cards, Stickers, Document...',
    image: new URL('@/assets/images/print.jpg', import.meta.url).href,
    link: '/',
  },
  {
    title: 'Signs, Banners, Posters',
    description: 'Banner & Flags, Poster & Ridged Signs, Display Signs, Decals...',
    image: new URL('@/assets/images/signs-banners.jpg', import.meta.url).href,
    link: '/',
  },
  {
    title: 'Promotional Products',
    description: 'Drinkware, Office Supplies & Writing, Lifestyle...',
    image: new URL('@/assets/images/promotional-items.jpg', import.meta.url).href,
    link: '/',
  },
  {
    title: 'Apparel',
    description: 'Clothing, Hats, Bags',
    image: new URL('@/assets/images/apparel.jpg', import.meta.url).href,
    link: '/',
  },
]
