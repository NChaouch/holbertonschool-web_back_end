import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  const photoResponse = uploadPhoto();
  const userResponse = createUser();
  return Promise.all([photoResponse, userResponse])
    .then(([photoResponse, userResponse]) => {
      console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}

module.exports = handleProfileSignup;
