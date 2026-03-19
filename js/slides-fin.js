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
    "id": "demo-projets",
    "layout": "steps",
    "glow": ["2"],
    "section": "Laboratoire",
    "tag": "Laboratoire — Démo",
    "title": "🎯 Démo de DosEtuApi et DosEtuAdmin-v2",
    "subtitle": "Présentation des deux projets utilisés pour le laboratoire.",
    "steps": [
      { "title": "DosEtuAdmin-v2 — Application Blazor SSR interactive", "text": "DosEtuAdmin-v2 est une application Blazor SSR interactive." },
      { "title": "DosEtuApi — Centralisation des accès BD", "text": "DosEtuApi est un projet en cours pour centraliser nos accès BD." },
      { "title": "Skills et normes orientées IA", "text": "Pour les deux projets, des skills et normes orientées IA mais lisibles par un humain sont en cours de développement." }
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
  },
  {
    "id": "labo-1-kiro-ext",
    "layout": "steps",
    "glow": ["2"],
    "section": "Annexe",
    "tag": "Annexe — Mise en place (1/5)",
    "title": "🧪 Guide de mise en place (1/5)",
    "subtitle": "Installation de Kiro et récupération des solutions.",
    "steps": [
      { "title": "Ouvrir Kiro et installer l'extension C#", "text": "Lancez Kiro et installez l'extension C# depuis le marketplace des extensions." },
      { "title": "Cloner DosEtuAdmin-v2", "text": "<code>git clone https://dev.azure.com/uqo-sti/sti-devl/_git/DosEtuAdmin-v2</code><br>À mettre sous <code>C:\\Git\\DosEtu\\Web\\DosEtuAdmin-v2</code>" },
      { "title": "Cloner DosEtuApi", "text": "<code>git clone https://dev.azure.com/partenariat-uqo-uqat-uqar/DosEtu/_git/DosEtuApi</code><br>À mettre sous <code>C:\\Git\\DosEtu\\WebApi\\DosEtuApi</code>" },
      { "title": "Cloner DosEtu.Rapports", "text": "<code>git clone https://dev.azure.com/partenariat-uqo-uqat-uqar/DosEtu/_git/DosEtu.Rapports</code><br>À mettre sous <code>C:\\Git\\DosEtu\\Bibliotheques\\DosEtu.Rapports</code>" }
    ]
  },
  {
    "id": "labo-2-workspace",
    "layout": "steps",
    "glow": ["1"],
    "section": "Annexe",
    "tag": "Annexe — Mise en place (2/5)",
    "title": "🧪 Guide de mise en place (2/5)",
    "subtitle": "Configuration du workspace et de la branche.",
    "steps": [
      { "title": "Ouvrir DosEtuAdmin-v2 dans Kiro", "text": "Ouvrez Kiro et ouvrez le dossier <code>DosEtuAdmin-v2</code>." },
      { "title": "Changer de branche", "text": "Passez à la branche <code>migration-tables-codes</code> pour DosEtuAdmin-v2." },
      { "title": "Ajouter les dossiers au workspace", "text": "Ajoutez au workspace les dossiers <code>DosEtuApi</code>, <code>DosEtuAdmin</code> et <code>SQL</code>." },
      { "title": "Renommer Local.props.template", "text": "Renommez <code>Local.props.template</code> en <code>Local.props</code>. Ce fichier indique qu'on veut utiliser la version locale de DosEtuApi plutôt que le package NuGet." }
    ]
  },
  {
    "id": "labo-3-nuget-partenariat",
    "layout": "steps",
    "glow": ["2"],
    "section": "Annexe",
    "tag": "Annexe — Mise en place (3/5)",
    "title": "🧪 Guide de mise en place (3/5)",
    "subtitle": "Configuration du feed NuGet du partenariat.",
    "steps": [
      { "title": "Créer un Personal Access Token (PAT)", "text": "Allez sur <code>dev.azure.com/partenariat-uqo-uqat-uqar</code> → User Settings → Personal Access Tokens. Créez un token avec la permission <code>Packaging (Read)</code>." },
      { "title": "Configurer la source NuGet Partenariat", "text": "<code>dotnet nuget update source Partenariat --username ton@email.com --password &lt;PAT&gt; --store-password-in-clear-text</code>" }
    ]
  },
  {
    "id": "labo-4-nuget-telerik",
    "layout": "steps",
    "glow": ["1"],
    "section": "Annexe",
    "tag": "Annexe — Mise en place (4/5)",
    "title": "🧪 Guide de mise en place (4/5)",
    "subtitle": "Configuration du feed NuGet Telerik.",
    "steps": [
      { "title": "Récupérer les identifiants Telerik", "text": "Le compte et le mot de passe Telerik sont disponibles sur Password State." },
      { "title": "Ajouter la source NuGet Telerik", "text": "<code>dotnet nuget add source \"https://nuget.telerik.com/v3/index.json\" --name \"Telerik\" --username \"ton-email@telerik.com\" --password \"ton-mot-de-passe\" --store-password-in-clear-text</code>" }
    ]
  },
  {
    "id": "labo-5-lancement",
    "layout": "steps",
    "glow": ["2"],
    "section": "Annexe",
    "tag": "Annexe — Mise en place (5/5)",
    "title": "🧪 Guide de mise en place (5/5)",
    "subtitle": "Dernières étapes avant de commencer.",
    "steps": [
      { "title": "Récupérer le appsettings", "text": "Obtenez le fichier <code>appsettings.development.json</code> requis pour le projet." },
      { "title": "Faire confiance au certificat HTTPS local", "text": "<code>dotnet dev-certs https --trust</code><br>Génère et approuve un certificat de développement local pour que les appels HTTPS fonctionnent sans avertissement." },
      { "title": "Lancer DosEtuApi", "text": "Essayez de lancer DosEtuApi pour valider que la configuration est fonctionnelle." },
      { "title": "Compiler DosEtuAdmin-v2", "text": "Essayez de compiler DosEtuAdmin-v2 pour confirmer que tout est en place." },
      { "title": "🎉 Prêt pour s'amuser !", "text": "Si tout compile et roule, vous êtes prêt pour le laboratoire. Passez aux prompts suggérés." }
    ]
  }
);