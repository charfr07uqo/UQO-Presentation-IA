// ── Fichiers MD slides ──

SLIDES_DATA.push(
  {
    "id": "fichiers-md-maison",
    "layout": "two-cols-filetree",
    "glow": ["1"],
    "section": "Fichiers MD",
    "tag": "Fichiers MD",
    "title": "📁 Notre structure maison",
    "subtitle": "Le dossier <code>.agents/</code> contient nos normes, skills et vérifications partagés en équipe.",
    "fileTree": [
      { "type": "folder", "name": "📂 .agents/", "indent": 0 },
      { "type": "folder", "name": "📂 normes/", "indent": 1 },
      { "type": "highlight", "name": "📄 guide-abreviations.md", "indent": 2 },
      { "type": "highlight", "name": "📄 guide-commentaires.md", "indent": 2 },
      { "type": "file", "name": "📄 guide-domaines-fonctionnels.md", "indent": 2 },
      { "type": "file", "name": "📄 guide-gestion-exceptions.md", "indent": 2 },
      { "type": "file", "name": "📄 guide-logging.md", "indent": 2 },
      { "type": "file", "name": "📄 guide-normes-visuelles.md", "indent": 2 },
      { "type": "file", "name": "📄 guide-patterns-blazor.md", "indent": 2 },
      { "type": "file", "name": "📄 guide-rendu-dom-blazor.md", "indent": 2 },
      { "type": "folder", "name": "📂 skills/", "indent": 1 },
      { "type": "highlight", "name": "📄 analyser-solution", "indent": 2 },
      { "type": "highlight", "name": "📄 corriger-erreurs-build", "indent": 2 },
      { "type": "highlight", "name": "📄 creer-nouvelle-page", "indent": 2 },
      { "type": "file", "name": "📄 creer-usecase", "indent": 2 },
      { "type": "file", "name": "📄 skill-creator", "indent": 2 },
      { "type": "folder", "name": "📂 verifications/", "indent": 1 },
      { "type": "highlight", "name": "📄 checklist-appsettings.md", "indent": 2 },
      { "type": "highlight", "name": "📄 checklist-ecran.md", "indent": 2 },
      { "type": "file", "name": "📄 verification-versions-nuget.md", "indent": 2 }
    ],
    "descriptions": [
      { "title": "📋 Normes", "text": "Nos guides d'équipe : abréviations, commentaires, patterns Blazor, gestion d'exceptions, etc. L'IA les consulte automatiquement." },
      { "title": "⚡ Skills", "text": "Tâches automatisées maison : analyser une solution, corriger les erreurs de build, créer une nouvelle page selon nos conventions." },
      { "title": "✅ Vérifications", "text": "Checklists exécutées par l'IA pour valider un écran, les appsettings ou les versions NuGet avant de livrer." }
    ]
  },
  {
    "id": "fichiers-md-kiro",
    "layout": "two-cols-filetree",
    "glow": ["2"],
    "section": "Fichiers MD",
    "tag": "Fichiers MD — Équivalent Kiro",
    "title": "📁 Structure native Kiro",
    "subtitle": "Kiro utilise le dossier <code>.kiro/</code> avec une structure similaire. Notre dossier <code>.agents/</code> s'y transpose directement.",
    "fileTree": [
      { "type": "folder", "name": "📂 .kiro/", "indent": 0 },
      { "type": "folder", "name": "📂 steering/", "indent": 1 },
      { "type": "file", "name": "📄 (équivalent de normes/)", "indent": 2 },
      { "type": "folder", "name": "📂 skills/", "indent": 1 },
      { "type": "file", "name": "📄 (équivalent de skills/)", "indent": 2 },
      { "type": "folder", "name": "📂 specs/", "indent": 1 },
      { "type": "file", "name": "📄 (planification de features)", "indent": 2 },
      { "type": "folder", "name": "📂 hooks/", "indent": 1 },
      { "type": "file", "name": "📄 (actions automatiques)", "indent": 2 }
    ],
    "descriptions": [
      { "title": "📋 Steering = Normes", "text": "Même rôle que notre dossier <code>normes/</code>. Règles toujours actives consultées par l'IA à chaque interaction." },
      { "title": "⚡ Skills = Skills", "text": "Identique à notre dossier <code>skills/</code>. Invoqués avec <code>#nom-du-skill</code> dans le chat." },
      { "title": "📝 Specs & Hooks", "text": "Fonctionnalités supplémentaires de Kiro : planification de features en tâches et déclencheurs automatiques (lint, tests, etc.)." }
    ]
  }
);