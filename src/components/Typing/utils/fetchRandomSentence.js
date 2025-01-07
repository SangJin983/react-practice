const RANDOM_SENTENCE_URL =
  "https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1";

export const fetchRandomSentence = async () => {
  const res = await fetch(RANDOM_SENTENCE_URL);
  const data = await res.json();
  return data;
};
