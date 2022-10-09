<!-- the Menu -->
<link rel="stylesheet" media="all" href="../styles.css" />
<div id="logo"><a href="https://csgis.de">© CSGIS 2022</a></div>
<div id="menu"></div>
<div id="jumpMenu"></div>
<script src="../menu.js"></script>
<script src="../jumpmenu.js"></script>
<!-- the Menu -->


# Management Kommandos

Management Kommandos sind Hilfsfunktionen für GeoNode-Wartungsaufgaben. Sie werden normalerweise von einer SSH/Bash-Shell auf dem Server ausgeführt, auf dem GeoNode läuft. 

Ein Beispielaufruf sieht wie folgt aus:

```python

python manage.py migrate_baseurl --help
usage: manage.py migrate_baseurl [-h] [-f] [--source-address SOURCE_ADDRESS] [--target-address TARGET_ADDRESS] [--version] [-v {0,1,2,3}] [--settings SETTINGS]
                                 [--pythonpath PYTHONPATH] [--traceback] [--no-color] [--force-color] [--skip-checks]

Migrate GeoNode VM Base URL

optional arguments:
  -h, --help            show this help message and exit
  -f, --force           Forces the execution without asking for confirmation.
  --source-address SOURCE_ADDRESS
                        Source Address (the one currently on DB e.g. http://192.168.1.23)
  --target-address TARGET_ADDRESS
                        Target Address (the one to be changed e.g. http://my-public.geonode.org)
  --version             show program's version number and exit
  -v {0,1,2,3}, --verbosity {0,1,2,3}
                        Verbosity level; 0=minimal output, 1=normal output, 2=verbose output, 3=very verbose output
  --settings SETTINGS   The Python path to a settings module, e.g. "myproject.settings.main". If this isn't provided, the DJANGO_SETTINGS_MODULE environment variable will be
                        used.
  --pythonpath PYTHONPATH
                        A directory to add to the Python path, e.g. "/home/djangoprojects/myproject".
  --traceback           Raise on CommandError exceptions
  --no-color            Don't colorize the command output.
  --force-color         Force colorization of the command output.
  --skip-checks         Skip system checks.
```

Ein angefügtes --help gibt uns also die Hilfe zum jeweiligen Kommando an.

Um sicher zu gehen dass Django mit den korrekten Settings arbeitet, wird dem Befehl `DJANGO_SETTINGS_MODULE={Projekt_name}.settings` vorangestellt.
`Projekt_name` bezeichnet hierbei den Namen Ihres GeoNode Projekts den sie auch in den `settings.py` verwenden.
In Docker Umgebungen kann hierauf verzichtet werden.

> Tipp: Sehen Sie sich auch die Ausgabe von `python manage.py --help` an. Sie enthält weitere Befehle, die direkt durch Django bereit gestellt werden. 


## Übersicht über GeoNode spezifische Kommandos
### migrate_baseurl

Mit dem Verwaltungsbefehl migrate_baseurl können Sie alle GeoNode-Links korrigieren. Dies ist zum Beispiel nötig, wenn Sie den Domänennamen oder die IP-Adresse Ihres Portals ändern wollen.

Beispiel:
```python
python manage.py migrate_baseurl --source-address=127.0.0.1 --target-address=example.org
```

## Berechtigungen, Metadaten, Legenden und Download-Links aktualisieren

### sync_geonode_datasets

Mit diesem Befehl können Sie bereits vorhandene Berechtigungen zwischen Django und dem im Hintergrund agierenden GeoServer synchronisieren.
Dies ist zum Beispiel nötig wenn Datasets trotz der richtigen Berechtigungen nicht geladen werden können.

Beispiel: Ich möchte alle Berechtigungen und Attribute der Datasets mit dem GeoServer aktualisieren/synchronisieren
```python
manage.py sync_geonode_datasets --updatepermissions --updateattributes
```

Beispiel 2: Ich möchte die Thumbnails aller Datensätze neu generieren, die dem User `toni` gehören
```python
python manage.py sync_geonode_datasets -u toni --updatethumbnails
```

### sync_geonode_maps

Dieser Befehl ist im Grunde ähnlich wie der vorherige, wirkt sich aber mit einigen Einschränkungen auf die Karten aus.

Beispiel:  Ich möchte das Thumbnail der Karte 'This is a test Map' neu generieren.

```python
manage.py sync_geonode_maps --updatethumbnails -f 'This is a test Map'
```

### set_all_layers_metadata

Dieser Befehl ermöglicht das Zurücksetzen der Metadatenattribute und des Katalogschemas von Datensätzen. Der Befehl aktualisiert auch die CSW Catalogue XML und Links von GeoNode.

Beispiel: Nachdem ich die Basis-URL geändert habe, möchte ich das gesamte Katalogschema neu generieren.
```python
python manage.py set_all_layers_metadata -d
```

### set_layers_permisions

GeoNode bietet ein sehr nützliches management Kommando, mit dem ein Administrator auf einfache Weise Berechtigungen für Gruppen und Benutzer auf einem oder mehreren Datensätzen hinzufügen/entfernen kann.

Beispiel: Weisen Sie den Benutzern `user_A` und `user_B` und der Gruppe `group_C` Schreibrechte für die Datasets `layer_X` und `Dataset Y` zu.

```python
manage.py set_layers-permissions -p write -u user_A user_B -g group_C -r 'layer_X' 'Dataset Y'
```


## Daten in GeoNode laden

Es gibt Situationen, in denen es nicht möglich oder nicht sinnvoll ist, das Upload-Formular zu verwenden, um neue Datensätze über die Weboberfläche zu GeoNode hinzuzufügen. Zum Beispiel:

- Der Datensatz ist zu groß, um ihn über die Weboberfläche hochzuladen.
- Daten sollen von einem Speichermedium programmatisch importiert werden.
- Tabellen aus einer Datenbank sollen publiziert werden.

### importlayers

Lädt Dateien aus einem lokalen Verzeichnis, einschließlich Unterordnern, in GeoNode.
Die Datensätze werden zur Django-Datenbank, der GeoServer-Konfiguration und dem
pycsw-Metadaten-Index hinzugefügt. Momentan werden nur Dateien vom Typ Esri Shapefile (.shp) und GeoTiff (.tif) unterstützt.
Um den Import durchführen zu können, muss GeoNode in Betrieb sein.

Beispiel: Ordner mit shapes in GeoNode laden

```python
manage.py importlayers /Users/tonischonbuchner/Desktop/langesgrenzen_shp
```

### updatelayers

Während es wie gezeigt möglich ist, Datensätze direkt aus dem Dateisystem Ihres Servers in Ihren GeoNode zu importieren, haben Sie vielleicht einen bestehenden GeoServer, der bereits Daten/Ebenen enthält. Um diese in GeoNode zu publizieren, steht das management Kommando `updatelayers` zur Verfügung.

Beispiel: Importiere eine bestehende Ebene mit dem Namen `_1_SARMIENTO_ENERO_2018` von GeoServer in Geonode.
```python
manage.py updatelayers -w geonode -f _1_SARMIENTO_ENERO_2018
```



### delete_resources

Der `delete_resources` Management-Befehl erlaubt es, Ressourcen zu entfernen, die eine bestimmte Bedingung erfüllen, die in Form eines "Django Q()"-Ausdrucks angegeben ist.

Beispiel: Lösche alle Ebenen die `Wasser` enthalten; dem User `admin` gehörten und dessen ID 1 oder 2 ist. Sowie alle hierzu gehörenden Karten.

```python
manage.py delete_resources -l 'Q(pk__in: [1, 2]) | Q(title__icontains:"water")' 'Q(owner__name=admin)' -d '*'  '*'
```

## Weiterführende links

- [Geonode Dokumentation - Management Kommandos](https://docs.geonode.org/en/master/admin/mgmt_commands/index.html)