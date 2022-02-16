export const renderTextLine = function (method, ctx, line, left, top, lineIndex) {
  const style0 = this.getCompleteStyleDeclaration(lineIndex, 0),
    bullet = this.listType === 'bullet' ? [this.listBullet] : [this.listCounter + 1 + '.'],
    bulletLeft = left - style0.fontSize - 2

  if (line.length - 1) {
    if (!this.isWrapping) {
      // render the bullet
      this._renderChars(method, ctx, bullet, bulletLeft, top, lineIndex)
      this.isWrapping = !this.isEndOfWrapping(lineIndex)

      if (!this.isWrapping) this.listCounter++
    } else if (this.isEndOfWrapping(lineIndex)) {
      this.isWrapping = false
      this.listCounter++
    } else {
    }
  }
  if (lineIndex === this.textLines.length - 1) {
    this.isWrapping = false
    this.listCounter = 0
  }
  this._renderChars(method, ctx, line, left, top, lineIndex)
}
