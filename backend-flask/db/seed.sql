-- this file was manually created
INSERT INTO public.users (display_name, handle, email, cognito_user_id)
VALUES
  ('Hillary Ugwu', 'ohahuru', 'ohary37@gmail.com' ,'MOCK'),
  ('Andrew Brown', 'andrewbrown', 'email@example.com' ,'5ae290ed-55d1-47a0-bc6d-fe2bc2700399'),
  ('Andrew Bayko', 'bayko','email@example.com' ,'5af290ed-56d1-47a0-bc6d-fe2by2740999');

INSERT INTO public.activities (user_uuid, message, expires_at)
VALUES
  (
    (SELECT uuid from public.users WHERE users.handle = 'ohahuru' LIMIT 1),
    'This was imported as seed data!',
    current_timestamp + interval '10 day'
  )