import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords }) => {
    const location = useLocation();

    useEffect(() => {
        // Update Title
        document.title = title;

        // Update Meta Description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', description);
        } else {
            const meta = document.createElement('meta');
            meta.name = 'description';
            meta.content = description;
            document.head.appendChild(meta);
        }

        // Update Meta Keywords
        if (keywords) {
            const metaKeywords = document.querySelector('meta[name="keywords"]');
            if (metaKeywords) {
                metaKeywords.setAttribute('content', keywords);
            } else {
                const meta = document.createElement('meta');
                meta.name = 'keywords';
                meta.content = keywords;
                document.head.appendChild(meta);
            }
        }

        // Update Canonical URL
        const canonicalUrl = `https://rupivo.com${location.pathname}`;
        let linkCanonical = document.querySelector('link[rel="canonical"]');
        if (linkCanonical) {
            linkCanonical.setAttribute('href', canonicalUrl);
        } else {
            linkCanonical = document.createElement('link');
            linkCanonical.setAttribute('rel', 'canonical');
            linkCanonical.setAttribute('href', canonicalUrl);
            document.head.appendChild(linkCanonical);
        }

        // Update Open Graph setup
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute('content', title);

        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute('content', description);

        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) ogUrl.setAttribute('content', canonicalUrl);

    }, [title, description, keywords, location]);

    return null;
};

export default SEO;
