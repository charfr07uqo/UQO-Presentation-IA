// ── Kiro slides ──

SLIDES_DATA.push(
  {
    "id": "kiro-forces",
    "layout": "simple-card",
    "glow": ["2"],
    "section": "Kiro",
    "tag": "Kiro",
    "title": "<img src='icons/kiro.png' class='title-inline-icon'> Kiro — Ce qu'il fait bien",
    "subtitle": "Un IDE intelligent basé sur VS Code, augmenté par l'IA.",
    "card": {
      "title": "Forces de Kiro",
      "list": [
        "<img src='icons/vscode.svg' class='list-inline-icon'> Basé sur VS Code — interface familière, extensions compatibles",
        "Agent IA intégré capable de lire, écrire et modifier vos fichiers",
        "Système de Specs pour planifier des fonctionnalités étape par étape",
        "Fichiers Steering (normes) pour guider l'IA selon vos conventions",
        "Skills réutilisables pour automatiser des tâches récurrentes",
        "Hooks pour déclencher des actions automatiques (lint, tests, etc.)"
      ]
    }
  },
  {
    "id": "kiro-ui-chat",
    "layout": "icon-cards",
    "glow": ["1"],
    "section": "Kiro",
    "tag": "Kiro — Interface",
    "title": "<img src='icons/kiro.png' class='title-inline-icon'> Kiro — Le chat et les modèles",
    "subtitle": "Le panneau de chat est votre point d'entrée principal pour interagir avec l'IA.",
    "columns": 2,
    "cards": [
      { "icon": "<img src='icons/anthropic-color.svg' class='card-icon-img'>", "title": "Choix du modèle", "text": "Sélectionnez le modèle IA selon vos besoins : Auto (recommandé, 1x crédit), Claude Opus 4.6 (puissant, 2.2x), Claude Sonnet 4.6 (rapide, 1.3x), et d'autres variantes." },
      { "icon": "🔄", "title": "Mode Autopilot", "text": "Activez Autopilot pour laisser l'agent modifier vos fichiers de manière autonome. En mode Supervised, vous validez chaque changement avant application." },
      { "icon": "📎", "title": "Pièces jointes", "text": "Glissez des images, des PDF ou des fichiers directement dans le chat. Utilisez # pour référencer un fichier, un dossier, ou vos problèmes et terminal." },
      { "icon": "💬", "title": "Conversation naturelle", "text": "Posez vos questions en langage naturel. L'agent lit, écrit et modifie vos fichiers directement depuis la conversation." }
    ]
  },
  {
    "id": "kiro-ui-accueil",
    "layout": "icon-cards",
    "glow": ["2"],
    "section": "Kiro",
    "tag": "Kiro — Interface",
    "title": "<img src='icons/kiro.png' class='title-inline-icon'> Kiro — Modes Vibe et Spec",
    "subtitle": "Deux approches complémentaires pour travailler avec l'IA.",
    "columns": 2,
    "cards": [
      { "icon": "💭", "title": "Mode Vibe", "text": "Chat first, then build. Explorez des idées et itérez au fur et à mesure. Idéal pour l'exploration rapide, le prototypage et les tâches ponctuelles." },
      { "icon": "📋", "title": "Mode Spec", "text": "Plan first, then build. Créez des exigences et un design avant de coder. Idéal pour les fonctionnalités complexes qui nécessitent une planification structurée." },
      { "icon": "🚀", "title": "Quand utiliser Vibe ?", "text": "Exploration rapide, tests d'idées, implémentation de tâches simples, questions sur le code existant, ou quand les exigences ne sont pas encore claires." },
      { "icon": "🏗️", "title": "Quand utiliser Spec ?", "text": "Nouvelles fonctionnalités complètes, refactoring majeur, migration de code. L'IA découpe le travail en tâches et les exécute étape par étape avec validation." }
    ]
  },
  {
    "id": "kiro-ui-panneau",
    "layout": "icon-cards",
    "glow": ["1"],
    "section": "Kiro",
    "tag": "Kiro — Interface",
    "title": "<img src='icons/kiro.png' class='title-inline-icon'> Kiro — Le panneau latéral",
    "subtitle": "Un explorateur dédié pour gérer toute la configuration IA de votre projet.",
    "columns": 3,
    "cards": [
      { "icon": "📝", "title": "Specs", "text": "Visualisez et gérez vos spécifications de fonctionnalités. Chaque spec contient des tâches exécutables étape par étape." },
      { "icon": "⚡", "title": "Agent Hooks", "text": "Configurez des actions automatiques déclenchées par des événements : lint au save, tests après une tâche, etc." },
      { "icon": "🧭", "title": "Steering & Skills", "text": "Gérez vos normes (steering) et vos instructions réutilisables (skills) directement depuis le panneau. Visibles par workspace." }
    ]
  },
  {
    "id": "kiro-limites",
    "layout": "simple-card-warning",
    "glow": ["2"],
    "section": "Kiro",
    "tag": "Kiro — Suite",
    "title": "<img src='icons/kiro.png' class='title-inline-icon'> Kiro — Limitations",
    "subtitle": "Ce qu'il ne fait pas (encore) et comment s'adapter.",
    "card": {
      "title": "⚠️ Limitations connues",
      "list": [
        "Débogage limité — pas de breakpoints avancés comme dans Visual Studio",
        "Compilation WebForm non supportée nativement",
        "Nécessite une connexion internet pour l'IA",
        "Peut générer du code incorrect — toujours valider"
      ]
    },
    "warning": "Kiro est un complément à vos outils existants, pas un remplacement. Utilisez Visual Studio pour le débogage et la compilation WebForm, et Kiro pour l'assistance IA au quotidien."
  },
  {
    "id": "kiro-polyvalent",
    "layout": "single-highlight",
    "glow": ["1"],
    "section": "Kiro",
    "tag": "Kiro — Au-delà du quotidien",
    "title": "<img src='icons/kiro.png' class='title-inline-icon'> Kiro, pas juste qu'un codeur",
    "subtitle": "Peut vous servir à coder, planifier, comprendre, créer des scripts, créer des présentations, etc.",
    "box": {
      "title": "🧰 Un assistant polyvalent",
      "text": "Kiro n'est pas limité à nos projets habituels. Vous pouvez l'utiliser pour construire une présentation web comme celle-ci, créer des scripts pour n'importe quel besoin, ou simplement poser des questions sur du code existant.",
      "badges": [
        { "type": "primary", "text": "« Explique-moi X fonctionnalité de cette application. »" },
        { "type": "accent", "text": "« Analyse la solution et explique-moi comment elle fonctionne section par section. »" },
        { "type": "warning", "text": "« Crée-moi un script PowerShell qui fait X. »", "icon": "icons/powershell.svg" },
        { "type": "success", "text": "Cette présentation a été entièrement générée par Kiro ✨" }
      ]
    }
  }
);