#!/bin/sh

cat /home/bthomas/src/website/www/index.html | awk -v v="$var" -F '<!--#include page="accueil.html" -->' 'BEGIN {RS="</html>\n"} {print $1, v $2}'

