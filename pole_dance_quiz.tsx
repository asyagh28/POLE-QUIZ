import { useState } from "react";

const sections = [
  {
    title: "🔥 Riscaldamento",
    subtitle: "Prima di salire al pole, scaldarsi è fondamentale!",
    questions: [
      {
        q: "Quanto tempo dovrebbe durare un riscaldamento prima di una sessione di pole dance?",
        options: ["5 minuti", "10–15 minuti", "30 minuti", "Non serve scaldarsi"],
        answer: 1,
        tip: "Un riscaldamento di 10–15 minuti prepara muscoli e articolazioni, riducendo il rischio di infortuni."
      },
      {
        q: "Quale di questi è il miglior esercizio di warm-up cardio per la pole?",
        options: ["Stretching statico a freddo", "Jumping jacks + skip sul posto", "Sollevamento pesi pesanti", "Corsa veloce per 1 km"],
        answer: 1,
        tip: "Jumping jacks e skip attivano tutto il corpo in modo dinamico, perfetto prima del pole!"
      },
      {
        q: "Lo stretching statico (tenere una posizione ferma) va fatto…",
        options: ["Prima dell'allenamento", "Durante gli esercizi al pole", "Dopo l'allenamento come cool-down", "Mai nella pole dance"],
        answer: 2,
        tip: "Lo stretching statico a fine sessione aiuta il recupero muscolare e migliora la flessibilità nel tempo."
      },
      {
        q: "Quale area del corpo è fondamentale mobilizzare prima di fare la pole?",
        options: ["Solo le gambe", "Solo le braccia", "Spalle, polsi, anche e colonna vertebrale", "Solo il collo"],
        answer: 2,
        tip: "La pole coinvolge tutto il corpo — spalle, polsi, anche e schiena vanno mobilizzati con cura!"
      },
    ]
  },
  {
    title: "💪 Workout Mirati",
    subtitle: "Conosci gli esercizi giusti per costruire la tua forza?",
    questions: [
      {
        q: "Quale esercizio è più efficace per rafforzare il CORE per la pole dance?",
        options: ["Bicep curl", "Hollow body hold", "Squat con bilanciere", "Bench press"],
        answer: 1,
        tip: "L'Hollow Body Hold allena il core profondo, fondamentale per le figure e le inversioni al pole."
      },
      {
        q: "Per migliorare la GRIP STRENGTH, quale esercizio è più utile?",
        options: ["Crunch addominali", "Dead hang alla sbarra", "Affondi", "Plank laterale"],
        answer: 1,
        tip: "Il Dead Hang allena la presa e rinforza polsi e avambracci — essenziale per stare al pole!"
      },
      {
        q: "Quale esercizio aiuta maggiormente a rafforzare le BRACCIA per i push/pull al pole?",
        options: ["Corsa sul tapis roulant", "Negative pull-up (discesa lenta)", "Leg press", "Hip thrust"],
        answer: 1,
        tip: "I negative pull-up costruiscono forza nei dorsali e bicipiti — perfetti per chi non riesce ancora a fare pull-up completi."
      },
      {
        q: "Per rafforzare gli ABS e prepararsi alle figure statiche, quale serie è più completa?",
        options: ["Crunch classici x 100", "Plank + leg raises + flutter kicks", "Solo stretching addominale", "Sit-up veloci x 50"],
        answer: 1,
        tip: "Plank, leg raises e flutter kicks allenano il core in modo funzionale, non solo superficiale!"
      },
      {
        q: "Con quale frequenza settimanale è consigliato l'allenamento specifico di forza per la pole (livello base)?",
        options: ["Ogni giorno senza riposo", "2–3 volte a settimana con giorni di recupero", "1 volta ogni 2 settimane", "Solo durante la lezione di pole"],
        answer: 1,
        tip: "2–3 sessioni settimanali permettono al muscolo di crescere durante il recupero. Il riposo è parte dell'allenamento!"
      },
    ]
  },
  {
    title: "🌀 Skill Base",
    subtitle: "Quanto conosci le skill fondamentali della pole?",
    questions: [
      {
        q: "Qual è la prima skill di salita che si impara solitamente nella pole dance?",
        options: ["Inversion", "Basic climb", "Ayesha", "Deadlift"],
        answer: 1,
        tip: "Il Basic Climb è la tecnica di salita al pole più elementare — base di tutto il resto!"
      },
      {
        q: "Cosa si intende con 'static pole'?",
        options: ["Un pole che si muove durante la danza", "Un pole fisso che non ruota", "Un pole a pavimento", "Un pole per principianti avanzati"],
        answer: 1,
        tip: "Lo static pole non ruota: richiede più forza muscolare rispetto allo spin pole."
      },
      {
        q: "Qual è una figura base fondamentale per iniziare a lavorare sulla schiena e le gambe?",
        options: ["Ayesha", "Fireman", "Superman", "Iron X"],
        answer: 1,
        tip: "Il Fireman è una delle prime figure che si imparano: allena la coordinazione e il grip con tutto il corpo."
      },
      {
        q: "Cosa significa 'body wave' nella pole dance?",
        options: ["Un salto acrobatico", "Un movimento fluido ondulatorio di tutto il corpo", "Una tecnica di caduta sicura", "Un tipo di spin veloce"],
        answer: 1,
        tip: "Il body wave è un movimento fluido dalla testa ai piedi — fondamentale per la fluidità e l'estetica della danza."
      },
    ]
  },
  {
    title: "✨ Tips & Tricks",
    subtitle: "I consigli pratici che ogni pole dancer dovrebbe sapere!",
    questions: [
      {
        q: "Qual è il miglior abbigliamento per la pole dance?",
        options: ["Tuta intera e calze", "Pantaloncini corti e top — pelle scoperta", "Leggings lunghi e felpa", "Qualsiasi abbigliamento va bene"],
        answer: 1,
        tip: "La pelle scoperta crea attrito con il pole — è fondamentale per grip e sicurezza durante le figure!"
      },
      {
        q: "Quando è consigliato usare il grip aid (come iTac o Dry Hands)?",
        options: ["Solo se si è principianti", "Quando le mani sudano troppo e si perde la presa", "Sempre, ad ogni sessione", "Mai, è pericoloso"],
        answer: 1,
        tip: "Il grip aid aiuta quando le mani sudano, ma va usato con moderazione per non alterare la sensibilità della presa."
      },
      {
        q: "Quanto spesso dovresti pulire il tuo pole?",
        options: ["Una volta al mese", "Prima e dopo ogni sessione", "Solo quando è visibilmente sporco", "Non serve pulirlo"],
        answer: 1,
        tip: "Pulire il pole con alcool isopropilico prima e dopo ogni sessione garantisce grip ottimale e igiene!"
      },
      {
        q: "Cosa fare se compaiono lividi (bruises) durante l'allenamento?",
        options: ["Smettere definitivamente", "È normale all'inizio — continuare con gradualità e curare la pelle", "Aumentare subito l'intensità", "Coprirli e ignorarli"],
        answer: 1,
        tip: "I bruises sono normalissimi per chi inizia! Con il tempo la pelle si abitua. Ghiaccio, arnica e riposo sono i tuoi migliori amici 💜"
      },
    ]
  }
];

const allQuestions = sections.flatMap((s, si) => s.questions.map((q, qi) => ({ ...q, sectionIndex: si, sectionTitle: s.title })));

const motivational = [
  { min: 0, max: 30, msg: "Sei all'inizio del tuo viaggio nella pole! 🌱 Ogni campionessa ha iniziato da zero. Studia, allenati e tornerai qui con un punteggio stellare!", emoji: "🌱" },
  { min: 31, max: 59, msg: "Buona base! 💫 Hai già qualche conoscenza, ma c'è ancora tanto da scoprire. Continua ad allenarti e vedrai grandi progressi!", emoji: "💫" },
  { min: 60, max: 79, msg: "Molto bene! 🔥 Sei sulla strada giusta. Con dedizione e allenamento mirati diventerai una vera pole dancer!", emoji: "🔥" },
  { min: 80, max: 99, msg: "Quasi perfetta! 🌟 Hai una solida conoscenza delle basi. Continua così — il pole ti appartiene!", emoji: "🌟" },
  { min: 100, max: 100, msg: "PUNTEGGIO PERFETTO! 👑 Sei una vera pole queen! Conosci ogni segreto del pole livello base. Ora sali su quel pole e brillaaa!", emoji: "👑" },
];

export default function App() {
  const [screen, setScreen] = useState("intro"); // intro | quiz | result
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selected, setSelected] = useState(null);
  const [showTip, setShowTip] = useState(false);

  const q = allQuestions[current];
  const total = allQuestions.length;
  const score = Object.entries(answers).filter(([i, a]) => allQuestions[i].answer === a).length;
  const pct = Math.round((score / total) * 100);
  const result = motivational.find(r => pct >= r.min && pct <= r.max);

  const sectionProgress = sections.map((s, si) => ({
    ...s,
    correct: allQuestions.filter((q, i) => q.sectionIndex === si && answers[i] === q.answer).length,
    total: allQuestions.filter(q => q.sectionIndex === si).length,
  }));

  const handleSelect = (idx) => {
    if (selected !== null) return;
    setSelected(idx);
    setAnswers(prev => ({ ...prev, [current]: idx }));
    setShowTip(true);
  };

  const handleNext = () => {
    setSelected(null);
    setShowTip(false);
    if (current + 1 < total) setCurrent(current + 1);
    else setScreen("result");
  };

  const handleRestart = () => {
    setScreen("intro");
    setCurrent(0);
    setAnswers({});
    setSelected(null);
    setShowTip(false);
  };

  const sectionIdx = q ? sections.findIndex((s, si) => si === q.sectionIndex) : 0;
  const progressPct = ((current) / total) * 100;

  const colors = {
    pink: "#e91e8c",
    purple: "#9c27b0",
    dark: "#1a0a2e",
    card: "#2a1050",
    light: "#f8e8ff",
  };

  if (screen === "intro") return (
    <div style={{ minHeight: "100vh", background: `linear-gradient(135deg, ${colors.dark} 0%, #2d0060 100%)`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "24px", fontFamily: "'Segoe UI', sans-serif" }}>
      <div style={{ maxWidth: 480, width: "100%", textAlign: "center" }}>
        <div style={{ fontSize: 64, marginBottom: 8 }}>🎀</div>
        <h1 style={{ color: "#fff", fontSize: 28, fontWeight: 800, margin: "0 0 8px", letterSpacing: 1 }}>POLE DANCE GUIDE</h1>
        <p style={{ color: colors.pink, fontWeight: 700, fontSize: 16, margin: "0 0 24px", textTransform: "uppercase", letterSpacing: 2 }}>Quiz Livello Base</p>
        <div style={{ background: colors.card, borderRadius: 20, padding: "24px", marginBottom: 24, border: `1px solid ${colors.purple}33` }}>
          <p style={{ color: "#ddd", margin: "0 0 16px", lineHeight: 1.6 }}>Metti alla prova le tue conoscenze su <strong style={{ color: colors.pink }}>riscaldamento, workout mirati, skill base e tips</strong> per diventare una pole dancer!</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {sections.map((s, i) => (
              <div key={i} style={{ background: "#ffffff0d", borderRadius: 12, padding: "10px 8px", border: `1px solid ${colors.purple}44` }}>
                <div style={{ fontSize: 20 }}>{s.title.split(" ")[0]}</div>
                <div style={{ color: "#ccc", fontSize: 12, marginTop: 4 }}>{s.title.replace(/^.{2} /, "")}</div>
                <div style={{ color: colors.pink, fontSize: 11, marginTop: 2 }}>{s.questions.length} domande</div>
              </div>
            ))}
          </div>
        </div>
        <button onClick={() => setScreen("quiz")} style={{ background: `linear-gradient(135deg, ${colors.pink}, ${colors.purple})`, color: "#fff", border: "none", borderRadius: 50, padding: "16px 48px", fontSize: 18, fontWeight: 800, cursor: "pointer", boxShadow: `0 4px 20px ${colors.pink}66`, letterSpacing: 1, textTransform: "uppercase" }}>
          Inizia il Quiz 💪
        </button>
        <p style={{ color: "#ffffff55", fontSize: 12, marginTop: 16 }}>{total} domande totali</p>
      </div>
    </div>
  );

  if (screen === "result") return (
    <div style={{ minHeight: "100vh", background: `linear-gradient(135deg, ${colors.dark} 0%, #2d0060 100%)`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "24px", fontFamily: "'Segoe UI', sans-serif" }}>
      <div style={{ maxWidth: 500, width: "100%", textAlign: "center" }}>
        <div style={{ fontSize: 72, marginBottom: 8 }}>{result.emoji}</div>
        <h2 style={{ color: "#fff", fontSize: 26, fontWeight: 800, margin: "0 0 8px" }}>Risultati Finali</h2>
        <div style={{ background: `linear-gradient(135deg, ${colors.pink}, ${colors.purple})`, borderRadius: 20, padding: "24px", marginBottom: 20 }}>
          <div style={{ fontSize: 56, fontWeight: 900, color: "#fff" }}>{pct}%</div>
          <div style={{ color: "#ffffff99", fontSize: 14 }}>{score} / {total} risposte corrette</div>
        </div>
        <div style={{ background: colors.card, borderRadius: 16, padding: "16px", marginBottom: 20, border: `1px solid ${colors.purple}44` }}>
          <p style={{ color: "#eee", lineHeight: 1.6, margin: 0 }}>{result.msg}</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 24 }}>
          {sectionProgress.map((s, i) => {
            const spct = Math.round((s.correct / s.total) * 100);
            return (
              <div key={i} style={{ background: colors.card, borderRadius: 14, padding: "12px", border: `1px solid ${colors.purple}33` }}>
                <div style={{ fontSize: 18 }}>{s.title.split(" ")[0]}</div>
                <div style={{ color: "#ccc", fontSize: 11, margin: "4px 0" }}>{s.title.replace(/^.{2} /, "")}</div>
                <div style={{ background: "#ffffff22", borderRadius: 8, height: 6, overflow: "hidden", marginBottom: 4 }}>
                  <div style={{ width: `${spct}%`, height: "100%", background: `linear-gradient(90deg, ${colors.pink}, ${colors.purple})`, borderRadius: 8 }} />
                </div>
                <div style={{ color: colors.pink, fontSize: 13, fontWeight: 700 }}>{s.correct}/{s.total}</div>
              </div>
            );
          })}
        </div>
        <button onClick={handleRestart} style={{ background: `linear-gradient(135deg, ${colors.pink}, ${colors.purple})`, color: "#fff", border: "none", borderRadius: 50, padding: "14px 40px", fontSize: 16, fontWeight: 700, cursor: "pointer", boxShadow: `0 4px 20px ${colors.pink}66` }}>
          🔄 Riprova il Quiz
        </button>
      </div>
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", background: `linear-gradient(135deg, ${colors.dark} 0%, #2d0060 100%)`, display: "flex", flexDirection: "column", alignItems: "center", padding: "20px 16px", fontFamily: "'Segoe UI', sans-serif" }}>
      <div style={{ maxWidth: 500, width: "100%" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 16 }}>
          <p style={{ color: colors.pink, fontWeight: 700, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", margin: "0 0 6px" }}>{sections[q.sectionIndex].title}</p>
          <div style={{ background: "#ffffff22", borderRadius: 8, height: 6, overflow: "hidden" }}>
            <div style={{ width: `${progressPct}%`, height: "100%", background: `linear-gradient(90deg, ${colors.pink}, ${colors.purple})`, borderRadius: 8, transition: "width 0.4s" }} />
          </div>
          <p style={{ color: "#ffffff66", fontSize: 12, margin: "6px 0 0" }}>Domanda {current + 1} di {total}</p>
        </div>

        {/* Question card */}
        <div style={{ background: colors.card, borderRadius: 20, padding: "24px", marginBottom: 16, border: `1px solid ${colors.purple}44` }}>
          <p style={{ color: "#fff", fontSize: 17, fontWeight: 600, lineHeight: 1.5, margin: 0 }}>{q.q}</p>
        </div>

        {/* Options */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 16 }}>
          {q.options.map((opt, i) => {
            let bg = "#2a1050";
            let border = `1px solid ${colors.purple}44`;
            let textColor = "#ddd";
            if (selected !== null) {
              if (i === q.answer) { bg = "#1a4a2a"; border = "1px solid #4caf5099"; textColor = "#a5d6a7"; }
              else if (i === selected && i !== q.answer) { bg = "#4a1a1a"; border = "1px solid #f4433699"; textColor = "#ef9a9a"; }
            }
            return (
              <button key={i} onClick={() => handleSelect(i)} disabled={selected !== null} style={{ background: bg, border, borderRadius: 14, padding: "14px 18px", color: textColor, fontSize: 15, textAlign: "left", cursor: selected !== null ? "default" : "pointer", transition: "all 0.2s", fontFamily: "inherit", display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ width: 26, height: 26, borderRadius: "50%", border: `2px solid ${colors.purple}88`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, flexShrink: 0, color: colors.pink }}>
                  {["A","B","C","D"][i]}
                </span>
                {opt}
                {selected !== null && i === q.answer && <span style={{ marginLeft: "auto" }}>✅</span>}
                {selected !== null && i === selected && i !== q.answer && <span style={{ marginLeft: "auto" }}>❌</span>}
              </button>
            );
          })}
        </div>

        {/* Tip */}
        {showTip && (
          <div style={{ background: "#1a3a4a", border: "1px solid #29b6f644", borderRadius: 14, padding: "14px 16px", marginBottom: 16 }}>
            <p style={{ color: "#81d4fa", fontSize: 13, margin: 0, lineHeight: 1.6 }}>💡 <strong>Tip:</strong> {q.tip}</p>
          </div>
        )}

        {/* Next button */}
        {selected !== null && (
          <button onClick={handleNext} style={{ width: "100%", background: `linear-gradient(135deg, ${colors.pink}, ${colors.purple})`, color: "#fff", border: "none", borderRadius: 50, padding: "14px", fontSize: 16, fontWeight: 700, cursor: "pointer", boxShadow: `0 4px 20px ${colors.pink}55` }}>
            {current + 1 < total ? "Prossima domanda →" : "Vedi i risultati 🏆"}
          </button>
        )}
      </div>
    </div>
  );
}
