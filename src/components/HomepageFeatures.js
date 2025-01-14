import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Web Frameworks',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Frameworks that are designed to support the development of web applications including web services, web resources, and web APIs
      </>
    ),
  },
  {
    title: 'Databases',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        A database is a structured set of data held in a computer, most often a server. 
      </>
    ),
  },
  {
    title: 'Programming Languages',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        A list of programming languages that are actively developed on GitHub.
      </>
    ),
  },

  {
    title: 'Javascript Frameworks',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        While the number of ways to organize JavaScript is almost infinite, here are some tools that help you build single-page applications.
      </>
    ),
  },

  {
    title: 'Low-Code & No-Code Tools',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Low-code is a software development approach that requires little to no coding in order to build applications and processes. A low-code development platform uses visual interfaces with simple logic and drag-and-drop features instead of extensive coding languages
      </>
    ),
  },

  {
    title: 'Static Site Generator',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        A static site generator is a software application that creates HTML pages from templates or components and a given content source. Most static site generators, including Gatsby, accept Markdown-formatted text files as a source
      </>
    ),
  },



];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
