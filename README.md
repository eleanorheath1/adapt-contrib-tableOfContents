# adapt-contrib-tableOfContents

Table of Contents Extension for the Adapt Framework

*Table of Contents** is an *extension* bundled with the [Adapt framework](https://github.com/adaptlearning/adapt_framework).

This extension allows for a hierarchical view of the table of contents to list all courses. It enables users to see at a glance what is covered in the course and let them jump to a piece of content by clicking on the relevant selection. 
Table of contents contains a list of pages, the article/s related to each page sub-listed and blocks sub-listed below their article. 

## Installation

As one of Adapt's *[core extensions](https://github.com/adaptlearning/adapt_framework/wiki/Core-Plug-ins-in-the-Adapt-Learning-Framework#extensions),* **Table of Contents** is included with the [installation of the Adapt framework](https://github.com/adaptlearning/adapt_framework/wiki/Manual-installation-of-the-Adapt-framework#installation).

* If **Table of Contents** has been uninstalled from the Adapt framework, it may be reinstalled.
With the [Adapt CLI](https://github.com/adaptlearning/adapt-cli) installed, run the following from the command line:
`adapt install adapt-contrib-tableOfContents`

    Alternatively, this extension can also be installed by adding the following line of code to the *adapt.json* file:
    `"adapt-contrib-tableOfContents": "*"`
    Then running the command:
    `adapt install`
    (This second method will reinstall all plug-ins listed in *adapt.json*.)
