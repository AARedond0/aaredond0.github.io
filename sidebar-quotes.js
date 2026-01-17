const quotes = [
  "This is a place where care matters more than certainty.",
  "Grace does not hurry what must be received slowly.",
  "Faith is not something we finish understanding; it is something we remain within.",
  "Not everything that is true announces itself loudly.",
  "Grace heals without humiliating.",
  "At the heart of faith is not mastery, but trust.",
  "The remembering asked of us is not nostalgia, but responsibility.",
  "Faith does not silence questions; it teaches us how to carry them.",
  "What is broken open is often what is finally known.",
  "Grace works patiently with what is unfinished.",
  "The Church is not first an answer, but a place to remain.",
  "Faith is sustained not by certainty, but by return.",
  "What is offered here is not argument, but orientation.",
  "Grace does not erase our freedom; it asks for our consent.",
  "To remain is sometimes the bravest act of faith.",
  "Understanding follows fidelity more often than it precedes it.",
  "Christ does not force himself upon us; he waits to be recognized.",
  "Grace meets us where we are, but never leaves us there.",
  "The work of God is often quieter than our expectations.",
  "Faith that does not take shape will not endure.",
  "Reverence begins where explanation ends.",
  "Belief matures when it is lived, not merely defended.",
  "Salvation is not seized; it is received and lived.",
  "What matters most often arrives without urgency.",
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

