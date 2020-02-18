import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Button } from "react-bootstrap";
import { GoCalendar, GoPerson } from "react-icons/go";

const Tags = () => {
  const data = useStaticQuery(graphql`
    query TagsQuery {
      allGhostTag {
        edges {
          node {
            name
            slug
            url
            feature_image
          }
        }
      }
    }
  `);

  const tags = data.allGhostTag.edges;

  return (
    <>
      <div className="sidebox widget">
        <h3 className="widget-title">Tags</h3>
        <ul className="list-unstyled tag-list">
          {tags.map(({ node }) => (
            <li key={node.id}>
              <Button as="a" href={`tag/${node.slug}`} className="btn-tag">
                {node.name}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Tags;
