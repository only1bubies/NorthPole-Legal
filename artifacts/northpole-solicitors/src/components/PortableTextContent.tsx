import { PortableText, type PortableTextBlock, type PortableTextComponents } from '@portabletext/react';

interface PortableTextContentProps {
  value?: PortableTextBlock[] | null;
}

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="mb-6 text-lg leading-8 text-foreground/80">{children}</p>,
    h1: ({ children }) => <h1 className="mt-10 mb-5 text-3xl font-semibold tracking-tight text-primary md:text-4xl">{children}</h1>,
    h2: ({ children }) => <h2 className="mt-9 mb-4 text-2xl font-semibold tracking-tight text-primary md:text-3xl">{children}</h2>,
    h3: ({ children }) => <h3 className="mt-8 mb-3 text-xl font-semibold tracking-tight text-primary md:text-2xl">{children}</h3>,
    h4: ({ children }) => <h4 className="mt-7 mb-3 text-lg font-semibold tracking-tight text-primary md:text-xl">{children}</h4>,
    blockquote: ({ children }) => (
      <blockquote className="my-8 rounded-r-2xl border-l-4 border-secondary/40 bg-muted/10 px-6 py-4 italic text-foreground/75">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
    em: ({ children }) => <em className="italic text-foreground/90">{children}</em>,
    underline: ({ children }) => <span className="underline decoration-secondary/70 underline-offset-2">{children}</span>,
    link: ({ children, value }) => {
      const href = typeof value?.href === 'string' ? value.href : '';
      const isExternal = /^https?:\/\//i.test(href) || href.startsWith('mailto:');

      return (
        <a
          href={href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className="font-medium text-secondary underline decoration-secondary/70 underline-offset-4 transition-colors hover:text-primary"
        >
          {children}
        </a>
      );
    },
  },
  list: {
    bullet: ({ children }) => <ul className="my-6 ml-6 list-disc space-y-3 text-lg leading-8 text-foreground/80">{children}</ul>,
    number: ({ children }) => <ol className="my-6 ml-6 list-decimal space-y-3 text-lg leading-8 text-foreground/80">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="pl-2">{children}</li>,
    number: ({ children }) => <li className="pl-2">{children}</li>,
  },
};

export default function PortableTextContent({ value }: PortableTextContentProps) {
  if (!Array.isArray(value) || value.length === 0) {
    return null;
  }

  return (
    <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-primary prose-p:text-foreground/80 prose-a:text-secondary prose-a:no-underline hover:prose-a:text-primary prose-blockquote:border-secondary/40 prose-strong:text-foreground prose-em:text-foreground/90">
      <PortableText value={value} components={components} />
    </div>
  );
}
