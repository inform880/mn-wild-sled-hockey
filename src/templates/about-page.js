import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import FeatureGrid from "../components/Features";

// eslint-disable-next-line
export const AboutPageTemplate = ({ title, content, contentComponent, boardmembers }) => {
  const PageContent = contentComponent || Content;

  console.log(boardmembers);
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
              <h3 className="title">Board of Directors</h3>
              <FeatureGrid gridItems={boardmembers} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  boardmembers: PropTypes.array,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        boardmembers={post.frontmatter.boardmembers}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        boardmembers {
          name
          position
          image {
            childImageSharp {
              gatsbyImageData(
                width: 80
                quality: 100
                layout: CONSTRAINED
              )
            }
          }
        }
      }
    }
  }
`;
