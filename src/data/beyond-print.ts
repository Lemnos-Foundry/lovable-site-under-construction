export interface ArticleItem {
  title: string
  description: string
  image: string
  link: string
}

export const beyondPrint: ArticleItem[] = [
  {
    title: 'The Ultimate Guide to Promotional Items',
    description: 'Branded merchandise not only builds awareness but also...',
    image: new URL('@/assets/images/promotional.jpg', import.meta.url).href,
    link: '/',
  },
  {
    title: 'A Guide to Corporate Branding in Nairobi',
    description: 'It’s more than just a logo—it’s how your business presents...',
    image: new URL('@/assets/images/corporate-brand.jpg', import.meta.url).href,
    link: '/',
  },
  {
    title: 'How to Make Your Brand Stand Out',
    description: 'Whether it’s a product launch, trade fair, or exhibition...',
    image: new URL('@/assets/images/how-to-brand.jpg', import.meta.url).href,
    link: '/',
  },
]
