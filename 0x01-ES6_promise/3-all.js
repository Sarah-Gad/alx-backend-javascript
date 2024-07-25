import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promise1 = uploadPhoto();
  const promise2 = createUser();
  Promise.all([promise1, promise2])
    .then((resolvedvalue) => console.log(`${resolvedvalue[0].body} ${resolvedvalue[1].firstName} ${resolvedvalue[1].lastName}`))
    .catch(() => console.log('Signup system offline'));
}
