export interface ProductHeader {
  title: string
  description: string
  breadcrumbs: { name: string; path: string }[]
}

export interface ProductTab {
  id: string
  label: string
  content?: string // HTML or text
  accordion?: { title: string; content: string }[]
}

export interface ProductDetails {
  id: string
  name: string
  price: string
  images: string[]
  description: string
  tabs: ProductTab[]
}

export interface RelatedProduct {
  id: string
  name: string
  image: string
  link: string
}

export const productData = {
  header: {
    title: 'Business Cards',
    description:
      'Your business card is more than just contact information — it’s a handshake you can leave behind.',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Print', path: '/' },
      { name: 'Business Cards', path: '/' },
      { name: 'Standard', path: '' }, // Current page
    ],
  },
  details: {
    id: 'standard-business-cards',
    name: 'Standard Business Cards',
    price: '', // Not shown, "Get a Quote" used instead
    images: [
      new URL('@/assets/images/print.jpg', import.meta.url).href, // Placeholder
      new URL('@/assets/images/print.jpg', import.meta.url).href,
      new URL('@/assets/images/print.jpg', import.meta.url).href,
      new URL('@/assets/images/print.jpg', import.meta.url).href,
    ],
    description:
      'Our Standard Business Cards are the perfect balance between quality and affordability. Printed on durable stock with crisp colors and sharp details, these cards help you create a professional first impression without breaking the bank. Ideal for startups, freelancers, and growing businesses that want a polished look on a budget.',
    tabs: [
      {
        id: 'description',
        label: 'Description',
        content:
          'Our Standard Business Cards are the perfect balance between quality and affordability. Printed on durable stock with crisp colors and sharp details, these cards help you create a professional first impression without breaking the bank. Ideal for startups, freelancers, and growing businesses that want a polished look on a budget.',
      },
      {
        id: 'additional',
        label: 'Additional Information',
        accordion: [
          {
            title: 'Additional Information Title 01',
            content:
              'This is the content for the first additional information item. It can contain details about paper weight, finish, or dimensions.',
          },
          {
            title: 'Additional Information Title 02',
            content:
              'This is the content for the second item. Maybe shipping details or turnaround time.',
          },
          {
            title: 'Additional Information Title 03',
            content:
              'Our Standard Business Cards are the perfect balance between quality and affordability. Printed on durable stock with crisp colors and sharp details, these cards help you create a professional first impression without breaking the bank. Ideal for startups, freelancers, and growing businesses that want a polished look on a budget.',
          },
        ],
      },
    ],
  },
  related: [
    {
      id: 'premium-cards',
      name: 'Premium Cards',
      image: new URL('@/assets/images/how-to-brand.jpg', import.meta.url).href, // Placeholder
      link: '/product/premium-cards',
    },
    {
      id: 'deluxe-cards',
      name: 'Deluxe Cards',
      image: new URL('@/assets/images/corporate-brand.jpg', import.meta.url).href, // Placeholder
      link: '/product/deluxe-cards',
    },
    {
      id: 'special-finishes',
      name: 'Special Finishes',
      image: new URL('@/assets/images/promotional.jpg', import.meta.url).href, // Placeholder
      link: '/product/special-finishes',
    },
    {
      id: 'digital-cards',
      name: 'Digital Cards',
      image: new URL('@/assets/images/header-image.jpg', import.meta.url).href, // Placeholder
      link: '/product/digital-cards',
    },
  ],
}
