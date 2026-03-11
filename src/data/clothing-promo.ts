export interface PromoFeaturedItem {
  title: string
  description: string
  image: string
  link: string
}

export const clothingPromo: PromoFeaturedItem[] = [
  {
    title: 'CLOTHING',
    description: 'Leave a Lasting Impression with Every Apparel',
    image: new URL('@/assets/images/apparel.jpg', import.meta.url).href,
    link: '/',
  },
  {
    title: 'HATS',
    description: 'Top off your brand with custom headwear',
    image: new URL('@/assets/images/apparel.jpg', import.meta.url).href, // Reusing apparel for now
    link: '/',
  },
  {
    title: 'BAGS',
    description: 'Carry your brand everywhere',
    image: new URL('@/assets/images/promotional-items.jpg', import.meta.url).href,
    link: '/',
  },
]
