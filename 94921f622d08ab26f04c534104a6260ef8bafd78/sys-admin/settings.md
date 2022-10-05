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
Diese sind jene die Sie bei nicht Verwendeung des Scripts zu Installation setzen müssen.


{% raw %}
- COMPOSE_PROJECT_NAME={{project_name}} 
  - Wird für die Namen der Docker Container verwendet
- DJANGO_SETTINGS_MODULE={{project_name}}.settings 
  - Definiert den Namen der zu ladenden Settings Datei
- POSTGRES_PASSWORD={pgpwd} 
  - Das password für den Datenbank Super Usdr
- GEONODE_DATABASE={{project_name}} 
  - Der Name der Django Datenbank
- GEONODE_DATABASE_PASSWORD={dbpwd}
  - Das Passwort des Django Datenbank Users 
- GEONODE_GEODATABASE={{project_name}}_data
  - Die Postgis Datenbank für Vector Daten 
- GEONODE_GEODATABASE_PASSWORD={geodbpwd} 
  - Das Password für die Geodatenbank
- DATABASE_URL=postgis://{{project_name}}:{dbpwd}@db:5432/{{project_name}} 
  - Die Verbindungsparameter zur Datenbank
- GEODATABASE_URL=postgis://{{project_name}}_data:{geodbpwd}@db:5432/{{project_name}}_data 
  -   Die Verbindungsparameter zur Geodatenbank
- SITEURL={siteurl}/ 
  - Die IP oder DOmain der Seite inklusive http(s). Wird in vielen Templates verwendet
- ALLOWED_HOSTS="['django', '*', '{hostname}']" 
  - Von den hier definierten Domains darf das Portal aufgerufen werden. Der * steht für erlaube alle
- GEONODE_LB_HOST_IP={hostname} 
  - Die öffentliche Domain. Wird unter Docker für das Networking benötigt.
- PUBLIC_PORT={public_port} 
  - Der öffentliche Port
- HTTP_HOST={http_host} 
  - Die öffentliche Domain
- HTTPS_HOST={https_host} 
  - Die öffentliche https Domain, falls https verwendet wird
- GEOSERVER_WEB_UI_LOCATION={geoserver_ui}/geoserver/ 
  - Die öffentliche URL des GeoServers
- GEOSERVER_PUBLIC_LOCATION={geoserver_ui}/geoserver/ 
  - Die öffentliche URL des GeoServers
- GEOSERVER_ADMIN_PASSWORD={geoserverpwd} 
- ADMIN_PASSWORD={geonodepwd} 
  - Das Password der bei Installation erstellten Admin Rolle
- ADMIN_EMAIL={email} 
  - Die Email des Admins
- DEFAULT_FROM_EMAIL='{email}'
  - Absender von System Emails 
- OAUTH2_CLIENT_ID={clientid} 
  - Die ID der Geoserver oauth2 app
- OAUTH2_CLIENT_SECRET={clientsecret}
  - Der Key der Geoserver oauth2 app  
- DEBUG={debug} 
  - Debug Modus an oder aus? (True oder False). In Production immer False!
- SECRET_KEY="{secret_key}" 
  - Ein Schlüssel den Django zur Verschlüsselung voon beispielsweise Formulardaten verwendet.
{% endraw %}

Eine vollständige Übersicht aller Variablen finden Sie [hier](https://docs.geonode.org/en/master/basic/settings/index.html?highlight=GEOSERVER_PUBLIC_LOCATION#geoserver-public-location).


# Weiterführende Links

- [Geonode Docs - Übersicht der Variablen](https://docs.geonode.org/en/master/basic/settings/index.html?highlight=GEOSERVER_PUBLIC_LOCATION#geoserver-public-location) 