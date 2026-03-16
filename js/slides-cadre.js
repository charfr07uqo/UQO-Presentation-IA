// ── Cadre directeur slides ──

SLIDES_DATA.push(
  {
    "id": "cadre-intro",
    "layout": "single-highlight",
    "glow": ["1"],
    "section": "Cadre directeur",
    "tag": "Cadre directeur",
    "title": "📜 Projet pilote IA — Partenariat UQO / UQAT / UQAR",
    "subtitle": "Lignes directrices régissant l'utilisation de l'IA dans le cadre du partenariat de développement informatique.",
    "box": {
      "title": "🎯 Pourquoi ce cadre ?",
      "text": "Ce document établit les règles communes pour l'adoption de l'IA entre l'UQO, l'UQAT et l'UQAR. Il encadre l'utilisation responsable de l'IA tout en maximisant ses bénéfices pour nos équipes.",
      "badges": [
        { "type": "primary", "text": "Productivité" },
        { "type": "accent", "text": "Sécurité" },
        { "type": "warning", "text": "Normes" },
        { "type": "success", "text": "Qualité du code" }
      ]
    }
  },
  {
    "id": "cadre-objectifs",
    "layout": "cards",
    "glow": ["2"],
    "section": "Cadre directeur",
    "tag": "Cadre directeur — Objectifs",
    "title": "🚀 Objectifs de l'adoption de l'IA (1/2)",
    "subtitle": "Ce que l'on cherche à accomplir avec l'intégration de l'IA.",
    "cards": [
      { "icon": "✨", "title": "Augmenter la qualité du code", "text": "L'IA aide à détecter les erreurs, suggérer des améliorations et appliquer les bonnes pratiques de manière cohérente à travers tout le projet." },
      { "icon": "🎯", "title": "Améliorer la qualité des produits", "text": "De meilleures interfaces utilisateurs, de meilleures performances et des fonctionnalités plus robustes grâce à l'assistance IA au quotidien." },
      { "icon": "⚡", "title": "Accélérer le développement", "text": "Développement d'interfaces plus rapide, débogage accéléré et revues de code automatiques en complément des revues humaines." }
    ]
  },
  {
    "id": "cadre-objectifs-2",
    "layout": "cards",
    "glow": ["1"],
    "section": "Cadre directeur",
    "tag": "Cadre directeur — Objectifs",
    "title": "🚀 Objectifs de l'adoption de l'IA (2/2)",
    "subtitle": "Apprentissage et autonomie pour toute l'équipe.",
    "cards": [
      { "icon": "📚", "title": "Bonnes pratiques", "text": "Exposition et apprentissage de patterns de programmation reconnus, directement intégrés dans le flux de travail quotidien." },
      { "icon": "🧠", "title": "Développer des « talents IA »", "text": "Créer des configurations IA basées sur nos pratiques internes, permettant à tous (juniors comme seniors) de résoudre des problèmes de manière autonome." }
    ]
  },
  {
    "id": "cadre-securite",
    "layout": "cards",
    "glow": ["1"],
    "section": "Cadre directeur",
    "tag": "Cadre directeur — Sécurité",
    "title": "🔒 Protection des données et confidentialité",
    "subtitle": "Règles strictes pour garantir la sécurité de nos informations.",
    "cards": [
      { "icon": "🛡️", "title": "Pas d'entraînement sur nos données", "text": "L'IA sélectionnée doit garantir qu'elle ne s'entraîne pas sur nos données. La télémétrie ne doit pas récupérer d'information sensible." },
      { "icon": "🔑", "title": "Nettoyage des secrets", "text": "Interdit d'utiliser l'IA sur un projet avant d'avoir vérifié ou nettoyé tout contenu de secrets : mots de passe, clés d'API, clés de licences, etc." }
    ]
  },
  {
    "id": "cadre-revue",
    "layout": "cards",
    "glow": ["2"],
    "section": "Cadre directeur",
    "tag": "Cadre directeur — Processus",
    "title": "✅ Revue de code et attribution",
    "subtitle": "Le code IA passe par le même processus que le code humain.",
    "cards": [
      { "icon": "👥 <img src='icons/git.svg' class='card-icon-img'>", "title": "Pull Request Review obligatoire", "text": "Tout code généré par l'IA doit être revu par un membre de l'équipe en plus de la personne qui le soumet. Même processus que le code écrit à la main." },
      { "icon": "✍️", "title": "Attribution claire", "text": "Tout code soumis, qu'il soit 100% humain ou assisté par l'IA, est associé à un membre de l'équipe. Chacun reste responsable de ce qu'il livre." }
    ]
  },
  {
    "id": "cadre-normes",
    "layout": "cards",
    "glow": ["1"],
    "section": "Cadre directeur",
    "tag": "Cadre directeur — Normes",
    "title": "📐 Respect des normes et partage",
    "subtitle": "L'IA doit suivre nos standards et la documentation reste centrale.",
    "cards": [
      { "icon": "🇫🇷 <img src='icons/blazor.svg' class='card-icon-img'> <img src='icons/dotnet.svg' class='card-icon-img'>", "title": "Nos standards", "text": "L'IA doit être configurée pour programmer en français, respecter nos formats de commentaires, indentations, et utiliser nos stacks technologiques établis." },
      { "icon": "📖", "title": "Documentation centrale", "text": "La documentation existante demeure l'élément central de tout développement. L'IA la complète, elle ne la remplace pas." },
      { "icon": "🤝", "title": "Partage des apprentissages", "text": "Des réunions et discussions régulières entre partenaires pour encadrer et améliorer notre utilisation collective de l'IA." }
    ]
  }
);