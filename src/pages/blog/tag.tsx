import { graphql, PageProps, Link } from "gatsby";
import { Layout, Seo } from "../../components/mod";
import "../../style/pages/tag.scss";

const Tag = ({ data }: PageProps<Queries.TagPageQuery>) => {
  return (
    <Layout id="tag-page">
      <Seo title="Blog" />
      <h1>Tag</h1>
      <ul>
        {(() => {
          let cnt = new Map<string, number>();
          data.allMarkdownRemark.nodes.map((post) =>
            post.frontmatter.tags?.map(
              (tag) => tag && cnt.set(tag, (cnt.get(tag) ?? 0) + 1)
            )
          );
          return [...cnt.entries()]
            .sort()
            .sort((a, b) => b[1] - a[1])
            .map((tag, index) => (
              <li key={index}>
                <Link to={`/blog/tag/${tag[0]}`}>{`${tag[0]}(${tag[1]})`}</Link>
              </li>
            ));
        })()}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query TagPage {
    allMarkdownRemark {
      nodes {
        frontmatter {
          tags
        }
      }
    }
  }
`;

export default Tag;
