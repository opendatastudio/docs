---
title: What are dataflows?
description: An introduction to opendata.studio dataflows
---

In opendata.studio, a dataflow is a structured way to organise and bundle a data analysis in a reusable and reproducible format.

A dataflow contains:

- algorithm configuration associated with a data analysis
- run state saved on algorithm runs

How this is realised is through the following data structures:

- **resources**: store tabular and parameter data
- **algorithms** and **containers**: describe algorithm code with the run context
- **views**: visualise data
- **interfaces**: construct user interfaces for the web application and embeddable widgets

These elements form a complete description of a data analysis that can be executed through our web interface or [command line tool](https://github.com/opendatastudio/cli). Each execution is tracked, creating a reproducible record of the analysis process. Once an analysis is completed, the results and process can be easily shared or published, ensuring transparency and allowing others to build upon your work.

To begin with, let's create a simple dataflow containing an algorithm that adds two numbers together.
