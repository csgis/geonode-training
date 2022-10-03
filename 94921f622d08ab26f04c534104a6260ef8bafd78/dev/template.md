<!-- the Menu -->
<link rel="stylesheet" media="all" href="../styles.css" />
<div id="logo"><a href="https://csgis.de">© CSGIS 2022</a></div>
<div id="menu"></div>
<div id="jumpMenu"></div>
<script src="../menu.js"></script>
<script src="../jumpmenu.js"></script>
<!-- the Menu -->


# Templates überschreiben

In diesem sehr einfachen Beispiel werden wir die HTML Ausgabe eines Django Templates überschreiben.

Unter der Seite `/about` (z.B.: https://geonode-training.csgis.de/about/) publiziert GeoNode eine Seite die über Sinn und Zweck der Plattform informiert.

Diese Seite generiert sich wie folgt:

### URL Defintion

Die Datei `url.py` verlinkt alle Anfragen an `about` über die durch Django bereitgestellte  Funktion [TemplateView](https://docs.djangoproject.com/en/4.1/topics/class-based-views/), direkt mit der statischen HTML Datei [about.html[](https://github.com/GeoNode/geonode/blob/4.0.x/geonode/templates/about.html) im Templates Ordner

```
url(r'^about/$',
    TemplateView.as_view(template_name='about.html'),
    name='about'),
```


https://github.com/GeoNode/geonode/blob/4.0.x/geonode/urls.py#L75-L77

### Neue about.html anlegen

In Geonode-Projekt können wir diese Datei nun einfach überschreiben indem wir im Ordner "Templates" eine Datei mit identischem Namen anlegen. 

*templates/about.html*

```
{% extends "geonode_base.html" %}

{% load i18n %}
{% block title %}Unsere Forschungsdaten{% endblock %}

{% block body_outer %}
<div class="page-header">
  <h2>Forschungsdaten der DBFZ</h2>
</div>
<p>
Diees Plattform dient der Publikation von Daten zum Thema Weltraum</p>
<p>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore similique asperiores magni iste dicta nesciunt nostrum nihil ad esse! In corrupti temporibus neque dolor aliquam tenetur et sunt dolorum expedita?</p>
<p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sint, labore sequi autem impedit quidem quis vitae explicabo consectetur, obcaecati iste eaque velit rerum. Odio et in laborum corporis consectetur.</p>

{% endblock %}
```

Da der Entwicklungsserver nach jeder Änderung automatisch neu startet sollten die Änderungen hiernach direkt im Browser sichtbar werden:

[Überschriebene About Seite im Browser](images/about_override.jpeg)

In einem Live System sind folgende Schritte nötig:

Entweder:

- neuen Build des Django Image erstellen (docker-compose build django; docker-compose up -d django)
- oder host Verzeichnis in Docker Container mounten: https://github.com/GeoNode/geonode-project/blob/master/docker-compose.yml#L11 und den Container neu starten (docker-compose up -d django).