export function quizScreen(assets) {
  return `
    <section class="screen" id="quizScreen" style="top: 58%; overflow-y: visible;">
      <div class="panel-card quiz-card-wrap" id="quizCard">
        <div class="quiz-props" aria-hidden="true">
          <img src="${assets.propHat}" alt="" class="modal-prop modal-prop-hat" />
          <img src="${assets.propCake}" alt="" class="modal-prop modal-prop-cake" />
          <img src="${assets.propChatCheers}" alt="" class="modal-prop modal-prop-chat" />
        </div>

        <div class="quiz-cute-strip quiz-cute-top" aria-hidden="true">
          <img src="${assets.stickerCatFlower}" alt="" class="quiz-cute" />
          <img src="${assets.stickerCuteFlower}" alt="" class="quiz-cute" />
          <img src="${assets.stickerCuteLove}" alt="" class="quiz-cute" />
        </div>

        <img id="freyaFloatLeft" src="${assets.mem1}" alt="Freya style kiri" class="freya-float freya-float-a" />
        <img id="freyaFloatRight" src="${assets.mem2}" alt="Freya style kanan" class="freya-float freya-float-b" />

        <div class="quiz-head-row">
          <div class="question-col">
            <p class="progress" id="progressText">Pertanyaan 1/5</p>
            <h2 id="questionText"></h2>
            <p class="helper">Harus bener dulu ya baru bisa next.</p>
          </div>

          <div class="character-col">
            <img id="quizCharacter" src="${assets.mortyHug}" alt="Character" class="quiz-character" />
            <p class="mood-text" id="moodText">heyy, jawab santai aja.</p>
          </div>
        </div>

        <p id="feedbackText" class="feedback"></p>
        <div id="optionsWrap" class="options"></div>

        <div class="quiz-cute-strip quiz-cute-bottom" aria-hidden="true">
          <img src="${assets.stickerCatBucket}" alt="" class="quiz-cute" />
          <img src="${assets.stickerCuteLove}" alt="" class="quiz-cute" />
          <img src="${assets.stickerCuteFlower}" alt="" class="quiz-cute" />
        </div>
      </div>
    </section>
  `;
}
