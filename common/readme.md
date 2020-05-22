# Common.js

## Description

Code and doc for common.js file in the wiki.

##  Global Usage

This file has 3 purpose. The main one is to display the graph by calling graph.js in the right pages. The second one is to display the right partners in the about page. Its a bit weird to call them like that here but it was the easiest solution to have a personalized display of elements into mediawiki. The last one is used to call the optout function in iframe for matomo to be RGPD compliant.

## Graph calls

Two calls are used. They use the "mw.loader.load" function of mediawiki, to use a javascript code in a page. The same graph.js is called.

### Single protocol call

The first one is the little graph we find in every protocol pages. The graph is displayed in a container named mynetwork that is inserted in every div named graphs.
There is a "graphs" div in every protocol pages (or should be). They are inserted by using the following in an article.

```
==Knowledge Graph==

{{graph}}
```

The "graph" into bracket calls the "graph" template which is used to inject the html div "graphs" into an article. It is editable here https://wiki.veriqloud.fr/index.php?title=Template:Graph

In this section, we only call the "lineage" part of the graph implementing the protocol selected.

### Big graph call

The second call is displayed in an unique page, the Knowledge graph page of the wiki. It shows every lineage and every ressources required to implement a protocol. The data is entirely used.

Its also displayed in a mynetwork container, placed in a div called biggraph by a template {{Biggraph}} (available here https://wiki.veriqloud.fr/index.php?title=Template:Biggraph).

For this graph, we also insert a button that change the behaviour of the graph, switching to lineage or ressources.
