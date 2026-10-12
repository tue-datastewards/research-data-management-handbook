---
sidebar_position: 1
for_glossary: true
codata_uri: https://terms.codata.org/rdmt/preservation
---

# Data Preservation & Continuity

The information below is meant to help defining the next steps related to data preservation and/or continuity of research when researchers are leaving the TU/e.

**Preservation** refers to activities in which data and metadata are mantained overtime so that they can still be accessed and understood while **continuity** refers to activities that ensure ongoing work can be continued after someone leaves.

For either case, it is important to aggregate all data and related documentation into a **data package** that can be deposited in a repository, archive, or transfered to your supervisor or the researchers who will continue the project.

## Guidelines based on use-cases

For research data managed within TU/e, an overview of recommended solutions for data preservation and continuity is provided below. Please note that individual research projects may fall under more than one of the use-cases described in the table. Furthermore, any provisions defined in legal or contractual documents (such as consortium agreements, data processing agreements, or participants’ informed consent) take precedence over the guidance presented here.

| #   | Use-case                                                                                                                    | Recommended solution                                                                                                                                              |
| --- | --------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | _I have datasets worth sharing and reusing_                                                                                 | [Data repository](../data-repository/)                                                                                                                            |
| 2   | _Study is done resulting in a scientific publication_ <br/> _I need to archive data for scientific integrity purposes only_ | RAPS and see case 1. If not possible, consider transfering data to read-only folder in TU/e shared [storage solution](../../during-research/storage-and-sharing/) |
| 3   | _I’m leaving the university_                                                                                                | Departmental data off-boarding procedure. If no specific guidelines or procedure is in place your department, consider the following:                             |

## Data package

To make your research sustainable, facilitate reuse of data and allow replication of a study, a **data package** should be made. The purpose of the data package may vary, including research integrity, future reuse, reproducibility, or compliance with funding or institutional requirements.

| Perspective of scientific integrity                                                                 | Perspective of reuse of data                                                                        |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| All raw, processed and analysed data                                                                | Final versions of analysed data If possible: also raw and processed data                            |
| Documentation (i.e., codebooks, lab journals, protocols, etc.) necessary for understanding the data | Documentation (i.e., codebooks, lab journals, protocols, etc.) necessary for understanding the data |
| Readme.txt file to help others understand the contents and purpose of the associated files or code  | Readme.txt file to help others understand the contents and purpose of the associated files or code  |
| Informed consents forms                                                                             | Template of informed consent form used in a study                                                   |
| Approval letter from the Ethical Review Board                                                       | &nbsp;                                                                                              |
| If applicable: Data Management Plan                                                                 | &nbsp;                                                                                              |

Other researchers should be able to replicate your study independently and solely based on this information. The information should be concise yet as complete as possible.

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

## Data retention & minimization

The below checklist will help you define whether a given dataset is worth including to the archival package. Broadly speaking, consider three categories of reasons (1) documentation & reproducibility, (2) scientific value, and (3) policy & legal compliance.

### Documentation & reproducibility

#### 💾 Reasons to retain data

- Data are sufficiently [**documented**](/docs/during-research/docs-and-metadata), [**organized**](/docs/during-research/data-organization), and accompanied by metadata (e.g. methods, variables, file structure) so that others can understand and reuse them.
- Data that can be easily understood and reused by others, facilitating reproducibility and validation.
- Whenever possible, raw and processed data, as well as any intermediate results or transformations should be kept alongside the analyzed data.

#### 🗜️ Reasons to minimize or remove data

- Data lack essential documentation or contextual information and cannot reasonably be made understandable.
- Data are redundant because equivalent, better-documented versions are already archived.

### Scientific value

#### 💾 Reasons to retain data

- Data is required for reproducing the results of the published results (that is, data in original form or data representing the publication).
- Data is unique, and thus impossible or impractical to reproduce.
- Data represent a landmark discovery or new precedent.

#### 🗜️ Reasons to minimize or remove data

- Data is intermediary or test data, which is neither the original data nor the analysis dataset for the publication.
- Data can easily be reproduced with minimal effort (e.g., via code).
- The quality of data is poor (corrupted files, insufficient precision of measurement data, etc.) or not well-documented what makes it impossible to reuse.

### Policy & legal compliance

#### 💾 Reasons to retain data

- You promised to retain data in a contract.
- Funding body or a journal requires you to retain the data (e.g., NWO asks archiving data at least for 10 years).
- Data may be used in future legal procedures (e.g., litigation, police investigations, Freedom of Information requests).

#### 🗜️ Reasons to minimize or remove data

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
