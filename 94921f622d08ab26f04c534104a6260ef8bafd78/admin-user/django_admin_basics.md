<!-- the Menu -->
<link rel="stylesheet" media="all" href="../styles.css" />
<div id="logo"><a href="https://csgis.de">© CSGIS 2022</a></div>
<div id="menu"></div>
<div id="jumpMenu"></div>
<script src="../menu.js"></script>
<script src="../jumpmenu.js"></script>
<!-- the Menu -->


# Django Admin

Das GeoNode System basiert auf einem Python Webframework namens [Django](https://www.djangoproject.com/).

Neben Hilfestellungen in vielerlei Bereichen, stellt es eine automatisierte Administrations Oberfläche zur Verfügung.  
Die Oberfläche generiert sich hierbei aus den Datenbank Definitionen der einzelnen "Apps".

> Im Django Kontext sind Apps, in Module aufgeteilte Abschnitte wie Shop, Benutzerverwalten etc. GeoNode besitzt zahlreiche GIS spezifische "Apps". Wie Datasets, Maps, etc.

Um auf die Administrationsoberfläche zugreifen zu können, muss ein User Mitarbeiter, oder Administrator Status besitzen.

Die Administrationsoberfläche erreichen Sie nach dem Login über das Menü, welches die eingestellte Sprache berücksichtigt.

![Django Admin link](images/admin_menu.jpeg)

Die hierauf folgende Übersicht listet alle "Django Apps" die GeoNode besitzt.

![Django Admin Startseite](images/django_admin_start.jpeg)