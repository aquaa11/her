function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

const rightMessages = [
  "geloo bener, makin sukaa deh😍.",
  "yes, pas banget. aku senyum sendiri ihhh.",
  "bener eyy, seng akuu gitulohh.",
  "cakep, satu titik dua koma kamu cantik siapa yang punya."
];

const wrongTiers = [
  [
    "belum bener, coba inget lagi ah.",
    "ihhh tipis banget, coba lagi ya.",
    "nyaris sih, tapi belum kena."
  ],
  [
    "yah salah lagi, masa lupa sih heyy.",
    "coba tarik napas dulu, terus jawab ulang.",
    "Ngges weh main pou aja."
  ],
  [
    "ihhh maless, kok salah terus sihh.",
    "yah aku jadi ngambek kecil ini.",
    "gemes banget, ayo jangan salah lagi dong."
  ],
  [
    "udah ya bercandanya, sekarang yang bener.",
    "fokus heyy, ini gampang ihhh.",
    "ayo ini terakhir, jawab yang paling pas."
  ]
];

export function getRightMessage() {
  return pickRandom(rightMessages);
}

export function getWrongMessage(attemptCount) {
  if (attemptCount <= 1) return pickRandom(wrongTiers[0]);
  if (attemptCount === 2) return pickRandom(wrongTiers[1]);
  if (attemptCount === 3) return pickRandom(wrongTiers[2]);
  return pickRandom(wrongTiers[3]);
}
