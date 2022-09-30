<!-- the Menu -->
<link rel="stylesheet" media="all" href="../styles.css" />
<div id="logo"><a href="https://csgis.de">© csgis</a></div>
<div id="menu"></div>
<div id="jumpMenu"></div>
<script src="../menu.js"></script>
<script src="../jumpmenu.js"></script>
<!-- the Menu -->


# Eigene Menüpunkte erstellen

GeoNode bietet einige integrierte Funktionen, mit denen Sie das Menü in der oberen Leiste schnell und einfach anpassen können (siehe das Beispiel unten).

![Custom Menu](images/admin-panel-menus-0000.png)

##  Neues Menü anlegen

Die relevanten Punkte finden wir im Django Admin unter "Menu Items", "Menu placeholders", "Menus".

![Django Menu links](images/django_menu_links.jpeg)

Wir öffnen Menus und klicken in der darauf folgenden Maske auf "menu hinzufügen".
In der darauffolgenden Maske vergeben wir einen Titel für das Menü (wird nur intern verwendet).
Die Position (Feld Placehoder), sowie die Reihenfolge falls mehrere Menus unter dem Placeholder erscheinen sollen.


![Django Menu links](images/django_new_menu.jpeg)

Und speichern das Menü ab.

> Placeholder bezeichnet einen Ort im Template andem das Menü ausgegeben wird. Standardmässig besitzt GeoNode 4 vordefinierte Positionen. Über das Template Tag `render_nav_menu 'CUSTOM_MENU'` könnten wir einen neuen Platzhalter an anderer Stelle definieren.


## Neuen Menüpunkt anlegen

Nachdem wir ein neues Menü definiert haben, legen wir in diesem Schritt zwei Neue Menüpunkte an:

- über diese Plattform
- Alle Vectordaten

In der Django Übersicht wählen wir nun den Mnüpunkt "Menu Items"

![Django Menu Items](images/django_menu_items.jpeg)

### Erster Menüpunkt

Und legen uns in der darauffolgenden Maske über den bekannten rechten Buton "menu item hinzufügen" ein neues Menu Item an:

![Django Menu Items](images/django_new_menu_item.jpeg)

Die sich hierauf öffnende Maske bietet die Formularfelder:

- Title
  - Der Titel des Menüpunktes
- Menu
  - Das Menu indem der Butteon erscheinen sollen (wir haben vorhin eine Menü mit dem Namen "Unsere Forschungsdaten erstellt")
- Order
  - Die Reihenfolge falls mehrere Menüpunkte erscheinen
- Blank Target
  - Gesetzt öffnet der Link in einem neuen Browser-Tab
- Url
  - die URL auf die der Link verweisen soll

Für unseren ersten Menüunkt füllen wir die Felder wie folgt

---|---
Feld|Wert
---|---
Title | about
Menu | Unsere Forschungsdaten
Order| 1
Blank Target |  nicht gesetzt
Url | https://geonode-training.csgis.de/about/

Hiernach klicken wir auf "Sicher und neu hinzufügen".

![Django Menu Item1 ](images/django_menu_item1.jpeg)

### Zweiter Menüpunkt

Für unseren nächsten Datensatz öffnen wir ein neues Browserfenster. Navigieren zu den Datensätzen und setzen den Haken bei Vektor und kopieren uns die URL aus der Adresszeile:

![Django Menu Item2 ](images/vektor_url.jpeg)

Zurück in der Maske des neuen Menüpunkt füllen wir die Werte wie folgt:

---|---
Feld|Wert
---|---
Title | Unsere Vektoredaten
Menu | Unsere Forschungsdaten
Order| 2
Blank Target | nicht gesetzt
Url | https://geonode-training.csgis.de/catalogue/#/search/?f=dataset&f=store-vector

Wir speichern und schließen den Menpunkt über speichern und betrachten das Ergebnis im Frontend.

### Darstellung des Menüs

Unser neues Menü zeigt sich der der oberen Navigationsleiste der Seite.
![Neues Frontend Menü](images/fe_new_menu.jpeg)

Ein Klick auf About bringt die User zur About Seite:

![About](images/about.jpeg)

> Wie Sie diese Seite überschreiben sehen Sie im nächsten Abschnitt "Einführung in die Entwicklung".

Ein Klick auf auf "Unsere Vektordaten" zeigt eine vorab gefiltere Liste an Vektor Datensätzen.

![About](images/about.jpeg)

> Mit dieser Technik ließen sich natürlich auch Links speziell einer Gruppe oder in einer Region denken.

# Weiterführende Links

- [GeoNode Docs: Menus, Items und Placeholder](https://docs.geonode.org/en/master/admin/admin_panel/index.html#menus-items-and-placeholders)