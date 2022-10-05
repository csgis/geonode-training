<!-- the Menu -->
<link rel="stylesheet" media="all" href="../styles.css" />
<div id="logo"><a href="https://csgis.de">© CSGIS 2022</a></div>
<div id="menu"></div>
<div id="jumpMenu"></div>
<script src="../menu.js"></script>
<script src="../jumpmenu.js"></script>
<!-- the Menu -->


# Die Django Settings

Die vielleicht wesentlichste Datei bezüglich Einstellungen von GeoNode ist die Datei `settings.py`.  
Diese Einstellungsdatei ist allen Django Projekten genuin. Somit nichts GeoNode spezifisches.

Einen guten Einstiegspunkt liefert daher die [offizielle Django Dokumentation](https://docs.djangoproject.com/en/4.1/topics/settings/).

## Spezifisches für GeoNode

Im Haupt-Repository von GeoNode (core) befindet sich die Datei unter folgendem Pfad:

- https://github.com/GeoNode/geonode/blob/master/geonode/settings.py

In GeoNode-Projekt unter:

- https://github.com/GeoNode/geonode-project/blob/master/src/project_name/settings.py

Hier zeigt sich eine Besonderheit in Zeile 31ff.:

```python
# Load more settings from a file called local_settings.py if it exists
try:
    from geonode_training.local_settings import *
#    from geonode.local_settings import *
except ImportError:
    from geonode.settings import *
```

Zu Beginn der settings.py wird versucht eine Datei Namens `local_settings.py` zu laden. Sie soll erlauben GeoNode mit eigenen Einstellungen zu erweitern bzw. bestehende zu ergänzen.

Wie schon bei der Entwicklung angesprochen soll weiterhin tunlichst vermieden werden die Quelldateien abzuändern.
Ein weitaus besserer Weg ist die Anpassung über Umgebungsvariablen.

# Die .env Datei

Betrachtet man alle Einstellungen der `settings.py` fällt auf das für jede versucht wird zunächst die Einstellung über eine Umgebungsvariable zu setzen.

Beispiel

```python
LANGUAGE_CODE = os.getenv('LANGUAGE_CODE', "en")
```

Dies ermöglicht uns das komplette System über die Datei `.env` zu konfigurieren.  
Ihre Variablen werden in Docker Umgebungen standardmässig beim starten als Umgebungsvariablen gesetzt.

# Beachtenswerte Einstellungsmöglichkeiten

Betrachten wir anhand der `.env` Datei einige wichtige Einstellungen die Sie kennen sollten.


Name|Zweck
--|--
COMPOSE_PROJECT_NAME={{project_name}} | 
DJANGO_SETTINGS_MODULE={{project_name}}.settings | 
POSTGRES_PASSWORD={pgpwd} | 
GEONODE_DATABASE={{project_name}} | 
GEONODE_DATABASE_PASSWORD={dbpwd} | 
GEONODE_GEODATABASE={{project_name}}_data | 
GEONODE_GEODATABASE_PASSWORD={geodbpwd} | 
DATABASE_URL=postgis://{{project_name}}:{dbpwd}@db:5432/{{project_name}} | 
GEODATABASE_URL=postgis://{{project_name}}_data:{geodbpwd}@db:5432/{{project_name}}_data | 
SITEURL={siteurl}/ | 
ALLOWED_HOSTS="['django', '*', '{hostname}']" | 
GEONODE_LB_HOST_IP={hostname} | 
PUBLIC_PORT={public_port} | 
HTTP_HOST={http_host} | 
HTTPS_HOST={https_host} | 
GEOSERVER_WEB_UI_LOCATION={geoserver_ui}/geoserver/ | 
GEOSERVER_PUBLIC_LOCATION={geoserver_ui}/geoserver/ | 
GEOSERVER_ADMIN_PASSWORD={geoserverpwd} | 
ADMIN_PASSWORD={geonodepwd} | 
ADMIN_EMAIL={email} | 
DEFAULT_FROM_EMAIL='{email}' | 
OAUTH2_CLIENT_ID={clientid} | 
OAUTH2_CLIENT_SECRET={clientsecret} | 
DEBUG={debug} | 
SECRET_KEY="{secret_key}" | 