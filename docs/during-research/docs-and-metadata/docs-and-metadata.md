---
sidebar_position: 2
---

# Documentation and Metadata

## Documentation

Project documentation serves as a comprehensive record of the project's lifecycle, decisions, actions, and outcomes. Documentation adds context to your data and offers numerous benefits.

Documentation includes, for example, the aim of the study, the methodology, or the instruments (and their settings) and measures that were used. Also, code books, laboratory notebooks/Electronic Lab Notebooks (**ELNs**) and experimental protocols are examples of documentation. Moreover, documentation includes usage conditions and explains the relations between the files.

_How to keep project documentation_

- Part of the documentation must be written when you publish a scientific article based on your data.
- Regardless of whether a dataset is described in a published article or not, you should consider what documentation future users of your data require to understand and reuse this data.
- It is best to write and regularly update the documentation during a research project.
- You can keep your documentation in a README file which explains to re-users what they should know about the data and how they can use the data. This will also help your future you to understand what you have done and how you have done it.
- When sharing [**research software**](https://www.tue.nl/en/our-university/library/library-for-researchers-and-phds/research-data-management/rdm-themes/research-software), comprehensive documentation is crucial to ensure that users can understand, utilize, and contribute to the software effectively. Especially useful is including inline comments to explain lines of code and complex algorithms within your codebase.

Compared to metadata, documentation is more specifically aimed at the human user and not necessarily machine-readable.

## Metadata

Metadata is **'data about data'**. It refers to descriptive information about a project's documentation and data, making it easier to locate, understand, and manage. Metadata includes attributes such as project title, authors, creation date, keywords, geo location as well as attached licenses. Proper metadata enhances searchability, categorization, and retrieval of project documents and datasets. Metadata is an intrinsic element of the [**FAIR**](https://www.tue.nl/en/our-university/library/library-for-researchers-and-phds/research-data-management/rdm-themes/fair) principles because it provides information that enables the (future) user or computer to find the data and understand what the dataset entails. Without metadata, reuse and reproducibility are impossible. Unlike documentation, metadata should be machine-readable.

In short, metadata:

- Explains data provenance, detailing how, when, and where data was created.
- Aids others in understanding your data's context.
- Increases data findability with unique identifiers like [**DOI**](https://datacite.org/dois.html) and indexed keywords.

_Metadata standards_

Defining appropriate metadata depends on the discipline and/or the methodology that was used to produce the data. There are already multiple standards available for different fields of research:  [**FAIRsharing.org**](https://fairsharing.org/) provides an extensive catalogue of [**standards**](https://fairsharing.org/standards/) used in biomedical research. [**Metadata Standards Catalog**](https://rdamsc.bath.ac.uk/subject-index) includes metadata standards for various subjects and disciplines. You can ask your peers which metadata standard is commonly used in your domain. Enriching your data with additional domain-specific metadata will make it more useful and findable for others. If there is no metadata scheme available yet for your research discipline, you can use a generic one.

Example of the generic metadata scheme:

- Name: Title of data set

- Authors:

  - Pete Johnson
  - Jane Doe

- Keywords:

  - KeyWord1
  - KeyWord2
  - KeyWord3

- Version: 1.0.1

- DatasetDOI: 10.18112/openneuro.ds002938.v1.0.0

- Reference: Johnson, P., Doe, J. (2020). Paper on Dataset. Data Journal 15(3), 361-369.

- Description: This dataset contains MRI data from 40 human subjects. …

- Date: 20200629

- Location: Eindhoven University of Technology

- License: CC0

- Correspondence: j.doe@tue.nl

[**Repositories**](https://www.tue.nl/en/our-university/library/library-for-researchers-and-phds/research-data-management/rdm-themes/data-preservation) such as 4TU.Research Data and Data Archiving and Networked Services (DANS-EASY) use the DataCite Metadata Schema. This is a generic metadata standard that provides a list of core metadata properties for an accurate and consistent identification of data so that your data can easily be cited and retrieved. When you deposit your data in these two repositories, you will be asked to provide this type of metadata.

A generally accepted minimum standard for describing information on the web, including research data, is Dublin Core. Further information on this metadata standard is available at: [**Dublin core**](https://dublincore.org/).

For more information on disciplinary metadata standards see also [**Digital Curation Centre**](https://www.dcc.ac.uk/guidance/standards/metadata) and the Metadata Directory that has been set up under the auspices of the Research Data Alliance: [**RDA Metadata Directory**](https://rdamsc.bath.ac.uk/subject-index). A curated resource on data and metadata standards, inter-related to databases and data policies can be found at [**FAIRsharing**](https://fairsharing.org/).

## Data Package

To make your research sustainable, facilitate reuse of data and allow replication of a study, a **data package** should be made. The information in the data package should correspond to the information in the article that reports the results. Other researchers should be able to replicate your study independently and solely based on this information. The information should be concise yet as complete as possible.

Your data package should include the following:

- A **README** or **instruction** file which lists the files inside the package and explains their relation and includes a step-by-step instruction on how to use the files to replicate the study.
- **Raw data files**. If your study is based on a portion of the original dataset, include only the necessary data. Make sure to include de-identified data in your data package and omit [**personal and sensitive data**](https://www.tue.nl/en/our-university/library/library-for-researchers-and-phds/research-data-management/rdm-themes/privacy-and-ethics).
- **Processed data files**. In many cases, the raw data will be transformed to a processed format that is suitable for further analysis.
- A **data appendix/codebook** which provides information about every variable in your dataset (e.g. variable name, value labels, the type and format of the variable).
- **Command files/syntax** which includes code scripts that were used to transform the raw data into processed data and code scripts which were used to analyze the data and produce the results. The code should be accompanied by (inline) comments or other instructions needed for others to replicate your study. You should not include information or code in the package that you are not allowed to share (e.g. licensed software).
- **Protocols** which were used during the study, for instance about the performed experiments.
- **Lab journals.**
- **A reference to any publication** which is based on the data.
- **[License information](https://www.tue.nl/en/our-university/library/library-for-researchers-and-phds/research-data-management/rdm-themes/research-software)** which specifies the terms under which the data can be used, modified and distributed.
- Other metadata, for example the parameters used in your study.

A good yet sometimes daunting way to test the completeness of your data package is to check if you would be able to replicate your study yourself with only the information in the package.

## Electronic Lab Notebook

An electronic lab notebook (ELN) is an organizational tool that can help you to document your studies. It helps you to keep track of what steps you took in your research and communicates the details of your project to others. If you have ever been in the situation where you could not retrace the details of a study you conducted some time ago, you will understand the value of an ELN. An ELN contains **the details needed to understand what was done in the study**, including:

- Hypotheses
- Methods
- Observations
- Protocols
- Notes

An ELN should be **shareable**, **searchable** and **secured**. The content and structure of an ELN will often differ across disciplines.

One option for creating an ELN is MS OneNote. Although it is not specifically designed for scientific purposes, OneNote can easily be adapted to an ELN workflow, independent of discipline or research method. It provides a hierarchical structure that includes Section Groups (this could be a research project), Sections (this could be the Methods section) and Pages (e.g., a Page in the Methods section could describe details of the apparatus you used in your study). OneNote allows for handwritten or typed notes, video and audio recordings, diagrams, images, drawings, screen clippings, equations, etc. An ELN in OneNote can easily be shared through platforms such as MS Teams or MS OneDrive and can be opened on different devices (laptops, smartphones, etc.). OneNote is also compatible with other MS applications, such as Excel or PowerPoint.

More information can be found in this [**paper**](https://journals.plos.org/ploscompbiol/article/file?id=10.1371/journal.pcbi.1006918&type=printable) or in this [**manual**](https://www.bioinformatics.babraham.ac.uk/training/OneNote%20manual.pdf).

## Tools and Further Reading

- [Metadata standards provided by the Research Data Alliance](http://rd-alliance.github.io/metadata-directory/standards/)
- [Metadata standards on FAIRsharing.org](https://fairsharing.org/)
- [A quick guide for using Microsoft OneNote as an electronic laboratory notebook (pdf)](https://journals.plos.org/ploscompbiol/article/file?id=10.1371/journal.pcbi.1006918&type=printable)
- [11 Tricks for using OneNote as your lab notebook](https://www.ascb.org/careers/11-tricks-for-using-onenote-as-your-lab-notebook/)
- [Guidelines provided by 4TU.ResearchData for creating a README file (pdf)](https://data.4tu.nl/s/documents/Guidelines_for_creating_a_README_file.pdf)

## FAQ

**What are metadata?**  
In short, [metadata](https://www.tue.nl/en/our-university/library/library-for-researchers-and-phds/research-data-management/rdm-themes/documentation-and-metadata) is simply a description of an object (for example, a dataset). Metadata is needed to retrieve a dataset, to make a dataset understandable for others and to indicate the provenance of the dataset. Based on discipline, various metadata standards exist, see [here](https://www.dcc.ac.uk/guidance/standards/metadata).

**Is there a metadata and data structure standard for neuroimaging data (e.g., (f)MRI, EEG, MEG)?**  
Yes, please visit [this page](https://bids-specification.readthedocs.io/en/stable/02-common-principles.html#examples) for more details.
