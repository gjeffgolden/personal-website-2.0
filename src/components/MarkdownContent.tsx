import ReactMarkdown, { Components } from "react-markdown";
import remarkGfm from "remark-gfm";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

// Maps markdown elements onto the site's MUI theme so posts read cleanly and
// match the rest of the site (Source Code Pro body, brand-green accents).
const components: Components = {
  h1: ({ children }) => (
    <Typography variant="h4" component="h2" mt={4} mb={2}>
      {children}
    </Typography>
  ),
  h2: ({ children }) => (
    <Typography variant="h5" component="h2" mt={4} mb={2}>
      {children}
    </Typography>
  ),
  h3: ({ children }) => (
    <Typography variant="h6" component="h3" mt={3} mb={1.5}>
      {children}
    </Typography>
  ),
  p: ({ children }) => (
    <Typography variant="body1" paragraph lineHeight={1.7}>
      {children}
    </Typography>
  ),
  a: ({ href, children }) => {
    const isExternal = !!href && /^https?:\/\//.test(href);
    return (
      <Link
        href={href}
        color="secondary"
        {...(isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </Link>
    );
  },
  img: ({ src, alt }) => (
    <Box
      component="img"
      src={typeof src === "string" ? src : undefined}
      alt={alt || ""}
      loading="lazy"
      sx={{
        display: "block",
        maxWidth: "100%",
        height: "auto",
        borderRadius: 2,
        my: 3,
        mx: "auto",
      }}
    />
  ),
  ul: ({ children }) => (
    <Typography variant="body1" component="ul" sx={{ pl: 3, lineHeight: 1.7 }}>
      {children}
    </Typography>
  ),
  ol: ({ children }) => (
    <Typography variant="body1" component="ol" sx={{ pl: 3, lineHeight: 1.7 }}>
      {children}
    </Typography>
  ),
  li: ({ children }) => <li>{children}</li>,
  blockquote: ({ children }) => (
    <Box
      component="blockquote"
      sx={theme => ({
        borderLeft: `3px solid ${theme.palette.secondary.main}`,
        pl: 2,
        ml: 0,
        my: 2,
        fontStyle: "italic",
        opacity: 0.9,
      })}
    >
      {children}
    </Box>
  ),
  code: ({ children }) => (
    <Box
      component="code"
      sx={{
        fontFamily: "Source Code Pro, monospace",
        backgroundColor: "rgba(255,255,255,0.08)",
        borderRadius: 1,
        px: 0.75,
        py: 0.25,
        fontSize: "0.9em",
      }}
    >
      {children}
    </Box>
  ),
  pre: ({ children }) => (
    <Box
      component="pre"
      sx={{
        fontFamily: "Source Code Pro, monospace",
        backgroundColor: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.12)",
        borderRadius: 2,
        p: 2,
        my: 2,
        overflowX: "auto",
        // Reset the inline `code` styling when nested inside a block.
        "& code": {
          backgroundColor: "transparent",
          p: 0,
          fontSize: "0.85rem",
        },
      }}
    >
      {children}
    </Box>
  ),
  table: ({ children }) => (
    <Box sx={{ overflowX: "auto", my: 2 }}>
      <Box
        component="table"
        sx={{
          borderCollapse: "collapse",
          width: "100%",
          fontFamily: "Source Code Pro",
          "& th, & td": {
            border: "1px solid rgba(255,255,255,0.2)",
            px: 1.5,
            py: 1,
            textAlign: "left",
          },
          "& th": { backgroundColor: "rgba(255,255,255,0.06)" },
        }}
      >
        {children}
      </Box>
    </Box>
  ),
};

interface MarkdownContentProps {
  children: string;
}

const MarkdownContent = ({ children }: MarkdownContentProps) => (
  <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
    {children}
  </ReactMarkdown>
);

export default MarkdownContent;
