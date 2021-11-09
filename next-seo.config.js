const title = 'Alliterative Address'
const description = 'Get an alliterative greeting for the day of the week'
const url = 'https://greeting.mael.tech/'

export default {
  title,
  description,
  canonical: url,
  openGraph: {
    title,
    description,
    url,
    site_name: title,
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    handle: '@mattaelphick',
    site: '@mattaelphick',
    cardType: 'summary_large_image',
  },
}
