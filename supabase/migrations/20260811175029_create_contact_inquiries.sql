/*
# Create contact_inquiries table (single-tenant, no auth)

1. New Tables
- `contact_inquiries` — stores inquiries submitted via the Contact form
  - `id` (uuid, primary key)
  - `name` (text, not null) — sender's full name
  - `email` (text, not null) — sender's email address
  - `company` (text, nullable) — optional company name
  - `phone` (text, nullable) — optional phone number
  - `inquiry_type` (text, not null) — 'import' or 'export'
  - `product` (text, nullable) — specific product of interest
  - `message` (text, not null) — the inquiry message
  - `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `contact_inquiries`.
- Allow anon + authenticated to INSERT (public contact form).
- No SELECT/UPDATE/DELETE for anon (inquiries are private to the company).
*/

CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  phone text,
  inquiry_type text NOT NULL CHECK (inquiry_type IN ('import', 'export')),
  product text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_inquiries" ON contact_inquiries;
CREATE POLICY "anon_insert_inquiries" ON contact_inquiries FOR INSERT
  TO anon, authenticated WITH CHECK (true);
