import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import BlogPosts from "pages-sections/BlogPosts/blogPosts.js";
// functions
import { getSortedPostsData } from 'lib/posts';

import styles from "assets/jss/pages/index.js";

const useStyles = makeStyles(styles);

export default function Main({ allPostsData }) {
  const classes = useStyles();
  return (
    <div>
      <Header
        brand="Digital Beans"
        rightLinks={<HeaderLinks />}
        fixed
        color="dark"
      />
      <Parallax>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Digital Beans</h1>
                <h3 className={classes.subtitle}>
                  Yet Another Tech Blog
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <BlogPosts 
          data={allPostsData}
        />
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}