import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  ogImage?: string;
  structuredData?: object;
}

export default function SEO({ title, description, ogImage, structuredData }: SEOProps) {
  useEffect(() => {
    // Set page title
    document.title = title;

    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Set Open Graph tags
    const setOGTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (tag) {
        tag.setAttribute("content", content);
      } else {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        tag.setAttribute("content", content);
        document.head.appendChild(tag);
      }
    };

    setOGTag("og:title", title);
    setOGTag("og:description", description);
    setOGTag("og:type", "website");
    if (ogImage) {
      setOGTag("og:image", ogImage);
    }

    // Set Twitter Card tags
    const setTwitterTag = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (tag) {
        tag.setAttribute("content", content);
      } else {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        tag.setAttribute("content", content);
        document.head.appendChild(tag);
      }
    };

    setTwitterTag("twitter:card", "summary_large_image");
    setTwitterTag("twitter:title", title);
    setTwitterTag("twitter:description", description);
    if (ogImage) {
      setTwitterTag("twitter:image", ogImage);
    }

    // Add structured data
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement | null;
      if (script) {
        script.textContent = JSON.stringify(structuredData);
      } else {
        const newScript = document.createElement("script");
        newScript.type = "application/ld+json";
        newScript.textContent = JSON.stringify(structuredData);
        document.head.appendChild(newScript);
      }
    }
  }, [title, description, ogImage, structuredData]);

  return null;
}
