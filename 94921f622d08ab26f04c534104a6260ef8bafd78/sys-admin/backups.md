<!-- the Menu -->
<link rel="stylesheet" media="all" href="../styles.css" />
<div id="logo"><a href="https://csgis.de">© CSGIS 2022</a></div>
<div id="menu"></div>
<div id="jumpMenu"></div>
<script src="../menu.js"></script>
<script src="../jumpmenu.js"></script>
<!-- the Menu -->


# Backups

GeoNode besitzt eine Mangement Kommando um alle erforderlichen Daten einer Instanz zu sichern sowie diese wieder einzuspielen.  
Der Prozess lässt sich weiterhin wie in der [Dokumentation](https://docs.geonode.org/en/master/intermediate/backup/index.html) über Jenkins automatisieren.

> Wir raten von der Verwendung der Funktion ab, da Sie in der Vergangenheit in der User Community zu Problemen geführt hat.

## Backup Script

Eine alternative zur in GeoNode integrierten Backup-Funktionalität, stellt die Verwendung eines eigenen Backups Scripts dar.
Dieses kann etnweder über einen Cronjob zu festgelegten Zeiten ausgeführt werden. Oder in Docker Umgebungen über einen eigenen Docker Service automatisiert werden.

Ein sehr einfaches Backups Script könnte wie folgt aussehen:

backup.sh
```
#!/bin/sh

NOW=$( date '+%d-%m-%y' )

# Create directories
BPTH=/backups/backup_${NOW}
mkdir -p ${BPTH}

DPTH=${BPTH}/databases
mkdir -p ${DPTH}

SPTH=${BPTH}/statics
mkdir -p ${SPTH}

GPTH=${BPTH}/geoserver-data-dir
mkdir -p ${GPTH}

# Datenbanken sichern. Beachte den erforderlichen Zugang zu 
pg_dump -h db -U geonode -C -d geonode_training > ${DPTH}/${DATABASE}_daily.pgdump && echo "${DATABASE} dump successful"
pg_dump -h db -U geonode -C -d geonode_training > ${DPTH}/${DATABASE_GEO}_daily.pgdump && echo "${DATABASE_GEO} dump successful"

# Backup files
rclone copy /geonode_statics ${SPTH} --log-level ERROR && echo "geonode_statics copied successfully"
rclone copy /geoserver-data-dir ${GPTH} --log-level ERROR && echo "geoserver-data-dir copied successfully"

# create archive
tar cvfj /backups/bba-geonode.tar_$NOW.bz2 ${BPTH} && rm -R ${BPTH}

# Delete old
find /backups -maxdepth 1  -mtime +${DAYS_TO_KEEP} -exec rm -rf {} \; && echo "Clean of /backups dir done"
```

> Achten Sie auf die richtige Setzung der Pfade.

Die Daten die gesichert werden ist:

- Die Datenbanken
- Das Geoserver Daten Verzeichnis
- Die statischen Dateien von Django die Thumbnails und hochgeladene Dokumente besitzen

## Backup als Docker Service

Einen Beispiel Service dieses Scripts finden sie [hier](https://github.com/csgis/geonode-backup-service).

## Weiterführende Links

- [GeoNode Docs - Backup und Restore](https://docs.geonode.org/en/master/intermediate/backup/index.html)
- [Beispiel backup Service über Docker](https://github.com/csgis/geonode-backup-service)