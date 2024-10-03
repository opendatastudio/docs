---
title: What are dataflows?
description: An introduction to opendata.studio dataflows
---

In opendata.studio, a dataflow is a structured way to organise and bundle a data analysis in a reusable and reproducible format.

A dataflow contains:

- Data (**resources**)
- Analysis (**algorithms** and **containers**)
- Visualisations (**views** and **interfaces**)

These elements form a complete description of a data analysis that can be executed through our web interface or [command line tool](https://github.com/opendatastudio/cli). Each execution is tracked, creating a reproducible record of the analysis process. Once an analysis is completed, the results and process can be easily shared or published, ensuring transparency and allowing others to build upon your work.

To begin with, let's create a simple dataflow containing an algorithm that adds two numbers together.
