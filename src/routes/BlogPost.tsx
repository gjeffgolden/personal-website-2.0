import { Link as RouterLink, useParams } from "react-router-dom";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import MarkdownContent from "../components/MarkdownContent";
import { getPostBySlug } from "../constants/posts";
import { StyledPageContainer } from "../styles/styles";

const formatDate = (iso: string): string =>
  new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <StyledPageContainer>
        <Typography mb={2} variant="h3" component="h1">
          Post not found
        </Typography>
        <Link component={RouterLink} to="/blog" color="secondary">
          ← Back to all posts
        </Link>
      </StyledPageContainer>
    );
  }

  return (
    <StyledPageContainer>
      <Box width="42rem" maxWidth="90vw">
        <Link
          component={RouterLink}
          to="/blog"
          color="secondary"
          underline="hover"
        >
          ← Back to all posts
        </Link>
        <Typography mt={2} variant="h3" component="h1">
          {post.title}
        </Typography>
        <Typography variant="subtitle2" component="p" mt={1} mb={3}>
          {formatDate(post.date)}
        </Typography>
        {post.coverImage && (
          <Box
            component="img"
            src={post.coverImage}
            alt=""
            loading="lazy"
            sx={{
              display: "block",
              maxWidth: "100%",
              height: "auto",
              borderRadius: 2,
              mb: 3,
            }}
          />
        )}
        <MarkdownContent>{post.body}</MarkdownContent>
      </Box>
    </StyledPageContainer>
  );
};
