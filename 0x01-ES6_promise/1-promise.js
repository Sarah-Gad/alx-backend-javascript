export default function getFullResponseFromAPI(success) {
  return new Promise((resolvefunc, rejectfunc) => {
    if (success === true) {
      resolvefunc({
        status: 200,
        body: 'Success',
      });
    } else {
      rejectfunc(Error('The fake API is not working currently'));
    }
  });
}
