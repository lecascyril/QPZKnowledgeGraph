/* Any JavaScript here will be loaded for all users on every page load. */

(function () {
  if (document.getElementById('graphs')){
    var myElement1 = document.getElementById('graphs');
    myElement1.innerHTML = '<html><div id="mynetwork"></div></html>';
    mw.loader.load( '/index.php?title=MediaWiki:Graph.js&action=raw&ctype=text/javascript' );
}}());

(function () {
  if (document.getElementById('biggraph')){
    var myElement2 = document.getElementById('biggraph');
    myElement2.innerHTML = '<html> <div id= "button" onclick="buttonclicked()">Switch to Resources graph</div><div id="mynetwork"></div></html>';
    mw.loader.load( '/index.php?title=MediaWiki:Graph.js&action=raw&ctype=text/javascript' );
}}());

(function () {
  if (document.getElementById('galery')){
    var myElement3 = document.getElementById('galery');
    myElement3.innerHTML = '<a href="http://web.inf.ed.ac.uk/quantum-informatics/"><img class="galleryimg" src="https://wiki.veriqloud.fr/images/d/d6/Edimlogo.jpg"></a><a href="https://anr.fr/"><img class="galleryimg" src="https://wiki.veriqloud.fr/images/8/8b/ANR.jpg"></a><a href="https://veriqloud.com/"><img class="galleryimg" src="https://wiki.veriqloud.fr/images/a/ab/VeriQloud.png"></a><a href="https://epsrc.ukri.org/"><img class="galleryimg" src="https://wiki.veriqloud.fr/images/d/d8/EPSRC.png"></a><a href="http://quantum-internet.team/"><img class="galleryimg" src="https://wiki.veriqloud.fr/images/b/b1/QIA.png"></a><a href="https://qt.eu/"><img class="galleryimg" src="https://wiki.veriqloud.fr/images/2/28/Flagship.jpg"></a><a href="https://cordis.europa.eu/project/rcn/218486/factsheet/en"><img class="galleryimg" src="https://wiki.veriqloud.fr/images/c/cb/EU.jpg"></a><a href="http://www.cnrs.fr/fr/page-daccueil"><img class="galleryimg" src="https://wiki.veriqloud.fr/images/5/55/Logocnrs.png"></a><a href="http://sciences.sorbonne-universite.fr/fr/index.html"><img class="galleryimg" src="https://wiki.veriqloud.fr/images/4/45/Logosorbonne.png"></a>';
}}());



(function () {
  if (document.getElementById('iframematomo')){
    var myElement5 = document.getElementById('iframematomo');
    myElement5.innerHTML = '<iframe style="border: 0; height: 200px; width: 600px;" src="https://www.veriqloud.com/matomo/index.php?module=CoreAdminHome&action=optOut&language=fr&backgroundColor=ffffff&fontColor=&fontSize=16px&fontFamily="></iframe>';
}}());
