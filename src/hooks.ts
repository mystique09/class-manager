import type { RequestEvent } from '@sveltejs/kit';
import type { RequestOptions, MaybePromise } from '@sveltejs/kit/types/private';
import { parse } from 'cookie';

const empty_user_session: UserSession = {
  id: null,
  username: null,
};

export async function handle({ event, resolve }: { event: RequestEvent, resolve: (event: RequestEvent, opts?: RequestOptions) => MaybePromise<Response> }) {
  const cookie = parse(event.request.headers.get("cookie") || '');
  const user_session: UserSession = cookie.session ? JSON.parse(cookie.session) : empty_user_session;

  event.locals.user = user_session;

  const response = await resolve(event);
  return response;
}

export async function getSession(event: RequestEvent) {
  return event.locals.user;
}
