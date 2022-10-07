<!-- the Menu -->
<link rel="stylesheet" media="all" href="../styles.css" />
<div id="logo"><a href="https://csgis.de">© CSGIS 2022</a></div>
<div id="menu"></div>
<div id="jumpMenu"></div>
<script src="../menu.js"></script>
<script src="../jumpmenu.js"></script>
<!-- the Menu -->


# Dataset verwalten

Im letzten Kapitel haben wir uns die Administration von Benutzer und Gruppen näher angesehen.
Gehen wir einen Schritt weiter und werfen einen Blick auf die _Dataset_ Verwaltung.

> Datasets hießen vor der GeoNode Version 3.3 Layer

![Datasets verwalten](images/django_dataset_list.jpeg)


## Stapelverarbeitung

Die Tabelle der bestehenden Datasets gibt uns einen kurzen Überblick über die wichtigsten Informationen.  
Zum Beispiel wann der Datensatz erzeugt wurde, den Titel, oder die ID. 

Die Option "dataset hinzufügen" sollte nicht verwendet werden. Neue Ebenen sollen über das Frontend hinzugefügt werden.

Interessant ist jedoch die Möglichkeit, mehrere Datasets auszuwählen und in Stapelverarbeitung Rechte zuzuweisen. Hierzu kann das untere Menü der Fußleiste verwendet werden.

![Datensatz Stapelverarbeitung](images/django_manage_dataset_batch.jpeg)

![Datensatz Stapelverarbeitung](images/django_batch_dropdown.png)

## Detailansicht

In der Detailansicht eines Datensatzes sehen wir dass zahlreiche Felder wie die Kurzbeschreibung einfach editiert werden können.

![Datensatz Kurzbeschreibung](images/django_dataset_short.jpeg)

Dies entspricht der Möglichkeit aus dem Frontend, die Metadaten des Datensatzes anzupassen.

![Datensatz Kurzbeschreibung](images/metadata_abstract.jpeg)

Andere Felder ergeben sich rein aus der Tatsache, dass der Django Admin "einen Spiegel" des Datenbanksatzes darstellt. Hierdurch zeigen sich zahlreiche Felder, die von Administratoren (ohne tiefes Hintergrundwissen) nicht editiert werden sollten.
Als Beispiel das CSW Feld:

![Komplexes Feld aus Datenbank-Ausgabe](images/django_csw.jpeg)

