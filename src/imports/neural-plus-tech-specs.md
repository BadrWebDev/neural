



Plateforme Collaborative de Développement et Partage d'Idées
et d'Articles Assistée par Intelligence Artificielle


CAHIER DES CHARGES TECHNIQUE

 
TABLE DES MATIÈRES

1. Introduction	3
2. Présentation du Projet	3
3. Objectifs du Projet	4
4. Types d'Utilisateurs	4
5. Fonctionnalités	5
6. Architecture Technique	6
7. Technologies Utilisées	7
8. Base de Données	7
9. Sécurité	8
10. Planning Prévisionnel	9
11. Conclusion	10
 
1. Introduction
Dans un monde où la création de contenu est devenue centrale dans tous les domaines, les outils traditionnels ne suffisent plus à répondre aux besoins des créateurs modernes. L'avènement de l'intelligence artificielle offre de nouvelles perspectives pour assister les utilisateurs dans leurs processus créatifs.

Ce cahier des charges technique présente 
NEURAL+, une application web innovante conçue pour la création, l'exploration et l'optimisation de contenus textuels. La plateforme permet aux utilisateurs d'importer des notes ou des documents bruts afin de les transformer, de les enrichir et de les visualiser grâce à l'intelligence artificielle, avant de les publier dans un environnement collaboratif.
Problématique
Comment faciliter la création de contenu collaboratif tout en préservant l'authenticité, la propriété intellectuelle et en exploitant les capacités de l'intelligence artificielle pour améliorer la qualité du contenu produit ?
2. Présentation du Projet
NEURAL+ est une application web qui permet aux utilisateurs de créer, explorer, traiter et améliorer des idées et des articles. Elle permet d'importer n'importe quel type de contenu (texte, notes, documents) et d'utiliser l'intelligence artificielle pour le transformer, l'améliorer, le visualiser et le publier.
Principales caractéristiques
▸	Assistance par intelligence artificielle pour l'amélioration du contenu
▸	Génération automatique de visuels et graphiques
▸	Système de collaboration avec validation par l'auteur
▸	Import multi-format (PDF, Word, Markdown, HTML)
▸	Gestion de la visibilité (public/privé)
3. Objectifs du Projet
Objectif principal
Développer une plateforme web collaborative utilisant l'intelligence artificielle pour aider les utilisateurs à créer, améliorer et partager leurs idées et articles, tout en maintenant un contrôle total sur leur propriété intellectuelle.

Objectifs spécifiques
▸	Faciliter la création de contenu : Permettre aux utilisateurs de transformer des notes brutes en articles structurés grâce à l'IA.
▸	Améliorer la qualité du contenu : Proposer des outils d'amélioration, de réécriture et de visualisation assistés par IA.
▸	Favoriser la collaboration : Mettre en place un système de contribution contrôlé avec validation par l'auteur original.
▸	Protéger la propriété intellectuelle : Garantir que chaque modification est traçable et soumise à l'approbation du créateur.
▸	Offrir une expérience utilisateur optimale : Concevoir une interface intuitive et responsive.

Indicateurs de réussite
Indicateur	Objectif
Fonctionnalités principales implémentées	100%
Temps de réponse IA moyen	< 3 secondes
Failles de sécurité critiques	0
Couverture des tests	> 80%

4. Types d'Utilisateurs
La plateforme repose sur un modèle d'utilisateur unique. Chaque utilisateur inscrit dispose de l'ensemble des fonctionnalités de création et d'exploration, tout en respectant un système de permissions strict pour garantir la souveraineté de l'auteur sur son œuvre.

4.1 Capacités de Création (En tant qu'Auteur)
▸	Rédaction et Import : Créer des idées à partir de zéro ou importer du contenu (texte, fichiers, notes).
▸	Assistance par IA : Utiliser l'IA pour améliorer, réécrire, résumer ou développer ses propres textes.
▸	Génération Multimédia : Créer des graphiques et des images par IA pour illustrer ses propos.
▸	Gestion de la visibilité : Choisir de publier l'article (public) ou de le garder en mode brouillon (privé).
▸	Contrôle des contributions : Agir en tant que modérateur final pour son propre projet.
▸	Export : Télécharger ses créations en formats PDF, DOCX, Markdown ou HTML.

4.2 Capacités d'Interaction (En tant que Visiteur/Collaborateur)
▸	Exploration et Veille : Parcourir l'ensemble des articles publiés sur la plateforme.
▸	Engagement : Liker, sauvegarder des articles en favoris et laisser des commentaires ou feedbacks.
▸	Suggestion de modifications : Proposer des améliorations textuelles ou structurelles sur un article public.
▸	Restriction de sécurité : Aucune modification suggérée n'est visible publiquement sans l'approbation explicite de l'auteur.
▸	Accès limité : Un utilisateur ne peut en aucun cas accéder aux articles définis comme « privés ».
5. Fonctionnalités
Traitement IA du contenu
Fonctionnalité	Description
Amélioration et réécriture	L'IA reformule et améliore le style du contenu
Clarification des idées	Structure les pensées désorganisées
Suggestions intelligentes	Propose des améliorations contextuelles
Adaptation du ton	Ajuste le style selon le public cible

Génération de visuels IA
▸	Génération automatique de graphiques à partir des données ou du texte
▸	Création d'images et illustrations par IA
▸	Amélioration visuelle des articles

Gestion des articles
▸	Création, édition et sauvegarde des articles
▸	Import de documents externes (PDF, DOCX, TXT)
▸	Export en plusieurs formats
▸	Publication publique ou privée
▸	Suivi des versions

Système de collaboration
▸	Les utilisateurs peuvent suggérer des modifications
▸	Les créateurs reçoivent les demandes de modification
▸	Workflow d'approbation/rejet
▸	Traçabilité des contributions

Engagement et feedback
▸	Système de likes
▸	Commentaires et feedback
▸	Métriques d'engagement pour les créateurs
6. Architecture Technique
L'application suit une architecture moderne en trois couches (3-tier), garantissant une séparation claire des responsabilités et une maintenabilité optimale.

Frontend (Client)
▸	Interface utilisateur réactive avec React.js
▸	Gestion d'état avec React Query / Context API
▸	Routage avec React Router
▸	Composants UI avec Shadcn/ui

Backend (API)
▸	API RESTful avec Node.js/Express
▸	Authentification JWT
▸	Middleware de validation
▸	Intégration Gemini

Base de Données
▸	PostgreSQL/Mongoose pour les données relationnelles
▸	Supabase pour l'authentification et le stockage
▸	Row Level Security (RLS) pour la sécurité
7. Technologies Utilisées
Catégorie	Technologie	Justification
Frontend	React 18	Composants réutilisables, Virtual DOM performant
	TypeScript	Typage statique, détection d'erreurs
	Tailwind CSS	Développement rapide, design cohérent
	Vite	Build rapide, HMR instantané
Backend	Node.js	Écosystème riche, performances I/O
	Express.js	Léger, flexible, bien documenté
Base de données	PostgreSQL	Robuste, ACID
	Mongoose	support JSON
	Supabase	Auth, DB, Storage intégrés
IA	Gemini 3	Traitement du langage naturel
	Nanobanana Pro	Génération d'images
Outils	Git/GitHub	Versioning, collaboration
	Vitest	Tests unitaires rapides

8. Base de Données
Table : users
Champ	Type	Description
id	UUID (PK)	Identifiant unique
email	VARCHAR(255)	Email unique
password_hash	VARCHAR(255)	Mot de passe hashé
full_name	VARCHAR(100)	Nom complet
created_at	TIMESTAMP	Date de création

Table : articles
Champ	Type	Description
id	UUID (PK)	Identifiant unique
author_id	UUID (FK)	Référence users.id
title	VARCHAR(255)	Titre de l'article
content	TEXT	Contenu (JSON/Markdown)
status	ENUM	'draft' | 'published' | 'private'
created_at	TIMESTAMP	Date de création
updated_at	TIMESTAMP	Dernière modification

Table : modification_requests
Champ	Type	Description
id	UUID (PK)	Identifiant unique
article_id	UUID (FK)	Référence articles.id
requester_id	UUID (FK)	Référence users.id
proposed_changes	TEXT	Modifications proposées
status	ENUM	'pending' | 'approved' | 'rejected'

Relations
▸	users → articles : 1:N (un utilisateur peut créer plusieurs articles)
▸	articles → comments : 1:N (un article peut avoir plusieurs commentaires)
▸	articles → modification_requests : 1:N (un article peut avoir plusieurs demandes)
▸	users ↔ articles (via likes) : N:M (relation de likes)
9. Sécurité
Authentification
▸	Authentification par email/mot de passe sécurisé
▸	Tokens JWT avec expiration (24h access, 7j refresh)
▸	Hashage des mots de passe avec bcrypt (salt rounds: 12)
▸	Protection contre les attaques brute-force (rate limiting)

Autorisation
▸	Row Level Security (RLS) sur PostgreSQL
▸	Vérification des rôles (créateur/explorateur)
▸	Middleware de validation des permissions
▸	Audit logs pour les actions sensibles

Protection des données
▸	HTTPS obligatoire (TLS 1.3)
▸	Chiffrement des données sensibles au repos
▸	Validation et sanitization des entrées
▸	Protection CSRF avec tokens synchronisés

Conformité OWASP Top 10
Risque	Mitigation
A01 - Broken Access Control	RLS, middleware auth
A02 - Cryptographic Failures	HTTPS, bcrypt, chiffrement
A03 - Injection	Requêtes préparées, ORM
A05 - Security Misconfiguration	Headers sécurisés, CSP
A07 - XSS	Sanitization, React escape

10. Planning Prévisionnel
Le développement est organisé en sprints de 2-3 semaines, suivant une méthodologie Agile adaptée au contexte d'un projet étudiant. Durée totale estimée : 12 semaines.

Sprint	Durée	Tâches principales	Livrables
1 - Fondations	2 sem.	Configuration environnement, architecture, authentification, UI de base	Login/Register, pages principales
2 - Éditeur	3 sem.	Éditeur riche, CRUD articles, brouillons, upload fichiers	Création d'articles fonctionnelle
3 - IA	3 sem.	Intégration Gemini, amélioration contenu, génération images	Fonctionnalités IA opérationnelles
4 - Collaboration	2 sem.	Demandes modification, workflow approbation, commentaires, notifications	Système de collaboration complet
5 - Finalisation	2 sem.	Export multi-format, optimisations, tests, documentation, déploiement	Application en production

Répartition des tâches
Membre	Responsabilités principales
ZIDANI Mohamed Nour	Frontend – Interface utilisateur, composants React
AKRAM Litniti	Frontend –Intégration IA, gestion d'état
BADR Farhani	Backend – API, authentification, base de données
JBILOU Ilias	Backend – Intégration API, sécurité, déploiement

11. Conclusion
Ce cahier des charges technique définit les fondements du projet NEURAL+, une plateforme innovante qui combine l'intelligence artificielle avec la collaboration pour révolutionner la création de contenu.
Le projet présente plusieurs points forts :
▸	Innovation : L'intégration de l'IA dans le processus créatif offre des possibilités uniques d'amélioration et de visualisation du contenu.
▸	Collaboration : Le système de permissions et d'approbation garantit une collaboration efficace tout en respectant la propriété intellectuelle.
▸	Apprentissage : Ce projet représente une opportunité d'apprentissage complète : développement full-stack, IA, et gestion de projet.
▸	Évolutivité : L'architecture modulaire permet des extensions futures.


Document rédigé dans le cadre d'un projet de fin d'études
© 2025 — Tous droits réservés
