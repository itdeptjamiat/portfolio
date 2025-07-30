import { Helmet } from 'react-helmet-async';

const SEOHead = ({
  title,
  description,
  keywords = '',
  image = 'https://muhammadiqbalkhan.com/og-image.jpg',
  url = '',
  type = 'website',
  author = 'Muhammad Iqbal Khan',
  robots = 'index, follow',
  canonical = '',
}) => {
  const fullTitle = title
    ? `${title} | Muhammad Iqbal Khan`
    : 'Muhammad Iqbal Khan | React Native Developer';
  const fullUrl = url
    ? `https://muhammadiqbalkhan.com${url}`
    : 'https://muhammadiqbalkhan.com';
  const canonicalUrl = canonical
    ? `https://muhammadiqbalkhan.com${canonical}`
    : fullUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name='description' content={description} />
      {keywords && <meta name='keywords' content={keywords} />}
      <meta name='author' content={author} />
      <meta name='robots' content={robots} />

      {/* Open Graph / Facebook */}
      <meta property='og:title' content={fullTitle} />
      <meta property='og:description' content={description} />
      <meta property='og:url' content={fullUrl} />
      <meta property='og:type' content={type} />
      <meta property='og:image' content={image} />
      <meta property='og:site_name' content='Muhammad Iqbal Khan Portfolio' />
      <meta property='og:locale' content='en_US' />

      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={fullTitle} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />
      <meta name='twitter:creator' content='@muhammadiqbalkhan' />

      {/* Canonical URL */}
      <link rel='canonical' href={canonicalUrl} />

      {/* Additional Meta Tags */}
      <meta name='theme-color' content='#3b82f6' />
      <meta name='msapplication-TileColor' content='#3b82f6' />

      {/* Structured Data for Person */}
      <script type='application/ld+json'>
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Muhammad Iqbal Khan',
          jobTitle: 'React Native Developer',
          description:
            'Professional React Native developer specializing in cross-platform mobile app development',
          url: 'https://muhammadiqbalkhan.com',
          sameAs: [
            'https://github.com/muhammadiqbalkhan',
            'https://linkedin.com/in/muhammadiqbalkhan',
            'https://twitter.com/muhammadiqbalkhan',
          ],
          knowsAbout: [
            'React Native',
            'Mobile Development',
            'JavaScript',
            'TypeScript',
            'Firebase',
            'Cross-platform Development',
          ],
          worksFor: {
            '@type': 'Organization',
            name: 'Freelance',
          },
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;
