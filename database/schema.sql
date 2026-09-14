-- BodyBuilding AI Database

create table profiles (
 id uuid primary key,
 name text,
 age int,
 height numeric,
 weight numeric,
 goal text,
 level int default 1,
 xp int default 0,
 created_at timestamp default now()
);

create table workouts (
 id bigint generated always as identity primary key,
 user_id uuid,
 exercise text,
 sets int,
 reps int,
 weight numeric,
 workout_date date default current_date
);

create table progress (
 id bigint generated always as identity primary key,
 user_id uuid,
 weight numeric,
 body_fat numeric,
 photo_url text,
 created_at timestamp default now()
);
