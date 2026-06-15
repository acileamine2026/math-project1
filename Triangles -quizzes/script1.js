const problems = [
    {
        id: 1,
        en: "Find the measure of ∠1 and ∠2 in the triangle.",
        ar: "أوجد قياس ∠1 و ∠2 في المثلث.",
        svg: `<svg width="200" height="150"><path d="M20 140 L180 140 L40 20 Z" fill="none" stroke="black"/><path d="M40 20 L40 140" stroke="black"/><text x="45" y="40">1</text><text x="60" y="40">2</text></svg>`,
        options: ["∠1=30°, ∠2=60°", "∠1=60°, ∠2=30°", "∠1=45°, ∠2=45°", "∠1=90°, ∠2=90°"],
        correct: 1,
        explanation: "The sum of angles in a triangle is 180°. In the left triangle, 180 - 90 - 60 = 30°."
    }
];

function render() {
    const app = document.getElementById('app');
    app.innerHTML = problems.map((p, i) => `
        <div class="card">
            <h3>Problem ${p.id}</h3>
            <p class="text">${p.en}</p>
            <div class="svg-container">${p.svg}</div>
            <div class="options">
                ${p.options.map((opt, j) => `<button onclick="check(${i}, ${j})">${opt}</button>`).join('')}
            </div>
            <div id="feedback-${i}" class="feedback"></div>
        </div>
    `).join('');
}

function check(qIdx, aIdx) {
    const fb = document.getElementById(`feedback-${qIdx}`);
    if(aIdx === problems[qIdx].correct) {
        fb.innerHTML = "✔ Correct";
        fb.style.color = "var(--success)";
    } else {
        fb.innerHTML = "✖ Incorrect. Try again!";
        fb.style.color = "var(--error)";
    }
}

render();