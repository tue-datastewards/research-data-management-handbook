import React, {type ComponentProps} from 'react';
import Head from '@docusaurus/Head';
import MDXCode from '@theme/MDXComponents/Code';
import MDXA from '@theme/MDXComponents/A';
import MDXPre from '@theme/MDXComponents/Pre';
import MDXDetails from '@theme/MDXComponents/Details';
import MDXHeading from '@theme/MDXComponents/Heading';
import MDXUl from '@theme/MDXComponents/Ul';
import MDXLi from '@theme/MDXComponents/Li';
import MDXImg from '@theme/MDXComponents/Img';
import Admonition from '@theme/Admonition';
import Mermaid from '@theme/Mermaid';
import type {MDXComponentsObject} from '@theme/MDXComponents';
import DocH1 from '@theme/MDXComponents/H1';

const MDXComponents: MDXComponentsObject = {
  Head,
  details: MDXDetails,
  Details: MDXDetails,
  code: MDXCode,
  a: MDXA,
  pre: MDXPre,
  ul: MDXUl,
  li: MDXLi,
  img: MDXImg,
  h1: ({ componentRef, ...rest }: ComponentProps<'h1'> & { componentRef?: React.RefObject<HTMLHeadingElement> }) => <DocH1 componentRef={componentRef} {...rest} />,
  h2: (props: ComponentProps<'h2'>) => <MDXHeading as="h2" {...props} />,
  h3: (props: ComponentProps<'h3'>) => <MDXHeading as="h3" {...props} />,
  h4: (props: ComponentProps<'h4'>) => <MDXHeading as="h4" {...props} />,
  h5: (props: ComponentProps<'h5'>) => <MDXHeading as="h5" {...props} />,
  h6: (props: ComponentProps<'h6'>) => <MDXHeading as="h6" {...props} />,
  admonition: Admonition,
  mermaid: Mermaid,
};

export default MDXComponents;
