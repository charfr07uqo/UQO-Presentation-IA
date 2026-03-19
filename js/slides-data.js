// ── Slide data registry ──
// Each section file pushes its slides into this global array.
// Order of <script> tags in HTML determines final slide order.

var SLIDES_DATA = [
  {
    "id": "title",
    "layout": "title",
    "glow": ["1", "2"],
    "section": "",
    "logo": "",
    "title": "Formation IA<br>et Introduction à <span class='nowrap'><img src='icons/kiro.png' class='title-kiro-logo'> Kiro</span>",
    "subtitle": "Comprendre les concepts fondamentaux de l'intelligence artificielle, découvrir Kiro comme outil de développement, et mettre en pratique avec des exercices concrets.",
    "badges": [
      { "type": "primary", "text": "Concepts IA" },
      { "type": "danger", "text": "Cadre directeur" },
      { "type": "accent", "text": "Kiro IDE", "icon": "icons/kiro.png" },
      { "type": "warning", "text": "Fichiers MD" },
      { "type": "success", "text": "Laboratoire" }
    ],
    "presenter": "Présenté par <strong>François Charette Nguyen</strong> — Université du Québec en Outaouais (UQO)"
  },
  {
    "id": "agenda",
    "layout": "agenda",
    "glow": ["2"],
    "section": "",
    "tag": "Plan de la formation",
    "title": "📋 Thèmes couverts aujourd'hui",
    "subtitle": "Un survol des sujets que nous allons explorer ensemble.",
    "items": [
      "Cadre directeur — Projet pilote IA (UQO / UQAT / UQAR)",
      "Concepts et jargon IA — LLM, Prompt, Agent, Contexte, Skills, MCP",
      "Structure des fichiers MD — Normes, Skills, Vérifications",
      "Comment bien prompter — Contexte et langage naturel",
      "Introduction à Kiro — IDE, interface, forces et limites",
      "Perspectives et questions",
      "Démo de skills / DosEtuApi / DosEtuAdmin-v2 / Workflow avec IA"
    ]
  }
];