import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import ReactDisqusComments from 'react-disqus-comments';

export const PureComments = ({ data, postTitle, postSlug }) => {
  const {
    url,
  } = data.site.siteMetadata;

  return (
    <ReactDisqusComments
      identifier={postTitle}
      title={postTitle}
      url={url + postSlug}
    />
  );
};

export const Comments = (props) => (
  <StaticQuery
    query={graphql`
      query CommentsQuery {
        site {
          siteMetadata {
            url
          }
        }
      }
    `}
    render={(data) => <PureComments {...props} data={data}/>}
  />
);

export default Comments;
