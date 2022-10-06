#!/bin/bash

WEB=https://docs.csgis.de/
FINAl=""
FOLDER=fa156bc2541dd85c6d8f3f6518456047370ff868
cat $FOLDER/print_structure.txt | while read part
do
  MENU="$FOLDER/$part/menu.json"
  CALL=$(jq -r  'map(keys_unsorted[] | sub("\\.md$"; ".html")) | join(" ")' $MENU)
  echo $CALL

done

echo $CALL2