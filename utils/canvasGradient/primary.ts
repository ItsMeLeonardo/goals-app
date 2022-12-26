export const getPrimaryGradient = (ctx: CanvasRenderingContext2D) => {
  const grad = ctx.createLinearGradient(0, 100, 600, 100);

  grad.addColorStop(0, "rgba(92, 0, 255, 1)");
  grad.addColorStop(1, "rgba(107, 76, 230, 1)");

  return grad;
};
