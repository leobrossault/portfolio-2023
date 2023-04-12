export interface Media {
  alt: string
  src: string
}

export interface Project {
  id: number
  title: string
  description: string
  order: number
  main: Media
  images: Array<Media>
}
