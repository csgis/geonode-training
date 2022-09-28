# 1. Docker Auffrischung

docker-compose ist ein Tool zur Definition und Ausführung von Multi-Container-Docker-Anwendungen. Mit docker-compose verwenden Sie eine YAML-Datei, um die Dienste Ihrer Anwendung zu konfigurieren. Dann erstellen und starten Sie mit einem einzigen Befehl alle Dienste aus Ihrer Konfiguration. Um mehr über alle Funktionen von Compose zu erfahren, lesen Sie die Liste der [Funktionen](https://docs.docker.com/compose/overview/#features).

```
$ docker-compose up -d
```

Dies ermöglicht es uns, mehrere Images gleichzeitig zu erstellen und zu starten.

Docker compose liest Ihre Konfigurationsdatei docker-compose.yml und erstellt und startet die Container auf der Grundlage Ihrer Konfiguration.

` -d ` = Detach, Im Hintergrund ausführen

```
$ docker-compose up --build <service>
```
So können wir alle unsere Container neu erstellen und sie gleichzeitig starten.

Auch hier liest docker compose Ihre Konfigurationsdatei docker-compose.yml und erstellt und startet die Container basierend auf Ihrer Konfiguration.

```
$ docker-compose logs -f <service>
```

Zeige std-out des Containers


# 2. GeoNode anpassen
## Templates überschreiben

Templates können in Geonode Project überschrieben werden, indem Sie im templates Ordner abgelegt werden.
> Achtung auf richtige Struktur achten.

### Beispiel: "about" Seite

Original https://github.com/GeoNode/geonode/blob/4.0.x/geonode/templates/about.html
wird kopiert nach `<project_name>/src/templates/`.

Existiert ein Template aus dem Core wird das aus Geonode Projekt bevorzugt.

```


{{% block body_outer %}}
<div class="page-header">
  <h2>Forschungsdaten der DBFZ</h2>
</div>
<p>
Diees Plattform dient der Publikation von Daten zum Thema Biomasse</p>
<p>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore similique asperiores magni iste dicta nesciunt nostrum nihil ad esse! In corrupti temporibus neque dolor aliquam tenetur et sunt dolorum expedita?</p>
<p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sint, labore sequi autem impedit quidem quis vitae explicabo consectetur, obcaecati iste eaque velit rerum. Odio et in laborum corporis consectetur.</p>

{{% endblock %}}
```


Hiernach entweder: 
- neuen Build des Django Image erstellen (`docker-compose build django; docker-compose up -d django`)
- oder host Verzeichnis in Docker Container mounten: https://github.com/GeoNode/geonode-project/blob/master/docker-compose.yml#L11

Und container neu starten (`docker-compose up -d django`).

### Eigene statische Seite

```python

from geonode.urls import urlpatterns
from django.views.generic import TemplateView
from django.conf.urls import url

# You can register your own urlpatterns here
urlpatterns = [
    url(r'^dsgvo/$',
        TemplateView.as_view(template_name='dsgvo.html'),
        name='dsgvo'),
 ] + urlpatterns

```

- dsgvo.html in `<project_name>/src/templates/` anlegen
