export default {
  name: 'contactSettings',
  title: 'Contact & Location',
  type: 'document',
  fields: [
    { name: 'phone', title: 'Phone Number', type: 'string' },
    { name: 'email', title: 'Email Address', type: 'string' },
    { name: 'address', title: 'Street Address', type: 'string' },
    { name: 'suburb', title: 'Suburb', type: 'string' },
    { name: 'city', title: 'City', type: 'string' },
    { name: 'googleMapsUrl', title: 'Google Maps Link', type: 'url' },
    { name: 'bookingUrl', title: 'Booking / Quote URL', type: 'url' },
    { name: 'googleReviewUrl', title: 'Google Review URL', type: 'url' },
    {
      name: 'hours',
      title: 'Opening Hours',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'days', title: 'Days (e.g. Mon–Fri)', type: 'string' },
            { name: 'hours', title: 'Hours (e.g. 8am–5pm)', type: 'string' },
          ],
        },
      ],
    },
    {
      name: 'serviceAreas',
      title: 'Service Areas',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
}
