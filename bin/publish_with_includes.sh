#!/bin/sh
mkdir -p output
rsync -a www output/
for include in output/www/*_include.html 
do
	fichier_html=`echo $include |sed -e 's/_include//'`
	echo $fichier_html
	cat www/index.html | awk  -F '<!--#include page -->' 'BEGIN {RS="</html>\n"} {print $1}'  > $fichier_html
    cat $include >> $fichier_html
	cat www/index.html | awk  -F '<!--#include page -->' 'BEGIN {RS="</html>\n"} {print $2"</html>"}'  >> $fichier_html
done
mv output/www/accueil.html output/www/index.html
