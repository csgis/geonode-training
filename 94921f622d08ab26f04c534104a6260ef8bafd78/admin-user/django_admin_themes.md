<!-- the Menu -->
<link rel="stylesheet" media="all" href="../styles.css" />
<div id="logo"><a href="https://csgis.de">© csgis</a></div>
<div id="menu"></div>
<div id="jumpMenu"></div>
<script src="../menu.js"></script>
<script src="../jumpmenu.js"></script>
<!-- the Menu -->


# GeoNode Theming

GeoNode bietet standardmäßig einige Theming-Optionen, die direkt über die Administrationsoberfläche verwaltet werden können. In den meisten Fällen können Sie mit diesen Optionen das Aussehen von GeoNode ganz einfach ändern, ohne eine einzige Zeile HTML oder CSS zu verändern.

Im Django Admin öffnen wir die Theme Administration über den Link Themes:

![Django Theme link](images/django_theme.jpeg)

Die hierauf folgende Ansicht listet alle vorhandenen Themes. Achten Sie auf den Status "is enabled".

![Django Theme link](images/django_theme_enabled.jpeg)

Über die bekannte Schaltfläche im Rechten oberen Eck "geonode theme customisation hinzufügen" legen wir ein neues Thema an.

Die Oberfläche gibt uns folgende Möglichkeiten:

- Name
  - Der Name des Themas (Erscheint nirgendwo)
- Description
  - Eine Beschreibung (Erscheint nirgendwo)
-  Is enabled
   -  Setzt das Thema aktiv
- Logo
  - Einbinden eines eigenen Logos
- Custom CSS rules
  - Erlaubt das hinzufügen eigener CSS Regeln zum Styling
- Jumbotron Background
  - Erlaubt das hinzufügen einer Grafik im großen Banner Bereich
- Hide Text in jumbotron
  - Angehakt wird der Text im Banner der Startseite unterdrückt
-  Welcome theme
   -  Slideshow oder Jumbotron background
-  Jobotron Slideshow
   -  Falls Slideshow gewählt ist, welche Slides solledn erscheinen.
- Jumbotron Title
  - Der Titel im Banner der Startseite
- Jumbotron content
  - Der im Banner angezeigte Text

![Django Theme Formular](images/django_theme_form.jpeg)

zeigt sich auf der Startseite

![GeoNode Theme](images/theming.jpeg)

# Weiterführende Links

- [GeoNode Docs Theming](https://docs.geonode.org/en/master/admin/admin_panel/index.html#simple-theming)