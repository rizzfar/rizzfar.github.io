const inputElement = document.getElementById('input-word');
const infoElement = document.getElementById('info');
const resultWordElement = document.getElementById('result-word');
const resultMeanElement = document.getElementById('result-mean');
const loadingSpinner = document.getElementById("loading-spinner");


loadingSpinner.style.display = 'none';

const permute = string => {
  const results = [];
  results.push(string);

  const chars = string.split('');
  const n = chars.length;

  const indices = Array.from({ length: n }, (_, i) => i);
  const cycles = Array.from({ length: n }, (_, i) => n - i);

  let i = 0;
  while (i < n) {
    cycles[i]--;
    if (cycles[i] === 0) {
      cycles[i] = n - i;
      i++;
    } else {
      const j = i + cycles[i];
      [indices[i], indices[j]] = [indices[j], indices[i]];

      let permutation = '';
      for (let p = 0; p < n; p++) {
        permutation += chars[indices[p]];
      }
      results.push(permutation);
      i = 0;
    }
  }
  return results;
}

const loadDictionary = async _ => {
  try {
    const response = await fetch('dictionary.json');
    if (!response.ok) throw new Error("Gagal memuat kamus");
    
    const json = await response.json();
    console.log("Dictionary Loaded:", json);
    return json.dictionary;
  } catch (error) {
    console.error("Error loading dictionary:", error);
    return [];
  }
};


const findAnagram = async () => {
  const input = inputElement.value.toLowerCase().trim();
  inputElement.value = '';
  if (!input) {
    infoElement.innerHTML = '<span style="color: red;">Masukkan kata terlebih dahulu!</span>';
    return;
  }

  loadingSpinner.style.display = 'flex';

  await new Promise(resolve => setTimeout(resolve, 0));

  try {
    const permutations = new Set(permute(input));
    const dictionary = await loadDictionary();
    if (dictionary.length === 0) throw new Error("Kamus kosong atau gagal dimuat");

    const anagrams = dictionary.filter(e => permutations.has(e.word.trim()) && e.type === 1);
    const words = new Set(anagrams.map(e => e.word.trim()));

    if (words.size === 0) {
      infoElement.innerHTML = '<span style="color: red;">Kata tidak ditemukan dalam kamus!</span>';
      resultWordElement.innerHTML = '';
      resultMeanElement.innerHTML = '';
      resultMeanElement.style.display = "none";
    } else {
      resultMeanElement.style.display = "block"; 
      infoElement.innerHTML = `Ditemukan <b>${words.size}</b> dari <b>${permutations.size}</b> permutasi kata di dalam kamus`;
      displayResults(words, anagrams);
    }
  } catch (error) {
    console.error(error);
    infoElement.innerHTML = '<span style="color: red;">Terjadi kesalahan!</span>';
  } finally {
    loadingSpinner.style.display = 'none'; 
  }
};

const displayResults = (words, anagrams) => {
  resultWordElement.innerHTML = [...words].map(e => {
    return `<a href="#${e}" style="font-size:2em;color:black">${e}</a>`;
  }).join('');

  const parser = new DOMParser();
  resultMeanElement.innerHTML = anagrams.map(e => {
    const parsedHTML = parser.parseFromString(e.arti, 'text/html').body.textContent;
    return `<div id="${e.word}" style="margin-bottom: 1em"><h3 style="margin: 0; color: red">${e.word}</h3><span>${parsedHTML}</span></div>`;
  }).join('');
};

const toggleMode = () => {
  const body = document.body;
  body.classList.toggle("dark-mode");

  const isDark = body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");

  document.querySelector(".toggle-mode").textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
};

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark-mode");
      document.querySelector(".toggle-mode").textContent = "☀️ Light Mode";
  }
});



