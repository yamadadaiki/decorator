const bind: MethodDecorator = (target, propertyKey, descriptor) => {
  // TODO
}

class Sample {
  private width = window.innerWidth
  private height = window.innerWidth
  public constructor() {
    this.render()
    window.addEventListener('resize', this.onResize)
  }
  @bind
  public onResize() {
    this.width = window.innerWidth
    this.height = window.innerWidth
    this.render()
  }
  private render() {
    document.body.innerHTML = `${this.width}, ${this.height}`
  }
}

new Sample()
