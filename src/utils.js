// Fisher–Yates keverés, az eredeti tömböt nem módosítja
export function shuffle(items) {
  const arr = [...items]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

// A böngésző tárhelye privát módban vagy letiltva hibát dobhat
export function readNumber(key) {
  try {
    return Number(window.localStorage.getItem(key)) || 0
  } catch {
    return 0
  }
}

export function writeNumber(key, value) {
  try {
    window.localStorage.setItem(key, String(value))
  } catch {
    // nem baj, ha nem sikerül elmenteni
  }
}

// Határozott névelő: „a puli”, de „az angol agár”
export function article(word) {
  return /^[aáeéiíoóöőuúüű]/i.test(word) ? 'az' : 'a'
}
