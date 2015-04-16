# Aurelia-Demo

This simple demo is based off the [Aurelia Navigation Skeleton](https://github.com/aurelia/skeleton-navigation) project. 

It parses a string describing a piece of music. The string may contain an artist, a title, featured artist, and a remix or edit. The string should follow the general pattern `artist name - song title`. With remix and featured artist in brackets `[]` or parenthesis `()`. 

This demo was originally intended to use [Polymer](https://www.polymer-project.org/0.5/) elements. However Polymer elements remove Aurelia databindings in some cases. So [Materialize CSS](http://materializecss.com/) was used instead. 

## Running The App

To run the app, follow these steps.

1. Ensure that [NodeJS](http://nodejs.org/) is installed. This provides the platform on which the build tooling runs.
2. From the project folder, execute the following command:

  ```shell
  npm install 
  ```
3. Ensure that [Gulp](http://gulpjs.com/) is installed. If you need to install it, use the following command:

  ```shell
  npm install -g gulp
  ```
4. Ensure that [jspm](http://jspm.io/) is installed. If you need to install it, use the following command:

  ```shell
  npm install -g jspm
  ```
  > **Note:** jspm queries GitHub to install semver packages, but GitHub has a rate limit on anonymous API requests. It is advised that you configure jspm with your GitHub credentials in order to avoid problems. You can do this by executing `jspm registry config github` and following the prompts.
5. Install the client-side dependencies with jspm:

  ```shell
  jspm install -y
  ```
  >**Note:** Windows users, if you experience an error of "unknown command unzip" you can solve this problem by doing `npm install -g unzip` and then re-running `jspm install`.
6. To run the app, execute the following command:

  ```shell
  gulp watch
  ```
7. Browse to [http://localhost:9000](http://localhost:9000) to see the app. You can make changes in the code found under `src` and the browser should auto-refresh itself as you save files.


## Running The Unit Tests

To run the unit tests simply run `gulp test` in the main project directory. 

## Running The E2E Tests
Integration tests are performed with [Protractor](http://angular.github.io/protractor/#/).

1. Place your E2E-Tests into the folder ```test/e2e/src```
2. Install the necessary webdriver

  ```shell
  gulp webdriver_update
  ```

3. Make sure your app runs and is accessible

  ```shell
  gulp watch
  ```
  
4. In another console run the E2E-Tests

  ```shell
  gulp e2e
  ```
