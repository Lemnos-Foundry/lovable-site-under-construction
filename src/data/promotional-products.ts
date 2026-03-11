export interface ProductItem {
  title: string
  description: string
  image: string
  link: string
}

// Using placeholders for now as specific images (mouse, usb) might not be in the assets list provided earlier.
// I'll reuse available images or generic placeholders.

export const promotionalProducts: ProductItem[] = [
  {
    title: 'Mouse Pads',
    description: 'Description of item',
    image: new URL('@/assets/images/promotional-items.jpg', import.meta.url).href,
    link: '/',
  },
  {
    title: 'USB Flash Drives',
    description: 'Description of item',
    image: new URL('@/assets/images/promotional.jpg', import.meta.url).href,
    link: '/',
  },
  {
    title: 'Music & Audio',
    description: 'Description of item',
    image: new URL('@/assets/images/corporate-brand.jpg', import.meta.url).href,
    link: '/',
  },
  {
    title: 'Tech Accessories',
    description: 'Description of item',
    image: new URL('@/assets/images/how-to-brand.jpg', import.meta.url).href,
    link: '/',
  },
]
