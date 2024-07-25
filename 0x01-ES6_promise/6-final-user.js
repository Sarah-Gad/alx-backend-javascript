import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const sign = signUpUser(firstName, lastName);
  const upload = uploadPhoto(fileName);
  return Promise.allSettled([sign, upload]).then((result) => result.map((result) => ({
    status: result.status,
    value: result.status === 'fulfilled' ? result.value : result.reason,
  })));
}
