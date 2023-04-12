import { localFetch } from 'nitropack/dist/runtime/entries/nitro-prerenderer'
import CanvasParticle from '~/components/homepage/utils/CanvasParticle'

type Colors = {
  a: string
  b: string
  c: string
}

export default class CanvasManager {
  private readonly canvas: HTMLCanvasElement
  private context!: CanvasRenderingContext2D
  private colors: Colors

  private particles: CanvasParticle[] = []

  private frame = 0

  constructor(canvas: HTMLCanvasElement, colors: Colors) {
    this.canvas = canvas
    this.colors = colors

    if (this.canvas && this.canvas.getContext('2d')) {
      this.context = this.canvas.getContext('2d')!
    }

    this.animate = this.animate.bind(this)

    this.animate()
  }

  draw(x: number, y: number) {
    for (let i = 0; i < 1; i++) {
      const vx = Math.random() - 0.5
      const vy = Math.random() - 0.5
      const frame = this.frame
      const color = ['a', 'b', 'c'][Math.round(Math.random() * 2)]

      this.particles.push(
        new CanvasParticle(
          this.context,
          x,
          y,
          vx,
          vy,
          // @ts-ignore
          this.colors[color],
          frame
        )
      )
    }
  }

  animate() {
    requestAnimationFrame(this.animate)

    this.frame++

    this.context.clearRect(0, 0, innerWidth, innerHeight)

    for (let i = 0; i < this.particles.length; i++) {
      if (this.particles[i].haveToDie(this.frame)) {
        delete this.particles[i]
        this.particles.splice(i, 1)
      } else {
        this.particles[i].update(this.frame)
      }
    }
  }
}
