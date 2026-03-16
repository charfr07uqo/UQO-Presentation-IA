// ── Fin + Laboratoire slides ──

SLIDES_DATA.push(
  {
    "id": "avenir-ia",
    "layout": "single-highlight",
    "glow": ["2"],
    "section": "Conclusion",
    "tag": "Perspectives",
    "title": "🔮 Ce n'est que le début",
    "subtitle": "L'IA dans nos pratiques de développement va continuer d'évoluer.",
    "box": {
      "title": "🚀 Projets pilotes à explorer",
      "text": "La formation d'aujourd'hui pose les bases, mais plusieurs avenues seront probablement explorées pour aller plus loin.",
      "badges": [
        { "type": "primary", "text": "💬 Agents conversationnels — assistance aux utilisateurs et aux développeurs" },
        { "type": "accent", "text": "🔍 Agents de validation de code en différé — revue automatisée asynchrone" },
        { "type": "danger", "text": "🛡️ Agents de vérification de vulnérabilités — sécurité proactive" },
        { "type": "warning", "text": "⚙️ Améliorations continues de nos workflows et skills" }
      ]
    }
  },
  {
    "id": "fin",
    "layout": "title",
    "glow": ["1", "2"],
    "section": "Conclusion",
    "logo": "BONNE EXPLORATION",
    "title": "Questions ?",
    "subtitle": "N'hésitez pas à expérimenter. L'IA est un outil — plus vous l'utilisez, plus vous apprenez à en tirer le meilleur.",
    "footer": "🔒 Rappel : respectez le cadre directeur, particulièrement la protection des données et la confidentialité. Ne partagez jamais de secrets, mots de passe ou clés d'API avec l'IA.<br><br>🤝 Partagez vos découvertes et apprentissages avec l'équipe.<br>⚡ Créez vos propres skills pour automatiser vos tâches récurrentes.<br>📐 Suggérez des améliorations aux skills, normes et vérifications existants.<br>🚀 Chaque contribution enrichit l'IA pour toute l'équipe."
  },
  {
    "id": "demo-skills",
    "layout": "steps",
    "glow": ["1"],
    "section": "Laboratoire",
    "tag": "Laboratoire — Démo",
    "title": "🎯 Démo de Skills",
    "subtitle": "Voyons en direct comment les skills guident l'IA dans un vrai projet.",
    "steps": [
      { "title": "Ouvrir un projet avec des skills configurés", "text": "On utilise un workspace qui contient déjà des fichiers .kiro/skills/ pour guider l'agent." },
      { "title": "Déclencher un skill via le chat", "text": "On demande à Kiro d'exécuter une tâche couverte par un skill existant et on observe le comportement." },
      { "title": "Observer le résultat", "text": "L'IA suit les instructions du skill : structure, conventions, vérifications automatiques." },
      { "title": "Comparer avec et sans skill", "text": "On voit la différence de qualité et de cohérence quand l'IA est guidée par un skill bien écrit." }
    ]
  },
  {
    "id": "labo",
    "layout": "steps",
    "glow": ["2"],
    "section": "Laboratoire",
    "tag": "Laboratoire",
    "title": "🧪 Exercice / Laboratoire",
    "subtitle": "Mise en pratique sur un vrai projet.",
    "steps": [
      { "title": "Obtenir la solution DosEtuAdmin-v2", "text": "Clonez le dépôt depuis votre gestionnaire de source." },
      { "title": "Créer un workspace incluant SQL et DosEtuAdmin", "text": "Workspace multi-dossiers pour donner à l'IA le contexte complet." },
      { "title": "Se créer une branche de travail", "text": "Branche Git dédiée pour tester librement." },
      { "title": "Tester les prompts suggérés", "text": "Utilisez les prompts des diapositives suivantes." }
    ]
  },
  {
    "id": "prompts-1",
    "layout": "prompts",
    "glow": ["1"],
    "section": "Laboratoire",
    "tag": "Laboratoire — Prompts",
    "title": "📝 Prompts suggérés (1/2)",
    "subtitle": "Copiez-collez dans Kiro pour tester.",
    "prompts": [
      { "badge": { "type": "primary", "text": "Copie d'écran + Endpoints" }, "text": "#nouvelle-page-recherche.md Copie l'écran CrsRechCrs de DosEtuAdmin vers DosEtuAdmin-v2. N'oublie de créer les endpoints dans DosEtuApi #creer-endpoint-proc-stockee pour OB_CrsRech. Fait un plan par étape et présente-moi le avant de l'exécuter." },
      { "badge": { "type": "accent", "text": "Création de thème" }, "text": "Nous avons actuellement 3 thèmes avec 2 variantes sombre et clair. J'aimerais que tu crées un nouveau thème principalement inspiré de l'image en pièce jointe et l'ajoute au sélecteur de thème." }
    ]
  },
  {
    "id": "prompts-2",
    "layout": "prompts",
    "glow": ["2"],
    "section": "Laboratoire",
    "tag": "Laboratoire — Prompts",
    "title": "📝 Prompts suggérés (2/2)",
    "subtitle": "D'autres idées pour explorer les capacités de Kiro.",
    "prompts": [
      { "badge": { "type": "warning", "text": "Analyse & Idéation" }, "text": "Ne modifie rien, mais analyse le projet et penses à 10 fonctionnalités qu'on pourrait y ajouter." },
      { "badge": { "type": "success", "text": "Documentation & Explication" }, "text": "Identifie pour moi les principales composantes de ce projet et fait moi un fichier MD avec des schémas hiérarchiques pour me l'expliquer. N'assumes pas que je connaisse le jargon technique donc prend le temps d'expliquer très brièvement quand tu parles d'éléments techniques." }
    ]
  }
);
