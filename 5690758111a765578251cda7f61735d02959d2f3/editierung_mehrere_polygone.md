<!-- the Menu -->

<link rel="stylesheet" media="all" href="./styles.css" />
<div id="logo"><a href="https://csgis.de">© CSGIS 2024</a></div>
<div id="menu"></div>
<div id="jumpMenu"></div>
<script src="./menu.js"></script>
<script src="./jumpmenu.js"></script>

# Mehrere Polygone gleichzeitig editieren

Im QGIS gibt es mehrere Optionen, um Polygone gleichzeitig zu editieren.

Zum Beispiel mit der Funktion [Attribute von allen gewählten Objekten gleichzeitig ändern](https://docs.qgis.org/3.4/de/docs/user_manual/working_with_vector/editing_geometry_attributes.html#merge-attributes-of-selected-features) können Sie das Feld "Interesse" für mehrere Feldstücke eines Betriebes gleichzeitig ändern:

![](./images/vnp.f0055f3c-3b95-43d4-b52d-11b57bced8ab.014.png)

Bevor Sie diese Funktion nutzen, **müssen die gewünschten Polygone selektiert werden**. Danach werden nur die Informationen von den selektierten Polygonen geändert.

![](./images/vnp.f0055f3c-3b95-43d4-b52d-11b57bced8ab.015.png)

Eine andere Option ist zum Beispiel das **Arbeiten mit dem Feldrechner**:

1\.- Mit der Funktion **Objekte über Ausdruck wählen** werden alle Feldstücke des gewünschten Betriebes selektiert:

![](./images/vnp.f0055f3c-3b95-43d4-b52d-11b57bced8ab.016.png)

2\.- Danach sollte kontrolliert werden, welche Polygone sind selektiert worden (Lila Flächen in der unteren Abbildung):

![](./images/vnp.f0055f3c-3b95-43d4-b52d-11b57bced8ab.017.png)

3\.- Mit dem Feldrechner in der Attributtabelle werden **nur** die ausgewählte Polygonen editiert:

![](./images/vnp.f0055f3c-3b95-43d4-b52d-11b57bced8ab.018.png)

4\.- Kontrollieren Sie, dass **nur** die ausgewählten Objekte editiert wurden (rote Flächen in der unteren Abbildung).

![](./images/vnp.f0055f3c-3b95-43d4-b52d-11b57bced8ab.019.png)
