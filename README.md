# Hotel Sun Sky Villa

A boutique guesthouse website for **Hotel Sun Sky Villa**, Thoddoo Island, Maldives.

Built with Next.js 16 (static export) and deployed on Vercel.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
```

The static site is generated in `out/`.

## Deployment

The project is linked to the Vercel project `hotelsunskyvilla`:

```bash
npx vercel deploy --prod
```

Production URL: <https://www.thoddoosunskyvilla.com>

## Domain

The site is served from the `hotelsunskyvilla` project in the
`ahmedzeehanibrahimthoddoo-1955` Vercel scope.

- Primary domain: `https://www.thoddoosunskyvilla.com`
- `thoddoosunskyvilla.com` redirects to `www` with a 308
- `hotelsunskyvilla.com` (registered through Vercel, auto-renew on) redirects to
  the primary domain
- HTTPS certificates are issued and managed automatically by Vercel

Deployments run from the GitHub repository `hotelsunskyvilla` on push to `main`.

## Contact email

`reservation@thoddoosunskyvilla.com` and `reservation@hotelsunskyvilla.com` forward
to `ahmedthoddoo@gmail.com` through ForwardEmail's free DNS-only forwarding.

- MX: `mx1.forwardemail.net` (10), `mx2.forwardemail.net` (20)
- TXT: `forward-email=reservation:ahmedthoddoo@gmail.com`
- TXT: `v=spf1 a include:spf.forwardemail.net -all`

The free plan forwards incoming mail only; sending *as* these addresses would
need Gmail "Send mail as" plus an SPF update, or a paid mailbox provider.

## Booking enquiries

The enquiry form composes an email or WhatsApp message in the guest's own app.
No booking data is stored on the site. Instant booking is also linked to the
property's booking engine.

## Content

- Site details, contact information and booking link: `app/lib/site.ts`
- Rooms, rates and gallery: `app/lib/rooms.ts`
- Experiences and packages: `app/lib/experiences.ts`
- Real property photos: `public/images/real/`
- Scenic island imagery: `public/images/`
