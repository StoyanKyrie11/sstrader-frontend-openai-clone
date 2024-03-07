export const blogQuery = `
    query {
      allBlogposts {
        content
        publishDate
        title
        authors {
          name
        }
        image {
          height
          url(imgixParams:{w: 800, h: 800, fit: crop})
          title
          width
        }
        description
        blogSlug
        id
      }
    }
  `;

export const pageBlogQuery = `
  query($blogSlug: String) {
    blogpost(filter: {blogSlug: {eq: $blogSlug}}) {
        blogSlug
        description
        publishDate
        content
        title
        image {
            url(imgixParams: {w: 2194, h: 1234, fit: crop})
        }
        id
        authors {
            name
        }
    }
  }
`;

export const singleBlogQuery = `
    query($blogSlug: String) {
        blogpost(filter: {blogSlug: {eq: $blogSlug}}) {
            blogSlug
            description
            publishDate
            content
            title
            image {
                url(imgixParams: {w: 800, h: 800, fit: crop})
            }
            id
            authors {
                name
            }
        }
    }
`;
