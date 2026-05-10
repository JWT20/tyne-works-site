import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h2: (props) => <h2 className="font-serif text-3xl md:text-4xl mt-14 mb-5 leading-tight" {...props} />,
    h3: (props) => <h3 className="font-serif text-xl md:text-2xl mt-10 mb-3 leading-tight" {...props} />,
    p: (props) => <p className="my-4 text-ink/85 leading-relaxed" {...props} />,
    ul: (props) => <ul className="list-disc pl-6 my-4 space-y-1 text-ink/85" {...props} />,
    ol: (props) => <ol className="list-decimal pl-6 my-4 space-y-1 text-ink/85" {...props} />,
    a: (props) => <a className="text-accent underline underline-offset-2 hover:no-underline" {...props} />,
    strong: (props) => <strong className="text-ink font-semibold" {...props} />,
  };
}
