import { Redirect } from "@docusaurus/router";

// make default landing page as docs
export default function Home() {
  return (
    <Redirect to="/agentic-ai-tech-doc/docs/category/agentic-ai-documentations" />
  );
}
