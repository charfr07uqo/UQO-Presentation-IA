// ── Bien prompter slides ──

SLIDES_DATA.push(
  {
    "id": "prompter-contexte",
    "layout": "single-highlight",
    "glow": ["1"],
    "section": "Bien prompter",
    "tag": "Bien prompter",
    "title": "💡 Comment bien prompter",
    "subtitle": "Deux principes fondamentaux à retenir.",
    "box": {
      "title": "🔑 Le contexte est roi",
      "text": "L'IA ne connaît que ce que vous lui donnez. Plus vous fournissez de contexte pertinent (fichiers, exemples, contraintes), plus la réponse sera précise et utile.",
      "badges": [
        { "type": "success", "text": "✓ Référencer des fichiers avec #" },
        { "type": "success", "text": "✓ Décrire le résultat attendu" },
        { "type": "success", "text": "✓ Mentionner les contraintes" },
        { "type": "success", "text": "✓ Annexer des captures d'écran (annotées ou non)" },
        { "type": "success", "text": "✓ Annexer des fichiers" }
      ]
    }
  },
  {
    "id": "prompter-naturel",
    "layout": "single-highlight",
    "glow": ["2"],
    "section": "Bien prompter",
    "tag": "Bien prompter — Suite",
    "title": "💡 Parlez naturellement",
    "subtitle": "Pas besoin d'être technique pour bien utiliser l'IA.",
    "box": {
      "title": "🗣️ Le jargon technique n'est pas nécessaire",
      "text": "L'IA comprend le langage naturel. Décrivez simplement ce que vous voulez accomplir, comme vous l'expliqueriez à un collègue. Pas besoin de structurer parfaitement vos idées.",
      "badges": [
        { "type": "danger", "text": "✗ Pas besoin de syntaxe spéciale" },
        { "type": "danger", "text": "✗ Pas besoin de termes techniques" },
        { "type": "success", "text": "✓ Décrivez votre intention" },
        { "type": "primary", "text": "Ex. job en lot : « J'ai 200 fichiers SQL à renommer selon la convention X. »" },
        { "type": "primary", "text": "Ex. job en lot : « Ajoute un en-tête de licence à tous les fichiers .cs du projet. »" },
        { "type": "primary", "text": "Ex. job en lot : « Remplace toutes les connexions strings en dur par des appels à appsettings. »" }
      ]
    }
  },
  {
    "id": "prompter-exemples",
    "layout": "prompt-examples",
    "glow": ["1"],
    "section": "Bien prompter",
    "tag": "Bien prompter — Exemples",
    "title": "💡 Exemples de bons prompts (1/2)",
    "subtitle": "Quelques exemples concrets pour illustrer.",
    "prompts": [
      { "good": true, "text": "« Copie l'écran CrsRechCrs de DosEtuAdmin vers DosEtuAdmin-v2. N'oublie pas de créer les endpoints. Fait un plan par étape et présente-moi le avant de l'exécuter. »" },
      { "good": true, "text": "« Analyse le projet et propose-moi 10 fonctionnalités qu'on pourrait ajouter. »" },
      { "good": true, "text": "« En te basant sur l'écran X, fais un écran de gestion de la table Y. Par contre laisse tomber Z élément. Pour ce qui a trait de la composante GestionSecu, interroge moi. »" }
    ],
    "note": "👆 Décrivez votre intention clairement, donnez du contexte, et laissez l'IA choisir l'implémentation."
  },
  {
    "id": "prompter-exemples-2",
    "layout": "prompt-examples",
    "glow": ["2"],
    "section": "Bien prompter",
    "tag": "Bien prompter — Exemples",
    "title": "💡 Exemples de bons prompts (2/2)",
    "subtitle": "D'autres idées pour tirer le meilleur de l'IA.",
    "prompts": [
      { "good": true, "text": "« Regarde comment l'écran EtuRechEtu, AdmRechAdm, CrsRechCrs fonctionne et fait toi un skill de création d'écran de recherche basé sur les patterns que tu observes. Si tu remarques des choses qui varient d'un modèle à l'autre mentionne moi le et je te dirai quelle norme établir. »" },
      { "good": true, "text": "« Regarde dans le dossier normes du projet, et valide mes fichiers non commités. Ne modifie rien, fais moi un rapport détaillé de ce que tu changerais. »" }
    ],
    "note": "💡 Ce dernier prompt pourrait facilement devenir un skill réutilisable pour valider le code avant chaque commit."
  }
);