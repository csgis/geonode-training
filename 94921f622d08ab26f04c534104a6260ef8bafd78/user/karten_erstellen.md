<!-- the Menu -->
<link rel="stylesheet" media="all" href="../styles.css" />
<div id="logo"><a href="https://csgis.de">© csgis</a></div>
<div id="menu"></div>
<div id="jumpMenu"></div>
<script src="../menu.js"></script>
<script src="../jumpmenu.js"></script>
<!-- the Menu -->


# Karten erstellen

In einer Karte können mehreren datasets hinzugefügt werden. Karten sind eigene GeoNode Ressourcen die man auch publizieren oder mit anderen Benutzer bearbeiten/teilen kann.

In die Karte stehen auch mehreren Hintergrundskarten oder eine Adresssuche zur Verfügung.

![image47](images/image47-a.png)

Zusätzlich können mehreren [Widgets](https://docs.geonode.org/en/master/usage/managing_maps/exploring_maps/creating_widgets.html) (z.B. Diagramme, Text, Tabellen) hinzugefügt werden um die Karte mit anderen Informationen zu begleiten.

## Übung

**Erstellung folgende Karte**

![image51](images/image51_2.png)

1. Ressource hinzufügen → Karte erstellen → Speichern
1. Datensatz hinzufügen → Im Datensatzkatalog die Ressource administrative, railways und places auswählen.
  ![image51-a](images/image51-a.png)
1. Mit klick auf einer Ebenen erscheint eine Reihe von interessanten Funktionalitäten. Wir können hier zum Beispiel:

  - dieEbene filtern und nur einen Teil der Daten in die Karte anzeigen lassen
  - die Attributtabelle öffnen und die Daten hier bearbeiten
  - widgets für die ausgewählte Ebene erstellen
  - die Symbologie der Ebene hier verändern

    ![image54](images/image54.png)

1. Verändern Sie die Symbologie von ***places***: öffnen Sie die Datei places.sld, kopieren Sie den Inhalt und fügen Sie ihn in den Code-Editor ein.

  > **In der Karte können wir die Symbole einer Ebene ändern ohne die Symbologie der ursprünglichen Ressource zu verändern**
  >
  > ![image56](images/image56.png)

1. Prüfen Sie dass die Symbologie der GeoNode Ressource ***places*** sich nicht geändert hat.

1. Begleiten Sie die Karte mit folgenden Widgets des Layers places:

  ![image56-a](images/image56-a.png)

1. Beachten Sie dass die Diagrammen zeigen immer die Daten die man in den aktuellen Auschnitt der Karte sieht

  ![image59](images/image59.png)

1. Fügen Sie die Tabelle der Ebene Administrative in die Karte ein

1. Schalten Sie alle Widgets ein und aus und lassen Sie nur den Text und das Diagramm sichtbar

1. Lassen Sie die Ebene administrativ transparent darstellen

  ![image60](images/image60.png)

1. Mit dem Tool Notizen/Zeichen fügen Sie eine Anmerkung (Annotation) hinzu. Danach lassen Sie sich mit einfachen Klick auf die Karte die Informationen anzeigen lassen

> GeoNode gibt die Informationen von alle Ebenen aus, wo man geklickt und den Hinweis von den Ebenen wo dort keine Daten gibt:
> ![image62](images/image62.png)
>
>![image61](images/image61.png)

1. Wie alle GeoNode Ressource, sie Können Berechtigungen an die Karte vergeben um zum Beispiel erlauben dass jemand anders diese Karte auch mitgestalten kann

  ![image63_2](images/image63_2.png)

1. Speichern Sie Ihre Karte und lassen Sie eine PDF in A4 Format ausdrucken lassen

    ![image64_2](images/image64_2.png)
