<!-- the Menu -->

<link rel="stylesheet" media="all" href="./styles.css" />
<div id="logo"><a href="https://csgis.de">© CSGIS 2024</a></div>
<div id="menu"></div>
<div id="jumpMenu"></div>
<script src="./menu.js"></script>
<script src="./jumpmenu.js"></script>
<!-- the Menu -->

# Datenbankverbindung

Im QGIS Browser mit der rechten Maustaste auf Postgis klicken und "Neue Verbindung" auswählen.

Im folgenden Fenster die Verbindungsparameter eingeben:

Name: beliebiger Name für die QGIS Verbindung (z.B. Naturschutz)

Host: xxxxxx

Port:5432

Datenbank: xxxxxx

Im Reiter Basic:

Benutzername: xxxxxx

Passwort: xxxxxx

Die Checkbox "Speichern" **nicht** auswählen

Untere Optionen (Geometrien von Spalten, geometrielose Tabellen anzeigen und Speichern/Laden von QGIS Projekten) auswählen.

![](./images/vnp.f0055f3c-3b95-43d4-b52d-11b57bced8ab.001.png)

Danach auf "Verbindung testen" klicken.

Wenn die Verbindung erfolgreich ist, auf "ok" klicken. Die Verbindung "Naturschutz" taucht  in Ihrem QGIS Browser unter Postgis auf. Mit Doppelklick auf die Verbindung werden die Tabellen der Datenbank angezeigt.

Sollte die Verbindung nicht möglich sein, bitte die Fehlermeldung, die QGIS ausgibt (siehe ganz unten rechts in QGIS unter 'Meldungen', die Informationen im Reiter "Postgis") kopieren und an die Administratoren der Datenbank senden.
