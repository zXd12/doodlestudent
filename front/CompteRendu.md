# Compte Rendu du projet

Ce fork rajoute un dark mode, avec une gestion d'image différente en fonction du theme, et la possibilité d'etendre le nombre de thèmes facilement.

J'ai créé un service de gestion du thème (`theme-service.service.ts`), qui s'occupe de garder en mémoire et de mettre à jour le thème actuel. Il expose 2 variables observables : darkMode, qui est utilisé pour la gestion des images en fonction du thème (en l'occurence le logo du site), et theme, qui stocke le nom du fichier css du thème actuellement séléctionné. Il serait également possible d'utiliser une seule variable pour les 2 utilisations, et d'avoir une version des images pour chaque thème (Logo_dark, Logo_light, Logo_blue...).

J'ai changé le path des logos quand ils apparaissaient dans les fichier html avec le code suivant :

```html
<img id="flat_logo" [src]="(themeService.darkMode$ | async) ? 'assets/Logo_dark.png' : 'assets/Logo.png'" alt="Logo Simba" [...] "/>
```
Une opération ternaire est utilisé pour récuperer le logo correspondant au boolean darkMode, mais il serait possible de le changer en

```html
<img id="flat_logo" [src]="'assets/Logo_' + (themeService.theme$ | async) + '.png'" alt="Logo Simba" [...] "/>
```

Les fichiers css des thèmes, trouvables dans le dossier `themes`, sont chargés par la fonction `toggleTheme`, pour le moment uniquemenet appelée par `toggleDarkMode`

`toggleDarkMode` est appelé à l'appui du boutton, que j'ai mis dans `app.component.html`, pour qu'il soit sur toutes les pages. Il utilise également le boolean darkMode pour afficher le logo correspondant au theme actuel. Trouver comment le garder à un endroit fixe de l'écran m'a pris du temps, les logos en svg s'affichaient complètement en degors de le page.

Je n'ai pas passé beaucoup de temps sur le fichier css, étant donné que l'objectif du module n'est pas de comprendre l'architecture css générée par les différents composants d'Angular.
