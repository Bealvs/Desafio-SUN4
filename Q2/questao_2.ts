function q2ContarFrequenciaPalavra(text: String) {

    const words = text.split(/\W+/);
    const frequency = {};
    for (const word of words) {
        const lowerWord = word.toLowerCase();
        if (lowerWord) {
            frequency[lowerWord] = (frequency[lowerWord] || 0) + 1;
        }
    }

  return frequency;
}

console.log(q2ContarFrequenciaPalavra("Hello world hello"));