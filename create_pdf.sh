# KEYS=$(cat test.json | jq  -r '.[]|keys')

# concat_string=""
#for i in $KEYS
#    do 
#        md_name=${i/.md/.html}
#        concat_string="$concat_string$md_name"
#    done

# echo $concat_string

ROOT_DIR=94921f622d08ab26f04c534104a6260ef8bafd78
FILENAME=documentation_geonode4_csgis.pdf
wkhtmltopdf --image-dpi 200 --footer-right [page]/[topage] --user-style-sheet ./printstyle.css \
    "https://docs.csgis.de/94921f622d08ab26f04c534104a6260ef8bafd78" \
    "https://docs.csgis.de/94921f622d08ab26f04c534104a6260ef8bafd78/user/index.html" \
    "https://docs.csgis.de/94921f622d08ab26f04c534104a6260ef8bafd78/user/user_profil.html" \
    "https://docs.csgis.de/94921f622d08ab26f04c534104a6260ef8bafd78/user/publikationen_ressourcen.html" \
    "https://docs.csgis.de/94921f622d08ab26f04c534104a6260ef8bafd78/user/geodaten_publizieren_und_bearbeiten.html" \
    "https://docs.csgis.de/94921f622d08ab26f04c534104a6260ef8bafd78/user/karten_erstellen.html" \
    "https://docs.csgis.de/94921f622d08ab26f04c534104a6260ef8bafd78/user/geostories.html" \
    "https://docs.csgis.de/94921f622d08ab26f04c534104a6260ef8bafd78/user/dashboards.html" \
    "https://docs.csgis.de/94921f622d08ab26f04c534104a6260ef8bafd78/admin-user/index.html" \
    "https://docs.csgis.de/94921f622d08ab26f04c534104a6260ef8bafd78/admin-user/admin_role.html" \
    "https://docs.csgis.de/94921f622d08ab26f04c534104a6260ef8bafd78/admin-user/manage_group_permissions.html" \
    "https://docs.csgis.de/94921f622d08ab26f04c534104a6260ef8bafd78/admin-user/django_admin_basics.html" \
    "https://docs.csgis.de/94921f622d08ab26f04c534104a6260ef8bafd78/admin-user/django_admin_profile.html" \
    "https://docs.csgis.de/94921f622d08ab26f04c534104a6260ef8bafd78/admin-user/django_admin_dataset.html" \
    "https://docs.csgis.de/94921f622d08ab26f04c534104a6260ef8bafd78/admin-user/django_admin_themes.html" \
    "https://docs.csgis.de/94921f622d08ab26f04c534104a6260ef8bafd78/admin-user/django_admin_menu.html" \
    "https://docs.csgis.de/94921f622d08ab26f04c534104a6260ef8bafd78/admin-user/django_admin_metadata.html" \
    "https://docs.csgis.de/94921f622d08ab26f04c534104a6260ef8bafd78/admin-user/django_admin_harvester.html" \
    "https://docs.csgis.de/94921f622d08ab26f04c534104a6260ef8bafd78/admin-user/announcements.html" \
    "https://docs.csgis.de/94921f622d08ab26f04c534104a6260ef8bafd78/dev/index.html" \
    "https://docs.csgis.de/94921f622d08ab26f04c534104a6260ef8bafd78/dev/source.html" \
    "https://docs.csgis.de/94921f622d08ab26f04c534104a6260ef8bafd78/dev/template.html" \
    "https://docs.csgis.de/94921f622d08ab26f04c534104a6260ef8bafd78/dev/custom_page.html" \
    "https://docs.csgis.de/94921f622d08ab26f04c534104a6260ef8bafd78/dev/lang.html" \
    "https://docs.csgis.de/94921f622d08ab26f04c534104a6260ef8bafd78/dev/geoapp.html" \
    "https://docs.csgis.de/94921f622d08ab26f04c534104a6260ef8bafd78/dev/react.html" \
    "https://docs.csgis.de/94921f622d08ab26f04c534104a6260ef8bafd78/sys-admin/index.html" \
    "https://docs.csgis.de/94921f622d08ab26f04c534104a6260ef8bafd78/sys-admin/architecture.html" \
    "https://docs.csgis.de/94921f622d08ab26f04c534104a6260ef8bafd78/sys-admin/installations.html" \
    "https://docs.csgis.de/94921f622d08ab26f04c534104a6260ef8bafd78/sys-admin/settings.html" \
    "https://docs.csgis.de/94921f622d08ab26f04c534104a6260ef8bafd78/sys-admin/management_commands.html" \
    "https://docs.csgis.de/94921f622d08ab26f04c534104a6260ef8bafd78/sys-admin/shell.html" \
    "https://docs.csgis.de/94921f622d08ab26f04c534104a6260ef8bafd78/sys-admin/contrib_apps.html" \
    "https://docs.csgis.de/94921f622d08ab26f04c534104a6260ef8bafd78/sys-admin/database" \
    "https://docs.csgis.de/94921f622d08ab26f04c534104a6260ef8bafd78/sys-admin/backups.html" \
    "https://docs.csgis.de/94921f622d08ab26f04c534104a6260ef8bafd78/sys-admin/troubles.html" \
    $ROOT_DIR/$FILENAME

