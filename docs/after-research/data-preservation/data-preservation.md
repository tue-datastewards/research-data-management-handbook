---
sidebar_position: 1
for_glossary: true
codata_uri: https://terms.codata.org/rdmt/preservation
---

# Preservation & Continuity

The information below is intended to support decisions on the next steps for data preservation and/or research continuity when researchers leave TU/e. **Preservation** refers to activities that ensure data and metadata are maintained over time so they remain accessible, understandable, and reusable. **Continuity** refers to activities that enable ongoing research to continue after a researcher leaves.

In both cases, it is important to consolidate all research data and related documentation into a **data package**. This package can then be deposited in a repository or archive, or transferred to a supervisor or the researcher(s) who will continue the project.

## Guidelines based on use-cases

For research data managed within TU/e, an overview of recommended solutions for data preservation and continuity is provided below. Please note that individual research projects may fall under more than one of the use-cases described in the table. Furthermore, any provisions defined in legal or contractual documents (such as consortium agreements, data processing agreements, or participants’ informed consent) take precedence over the guidance presented here.

| #   | Use-case                                                                                                                    | Recommended solution                                                                                                                                                                                                                  |
| --- | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | _I have datasets worth sharing and reusing_                                                                                 | [Data repository](../data-repository/). If data cannot be made open access (immediatelly), deposit under restricted (embargoed) access in a repository that supports it.                                                              |
| 2   | _Study is done resulting in a scientific publication_ <br/> _I need to archive data for scientific integrity purposes only_ | RAPS (see [Data Archive](../data-archive/)). If not possible, consider transfering data to read-only folder in TU/e shared [storage solution](../../during-research/storage-and-sharing/). Consider also use-case 1.                  |
| 3   | _I’m leaving the university_                                                                                                | Departmental data off-boarding procedure. If no specific guidelines or procedures are in place in your department, consider the manual [data off-boarding steps](#data-off-boarding-steps) described below. Consider also use-case 1. |

## Data off-boarding steps

For each IT solution used within the project, the researcher must ensure that ownership of all project-related data is formally transferred to the supervisor or another designated colleague involved in the project.

Where external collaborators or industrial partners are involved, appropriate arrangements must be in place to ensure their continued access to the data for the duration of the project.

The following cases apply:

- **If the researcher is an employee:** If continued access to the data is required, refer to Case 1 or formalize a data agreement with TU/e. In some cases, it may be necessary to reassess the suitability of the storage solution in use.
- **If the researcher is a student:** The data remains the property of the student, as their intellectual property is protected, unless otherwise agreed at the outset of the research project. In this situation, no data agreement is required; however, Case 1 may still be applicable and should be considered where relevant.

## Data package

To support the long-term sustainability of research, facilitate data reuse, and enable the replication of studies, a data package should be prepared. The purpose of the data package may vary, including supporting research integrity, future reuse, reproducibility, or compliance with funder and institutional requirements. Its contents will depend on the intended purpose, but some common components are outlined below.

- A **README** or **instruction** file which lists the files inside the package and explains their relation and includes a step-by-step instruction on how to use the files to replicate the study.
- **Raw data files**. If your study is based on a portion of the original dataset, include only the necessary data. Make sure to include de-identified data in your data package and omit [personal and sensitive data](/docs/privacy/privacy/privacy.md).
- **Processed data files**. In many cases, the raw data will be transformed to a processed format that is suitable for further analysis.
- A **data appendix/codebook** which provides information about every variable in your dataset (e.g. variable name, value labels, the type and format of the variable).
- **Command files/syntax** which includes code scripts that were used to transform the raw data into processed data and code scripts which were used to analyze the data and produce the results. The code should be accompanied by (inline) comments or other instructions needed for others to replicate your study. You should not include information or code in the package that you are not allowed to share (e.g. licensed software).
- **Protocols** which were used during the study, for instance about the performed experiments.
- **Lab journals.**
- **A reference to any publication** which is based on the data.
- **[License information](../licensing/licensing.md)** which specifies the terms under which the data can be used, modified and distributed.
- **Data or variable level metadata**, for example the parameters used in your study.

Regardless of its purpose, a common requirement of any data package is that another researcher should be able to understand and, where feasible, independently replicate the study using only the information it contains. The documentation should therefore be concise while remaining as complete as possible.

A useful, though sometimes challenging, way to assess the completeness of a data package is to ask yourself whether you could replicate the study using only the information included in the package. If the answer is no, additional documentation may be needed.

### Data retention & minimization

The below checklist will help you define whether a given dataset is worth including to the data package. Broadly speaking, consider three categories of reasons (1) documentation & reproducibility, (2) scientific value, and (3) policy & legal compliance.

#### Documentation & reproducibility

##### 💾 Reasons to retain data

- Data are sufficiently [**documented**](/docs/during-research/docs-and-metadata), [**organized**](/docs/during-research/data-organization), and accompanied by metadata (e.g. methods, variables, file structure) so that others can understand and reuse them.
- Data that can be easily understood and reused by others, facilitating reproducibility and validation.
- Whenever possible, raw and processed data, as well as any intermediate results or transformations should be kept alongside the analyzed data.

##### 🗜️ Reasons to minimize or remove data

- Data lack essential documentation or contextual information and cannot reasonably be made understandable.
- Data are redundant because equivalent, better-documented versions are already archived.

#### Scientific value

##### 💾 Reasons to retain data

- Data is required for reproducing the results of the published results (that is, data in original form or data representing the publication).
- Data is unique, and thus impossible or impractical to reproduce.
- Data represent a landmark discovery or new precedent.

##### 🗜️ Reasons to minimize or remove data

- Data is intermediary or test data, which is neither the original data nor the analysis dataset for the publication.
- Data can easily be reproduced with minimal effort (e.g., via code).
- The quality of data is poor (corrupted files, insufficient precision of measurement data, etc.) or not well-documented what makes it impossible to reuse.

#### Policy & legal compliance

##### 💾 Reasons to retain data

- You promised to retain data in a contract.
- Funding body or a journal requires you to retain the data (e.g., NWO asks archiving data at least for 10 years).
- Data may be used in future legal procedures (e.g., litigation, police investigations, Freedom of Information requests).

##### 🗜️ Reasons to minimize or remove data

- You promised to remove certain data to your participants or your data provider.
- You've promised to delete data at the end of the project in a contract.
- You have personal data, and you want an extra layer of protection for privacy (e.g., destroying raw video or audio recording before archiving, applying pseudonymization or anonymization).

> Data that include personal data cannot be archived indefinitely, and its limitations are already defined within the informed consent letters, and privacy agreement.
>
> [_Data sovereignty, data governance and digital sovereignty_, LCRDM](https://zenodo.org/records/10837008)

Choose the best option for your situation to protect research participants' privacy while preserving valuable research data. Ensure you retain only the data necessary to demonstrate the integrity of the research. If any personal data is not essential for this purpose, consider removing it.

After considering the reasons mentioned above, it might still not be entirely straightforward whether to keep your data, as this decision can involve subjective judgment. Archiving decisions should be made consciously and, where relevant, in consultation with collaborators or co-authors. Keep a brief record of:

- Which data were included or excluded
- The rationale for these decisions (e.g. scientific value, legal constraints, privacy considerations)

Revisit archiving decisions periodically to ensure continued compliance with policies and alignment with good research practice.
