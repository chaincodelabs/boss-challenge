// Prefixes a path in /public with the site's basePath (see next.config.js). next/image and the
// metadata icons don't add basePath to plain string URLs on their own; next/link does, so internal
// links should use <Link> instead of this.
export const asset = (path) => `${process.env.NEXT_PUBLIC_BASE_PATH}${path}`;
