/* you are working on a backend data. Lately you noticed that the web is running slow.
You are trying to identify the problem. So you kept all loading time for each url when
it access the web. Your job is find the AVERAGE processing time (not each processing time)
of each url, and print out top ten url names with longest AVERAGE processing time
*/
/* date is like this:

{runtime1 "GET http://yahoo.finance.stockchart.compare.com" 200 other things}
{runtime2 "GET http://google.sport.advertising.apple.com" 200 other things}
{runtime3 "GET http://github.je9billions/blocchain/about.com" 200 other things}
{runtime4 "GET http://jane.press.home/email.gif" 200 other things}
{runtime5 "GET http://repl.it.student/javascript.com" 404 other things}
{runtime6 "GET http://google.sport.advertising.apple.com" 200 other things}
{runtime7 "GET http://repl.it.student/javascript.com" 404 other things}
{runtime8 "GET http://google.sport.advertising.apple.com" 200 other things}
....
*/

/*
get top ten list of URL which has longest average runtime (not single one
procedure, but average runtime). The longest top ten list of URL name in an array [].
ignore .gif since it is not relevant. Sort it in decent order
*/
