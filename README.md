# Law Website Front End

Next.js landing page for the Saudi law firm lead-generation site.

## Run locally

```bash
npm install
cp .env.local.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Set `NEXT_PUBLIC_API_URL` in `.env.local` to your backend API (default `http://localhost:5000`).

Firm name, logo, services, case types, phone, and address are loaded from the backend settings API.
