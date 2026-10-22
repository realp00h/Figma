-- 초대장(invitations)과 참석 응답(rsvps) 테이블
-- Supabase 대시보드 → SQL Editor에 붙여넣고 Run 하세요.

-- 1. 초대장 ---------------------------------------------------------------
create table public.invitations (
  id         uuid primary key default gen_random_uuid(),
  title      text not null check (char_length(trim(title)) > 0),     -- 제목 (줄바꿈 포함, 최대 2줄)
  date       text not null check (char_length(trim(date)) > 0),      -- 일시 (자유 입력, 예: 2026년 11월 14일 (토) 09:00)
  location   text not null check (char_length(trim(location)) > 0),  -- 장소
  body       text not null check (char_length(trim(body)) > 0),      -- 본문
  created_at timestamptz not null default now()
);

-- 2. 참석 응답 -------------------------------------------------------------
create table public.rsvps (
  id            uuid primary key default gen_random_uuid(),
  invitation_id uuid not null references public.invitations (id) on delete cascade,
  name          text not null check (char_length(trim(name)) > 0),   -- 이름
  status        text not null check (status in ('yes', 'no')),       -- 참석 여부: yes=참석, no=불참
  companions    integer not null default 0 check (companions >= 0),  -- 본인 제외 동반 인원
  created_at    timestamptz not null default now(),
  -- 불참이면 동반 인원은 0
  check (status = 'yes' or companions = 0)
);

create index rsvps_invitation_id_idx on public.rsvps (invitation_id);

-- 3. RLS: 누구나 읽기(select)·쓰기(insert)만 허용 --------------------------
alter table public.invitations enable row level security;
alter table public.rsvps       enable row level security;

create policy "누구나 초대장 읽기" on public.invitations
  for select to anon, authenticated using (true);
create policy "누구나 초대장 만들기" on public.invitations
  for insert to anon, authenticated with check (true);

create policy "누구나 응답 읽기" on public.rsvps
  for select to anon, authenticated using (true);
create policy "누구나 응답 남기기" on public.rsvps
  for insert to anon, authenticated with check (true);

-- update / delete 정책은 만들지 않으므로 RLS가 모두 막습니다.
-- 한 번 더 막기 위해 권한 자체도 회수합니다.
revoke update, delete, truncate on public.invitations from anon, authenticated;
revoke update, delete, truncate on public.rsvps       from anon, authenticated;
