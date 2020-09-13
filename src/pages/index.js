import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function Button(props){

  return(
    <div className={clsx(`${props.pos == 'left' ?'left':''}`,styles.button)}>
      <Link to={useBaseUrl('docs/')}>进入文档</Link>
    </div>
  )
}



function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout>
      <div className={styles.main}>
        <div className={styles.top}>
          <p  className={styles.docname}>Kim Zhou 的文档小站</p>
          <img src="static/img/cover2.jpg" alt="cover" className={styles.pic}/>
          <p className={styles.tagline}>coding for fun~~</p>
        </div>
        <div className={styles.bottom}>
          <Button></Button>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
