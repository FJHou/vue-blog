function starBlink() {
  let star = document.createElement('canvas')
  let starCtx = star.getContext('2d')
  star.width = 100
  star.height = 100
  let half = star.width / 2
  let starGradient = starCtx.createRadialGradient(half, half, 0, half, half, half)
  starGradient.addColorStop(0.025, '#CCC');
  starGradient.addColorStop(0.1, 'hsl(' + 217 + ', 61%, 33%)');
  starGradient.addColorStop(0.25, 'hsl(' + 217 + ', 64%, 6%)');
  starGradient.addColorStop(1, 'transparent');
  
  starCtx.fillStyle = starGradient;
  starCtx.beginPath();
  starCtx.arc(half, half, half, 0, Math.PI * 2);
  starCtx.fill();

  return starCtx
}

export default starBlink()