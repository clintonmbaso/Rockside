
function getBibleVerse(verse) {
  const parts = verse.replace(/ /g, '').split(/[,:-]/); // Remove spaces, split by colon, comma, or hyphen
  const bookChapter = parts[0].trim(); // Get the book and chapter
  let versesText = `<h3 class="bookChapter">${bookChapter}</h3>`; // Add book and chapter as heading

  // Check for ranges or multiple verses
  if (verse.includes('-')) {
    // Verse range like "1 Kings 1:1-3" or "Luke 1:2-5"
    const startVerse = parseInt(parts[1].trim());
    const endVerse = parseInt(parts[2].trim());
    for (let i = startVerse; i <= endVerse; i++) {
      const verseKey = `${bookChapter}:${i}`;
      versesText += `<p><strong>${i}</strong> ${getVerseText(verseKey)}</p>`;
    }
  } else if (verse.includes(',')) {
    // Multiple verses/ranges like "Luke 1:2-5,10" or "1 Kings 1:1,3-5"
    for (let i = 1; i < parts.length; i++) {
      const part = parts[i].trim();
      if (part.includes('-')) {
        // Range within multiple verses
        const [start, end] = part.split('-').map(Number);
        for (let j = start; j <= end; j++) {
          const verseKey = `${bookChapter}:${j}`;
          versesText += `<p><strong>${j}</strong> ${getVerseText(verseKey)}</p>`;
        }
      } else {
        // Individual verse within multiple verses
        const verseKey = `${bookChapter}:${part}`;
        versesText += `<p><strong>${part}</strong> ${getVerseText(verseKey)}</p>`;
      }
    }
  } else {
    // Single verse like "1 Kings 1:1" or "Luke 1:2"
    const verseNumber = parts[1].trim();
    const verseKey = `${bookChapter}:${verseNumber}`;
    versesText += `<p><strong>${verseNumber}</strong> ${getVerseText(verseKey)}</p>`;
  }

  return versesText || '<p>Verse not available</p>';
}