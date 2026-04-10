export function openingScreen(assets) {
  return `
    <section class="screen active" id="openingScreen">
      <div class="panel-card opening-card">
        <p class="chip">Quiz buat tayang atu</p>
        <h1>Heyy, Main Dulu Yuk</h1>
        <p class="type-line" id="openingLine1"></p>
        <p class="type-line" id="openingLine2"></p>

        <div class="top-cast">
          <img src="${assets.starA}" alt="" class="opening-deco deco-star-left" />
          <img src="${assets.heartSprite}" alt="" class="opening-deco deco-heart-right" />
          <img src="${assets.stickerCuteFlower}" alt="" class="opening-deco deco-sticker-left" />
          <img src="${assets.stickerCatFlower}" alt="" class="opening-deco deco-sticker-right" />

          <div class="duo-wrap">
            <img src="${assets.mem1}" alt="Freya" class="duo-center-photo" />
          </div>

          <img src="${assets.stickerCuteLove}" alt="" class="opening-deco deco-love-bottom" />
        </div>

        <button id="startBtn" class="pixel-btn">Gass</button>
      </div>
    </section>
  `;
}
