import React from "react";
import ReactMarkdown from 'react-markdown'

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// custom components
import Date from "components/date.js"
import CodeBlock from "components/codeBlocks.js"

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
              <ReactMarkdown source={content} renderers={{ code: CodeBlock }} />
              {/* {
                unified()
                  .use(parse)
                  .use(remark2rehype)
                  .use(highlight)
                  .use(rehype2react, {createElement: React.createElement})
                  .processSync(content).result
              } */}
              <br />
            </>
          ))}
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
