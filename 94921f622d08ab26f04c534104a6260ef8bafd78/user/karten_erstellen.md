<!-- the Menu -->

<link rel="stylesheet" media="all" href="../styles.css" />
<div id="logo"><a href="https://csgis.de">© csgis</a></div>
<div id="menu"></div>
<div id="jumpMenu"></div>
<script src="../menu.js"></script>
<script src="../jumpmenu.js"></script>
<!-- the Menu -->

# Karten erstellen

Zu einer Karte können mehrere datasets hinzugefügt werden. Karten sind eigene GeoNode Ressourcen, die man publizieren oder mit anderen Benutzern bearbeiten/teilen kann.

In der Karte stehen mehrere Hintergrundkarten oder eine Adresssuche zur Verfügung.

![Hintergrundskarten und Suche](images/image47-a.png)

Zusätzlich können mehrere [Widgets](https://docs.geonode.org/en/master/usage/managing_maps/exploring_maps/creating_widgets.html) (z.B. Diagramme, Text, Tabellen) hinzugefügt werden, um die Karte mit anderen Informationen zu begleiten.

## Übung

**Erstellung folgender Karte**

![Beispiel einer Karte](images/image51_2.png)

1. Ressource hinzufügen → Karte erstellen → Speichern

2. Datensatz hinzufügen → Im Datensatzkatalog die Ressource administrative, railways und places auswählen.
   ![Datensatzkatalog](images/image51-a.png)

3. Mit Klick auf einer Ebene erscheint eine Reihe von interessanten Funktionalitäten. Wir können hier zum Beispiel:
   
   - die Ebene filtern und nur einen Teil der Daten in der Karte anzeigen lassen
   - die Attributtabelle öffnen und die Daten hier bearbeiten
   - Widgets für die ausgewählte Ebene erstellen
   - die Symbologie der Ebene verändern
   
   ![Funktionalitäten](images/image54.png)

4. Verändern Sie die Symbologie von ***places***: Öffnen Sie die Datei places.sld, kopieren Sie den Inhalt und fügen Sie ihn in den Code-Editor ein.
   
   > **In der Karte können wir die Symbole einer Ebene ändern, ohne die Symbologie der ursprünglichen Ressource zu verändern.**
   > 
   > ![Hinweis](images/image56.png)

5. Prüfen Sie, dass sich die Symbologie der GeoNode Ressource ***places*** nicht geändert hat.

6. Begleiten Sie die Karte mit folgenden Widgets des Layers places:
   
   ![Beispiele für widgets](images/image56-a.png)

7. Beachten Sie, die Diagramme zeigen immer die Daten, die man im aktuellen Ausschnitt der Karte sieht.
   
   ![Diagramme sind der Kartenauschnitt synchronisiert](images/image59.png)

8. Fügen Sie die Tabelle der Ebene administrative in die Karte ein.

9. Schalten Sie alle Widgets ein und aus und lassen Sie nur den Text und das Diagramm sichtbar.

10. Lassen Sie die Ebene administrative transparent darstellen
    
    ![Deckkraft einstellen](images/image60.png)

11. Mit dem Tool Notizen/Zeichen fügen Sie eine Anmerkung (Annotation) hinzu. Danach lassen Sie sich mit einfachen Klick auf die Karte die Informationen anzeigen.
    
    > GeoNode gibt die Informationen von alle Ebenen aus, auf die man geklickt hat und den Hinweis der Ebenen, bei denen es keine Daten gibt:
    > ![Hinweis](images/image62.png)
    > 
    > ![Informationen anzeigen](images/image61.png)

12. Wie bei allen GeoNode Ressourcen können Sie Berechtigungen an die Karte vergeben, um zum Beispiel zu erlauben, dass jemand anders diese Karte mitgestalten kann.
    
    ![Berechtigungen](images/image63_2.png)

13. Speichern Sie Ihre Karte und lassen Sie eine PDF in A4 Format ausdrucken.
    
     ![Karte drucken](images/image64_2.png)
