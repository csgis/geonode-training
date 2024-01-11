<!-- the Menu -->

<link rel="stylesheet" media="all" href="./styles.css" />
<div id="logo"><a href="https://csgis.de">© CSGIS 2024</a></div>
<div id="menu"></div>
<div id="jumpMenu"></div>
<script src="./menu.js"></script>
<script src="./jumpmenu.js"></script>
<!-- the Menu -->

# Editierungen im Layer vnp beratung

Es ist nur möglich, Änderungen in diesen Spalten vorzunehmen: **datum, datum_naechste, interesse, ziele, vereinbarungen, kommentar**

Die anderen Spalten sowie die Geometrien (Polygone) dieses Layers können nicht editiert werden.

Um die Editierung zu starten, klicken Sie auf folgenden Button :

![](./images/vnp.f0055f3c-3b95-43d4-b52d-11b57bced8ab.009.png)

Danach kann der Layer  **vnp beratung** bearbeitet werden:

![](./images/vnp.f0055f3c-3b95-43d4-b52d-11b57bced8ab.010.png)

> Für die Editierung von einzelnen Polygonen wäre es am besten, mit dem i Button (“Objekte abfragen“) auf das entsprechende Polygon zu klicken und in das erscheinende Fenster die Daten einzutragen:

\- Im Reiter **Betrieb** können die Daten für die Beratung eingetragen werden

![](./images/vnp.f0055f3c-3b95-43d4-b52d-11b57bced8ab.011.png)

\- Mit Klick auf den Reiter **VNP Bestand** werden die dazugehörigen Schläge (Polygone des Layers VNP Bestand)  aufgelistet.

> Diese Informationen können ein wenig “langsam“ erscheinen (bitte deshalb nur einmal auf den Reiter klicken und warten, bis die Informationen kommen).

In diesem Reiter können keine Editierungen vorgenommen werden (**die Daten des Layers  VNP Bestand sind nicht editierbar**).

![](./images/vnp.f0055f3c-3b95-43d4-b52d-11b57bced8ab.012.png)

Mit Klick in das Kontrollkästchen des jeweiligen Schlages (VNP Vertragsfläche) wird dieser Eintrag im Formular markiert und man kann auf das betroffene Polygon des Layers VNP Bestand in der Karte zoomen.

![](./images/vnp.f0055f3c-3b95-43d4-b52d-11b57bced8ab.013.png)


In der Spalte **interesse** können diese Werte eingetragen werden:

- Keine Beratung
- **Kein Interesse**
- Unsicher, erneute Kontaktaufnahme gewünscht
- Abschluss gewünscht
- Verlängerung gewünscht
- Abschluss vereinbart
- **VNP abgeschlossen**
- Verlängerung prüfen

> Der Wert  **VNP abgeschlossen kann nicht mehr verändert werden**. Wenn man versucht, diesen Wert zu verändern, wird beim  speichern der Editierung der Wert **VNP abgeschlossen**  erneut eingetragen.

> Das Datum der nächsten Beratung wird auf NULL gesetzt, wenn in der Spalte  **interesse** die Werte **Kein Interesse** und **VNP abgeschlossen** gespeichert werden.
