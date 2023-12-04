import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import grayMatter from "gray-matter";
import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import rehypeRaw from "rehype-raw";
import { BlogPostMetadata } from "./index.tsx";
import { format, parseISO } from "date-fns";
import remarkExternalLinks from "remark-external-links";
import { formatDateStr } from "./utils.tsx";

const BlogPost = () => {
  const [postContent, setPostContent] = useState("");
  const [postData, setPostData] = useState<BlogPostMetadata>(null);
  const { slug } = useParams();

  useEffect(() => {
    const loadPost = async () => {
      // Make sure the path is relative and the markdown files are now in the src directory
      const markdownImports = import.meta.glob("../blog-posts/*.md", {
        as: "raw",
      });

      if (slug) {
        try {
          const markdownContent =
            await markdownImports[`../blog-posts/${slug}.md`]();
          const { content, data } = grayMatter(markdownContent);

          // Set the post content and title from the front matter
          setPostContent(content);
          setPostData(data);
        } catch (error) {
          console.error("Error loading post:", error);
          // Handle the error accordingly
        }
      }
    };
    loadPost();
  }, [slug]);

  if (postData == null) {
    return null;
  }

  return (
    <div className="text-start m-auto max-w-lg">
      <article className="markdown">
        <div>
          <div className="text-secondary-content/50">
            {formatDateStr(postData?.date)}
          </div>
          <h1>{postData?.title}</h1>
        </div>
        {/* Render the Markdown content */}
        <ReactMarkdown rehypePlugins={[rehypeRaw, rehypeSanitize]}>
          {postContent}
        </ReactMarkdown>
      </article>

      <div className="mt-12">
        <Link className={`link link-neutral`} to={`/articles`}>
          View more articles →
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;
