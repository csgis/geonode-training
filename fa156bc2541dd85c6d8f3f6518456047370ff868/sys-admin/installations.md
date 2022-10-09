<!-- the Menu -->
<link rel="stylesheet" media="all" href="../styles.css" />
<div id="logo"><a href="https://csgis.de">© CSGIS 2022</a></div>
<div id="menu"></div>
<div id="jumpMenu"></div>
<script src="../menu.js"></script>
<script src="../jumpmenu.js"></script>
<!-- the Menu -->


# Installationsarten

GeoNode kann auf unterschiedliche Weise in zwei verschiedenen Ausprägungen installiert werden.

## Ausprägungen

1. Es wird der "Geonode-Core" installiert
   1. Wir haben den Quellcode bereits in vorausgehenden Kapiteln gesehen
2. Es wird "GeoNode Project" installiert
   1. "GeoNode Project" ist ein "Wrapper" um den GeoNode Core der erlaubt, Dateien zu überschreiben ohne die Core Daten anzufassen. Auch wenn sich hierdurch die Komplexität erhöht, ist es die erste Wahl, sobald es um Anpassungen oder eigene Entwicklungen geht.
3. SPC-Geonode 
   1. taucht vereinzelt noch in der Dokumentation auf. Obsolete GeoNode Konfiguration.

## Installationswege

Für beide Ausprägungen sind alle Installationswege möglich.

1. *Docker (Empfohlener Installationspfad)*
   1. Die aktuell zu empfehlende Umgebung. Die einzelnen Komponenten werden automatisiert korrekt in Container abstrahiert und konfiguriert.
2. *Manuelle Installation*
   1. Bei diesem Installationsweg installiert der Systemadministrator alle Komponenten einzeln "von Hand". Dies erfolgt auf einer Ubuntu oder Debian Distribution. (Vereinzelt sind auch Installationen auf Red Hat erfolgt). Aufgrund von fehlenden Abhängigkeiten ist eine Installation auf Windows Servern nicht zu installieren.
3. *Ansible*
   1. Ist eine Automatisierungssoftware welche die manuelle Installation in sogenannten "Playbooks" automatisiert abläuft. Im GeoNode Project Verzeichnis befindet sich ein [Beispiel](https://github.com/GeoNode/geonode-project/blob/master/playbook.yml) Playbook. Status: Unklar.
4. *Vagrant*
   1. Ist eine Automatisierung, um virtuelle Server zu konfigurieren. Eine Konfigurationsdatei findet sich [hier](https://github.com/GeoNode/geonode-project/blob/master/Vagrantfile). Sie wird verwendet, um schnell eine virtuelle Testinstanz mit Docker zu erstellen.

## Weiterführende Links

- [docs.geonode.org – Installationsanleitungen](https://docs.geonode.org/en/master/install/advanced/index.html)


