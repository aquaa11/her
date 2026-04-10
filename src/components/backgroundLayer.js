export function backgroundLayer(assets) {
  return `
    <div class="bg-layer" aria-hidden="true">
      <img src="${assets.bgSky}" class="bg-photo" alt="" />
      <div class="bg-gradient"></div>

      <img src="${assets.balloonA}" class="float balloon-a" alt="" />
      <img src="${assets.balloonB}" class="float balloon-b" alt="" />
      <img src="${assets.balloonC}" class="float balloon-c" alt="" />

      <img src="${assets.starA}" class="spark spark-a" alt="" />
      <img src="${assets.starB}" class="spark spark-b" alt="" />
      <img src="${assets.starA}" class="spark spark-c" alt="" />
    </div>
  `;
}
