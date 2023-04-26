export default function auth(to, from, next) 
{
  if (!localStorage.getItem('token')) {
    next({ path: '/login' })
  }

  return next();
}