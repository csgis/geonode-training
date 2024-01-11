<!-- the Menu -->

<link rel="stylesheet" media="all" href="./styles.css" />
<div id="logo"><a href="https://csgis.de">© CSGIS 2024</a></div>
<div id="menu"></div>
<div id="jumpMenu"></div>
<script src="./menu.js"></script>
<script src="./jumpmenu.js"></script>
<!-- the Menu -->

# Benutzung

In der QGIS Browser Verbindung sieht man die Daten der Datenbank. Mit Doppelklick auf das QGIS Projekt **vnp2023** (im Schema *test*) wird das Projekt geöffnet.

In diesem Projekt gibt es u.a. folgende Ebenen:

![](./images/vnp.f0055f3c-3b95-43d4-b52d-11b57bced8ab.002.png)

\- Allgemeine GIS Informationen wie FFH- Gebiete, Gemeinden, Landkreise, etc. (diese Layer sind nicht editierbar)

\- VNP Bestand: Dieser Layer ist nicht editierbar. Er zeigt die abgeschlossenen VNP-Verträge. Hier sind mehrere Schläge digitalisiert. Es können in einem Feldstück 1 bis mehrere Schläge (VNP Verträge) vorhanden sein

\- VNP Auslaufsdatum:  Dieser Layer ist nicht editierbar. Die Legende zeigt das Jahr, in dem der VNP Vertrag ausläuft.

![](./images/vnp.f0055f3c-3b95-43d4-b52d-11b57bced8ab.003.png)

\- Nächste Beratung: hier werden die Feldstücke in 4 Kategorien dargestellt, je nachdem, wann die nächste Beratung in diesem Feldstück stattfinden soll.

![](./images/vnp.f0055f3c-3b95-43d4-b52d-11b57bced8ab.004.png)

Die Notizen in diesem Layer zeigen Beispiele von Abfragen, die man gezielt in QGIS stellen kann.

![](./images/vnp.f0055f3c-3b95-43d4-b52d-11b57bced8ab.005.png)

Wenn man zum Beispiel eine Excel Liste mit allen Betrieben braucht, die man in diesem Monat (Dezember) beraten muss, kann man es mit dieser Abfrage erreichen:

![](./images/vnp.f0055f3c-3b95-43d4-b52d-11b57bced8ab.006.png)Das Ergebnis der Abfrage kann als Excel exportiert werden (Rechte Maus Taste auf dem Layer - Nächste Beratung → *Export → Objekte speichern als*)

![](./images/vnp.f0055f3c-3b95-43d4-b52d-11b57bced8ab.007.png)

\- VNP Beratung: In diesem Layer werden die Informationen für die Beratungen eingegeben. Jeder Berater sieht die Daten seines Zuständigkeits-Gebietes und darf nur diese bearbeiten.

![](./images/vnp.f0055f3c-3b95-43d4-b52d-11b57bced8ab.008.png)

Diese Ebene wird jedes Jahr einmalig aktualisiert: Informationen des vorherigen Jahres werden an diesen Layer übertragen. In den meisten Fällen wird eine zentrale Aktualisierung durch den Datenbank Administrator möglich sein. Bei anderen Fällen ist eine automatisierte Aktualisierung nicht möglich, da sich die Flächen und Eigentümer der Betriebe jährlich ändern (die Feldstücke werden kleiner, größer, Eigentümer wechselt, etc.).

Nach erfolgreicher Aktualisierung wird der Layer VNP Beratung des vorherigen Jahres für die Editierung gesperrt (der Layer bleibt im Projekt und kann visualisiert und abgefragt werden).
