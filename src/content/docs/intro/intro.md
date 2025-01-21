---
title: What are datakits?
description: An introduction to opendata.studio datakits
---

In opendata.studio, a datakit is a structured way to organise and bundle a data
analysis in a reusable and reproducible format.

A datakit contains:

- the analysis algorithm and its execution environment
- saved run states from algorithm executions
- input and output data, along with configurable options
- visualisations of data, including graph and table specifications
- user interface definitions.

These elements are defined by individual components inside each datakit:

- **resources**: store tabular data
- **algorithms** and **containers**: define the algorithm code and execution
  environment
- **views**: visualise data (e.g.: graphs)
- **interfaces**: describe user interfaces for the analysis, rendered through
  web components.

These elements form a complete description of a data analysis that can be
executed through our web interface or
[command line tool](https://github.com/opendatastudio/cli). Each execution is
tracked, creating a reproducible record of the analysis process. Once an
analysis is completed, the results and process can be easily shared or
published, ensuring transparency and allowing others to build upon your work.

This tutorial will introduce you to working with datakits. To begin with, let's
create a simple datakit containing an algorithm that adds two numbers together.
