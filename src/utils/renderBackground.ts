export const renderBackground = function (ctx) {
  if (!this.backgroundColor) {
    return
  }
  const dim = this._getNonTransformedDimensions()
  ctx.fillStyle = this.backgroundColor

  if (!this.bgCornerRadius) {
    ctx.fillRect(-dim.x / 2, -dim.y / 2, dim.x, dim.y)
  } else {
    ctx.roundRect(-dim.x / 2, -dim.y / 2, dim.x, dim.y, this.bgCornerRadius).fill()
  }
  // if there is background color no other shadows
  // should be casted
  this._removeShadow(ctx)
}
