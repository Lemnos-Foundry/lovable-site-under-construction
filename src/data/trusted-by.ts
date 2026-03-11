export interface TrustedCompany {
  name: string
  logo: string | null
}

export const trustedBy: TrustedCompany[] = [
  {
    name: 'Oppo',
    logo: new URL('@/assets/images/oppo.png', import.meta.url).href,
  },
  {
    name: 'Girl Effect',
    logo: new URL('@/assets/images/girl-effect.png', import.meta.url).href,
  },
  {
    name: 'We Za',
    logo: new URL('@/assets/images/weza.png', import.meta.url).href,
  },
  {
    name: 'One Acre Fund',
    logo: new URL('@/assets/images/one-acre.png', import.meta.url).href,
  },
  {
    name: 'Nirvana Africa',
    logo: new URL('@/assets/images/nirvana.png', import.meta.url).href,
  },
  {
    name: 'Red Knot Development',
    logo: new URL('@/assets/images/red-knot.png', import.meta.url).href,
  },
]
