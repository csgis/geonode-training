<!-- the Menu -->

<link rel="stylesheet" media="all" href="./styles.css" />
<div id="logo"><a href="https://csgis.de">© CSGIS 2024</a></div>
<div id="menu"></div>
<div id="jumpMenu"></div>
<script src="./menu.js"></script>
<script src="./jumpmenu.js"></script>

# Daten von mehreren Betrieben gleichzeitig ändern

Wir können Informationen von mehreren Betrieben gleichzeitig editieren. Zuerst ist es immer notwendig, dass wir die Betriebe selektieren. Danach prüfen wir in der Attributtabelle, dass die selektierten Datensätze die sind, die wir editieren wollen. Nach der Prüfung können wir mit dem Tool [Attribute von allen gewählten Objekten gleichzeitig ändern](https://docs.qgis.org/3.4/de/docs/user_manual/working_with_vector/editing_geometry_attributes.html#merge-attributes-of-selected-features) die Änderungen aller selektierten Datensätze in der Attributabelle speichern.

In diesem Beispiel wollen wir ‚‘Kein Interesse’ für alle Feldstücke bei 3 Betrieben verwenden: '7791940356','7797000052','7791850247'.

Die Datensätze dieser Betriebe selektieren wir mit der Option **“Objekte nach Ausdruck wählen“**:

1\.- Den Layer VNP Beratung mit der linken Maustaste auswählen

2\.- Danach auf “Objekte nach Ausdruck wählen“ und den unteren Ausdruck eintragen (in der Spalte  fs_betrnr sind die Betriebnummern gespeichert):

> "fs_betrnr" in ('7791940356','7797000052','7791850247')

3\.- Mit Klick auf „“Objekte wählen“ werden alle Feldstücke der 3 Betriebe ausgewählt.

![](./images/100000010000045600000290C5ACFDFC18737699.png)

Danach kann man die selektierten Objekte in der Karte und Tabelle betrachten:

![](./images/10000001000004050000021312570254345C697E.png)

Nachdem die Datensätze selektiert sind, können wir sie editieren mit **Attribute von allen gewählten Objekten gleichzeitig ändern**.

![](./images/100000010000039D0000026B86A5D06A3053DBD0.png)

Im obigen Fall haben wir ‘kein Interesse’ in allen Datensätzen gespeichert. Die Tabelle können wir prüfen und danach die Editierung speichern und beenden. Die Selektionen sollten wir dann sofort aufheben, damit wir keine ausgewählten Polygone mehr haben.

![](./images/100000010000009C0000007CE6070B6DEA46CE20.png)

# Mehrere Feldstücke eines Betriebes gleichzeitig editieren

Die Feldstücke '6742000315_7791940356', '6742000047_7791940356', '6742000037_7791940356' und '6742000032_7791940356' wünschen sich eine erneute Kontaktaufnahme.

Die Schritte sind die gleichen wie oben:

1\.- gewünschte Objekte selektieren

2\.- Daten gleichzeitig ändern

3\.- Editierungen prüfen und speichern

> "fid_betrnr"  in ('6742000315_7791940356','6742000047_7791940356','6742000037_7791940356','6742000032_7791940356')

![](./images/100000010000045400000293BBC4258579406C43.png)

Alle ausgewählten Feldstücke editieren:

![](./images/10000001000003A10000026F5F1B826AD5DF5AEE.png)
