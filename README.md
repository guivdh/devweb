<h1><strong>DEVWEB</strong></h1>

<h2>Technologies</h2>

<h3>Backend</h3>

<h4>Pourquoi <em>NODEjs</em>?</h4> 

![NODEJS](https://img.devrant.com/devrant/rant/r_2083076_7utnR.jpg)

<h5>Avantages</h5>

<h5>Inconvénients</h5>

<h4>Pourquoi <em>ExpressJS</em>?</h4> 


<h4>Quelle <em>base de données</em> allons-nous utiliser?</h4>

<p>
<kbd>MySQL</kbd> : Une base de données SQL open source, multithread et facile à utiliser.

<kbd>PostgreSQL</kbd> : Une puissante base de données relationnelle open source, basée sur des objets, qui est hautement personnalisable.

<kbd>Redis</kbd> : Un magasin de clés/valeurs open source et à faible maintenance qui est utilisé pour la mise en cache de données dans les applications mobiles.

<kbd>MongoDB</kbd> : Une base de données documentaire JSON sans schéma, connue pour sa flexibilité et son évolutivité.

<kbd>Memcached</kbd> : Un système de cache distribué qui est multi-thread, et utilisé principalement pour mettre en cache des objets afin d'accélérer les applications en allégeant la charge de la base de données.

<kbd>MariaDB</kbd> : Une base de données relationnelle open source populaire qui a été créée par les premiers développeurs de MySQL.

<kbd>Cassandra</kbd> : Une base de données NoSQL libre et open source, conçue pour gérer une grande quantité de données non structurées à toute échelle.

<kbd>SQLite</kbd> : Base de données embarquée, dont l'usage courant est de fournir des capacités de stockage de données locales sur les téléphones portables.

<kbd>InfluxDB</kbd> : Une base de données open source, rapide et de séries chronologiques, écrite en Go.

<kbd>RethinkDB</kbd> : Une base de données open source, orientée document, qui stocke des données au format JSON et se synchronise en temps réel avec l'application.

<kbd>Riak DB</kbd> : Une base de données NoSQL distribuée, dont la caractéristique principale est la haute disponibilité, la tolérance aux pannes et la résilience des données.

<kbd>CouchDB</kbd> : Une base de données NoSQL orientée document qui utilise JSON pour stocker les données et le javascript comme principal langage d'interrogation.

<kbd>Couchbase</kbd> : Une base de données NoSQL complète qui prend en charge la synchronisation hors ligne, le CRUD complet et les capacités de requête et s'exécute localement sur l'appareil.

<kbd>ArangoDB</kbd> : Une base de données NoSQL open source qui est connue pour ses fonctionnalités multi-modèles, graphes et géo algorithmes.

</p>

 
<h3>Frontend</h3>

<a href="https://www.figma.com/proto/HIoSou87Z4wpMC424l11PT/APPLI-Mobile?node-id=8%3A108&scaling=scale-down" target="_blank">Maquette de l'application</a> 


<h4>Pourquoi avoir choisi <em>IONIC</em>?</h4>

Site web : https://ionicframework.com/
<p>
Ionic Framework est un ensemble d'outils d'interface utilisateur Open-Source permettant de créer des applications mobiles et de bureau performantes et de haute qualité à l'aide de technologies web (HTML, CSS et JavaScript).

<kbd>Ionic est axé sur l'expérience utilisateur frontale et l'interaction UI d'une application (contrôles, interactions, gestes, animations)</kbd>. Il est facile à apprendre, et s'intègre parfaitement avec d'autres bibliothèques ou frameworks, comme Angular, ou peut être utilisé de manière autonome sans framework frontal en utilisant un simple script inclus.

Actuellement, Ionic Framework a des intégrations officielles avec Angular et React, et le soutien pour Vue est en cours de développement.
</p>

<h5>Avantages</h5>

<p>
Grâce à IONIC, nous pouvons créer un site web mobile en l'intégrant dans une application Cordova.  

On peut aussi créer une application mobile sans connaître les caractéristiques spécifiques de la plate-forme, utiliser un large éventail de composants - des blocs de construction qui s'adaptent à la plateforme afin que l'application puisse imiter la plateforme native.

Pour intégrer les fonctionnalités spécifiques de la plateforme, comme Bluetooth ou l'appareil photo, Ionic fourni des plug-in  - cela facilite l'ajout de fonctionnalités natives à votre application mobile Ionic.

Plateformes actuellement supportées: <kbd>iOS 8.0+, Android 4.4+, UWP apps</kbd>

L'objectif de Ionic est de faciliter ce processus de plusieurs manières :

En utilisant les derniers outils de développement.

Fournir un cadre graphique (pour la mise en page mais aussi la navigation dans l'application).

Faciliter l'intégration avec Cordova et ses plugins.

Offrir un ensemble d'outils "pro" (mais pas gratuits).
</p>

<h5>Inconvénients</h5>

<p>
L'inconvénient le plus important est la performance - Ionic fonctionne dans un WebView, ce qui rend les applications Ionic relativement lentes.

Deuxièmement, bien que les composants de Ionic s'adaptent en fonction de la plate-forme, un travail supplémentaire est parfois nécessaire pour donner une impression plus native.

La sécurité de l'application pour les fonctionnalités native ne sont pas toutes prises en charge par les plugins. Il se peut qu'on doive écrire le code pour les différentes plateformes. Le débogage est moyennement compliqué.
</p>


<h4>Alternative à Ionic-Cordova --><em>Ionic-Capacitor</em> : </h4>

Site web: https://capacitor.ionicframework.com/

<p>
 <strong>Capacitor</strong> fournit un ensemble cohérent d'API orientées web qui permettent à une application de rester aussi proche que possible des normes web, tout en permettant l'accés aux riches fonctionnalités natives des appareils sur les plateformes qui les supportent. L'ajout de fonctionnalités natives est facile grâce à une simple API de plugin pour Swift sur iOS, Java sur Android et JavaScript pour le web.
</p>


<h5>Avantages</h5>

<ul>
 <li>
 Crée des applications web qui fonctionnent aussi bien sur iOS, Android, Electron et que les applications web progressives.
 </li>
 <li>
 Permet l'accès au SDK natif complet sur chaque plateforme, et déploiement facile dans les App Stores (et sur le web !).
 </li>
  <li>
  La construction des applications se faisant avec des technologies web standardisées, on assure son fonctionneront pour des décennies.
 </li>
 <li>
  L'ajout de fonctionnalités natives personnalisées est facile grâce à une simple API de plugin, on peut aussi utiliser les plugins Cordova existants.
 </li>
 <li>
 Capacitor est optimisé pour le framework Ionic. 
 </li>
 <li>
 Capacitor est entièrement open source (MIT) et est maintenu par Ionic et sa communauté. 
 </li>
</ul>

<h5>Inconvénients</h5>

<ul>
 <li>
  Apparu en 2018, Capacitor est encore jeune. Certains bugs n'ont donc pas encore été découvert ce qui pourrait bloquer notre avancement.
 </li>
 <li>
Comme indiqué sur leur repo Github : 

```

Avertissement : Notre feuille de route est susceptible d'être modifiée à tout moment et ne comporte aucune garantie de date précise

2020 et au-delà : Le projet de Capacitor est désormais stable. La maintenance est en cours (y compris la prise en charge des nouvelles versions de systèmes d'exploitation mobiles, des bugs, etc.) À l'avenir, la plupart des nouvelles fonctionnalités seront mises en œuvre sous forme de plugins. Pour connaître les dernières mises à jour, suivez les nouvelles versions ici ou les étapes importantes ici.

```
 </li>
 
</ul>
<h2>Sources</h2>

<ul>

<li>https://www.w3schools.com/whatis/whatis_fullstack.asp</li>

<li>https://www.slant.co/options/10826/alternatives/~ionic-framework-alternatives</li>

<li>https://en.wikipedia.org/wiki/Ionic_(mobile_app_framework)</li>

<li>https://blogs.infinitesquare.com/posts/web/qu-est-ce-que-c-est-ionic</li>

<li>https://en.wikipedia.org/wiki/Apache_Cordova</li>

<li>https://cordova.apache.org/#getstarted</li>

<li>https://ionicframework.com/resources/articles/capacitor-vs-cordova-modern-hybrid-app-development</li>

<li>https://www.simform.com/mobile-app-developers-database-selection/</li>
<li>https://www.netguru.com/blog/why-you-should-migrate-your-app-from-ionic-cordova-or-phonegap-to-react-native</li>

</ul>







