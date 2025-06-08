let bibleVerses = {};
let currentBookName = '';
let currentChapter = 1;

let books = [
// Old Testament
  { file: '01Genesis.js', name: 'Genesis', objectName: 'bibleVerses1' },
  { file: '02Exodus.js', name: 'Exodus', objectName: 'bibleVerses2' },
  { file: '03Leviticus.js', name: 'Leviticus', objectName: 'bibleVerses3' },
  { file: '04Numbers.js', name: 'Numbers', objectName: 'bibleVerses4' },
  { file: '05Deuteronomy.js', name: 'Deuteronomy', objectName: 'bibleVerses5' },
  { file: '06Joshua.js', name: 'Joshua', objectName: 'bibleVerses6' },
  { file: '07Judges.js', name: 'Judges', objectName: 'bibleVerses7' },
  { file: '08Ruth.js', name: 'Ruth', objectName: 'bibleVerses8' },
  { file: '09Samuel.js', name: '1 Samuel', objectName: 'bibleVerses9' },
  { file: '10Samuel.js', name: '2 Samuel', objectName: 'bibleVerses10' },/*
  { file: '11Kings.js', name: '1 Kings', objectName: 'bibleVerses11' },/*
  { file: '12Kings.js', name: '2 Kings', objectName: 'bibleVerses12' },
  { file: '13Chronicles.js', name: '1 Chronicles', objectName: 'bibleVerses13' },
  { file: '14Chronicles.js', name: '2 Chronicles', objectName: 'bibleVerses14' },*/
  { file: '15Ezra.js', name: 'Ezra', objectName: 'bibleVerses15' },
  { file: '16Nehemiah.js', name: 'Nehemiah', objectName: 'bibleVerses16' },
  { file: '17Esther.js', name: 'Esther', objectName: 'bibleVerses17' },/*
  { file: '18Job.js', name: 'Job', objectName: 'bibleVerses18' },
  { file: '19Psalms.js', name: 'Psalms', objectName: 'bibleVerses19' },*/
  { file: '20Proverbs.js', name: 'Proverbs', objectName: 'bibleVerses20' },
  { file: '21Ecclesiastes.js', name: 'Ecclesiastes', objectName: 'bibleVerses21' },
  { file: '22songsOfSolomon.js', name: 'Song of Solomon', objectName: 'bibleVerses22' },/*
  { file: '23Isaiah.js', name: 'Isaiah', objectName: 'bibleVerses23' },
  { file: '24Jeremiah.js', name: 'Jeremiah', objectName: 'bibleVerses24' },*/
  { file: '25Lamentations.js', name: 'Lamentations', objectName: 'bibleVerses25' },/*
  { file: '26Ezekiel.js', name: 'Ezekiel', objectName: 'bibleVerses26' },*/
  { file: '27Daniel.js', name: 'Daniel', objectName: 'bibleVerses27' },
  { file: '28Hosea.js', name: 'Hosea', objectName: 'bibleVerses28' },
  { file: '29Joel.js', name: 'Joel', objectName: 'bibleVerses29' },
  { file: '30Amos.js', name: 'Amos', objectName: 'bibleVerses30' },
  { file: '31Obadiah.js', name: 'Obadiah', objectName: 'bibleVerses31' },
  { file: '32Jonah.js', name: 'Jonah', objectName: 'bibleVerses32' },
  { file: '33Micah.js', name: 'Micah', objectName: 'bibleVerses33' },
  { file: '34Nahum.js', name: 'Nahum', objectName: 'bibleVerses34' },
  { file: '35Habakkuk.js', name: 'Habakkuk', objectName: 'bibleVerses35' },
  { file: '36Zephaniah.js', name: 'Zephaniah', objectName: 'bibleVerses36' },
  { file: '37Haggai.js', name: 'Haggai', objectName: 'bibleVerses37' },
  { file: '38Zachariah.js', name: 'Zechariah', objectName: 'bibleVerses38' },
  { file: '39Malachi.js', name: 'Malachi', objectName: 'bibleVerses39' },


  // New Testament
  { file: '40Matthew.js', name: 'Matthew', objectName: 'bibleVerses40' },
  { file: '41Mark.js', name: 'Mark', objectName: 'bibleVerses41' },
  { file: '42Luke.js', name: 'Luke', objectName: 'bibleVerses42' },
  { file: '43John.js', name: 'John', objectName: 'bibleVerses43' },
  { file: '44Acts.js', name: 'Acts', objectName: 'bibleVerses44' },
  { file: '45Romans.js', name: 'Romans', objectName: 'bibleVerses45' },
  { file: '46Corinthians.js', name: '1 Corinthians', objectName: 'bibleVerses46' },
  { file: '47Corinthians.js', name: '2 Corinthians', objectName: 'bibleVerses47' },
  { file: '48Galatians.js', name: 'Galatians', objectName: 'bibleVerses48' },
  { file: '49Ephesians.js', name: 'Ephesians', objectName: 'bibleVerses49' },
  { file: '50Philippians.js', name: 'Philippians', objectName: 'bibleVerses50' },
  { file: '51Colossians.js', name: 'Colossians', objectName: 'bibleVerses51' },
  { file: '52Thessalonians.js', name: '1 Thessalonians', objectName: 'bibleVerses52' },
  { file: '53Thessalonians.js', name: '2 Thessalonians', objectName: 'bibleVerses53' },
  { file: '54Timothy.js', name: '1 Timothy', objectName: 'bibleVerses54' },
  { file: '55Timothy.js', name: '2 Timothy', objectName: 'bibleVerses55' },
  { file: '56Titus.js', name: 'Titus', objectName: 'bibleVerses56' },
  { file: '57Philemon.js', name: 'Philemon', objectName: 'bibleVerses57' },
  { file: '58Hebrews.js', name: 'Hebrews', objectName: 'bibleVerses58' },
  { file: '59James.js', name: 'James', objectName: 'bibleVerses59' },
  { file: '60Peter.js', name: '1 Peter', objectName: 'bibleVerses60' },
  { file: '61Peter.js', name: '2 Peter', objectName: 'bibleVerses61' },
  { file: '62John.js', name: '1 John', objectName: 'bibleVerses62' },
  { file: '63John.js', name: '2 John', objectName: 'bibleVerses63' },
  { file: '64John.js', name: '3 John', objectName: 'bibleVerses64' },
  { file: '65Jude.js', name: 'Jude', objectName: 'bibleVerses65' },
  { file: '66Revelation.js', name: 'Revelation', objectName: 'bibleVerses66' }
];

window.onload = () => {
  populateBookDropdown();
  loadBook(books[0]); // Load Genesis by default
};

function populateBookDropdown() {
  const bookSelect = document.getElementById('book');
  bookSelect.innerHTML = '';
  books.forEach((b, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = b.name;
    bookSelect.appendChild(option);
  });
  bookSelect.addEventListener('change', () => {
    const selected = books[bookSelect.value];
    loadBook(selected);
  });
}

function loadBook(book) {
  const existingScript = document.getElementById('bible-script');
  if (existingScript) existingScript.remove();

  const script = document.createElement('script');
  script.src = `bible/${book.file}`;
  script.id = 'bible-script';
  script.onload = () => {
    if (window[book.objectName]) {
      bibleVerses = window[book.objectName];
      currentBookName = book.name;
      currentChapter = 1;
      populateChapterDropdown();
      displayChapter(currentChapter);
    } else {
      console.error(`Object ${book.objectName} not found`);
    }
  };
  document.body.appendChild(script);
}

function populateChapterDropdown() {
  const chapterSelect = document.getElementById('chapter');
  chapterSelect.innerHTML = '';

  const chapters = new Set();
  for (let key in bibleVerses) {
    const match = key.match(/^.+ (\d+):\d+$/);
    if (match) chapters.add(match[1]);
  }

  Array.from(chapters).sort((a, b) => a - b).forEach(ch => {
    const option = document.createElement('option');
    option.value = ch;
    option.textContent = ch;
    chapterSelect.appendChild(option);
  });

  chapterSelect.addEventListener('change', () => {
    currentChapter = parseInt(chapterSelect.value);
    displayChapter(currentChapter);
  });

  populateVerseDropdown();
}

function populateVerseDropdown() {
  const verseSelect = document.getElementById('verse');
  verseSelect.innerHTML = '';

  const allOption = document.createElement('option');
  allOption.value = 'all';
  allOption.textContent = 'All';
  verseSelect.appendChild(allOption);

  const selectedChapter = document.getElementById('chapter').value;
  const verses = Object.keys(bibleVerses)
    .filter(key => key.startsWith(`${currentBookName} ${selectedChapter}:`))
    .map(key => key.split(':')[1]);

  Array.from(new Set(verses)).sort((a, b) => a - b).forEach(v => {
    const option = document.createElement('option');
    option.value = v;
    option.textContent = v;
    verseSelect.appendChild(option);
  });

  verseSelect.addEventListener('change', () => {
    const selected = verseSelect.value;
    displayChapter(currentChapter, selected);
  });
}

function displayChapter(chapter, specificVerse = 'all') {
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';

  const chapterDiv = document.createElement('div');
  chapterDiv.className = 'chapter-div';

  const header = document.createElement('h2');
  header.textContent = `${currentBookName} Chapter ${chapter}`;
  chapterDiv.appendChild(header);

  const entries = Object.entries(bibleVerses)
    .filter(([ref]) => ref.startsWith(`${currentBookName} ${chapter}:`))
    .filter(([ref]) => specificVerse === 'all' || ref.endsWith(`:${specificVerse}`));

  entries.forEach(([ref, text]) => {
    const card = document.createElement('div');
    card.className = 'verse-card';

    const refEl = document.createElement('h4');
    refEl.textContent = ref;

    const textEl = document.createElement('p');
    textEl.textContent = text;

    card.appendChild(refEl);
    card.appendChild(textEl);
    chapterDiv.appendChild(card);
  });

  resultsDiv.appendChild(chapterDiv);
}

function previousChapter() {
  if (currentChapter > 1) {
    currentChapter--;
    document.getElementById('chapter').value = currentChapter;
    displayChapter(currentChapter);
    populateVerseDropdown();
  }
}

function nextChapter() {
  const chapterSelect = document.getElementById('chapter');
  const max = Math.max(...Array.from(chapterSelect.options).map(opt => parseInt(opt.value)));
  if (currentChapter < max) {
    currentChapter++;
    document.getElementById('chapter').value = currentChapter;
    displayChapter(currentChapter);
    populateVerseDropdown();
  }
}