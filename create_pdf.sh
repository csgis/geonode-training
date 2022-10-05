KEYS=$(cat test.json | jq  -r '.[]|keys')

concat_string=""
for i in $KEYS
    do 
        md_name=${i/.md/.html}
        concat_string="$concat_string$md_name"
    done

echo $concat_string