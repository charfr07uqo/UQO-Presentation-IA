// ── Concepts IA slides ──

SLIDES_DATA.push(
  {
    "id": "concept-llm",
    "layout": "single-highlight",
    "glow": ["1"],
    "section": "Concepts IA",
    "tag": "Concepts IA",
    "title": "💬 LLM — Large Language Model",
    "subtitle": "Le « cerveau » derrière les outils d'IA générative.",
    "box": {
      "title": "🧠 Qu'est-ce qu'un LLM ?",
      "text": "Un modèle de langage massif entraîné sur des milliards de textes. Il prédit le texte le plus probable en réponse à une entrée. C'est le moteur derrière tous les assistants IA actuels.",
      "badges": [
        { "type": "primary", "text": "Claude (Anthropic)", "icon": "icons/claude-color.svg" },
        { "type": "accent", "text": "GPT (OpenAI)", "icon": "icons/openai-color.svg" },
        { "type": "warning", "text": "Gemini (Google)", "icon": "icons/gemini-color.svg" },
        { "type": "danger", "text": "Grok (xAI)", "icon": "icons/x-color.svg" }
      ],
      "note": "<img src='icons/github.svg' class='badge-icon'> GitHub Copilot n'est pas un LLM — c'est un outil qui utilise GPT, Claude ou Gemini selon le contexte."
    }
  },
  {
    "id": "concept-prompt",
    "layout": "single-highlight",
    "glow": ["2"],
    "section": "Concepts IA",
    "tag": "Concepts IA",
    "title": "✍️ Prompt",
    "subtitle": "L'art de communiquer avec l'IA.",
    "box": {
      "title": "📝 Qu'est-ce qu'un prompt ?",
      "text": "L'instruction ou la question que vous envoyez à l'IA. La qualité du prompt détermine directement la qualité de la réponse. Un bon prompt est clair, contextuel et précis — c'est la compétence clé à développer.",
      "badges": [
        { "type": "success", "text": "✓ Clair et précis" },
        { "type": "success", "text": "✓ Riche en contexte" },
        { "type": "danger", "text": "✗ Vague = résultat vague" }
      ]
    }
  },
  {
    "id": "concept-fichier-md",
    "layout": "two-cols-md",
    "glow": ["1"],
    "section": "Concepts IA",
    "tag": "Concepts IA",
    "title": "📄 Fichier Markdown (.md)",
    "subtitle": "Le format universel pour communiquer avec l'IA.",
    "left": {
      "title": "📋 Pourquoi le Markdown ?",
      "text": "Le Markdown est un format texte simple et structuré, lisible autant par les humains que par l'IA. C'est le format utilisé pour rédiger les normes, skills et vérifications qui guident le comportement de l'IA.",
      "badges": [
        { "type": "success", "text": "Lisible par l'humain et l'IA" },
        { "type": "primary", "text": "Structuré avec titres et listes" },
        { "type": "accent", "text": "Utilisé pour normes, skills, specs" }
      ]
    },
    "right": "# Guide des commentaires\n\n## Règles\n- Commenter en **français**\n- Décrire le *pourquoi*, pas le *quoi*\n- Utiliser `///` pour les méthodes publiques\n\n## Exemple\n```csharp\n/// Récupère la liste des cours\n/// actifs pour la session donnée.\npublic List<Cours> ObtenirCours()\n```"
  },
  {
    "id": "concept-agent",
    "layout": "single-highlight",
    "glow": ["1"],
    "section": "Concepts IA",
    "tag": "Concepts IA",
    "title": "🤖 Agent",
    "subtitle": "Quand l'IA passe de la conversation à l'action.",
    "box": {
      "title": "⚙️ Qu'est-ce qu'un agent ?",
      "text": "Un agent est un programme qui orchestre un LLM en boucle : il reçoit un objectif, planifie des étapes, exécute des actions (lire des fichiers, écrire du code, lancer des commandes) et s'ajuste selon les résultats.",
      "badges": [
        { "type": "primary", "text": "Planifie des étapes" },
        { "type": "accent", "text": "Exécute des actions" },
        { "type": "warning", "text": "S'ajuste en boucle" }
      ]
    }
  },
  {
    "id": "concept-contexte",
    "layout": "single-highlight",
    "glow": ["2"],
    "section": "Concepts IA",
    "tag": "Concepts IA",
    "title": "📦 Contexte",
    "subtitle": "L'ingrédient secret d'une bonne réponse IA.",
    "box": {
      "title": "🔍 Qu'est-ce que le contexte ?",
      "text": "L'ensemble des informations que l'IA a « en tête » pour répondre : fichiers ouverts, historique de conversation, normes du projet. Plus le contexte est riche et pertinent, meilleure est la réponse. Votre prompt sert aussi à clarifier le contexte — en précisant vos intentions, contraintes ou fichiers concernés, vous enrichissez directement ce que l'IA comprend.",
      "badges": [
        { "type": "success", "text": "Fichiers référencés avec #" },
        { "type": "success", "text": "Normes du projet" },
        { "type": "success", "text": "Historique de conversation" }
      ]
    }
  },
  {
    "id": "concept-skills",
    "layout": "single-highlight",
    "glow": ["1"],
    "section": "Concepts IA",
    "tag": "Concepts IA",
    "title": "⚡ Skills",
    "subtitle": "Des recettes réutilisables pour guider l'IA.",
    "box": {
      "title": "📋 Qu'est-ce qu'un skill ?",
      "text": "Des instructions réutilisables qui guident le comportement de l'IA pour des tâches spécifiques. Par exemple, un skill peut définir comment créer un endpoint API ou une nouvelle page selon vos conventions d'équipe. On les invoque avec # dans le chat.",
      "badges": [
        { "type": "primary", "text": "#creer-nouvelle-page" },
        { "type": "accent", "text": "#corriger-erreurs-build" },
        { "type": "warning", "text": "#analyser-solution" }
      ]
    }
  },
  {
    "id": "concept-mcp",
    "layout": "single-highlight",
    "glow": ["2"],
    "section": "Concepts IA",
    "tag": "Concepts IA",
    "title": "🧠 Concepts IA — MCP",
    "subtitle": "Un protocole qui étend les capacités de l'IA.",
    "box": {
      "title": "🔌 MCP — Model Context Protocol",
      "text": "Un standard ouvert qui permet à l'IA de se connecter à des outils externes : bases de données, API, documentation, services cloud. L'agent peut ainsi interagir avec des systèmes au-delà de vos fichiers locaux.",
      "badges": [
        { "type": "primary", "text": "Connecte l'IA à des outils externes" },
        { "type": "accent", "text": "Standard ouvert et extensible" },
        { "type": "warning", "text": "Configurable par projet" }
      ]
    }
  }
);