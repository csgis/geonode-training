#!/bin/bash

WEB=https://docs.csgis.de/
FINAl=""
FOLDER=fa156bc2541dd85c6d8f3f6518456047370ff868
HOST=https://docs.csgis.de/
FILENAME=documentation_geonode4_csgis.pdf
FINAL_STR="$HOST$FOLDER/index.html "
rm $FOLDER/$FILENAME

declare -a array=( $(cut -d '=' -f1  $FOLDER/print_structure.txt) )

for i in "${array[@]}"
do
	MENU="$FOLDER/$i/menu.json"
  CALL=$(jq --arg part "$HOST$FOLDER/$i/" -r  'map(keys_unsorted[] | $part + sub("\\.md$"; ".html")) | join(" ")' $MENU)
  s="$HOST$FOLDER\/$i\/spacer.html"
  CALL=${CALL/$s/''}
  FINAL_STR+="$CALL "

  
done

FINAL_STR="wkhtmltopdf --load-error-handling ignore --image-dpi 100 --disable-javascript --footer-right [page]/[topage] --user-style-sheet ./printstyle.css $FINAL_STR  $FOLDER/$FILENAME"

$FINAL_STR