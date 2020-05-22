# Graph.js

## Description

Code and doc for graph.js file in the wiki.
The code is ugly as for now.

##  Global Usage

This file is divided in 3 parts. The first one is the vis.js file entirely copypasted.
The second one is the data, the third one are all the functions called to display the graph with vis.js and implement the part we needed.

## The data

Begining line 36 (even if the vis.js is super big)

This is an important part, because it's where we will update the graph as new protocols are implemented. All the data is in the const zooData. It's an array of arrays. Every sub array is a node of our graph. They all have some properties.

* category : the category of the node, will give the node a colour and an height in the graph. The different categories are "functionnality", "missing functionality" "nodal_subroutine", "physical_resource", "protocol", "protocol_party" (for sub parts of a protocol) and  "missing protocol".
* name : the name displayed in the graph
* id : the id of the node, no whitespace, should be unique
* uri : the url link with the node. Not necessary. Usefull so that a double click on a node opens the node page in the wiki.
* requires : an array of id(s) that the node needs to be implemented. Not necessary, but should be filled and exhaustive
* has_subtype : an array of id(s) that the node includes. Not necessary, but should be filled and exhaustive
* implemented_by : an array of id(s) that the node is implemented by Not necessary, but should be filled and exhaustive

To add a protocol, resource..., take care to add its dependencies, and the dependencies where it appears.

## The functions

We will explain some of the function to get an idea of how the graph is displayed. They are not needed to be understood to maintain the graph updated.

* unique() : this is the first function called. It looks for a url parameter that it tries to find in the graph. If no parameters found, the data is used entirely. If not, we find the lineage of the protocol selected, and changes the zoodata so that we use only the lineage. That way we just have to match the url of an article to its corresponding node so that a writer doesn't need to go deep into the code to display the graph.

* redrawAll() : this is the function used to draw the graph. It looks for the data, create the network with the nodes and the edges and the clickable nodes.

* getDoables(selectedResources) : the main ressources function. It should perfectly shows all the ressources needed to implement every nodes in the network, with comprehensive highliting of the nodes depending of their relations. It's a recursive function that goes step by step.

* rselectnode()

