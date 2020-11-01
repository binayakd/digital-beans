import React from "react";
import unified from 'unified';
import parse from 'remark-parse';
import remark2react from 'remark-react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// custom components
import Date from "components/date.js"

import styles from "pages-sections/BlogPosts/blogPostsStyle.js";

const useStyles = makeStyles(styles);

export default function BlogPosts(props) {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={12}>
          {props.data.map(({ id, date, title, content }) => (
            <>
              <h2>{title}s</h2>
              <h4>
              < Date dateString={date} />
              </h4>
              {
                unified()
                  .use(parse)
                  .use(remark2react)
                  .processSync(content).result
              }
              <br />
            </>
          ))}
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
