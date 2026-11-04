const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const siteUrl = configuredSiteUrl
  ? new URL(configuredSiteUrl).origin
  : undefined;

export function getCanonicalUrl(path: string): string | undefined {
  if (!siteUrl) {
    return undefined;
  }

  return new URL(path, siteUrl).toString();
}

export function getCanonicalMetadata(path: string) {
  const canonical = getCanonicalUrl(path);

  return canonical
    ? {
        alternates: {
          canonical,
        },
      }
    : {};
}