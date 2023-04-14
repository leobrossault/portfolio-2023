export interface Media {
  alt: string
  src: string
}

export interface Project {
  id: number
  title: string
  slug: string
  description: string
  stack?: string
  order: number
  main: Media
  images: Array<Media>
}
