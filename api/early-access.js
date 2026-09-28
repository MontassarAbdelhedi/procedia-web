export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store')
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed.' })
  }
  let body
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body
  } catch {
    return res.status(400).json({ error: 'Invalid request.' })
  }
  const name = typeof body?.name === 'string' ? body.name.trim() : ''
  const email = typeof body?.email === 'string' ? body.email.trim().toLowerCase() : ''
  if (!name || name.length > 120) {
    return res.status(400).json({ error: 'Please enter your name (up to 120 characters).' })
  }
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' })
  }

  const { SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, INSTALLER_DOWNLOAD_URL } = process.env
  let supabaseEndpoint
  let downloadUrl
  try {
    const supabaseUrl = new URL(SUPABASE_URL)
    downloadUrl = new URL(INSTALLER_DOWNLOAD_URL)
    if (supabaseUrl.protocol !== 'https:' || downloadUrl.protocol !== 'https:' || !SUPABASE_SERVICE_ROLE_KEY) {
      throw new Error('Invalid configuration')
    }
    supabaseEndpoint = new URL('/rest/v1/early_access_signups?on_conflict=email', supabaseUrl)
  } catch {
    return res.status(503).json({ error: 'Early access downloads are not configured yet. Please check back soon.' })
  }

  try {
    const response = await fetch(supabaseEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: SUPABASE_SERVICE_ROLE_KEY,
        Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        Prefer: 'resolution=ignore-duplicates,return=minimal',
      },
      body: JSON.stringify({ name, email }),
      signal: AbortSignal.timeout(10000),
    })
    if (!response.ok) throw new Error('Signup could not be saved')
    return res.status(200).json({ downloadUrl: downloadUrl.href })
  } catch {
    return res.status(502).json({ error: 'We couldn’t save your signup. Please try again in a moment.' })
  }
}
