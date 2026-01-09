---
sidebar_position: 1
---

# Data Organization & Formats

## Data Organization

Proper data organization will enable you and others to find the correct version of the correct dataset quickly and easily. **Consistent and clear file naming**, **a logically arranged set of folders for storing data files** and **consistent version management** will all be helpful.

Note that, apart from keeping your file naming, folder structure and version management up-to-date, it is important to implement measures to prevent loss of your work. To that end, make sure to make regular backups, especially if you are dealing with dynamic or important data. Depending on the [storage solution](https://www.tue.nl/en/our-university/library/library-for-researchers-and-phds/research-data-management/rdm-themes/data-storage-and-sharing), an automatic back-up may be available.

### File naming

Systematic file names will help you identify the correct datasets without having to open them. Good file names are:

- **Consistent** (based on file naming conventions)
- **Distinctive** (distinguishing between various file versions and files with similar subjects)
- **Indicative** (meaningful)

The sequence of elements of which a file name is composed (e.g. subject/content description, date, version, file type, project number, research team) is relevant if you wish to sort your data files in any specific order. Compile a README file explaining the meaning of the file names, and keep it with your files and update it regularly.

Good practices for file naming:

- Do not use special characters (e.g., ~!@#$%^&\*:?). Most software does not accept these in filenames.
- Use filenames that are independent of folder names.
- Do not make your file names too long.
- Use leading zeros when using sequential numbering, e.g. 001, 002 , etc. This makes it easy to sort your files in alphabetical or numerical order.
- For date designations, use YYYY-MM-DD.
- Do not use spaces. Some software will not accept spaces in file names or require you to enclose the file name in quotes when you want to process it. Instead use:
  - Underscores, e.g. name_of_file
  - Camel case, e.g. NameOfFile
  - Dashes, e.g. name-of-file

### Folder structure

Not only are good file names important for quick and easy data file identification, so is a clear folder structure. Think of how you are going to arrange your research data (and other research-related documents) in folders and subfolders right from the start of your project. An arrangement in 3-4 layers will usually do. Try to avoid more layers. Ways to arrange your data files into folders may be by file type, method (e.g. interview, survey, experiment, observation) or type of material (e.g. data, documentation, publications). It is beneficial to capture your chosen folder structure in a README file or in a diagram for a visual representation.

Good practices for folder structure:

- Your folder structure must still make sense to you when you return from holiday. It should also make sense to your colleagues and should be machine-operable.
- A simple folder structure on a Windows machine could look like something like this:

```
projectName
├── data
│   └── myData.csv
├── processing
│   ├── importableDatafiles
│   │   └── myDataCopy.csv
│   ├── code
│   │   ├── importData.py
│   │   ├── analyseData.py
│   │   └── createFigure.py
│   └── output
│       ├── resultRQ1.csv
│       ├── figureRQ1.png
│       ├── resultRQ2.csv
│       └── figureRQ2.png
├── documents
│   └── codebook.csv
└── temp
    └── tempData.csv
```

- Explanation:
  - **/data** contains the input data. The content of this folder should remain untouched.
  - **/importableDatafiles** contains a working copy of the original data.
  - **/code** contains the code files.
  - **/output** contains the final output files that provide content for your paper. Consider creating a new subfolder for your figures.
  - **/documents** may contain codebooks, metadata files, the manuscript, etc.
  - **/temp** is where you can save temporary or intermediate files.
- Use relative path names in your code or define your paths at the top of the script. This will make it easier for someone else to use your code.

### Version Management

While clear file naming and folder structure can be sufficient in version management, more complex studies (e.g. many documents, data and code) can require more sophisticated version management. For example, when you are **working with many collaborators** on a project, it can be difficult to keep track of the latest version, or to work on a document simultaneously. Solutions, such as using Git for version management, can be useful for these projects. Moreover, separate ongoing and complete work: identify milestone or master versions which cannot be altered or deleted and thus decide which versions to keep, for how long and how to organize them.

Good practices for version management:

- Remove non-relevant versions.
- Work with easy to manage number versions.
- Keep working versions separately from master versions.
- Make a table with all changes per version described.
- Use Git.

## Data Formats

Research data comes in many formats. Whether data can be reused – now and in the future – also depends on the format of the data and the software required to read it. Here are some recommendations that help to make your data sustainable, usable and accessible by others for the long term:

- Use a **standardized file format** that can be opened with open source software. The file format should be well documented and the documentation should be openly available. Examples are: .txt (unicode), .csv, .xml, .json, .zip. [Here](https://dans.knaw.nl/en/file-formats/) you can find a list of preferred formats that the Data Archiving and Networked Services (DANS) recommends.
- Use a format that is **future-proof**. Give preference to **simple** over complex formats. For example, the (unicode) .txt format has a simple format for storing text, while a .docx file has more complex properties.
- If no open data format is available for your data type, use the closed data format that is **most commonly used**.
- If an open file format lacks functions that are specific to their closed variant, it may be useful to store the data in **both data formats**: the open data format and the closed commercial file format.
- Use **unencrypted** and **uncompressed** (or lossless compressed) formats.
- Check the **preferred data formats of the** [repository](https://www.tue.nl/en/our-university/library/library-for-researchers-and-phds/research-data-management/rdm-themes/data-preservation) of your choice. [Here](https://data.4tu.nl/s/documents/Preferred_File_Formats_2023.pdf) you can find the file formats recommended by 4TU.ResearchData.

### Preferred data formats

Find in the table below preferred file formats and formats that are not suitable for long-term archiving.

The preferred formats best guarantees long-term sustainability and accessibility based on three criteria:

- frequently used in the research field;
- have open specifications;
- are independent of specific software, developers or vendors when possible.

| Data type                                            | Preferred formats                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Formats not recommended                                                                                                                                                                                     |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Text                                                 | PDF/A <code>.pdf</code> <br/> Plain Text coded as ASCII, UTF-8 e.g. <code>.txt</code> <br/> XML and HTML without external links <code>.xml</code> <code>.html</code>                                                                                                                                                                                                                                                                                                                                                                                                                        | Microsoft Word <code>.doc</code> <br/> Microsoft Power Point <code>.ppt</code>                                                                                                                              |
| Spreadsheet or table                                 | Comma- or tab delimited text file <code>.csv</code> <br/> OpenDocument spreadsheets <code>.ods</code>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Microsoft Excel <code>.xls,</code> <code>.xlsb</code>                                                                                                                                                       |
| Workspace or programming language                    | Plain Text coded as ASCII, UTF-8 e.g. <code>.txt</code> <br/> MATLAB files in v7.3 or saved in HDF format <code>.mat</code> <br/> Network Common Data Format (netCDF) <code>.nc</code> <code>.cdf</code> <br/> [Hierarchical Data Format](https://cockpit.research.tue.nl/plugins/servlet/helpcenter/research/confluence/shim/spaces/AP/pages/3080847365/Hierarchical+Data+Format+HDF5?atlOrigin=eyJpIjoiNjJhNTZhNzI1ZGZhNDg1NDkxZDVkMzFlODgzNDg1OWEiLCJwIjoiYyJ9) (HDF5) <code>.h5</code> <code>.hdf5</code> <code>.he5</code> <br/> Python <code>.py</code> <br/> JSON <code>.json</code> | Outdated MATLAB files <code>.mat</code> <br/ > Other binary files such as the R files <code>.rdata</code>                                                                                                   |
| Databases                                            | CVS <code>.csv</code> <br/> SQL <code>.sql</code> <br/> SIARD <code>.siard</code>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |                                                                                                                                                                                                             |
| Raster image                                         | TIFF <code>.tiff</code> <code>.tif</code> <br/> JPEG <code>.jpeg</code> <code>.jpg</code> <br/> Portable Network Graphics <code>.png</code> <br/> DICOM <code>.dcm</code>                                                                                                                                                                                                                                                                                                                                                                                                                   | Photoshop <code>.psd</code>                                                                                                                                                                                 |
| Vector image                                         | SVG without JavaScript binding <code>.svg</code>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Graphics InDesign <code>.indd</code> <br/> Illustrator <code>.ait</code> Adobe Illustrator Artwork <code>.ai</code> <br/> Encapsulated Postscript <code>.eps</code>                                         |
| Computer Aided Design (CAD)                          | AutoCAD <code>.dxf</code> <code>.dwg</code> <br/> SVG <code>.svg</code>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | MicroStation DGN <code>.dng</code>                                                                                                                                                                          |
| 3D                                                   | WaveFront Object <code>.obj</code> <br/> Extensible 3D, X3D <code>x3d</code> <code>x3dv</code> <code>.x3db</code> <br/> Polygon file format <code>.ply</code> <br/> The Graphics Language Transmission Format gITF 2.0 <code>.gltf</code> <code>.glb</code> <br/> COLLADA <code>.dae</code> <br/> LASer <code>.las</code> <code>.laz</code> <br/> Industry Foundation Classes <code>.ifc</code>                                                                                                                                                                                             | Blender <code>.blender</code> <br/> 3D PDF <code>.pdf</code>                                                                                                                                                |
| Audio                                                | Broadcast Wave Format <code>.bwf</code> <br/> Material Exchange Format <code>.mxf</code> <br/> Matroska Multimedia Container <code>.mka</code> <br/> FLAC <code>.flac</code>                                                                                                                                                                                                                                                                                                                                                                                                                | WAVE <code>.wav</code> <br/> MPEG-1 or MPEG-2 Audio Layer III <code>.mp3</code>                                                                                                                             |
| Video                                                | Matroska Multimedia Container <code>.mka</code> <br/> Material Exchange Format <code>.mxf</code>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Windows Media Video <code>.wmv</code> <br/> MPEG-4 <code>.mp4</code> <code>.m4a</code> <code>.m4v</code> <br/> Audio Video Interleaved <code>.avi</code> <br/> QuickTime <code>.mov</code> <code>.qt</code> |
| Geographical Information System (GIS)                | GML <code>.gml</code> <br/> MIF/MID <code>.mif</code> <code>.mid</code> <br/> GeoJSON <code>.json</code>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |                                                                                                                                                                                                             |
| Raster GIS                                           | ASCII GRID <code>.asc</code> <code>.txt</code>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |                                                                                                                                                                                                             |
| Resource Description Framework (RDF)                 | RDF/XML <code>.rdf</code> <br/> Trig <code>.trig</code> <br/> Turtle <code>.ttl</code> <br/> NTriples <code>.nt</code><br/> JSON-LD                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Computer Assisted Qualitative Data Analysis (CAQDAS) | REFI-QDA <code>.qdpx</code> <code>.qde</code>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | NVivo (<code>.nvp</code> <code>.nvpx</code> ... export to REFI-QDA project) <br/> Atlas.ti (export to REFI-QDA)as                                                                                           |
