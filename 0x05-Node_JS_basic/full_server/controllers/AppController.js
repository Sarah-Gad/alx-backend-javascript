// This mocule defines the app controller
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}
export default AppController;
