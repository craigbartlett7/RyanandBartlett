-- Valuation requests submitted from the website.
-- Rows are inserted by the Next.js API route using the service role key.
-- Row Level Security is ON with no public policies, so nobody can read or
-- write this table from the browser with the anon key.

create table if not exists public.valuation_requests (
  id            uuid primary key default gen_random_uuid(),
  created_at    timestamptz not null default now(),
  name          text not null check (char_length(name) between 1 and 120),
  email         text check (email is null or char_length(email) <= 254),
  phone         text check (phone is null or char_length(phone) <= 30),
  postcode      text not null check (char_length(postcode) between 3 and 10),
  address       text check (address is null or char_length(address) <= 300),
  property_type text check (property_type is null or char_length(property_type) <= 40),
  timescale     text check (timescale is null or char_length(timescale) <= 60),
  message       text check (message is null or char_length(message) <= 2000),
  consent       boolean not null,
  source_page   text,
  utm_source    text,
  utm_medium    text,
  utm_campaign  text,
  status        text not null default 'new'
                check (status in ('new', 'contacted', 'valuation_booked', 'instructed', 'lost')),
  notes         text,
  constraint contact_method check (email is not null or phone is not null)
);

create index if not exists valuation_requests_created_at_idx
  on public.valuation_requests (created_at desc);
create index if not exists valuation_requests_status_idx
  on public.valuation_requests (status);

alter table public.valuation_requests enable row level security;
-- Intentionally no policies: only the service role (server) can access rows.
