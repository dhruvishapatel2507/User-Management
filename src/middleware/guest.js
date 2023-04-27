export default function auth(to, from, next) 
{
  if (localStorage.getItem('token')) {
    next({ path: '/home' })
  }

  return next();
}