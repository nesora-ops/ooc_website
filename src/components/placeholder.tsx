import { Children } from "react";

import { paragraphs, placeholderValue, PlaceholderText, renderTokens } from "@/components/placeholder-text";
import { getPlaceholderValues } from "@/lib/content";

type PlaceholderProps = {
  children: React.ReactNode;
  variant?: "inline" | "block";
  className?: string;
};

// Temporary presentation values. Backend integration should replace every
// element carrying `data-content-key`; the key preserves the source field.
// Server component: the editable values come from CertifyDB's Site-wide
// settings (see getPlaceholderValues), the rest from placeholder-text.tsx.
export async function Placeholder({ children, variant = "inline", className }: PlaceholderProps) {
  const key = Children.toArray(children).join("").trim();
  const values = await getPlaceholderValues();
  return (
    <PlaceholderText
      contentKey={key}
      value={placeholderValue(key, values)}
      variant={variant}
      className={className}
    />
  );
}

/** Inline copy with {key} tokens filled from the placeholder values. */
export async function Rich({ text }: { text: string }) {
  const values = await getPlaceholderValues();
  return <>{renderTokens(text, values)}</>;
}

/** A multi-paragraph field (paragraphs separated by a blank line), one <p> each. */
export async function RichParagraphs({ text, className }: { text: string; className?: string }) {
  const values = await getPlaceholderValues();
  return (
    <>
      {paragraphs(text).map((paragraph, index) => (
        <p key={index} className={className}>
          {renderTokens(paragraph, values)}
        </p>
      ))}
    </>
  );
}
