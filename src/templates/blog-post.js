// 1. Import the `remarkForm` HOC
import { graphql } from 'gatsby';
import { remarkForm } from 'gatsby-tinacms-remark';
import React from 'react';

function BlogPostTemplate({ data }) {
  return <h1>{data.markdownRemark.frontmatter.title}</h1>;
}

// 2. Wrap your template with `remarkForm`
export default remarkForm(BlogPostTemplate);

// 3. Add the required fields to the GraphQL query
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date
        description
      }

      fileRelativePath
      rawFrontmatter
      rawMarkdownBody
    }
  }
`;
