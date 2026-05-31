import { Link as RouterLink } from "react-router-dom";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import { getAllPosts } from "../constants/posts";
import { StyledPageContainer } from "../styles/styles";

const formatDate = (iso: string): string =>
  new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export const Blog = () => {
  const posts = getAllPosts();

  return (
    <StyledPageContainer>
      <Typography mb={4} variant="h3" component="h1">
        Blog
      </Typography>
      <Box width="38rem" maxWidth="90vw">
        {posts.length === 0 ? (
          <Typography variant="body1">No posts yet — check back soon.</Typography>
        ) : (
          posts.map(post => (
            <Box key={post.slug} mb={4}>
              <Link
                component={RouterLink}
                to={`/blog/${post.slug}`}
                color="secondary"
                underline="hover"
              >
                <Typography variant="h5" component="h2">
                  {post.title}
                </Typography>
              </Link>
              <Typography variant="subtitle2" component="p" mt={0.5} mb={1}>
                {formatDate(post.date)}
              </Typography>
              <Typography variant="body1">{post.excerpt}</Typography>
            </Box>
          ))
        )}
      </Box>
    </StyledPageContainer>
  );
};
