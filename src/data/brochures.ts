export interface BrochureItem {
  title: string
  description: string
  image: string
  link: string
}

export const brochures: BrochureItem[] = [
  {
    title: 'Brochures',
    description: 'Leave a Lasting Impression in Every Hand',
    image: new URL('@/assets/images/brochures.jpg', import.meta.url).href,
    link: '/',
  },
  {
    title: 'Flyers',
    description: 'Promote your event or business effectively',
    image: new URL('@/assets/images/brochures.jpg', import.meta.url).href, // Using same image as placeholder
    link: '/',
  },
  {
    title: 'Business Cards',
    description: 'Make a great first impression',
    image: new URL('@/assets/images/brochures.jpg', import.meta.url).href, // Using same image as placeholder
    link: '/',
  },
]
