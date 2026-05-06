---
sidebar_position: 2
---

# Data Package

To make your research sustainable, facilitate reuse of data and allow replication of a study, a **data package** should be made. The information in the data package should correspond to the information in the article that reports the results. Other researchers should be able to replicate your study independently and solely based on this information. The information should be concise yet as complete as possible.

Your data package should include the following:

- A **README** or **instruction** file which lists the files inside the package and explains their relation and includes a step-by-step instruction on how to use the files to replicate the study.
- **Raw data files**. If your study is based on a portion of the original dataset, include only the necessary data. Make sure to include de-identified data in your data package and omit [personal and sensitive data](/docs/privacy/privacy/privacy.md).
- **Processed data files**. In many cases, the raw data will be transformed to a processed format that is suitable for further analysis.
- A **data appendix/codebook** which provides information about every variable in your dataset (e.g. variable name, value labels, the type and format of the variable).
- **Command files/syntax** which includes code scripts that were used to transform the raw data into processed data and code scripts which were used to analyze the data and produce the results. The code should be accompanied by (inline) comments or other instructions needed for others to replicate your study. You should not include information or code in the package that you are not allowed to share (e.g. licensed software).
- **Protocols** which were used during the study, for instance about the performed experiments.
- **Lab journals.**
- **A reference to any publication** which is based on the data.
- **[License information](../licensing/licensing.md)** which specifies the terms under which the data can be used, modified and distributed.
- Other metadata, for example the parameters used in your study.

A good yet sometimes daunting way to test the completeness of your data package is to check if you would be able to replicate your study yourself with only the information in the package.
