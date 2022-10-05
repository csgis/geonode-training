#!/bin/bash

WEB=https://docs.csgis.de/
FINAl=""
FOLDER=94921f622d08ab26f04c534104a6260ef8bafd78
cat $FOLDER/print_structure.txt | while read part
do
  MENU="$FOLDER/$part/menu.json"
  CALL=$(jq -r  'map(keys_unsorted[] | sub("\\.md$"; ".html")) | join(" ")' $MENU)
  echo $CALL
#   CALL2=${CALL/.\//\/}
  CALL2=${"$CALL"/ /"X"}
#   FINAL=$FINAL+CALL2
done

echo $CALL2