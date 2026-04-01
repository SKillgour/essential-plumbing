export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    { name: 'businessName', title: 'Business Name', type: 'string' },
    { name: 'tagline', title: 'Tagline', type: 'string' },
    { name: 'logo', title: 'Logo', type: 'image' },
    { name: 'favicon', title: 'Favicon', type: 'image' },
    { name: 'primaryCtaLabel', title: 'Primary Button Text', type: 'string' },
    { name: 'primaryCtaUrl', title: 'Primary Button URL', type: 'string' },
    {
      name: 'socials',
      title: 'Social Links',
      type: 'object',
      fields: [
        { name: 'facebook', title: 'Facebook URL', type: 'url' },
        { name: 'instagram', title: 'Instagram URL', type: 'url' },
        { name: 'tiktok', title: 'TikTok URL', type: 'url' },
        { name: 'linkedin', title: 'LinkedIn URL', type: 'url' },
      ],
    },
  ],
}
