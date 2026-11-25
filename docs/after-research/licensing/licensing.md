---
sidebar_position: 4
---

# Data & Software Licensing

## Data Licensing

Data licensing plays a pivotal role in fostering data sharing, transparency, and responsible use within the research community and beyond. Licenses stipulate whether data can be freely used, modified, redistributed, and under what conditions. Choosing the right license is crucial: open licenses promote collaboration and reuse, while more restrictive licenses may protect sensitive or proprietary information.

### Creative Commons licenses

The [**Creative Commons licenses**](https://creativecommons.org/licenses/) provide the opportunity to assign rights in re-using data, which are legal, human-readable and machine-readable. There are seven standard Creative Commons licenses where, in terms of data, CC0 (Public Domain) and CC BY (Attribution) are the most used licenses.

Both of these licenses permit others to use, distribute, remix, adapt, and build upon the work, even for commercial purposes. CC0 allows for the broadest reuse without any attribution requirement. CC BY should be used when you want to maximize openness and allow others to use and build upon your research data, while still ensuring proper credit is given to you as the original creator.

The possible choices for the license to apply to your data may, however, be limited by the repository in which you store your data. **Creative Commons** provides [**a guide to determine the preferred license**](https://creativecommons.org/choose/).

### Open Database licenses

Another option for licensing your data is using [**Open Database licenses**](https://opendatacommons.org/index.html). While these are less commonly used, open database licenses clearly separate licensing the data(base) and the content created with it. For example, in a database full of photographs there are rights in the database and separate rights in the photographs. Open Database licenses (ODbL) for the database can be combined with Database Contents licenses (DbCL) for the photographs, or even combined with Creative Commons licenses and thus provide more flexibility.

## Software Licensing

A software license specifies how others may use, copy, modify, and redistribute your code. Without a license, all rights are reserved, and anyone who wants to use your work needs to ask your explicit permission. We recommend always licensing software that you share.

When you are collaborating with others, it's best to agree on a license early. If no license is agreed early, each contributor retains copyright on their contribution, so you need their approval before choosing a license. The [Data Management Plan](/docs/before-research/dmp/) should indicate licensing choices.

### Software licenses at a glance

Licenses run along a spectrum from no restrictions (public domain) to full vendor control (proprietary). The table below is ordered from least to most restrictive. **Copyleft** means modified versions you distribute must be released under the same license.

| Type                                   | License(s)                                                                                                                                              | Main obligation when you distribute                                                                                                                                                    | Typical fit                                  |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| Public domain                          | [CC0](https://creativecommons.org/publicdomain/zero/1.0/), [Unlicense](https://unlicense.org/)                                                          | None                                                                                                                                                                                   | Data sets, snippets, samples                 |
| Permissive                             | [MIT](https://opensource.org/license/mit/)                                                                                                              | Keep copyright and license notice                                                                                                                                                      | Small libraries, any product                 |
| Permissive                             | [BSD](https://opensource.org/license/bsd-3-clause) (2-/3-clause)                                                                                        | Keep notice; 3-clause bars using authors' names for promotion                                                                                                                          | Academic and open source software            |
| Permissive                             | [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0)                                                                                               | Keep notices, mark changes; patent grant ends if you sue over patents                                                                                                                  | Projects needing patent clarity              |
| Weak copyleft                          | [LGPL](https://www.gnu.org/licenses/lgpl-3.0.en.html), [MPL 2.0](https://www.mozilla.org/en-US/MPL/2.0/), [EPL](https://www.eclipse.org/legal/epl-2.0/) | Changes to the library stay open; linked own code may stay closed                                                                                                                      | Libraries in larger applications             |
| Weak copyleft                          | [CPL 1.0](https://opensource.org/license/cpl-1-0)                                                                                                       | Modified code released under CPL; patent grant as Apache                                                                                                                               | Older IBM-origin projects; superseded by EPL |
| Strong copyleft                        | [GPL v2, v3](https://www.gnu.org/licenses/gpl-3.0.en.html)                                                                                              | Whole derived work released under GPL, with source                                                                                                                                     | Software meant to stay open                  |
| Network copyleft                       | [AGPL v3](https://www.gnu.org/licenses/agpl-3.0.en.html)                                                                                                | GPL duties also apply to network use (SaaS)                                                                                                                                            | Server software; check before hosting        |
| Source-available (delayed open source) | [FSL 1.1](https://fsl.software/) (Functional Source License), [BSL](https://mariadb.com/bsl11/)                                                         | Source visible; competing use (FSL) or production use (BSL) limited; releases convert to an open license — FSL after 2 years (Apache 2.0 or MIT), BSL at its change date (max 4 years) | SaaS and vendor products with public code    |
| Source-available                       | [SSPL](https://www.mongodb.com/legal/licensing/server-side-public-license), [Elastic](https://www.elastic.co/licensing/elastic-license)                 | Source visible; hosted or commercial use limited; not open source                                                                                                                      | Vendor products with public code             |
| Freeware / shareware                   | —                                                                                                                                                       | Use only; usually no modifying or redistribution                                                                                                                                       | Free tools, trials                           |

### Selecting a software license

Creative Commons licenses and Open Database licenses are suitable for data but not for software. Since they are not appropriate for software, a special **software license** should be used.

If your software has dependencies or incorporates other people’s work, make sure that your software’s license is **compatible** with the licenses of the software it depends on. You should also decide whether you require others who modify your software to release it under a compatible license.

### Our recommendation

We recommend the **[MIT License](https://opensource.org/license/mit/)** as the default for research software. It is short, widely understood and lets others reuse your code, including in proprietary projects.

Before you apply MIT, check the licenses of your dependencies. If your software incorporates or builds on GPL- or AGPL-licensed code, the combined work must be distributed under a GPL-compatible copyleft license, so you **cannot** simply license it under MIT. In that case, use a copyleft license such as the [**GNU General Public License (GPL)**](https://www.gnu.org/licenses/gpl-3.0.en.html). If you need an explicit patent grant, [**Apache-2.0**](https://www.apache.org/licenses/LICENSE-2.0) is a permissive alternative.

To select a license, you can use the [Choose A License website](https://choosealicense.com/), or follow the [Free Software Foundation's recommendations](https://www.gnu.org/licenses/license-recommendations.html).

### How to add a software license to your project

1. Describe the license in the README file.
2. Add a LICENSE file at the root of your repository.

## FAQ

### Are Creative Commons (CC) licenses suitable for software?

No, CC licenses are designed for creative works, not software. They do not address source code, patent rights, or compiled distributions.

### Which license should I use for my research software code?

We recommend **MIT** by default. Check that your dependencies' licenses permit it. If your code incorporates GPL- or AGPL-licensed components, use a GPL-compatible copyleft license instead. If you need a patent grant, consider **Apache-2.0**. You can find more information in the [Research Software](../../during-research/research-software/research-software.md) section.

### I wrote a piece of software code for my research. Am I the owner of this code?

If you are an employee of TU/e, the copyright holder is Eindhoven University of Technology. If you have any questions regarding the IP rights, you can contact [The Gate](https://www.tue.nl/en/impact/the-gate).

### I plan to restrict access to my software or data. Can I still apply an open license, such as CC BY 4.0 or MIT?

No. An open license lets anyone who receives the material redistribute it, so access restrictions cannot be enforced via the license. An End-User License Agreement (EULA) is necessary. Contact your [Data Steward](/docs/contact) for support.

## Tools and Further Reading

- [**Choose a software license**](https://choosealicense.com/)
- License selector by [**EUDAT**](https://eudat.eu/services/userdoc/license-selector)
- License selector by [**GitHub**](https://ufal.github.io/public-license-selector/)
- [**Software licenses in plain English**](https://tldrlegal.com/)
