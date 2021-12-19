import React from 'react';
import PropTypes from 'prop-types';
import recentPosts from '../../.docusaurus/docusaurus-plugin-content-blog/default/blog-post-list-prop-default.json';

/**
 * Recent Posts Component
 * @param {object} props Component props
 * @param {number} props.posts Number of posts to show (1 = only most recent)
 */

function RecentPosts(props) {
  return (
    <>
      <div className="col">
        <h1 className="">Recent Posts</h1>
        <ul>
          {recentPosts.items.slice(0, props.posts).map((item, index) => (
            <li key={index}>
              <a href={`${item.permalink}`}>{item.title}</a>{' '}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

RecentPosts.propTypes = {
  posts: PropTypes.number.isRequired,
};

export default RecentPosts;