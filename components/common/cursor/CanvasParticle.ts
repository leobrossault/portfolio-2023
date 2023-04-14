import { hexToRgb } from '~/helpers/conversions'

export default class CanvasParticle {
  private readonly context: CanvasRenderingContext2D
  private x: number
  private y: number

  private readonly radius: number = Math.random() * 3

  private vx: number
  private vy: number

  private readonly color: string
  private opacity = 1

  private readonly initialFrame: number
  private life = 50

  constructor(
    context: CanvasRenderingContext2D,
    x: number,
    y: number,
    vx: number,
    vy: number,
    color: string,
    initialFrame: number
  ) {
    this.context = context
    this.x = x
    this.y = y

    this.vx = vx
    this.vy = vy

    this.color = color

    this.initialFrame = initialFrame
  }

  draw() {
    this.context.beginPath()
    this.context.arc(this.x, this.y, this.radius, Math.PI * 2, 0)
    this.context.fillStyle = `rgba(${hexToRgb(this.color)}, ${this.opacity})`
    this.context.fill()
  }

  update(currentFrame: number) {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.vx = -this.vx
    }

    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.vy = -this.vy
    }

    this.x += this.vx
    this.y += this.vy

    this.opacity = 1 - ((currentFrame - this.initialFrame) << 0) / this.life

    this.draw()
  }

  haveToDie(currentFrame: number) {
    return currentFrame > this.initialFrame + this.life
  }
}
