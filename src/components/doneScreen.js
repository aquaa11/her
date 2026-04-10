export function doneScreen(assets) {
  return `
    <section class="screen" id="doneScreen">
      <div class="panel-card done-card" id="doneCard">
        <div class="done-step active" id="doneStepMonkey">
          <img src="${assets.gift}" class="gift-icon" alt="Gift" />
          <h2>Pilih ekspresi kamu saat ini</h2>
          <p class="done-copy">HEHHEHEHE.</p>

          <div class="monyet-grid" id="monyetPicker">
            <button class="monyet-btn" type="button" data-mood="monyet_kaget">
              <img src="${assets.monyetKaget}" alt="Monyet kaget" />
              <span>Kaget</span>
            </button>
            <button class="monyet-btn" type="button" data-mood="monyet_sedih">
              <img src="${assets.monyetSedih}" alt="Monyet sedih" />
              <span>Sedih</span>
            </button>
            <button class="monyet-btn" type="button" data-mood="monyet_bunga">
              <img src="${assets.monyetBunga}" alt="Monyet bunga" />
              <span>Bunga</span>
            </button>
            <button class="monyet-btn" type="button" data-mood="monyet_flirt">
              <img src="${assets.monyetFlirt}" alt="Monyet flirt" />
              <span>Flirt</span>
            </button>
            <button class="monyet-btn" type="button" data-mood="monyet_ide">
              <img src="${assets.monyetIde}" alt="Monyet ide" />
              <span>Senang</span>
            </button>
            <button class="monyet-btn" type="button" data-mood="monyet_princess">
              <img src="${assets.monyetPrincess}" alt="Monyet princess" />
              <span>Princess</span>
            </button>
          </div>

          <p class="monyet-result" id="monyetResult">pilih satu dulu yaa, nanti lanjut ke tiup lilin.</p>
          <button id="monkeyNextBtn" class="pixel-btn next-btn" type="button" disabled>Next: tiup lilin</button>
        </div>

        <div class="done-step" id="doneStepCandle">
          <h2>tiup lilinnya sekarang</h2>
          <p class="done-copy" id="micHint">klik tombol mic dulu, izinin akses, terus tiup ke arah mic.</p>

          <div class="candle-stage">
            <img src="${assets.candleCake}" class="candle-cake" alt="Birthday cake" />
            <div class="candle-flames" id="candleFlames">
              <div class="candle-flame flame-1" data-candle-index="0" style="background-image: url('${assets.candleSprite}')"></div>
              <div class="candle-flame flame-2" data-candle-index="1" style="background-image: url('${assets.candleSprite}')"></div>
              <div class="candle-flame flame-3" data-candle-index="2" style="background-image: url('${assets.candleSprite}')"></div>
            </div>
          </div>

          <div class="mic-meter" aria-hidden="true">
            <span id="micLevelFill"></span>
          </div>

          <div class="candle-actions">
            <button id="micBtn" class="pixel-btn mic-btn" type="button">Izinin mic &amp; tiup</button>
            <button id="candleNextBtn" class="pixel-btn next-btn" type="button" disabled>Next: buka surat</button>
          </div>
        </div>

        <div class="done-step" id="doneStepLetter">
          <div class="letter-freya-corners" aria-hidden="true">
            <img src="${assets.mem1}" alt="" class="corner-freya corner-top-left" />
            <img src="${assets.mem2}" alt="" class="corner-freya corner-top-right" />
            <img src="${assets.mem3}" alt="" class="corner-freya corner-bottom-left" />
            <img src="${assets.mem4}" alt="" class="corner-freya corner-bottom-right" />
          </div>

          <h2 class="letter-title">Happy birthday sweetiee</h2>
          <p class="done-copy">scroll ke bawah pelan-pelan yaa, ini surat kecil buat kamu.</p>

          <div class="letter-scroll" id="letterScroll">
            <div class="letter-block letter-chat-bubble left">
              <p>
                Happy birthday sayanggg atuu🥰 Makasiii yaa udah sejauh ini masih mau bareng sama aku,
                I’m so proud of you and I’m so lucky to have you😍.
              </p>
            </div>

            <div class="letter-block letter-chat-bubble right">
              <p>
                Maafin aku ya kalau kadang-kadang suka bikin kesel, ga kadang-kadang sih tapi sering ehehehe😭😭,
                tapi sebenernya mah aku teh cayang pisan ko sama kmu👉👈, you mean the world to me😖💕.
              </p>
            </div>

            <div class="letter-block letter-chat-bubble left wish-block">
              <p>Pokoknya di umur yang baru ini, aku doa-doain semoga kamu:</p>
              <ul class="wish-list">
                <li>
                  Panjang umur dan sehat terus ya sengg biar bisa bareng aku terusss✨
                </li>
                <li>
                  Dimudahkan segala urusannya dan rezekinya makin lancar, Aminnn🙏
                </li>
                <li>
                  Tetep jadi orang baik yang aku kenal, makin sabar ngadepin aku ya hehehe🥺
                </li>
                <li>
                  Bahagia terus dunia akhirat, I wish you all the best and always happy! 🎂🥳🥳
                </li>
              </ul>
            </div>

            <img src="${assets.chatHbd}" alt="Happy birthday chat" class="letter-chat" />
          </div>

          <div class="done-cast">
            <img src="${assets.kenjud}" alt="Kenjud" />
          </div>
        </div>

        <div class="done-props bottom" aria-hidden="true">
          <img src="${assets.stickerCatBucket}" alt="" class="done-cute" />
          <img src="${assets.stickerCuteLove}" alt="" class="done-cute" />
          <img src="${assets.stickerCuteFlower}" alt="" class="done-cute" />
        </div>
      </div>
    </section>
  `;
}
