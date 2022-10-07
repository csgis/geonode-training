<!-- the Menu -->
<link rel="stylesheet" media="all" href="../styles.css" />
<div id="logo"><a href="https://csgis.de">© CSGIS 2022</a></div>
<div id="menu"></div>
<div id="jumpMenu"></div>
<script src="../menu.js"></script>
<script src="../jumpmenu.js"></script>
<!-- the Menu -->


# Metadaten Modell

Besondere Bedeutung kommt den Metadaten jedes Datensatzes hinzu. 
Das Metadaten-Modell von GeoNode orientiert sich an dem Metadatenstandard [ISO 19115:2003](https://de.wikipedia.org/wiki/ISO_19115).

Sobald der Upload abgeschlossen ist, kann der Nutzer die Metadaten der Ressource füllen. Dieser werden hiernach über die CSW (OGC Catalogue Service) Endpunkte und APIs verfügbar gemacht.

> Benutzer können auch ein XML-Metadaten-Dokument (ISO-, FGDC- und Dublin Core-Format) hochladen, um wichtige GeoNode-Metadatenelemente automatisch zu füllen.

# Endpunkte für den Metadatenkatalog

- Die Rest Schnittstelle
  - [https://geonode-training.csgis.de/api/v2/datasets?format=json](https://geonode-training.csgis.de/api/v2/datasets?format=json)
- Der CSW Endpunkt
  - [https://geonode-training.csgis.de/catalogue/csw?service=CSW&version=2.0.2&request=GetCapabilities](https://geonode-training.csgis.de/catalogue/csw?service=CSW&version=2.0.2&request=GetCapabilities)

Dies erlaubt anderen Applikationen auf die durch GeoNode publizierten Daten in maschinenlesbarer Form zuzugreifen.  
Als Metadaten Server kommt [pycsw](https://pycsw.org/) zum Einsatz.  
Das manchmal in Dokumentation genannte ["geonetwork"](https://www.geonetwork-opensource.org/) kann aktuell nicht als Backend genutzt werden.

Wie bereits bekannt, können User den Metadatensatz Ihrer Daten editieren. Dies erfolgt im Frontend auf Ebene Datensatz über "Metadaten bearbeiten".

![Metadaten bearbeiten](images/fe_edit_metadata.jpeg)

Administratoren können in beschränkten Umfang Einfluss auf die angebotenen Daten Einfluss nehmen.

Zwei einfache Beispiele:

## Lizenzen anpassen

In diesem Beispiel legen wir eine neue auswählbare Lizenz an. Im Django Admin navigieren wir über den Menüpunkt

![Lizenzen anpassen](images/django_custom_lisence.jpeg)

zur Liste der Lizenzen wo wir auf "Lizenz hinzufügen" klicken

![Neue Lizenz](images/django_add_lisence.jpeg)

> Natürlich hätten wir hierüber auch die Möglichkeit bestehende zu verändern oder zu löschen.

In der folgenden Maske legen wir unsere Testlizenz an und speichern diese ab:

![Maske neue Lizenz](images/django_lic_form.jpeg)

Hiernach steht den Usern die neue Lizenz im Frontend zur Auswahl bereit:

![Neue Lizenz wird sichtbar](images/fe-private.png)


## Metadata Topic Categories

Als zweite Änderung wollen wir eine bestehende "Metadata Topic Kategorie" entfernen sowie eine neue hinzufügen.

Im Django Admin wählen wir den Link "Metadata Topic Category":

![Metadata verwalten](images/django_metadata_topic.jpeg)

In der hierauf folgenden Maske scrollen wir etwas nach unten und klicken auf "society".

![Society Details öffnen](images/django_edit_society.jpeg)

Wir entfernen den Haken bei "is choice" und speichern den Datensatz ab:

![Society speichern](images/django_disable_soc.jpeg)

Zurück in der Liste aller Topic Kategorien wählen wir über den rechten oberen Button "Hinzufügen topic category" und füllen das Formular mit Beispiel-Daten.

![Neue Kategorie: Soil Data](images/django_soil_data.jpeg)

Beim Betrachten der Metadatenmaske verschwindet "Society" aus der Auswahl. Weiterhin zeigt sich unsere neue Metadaten-Kategorie "Soil data".

![Veränderte Möglichkeiten zeigen sich im Frontend](images/fe-soil_data.png)