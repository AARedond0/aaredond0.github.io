const quotes = [
  "Grace does not demand perfection, only openness.",
  "Freedom is not the absence of authority, but the presence of love rightly ordered.",
  "To trust grace is to allow time to do its work.",
  "What endures is rarely loud.",
  "Many walk away not because the teaching is unclear, but because it is demanding.",
  "What saves us is not effort alone, but grace received and followed."
];

(() => {
  const el = document.querySelector(".sidebar-quote");
  if (!el) return;

  let i = 1;

  function formatQuote(text) {
    const words = text.split(" ");
    const first = words.shift();
    return `<span class="anchor">${first}</span> ${words.join(" ")}`;
  }

  function rotateQuote() {
    el.style.opacity = 0;
    el.style.transform = "translateY(4px)";

    setTimeout(() => {
      el.innerHTML = formatQuote(quotes[i]);
      el.style.opacity = 0.9;
      el.style.transform = "translateY(0px)";
      i = (i + 1) % quotes.length;
    }, 3200);
  }

  // initial load
  el.innerHTML = formatQuote(quotes[0]);

  // rotate every 10 seconds
  setInterval(rotateQuote, 10000);
})();

