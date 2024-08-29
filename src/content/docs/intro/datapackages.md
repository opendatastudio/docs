---
title: Introduction to datapackages
description: An introduction to opendata.studio datapackages
---

## What are datapackages?

An opendata.studio **datapackage** is a data format that fully describes a data analysis workflow, including:

- Code (**algorithms**)
- Execution environment (**containers**)
- Input and output data (**resources**)
- Visualisations (**views**)
- User interface templates (**pages**)

A datapackage is a git repository consisting of `.json` configuration files describing each of the above elements.

Datapackages can be executed via the opendata.studio CLI tool or web interface, maintaining a complete version-controlled record of the analysis performed.

opendata.studio datapackages are based on the open-source [Frictionless Data Package](https://specs.frictionlessdata.io/data-package/) specification.

## Datapackage structure

A datapackage might look as follows:

```
.
├── algorithms/
│   ├── ic50.json
│   └── ic50.py
│
├── arguments/
│   └── algorithm.default.json
│
├── containers/
│   └── ic50-container
│       └── Dockerfile
│
├── pages/
│   └── main.json
│
├── metaschemas/
│   ├── data.json
│   └── params.json
│
├── resources/
│   ├── data.json
│   └── params.json
│
├── views/
│   ├── fitGraph.json
│   ├── fitSummary.json
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   │   └── config.ts
│   └── env.d.ts
│
└── datapackage.json
```

## Basic elements of a datapackage

### Algorithms

### Arguments

### Resources

#### Tabular data

#### Parameter data
