'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = Generator.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the sensational ' + chalk.red('generator-react-node-knex-postgres') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'name',
      author: 'author',
      message: 'Your projects name',
      default: this.appname
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    this.fs.copy(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'), {
        name: this.props.name,
        author: this.props.author,
        message: this.props.message
      }
    );
  },

  //Copy application files
  app: function() {

    //Server file
    this.fs.copy(
      this.templatePath('_server.js'),
      this.destinationPath('server.js')
    );
    // Knex
    this.fs.copy(
      this.templatePath('_knexfile.js'),
      this.destinationPath('knexfile.js'), {
        name: this.props.name
      }
    );
    // Webpack
    this.fs.copy(
      this.templatePath('_webpack.config.js'),
      this.destinationPath('webpack.config.js')
    );
    // Routes
    this.fs.copy(
      this.templatePath('_routes'),
      this.destinationPath('routes')
    );
    // Database
    this.fs.copy(
      this.templatePath('_db/_migrations'),
      this.destinationPath('db/migrations')
    );
    this.fs.copy(
      this.templatePath('_.env'),
      this.destinationPath('.env')
    );
    // Models
    this.fs.copy(
      this.templatePath('_models/_database.js'),
      this.destinationPath('models/database.js')
    );

    // React
    this.fs.copy(
      this.templatePath('_app/_components/_main.js'),
      this.destinationPath('app/components/main.js')
    );
    this.fs.copy(
      this.templatePath('_app/_components/_partials'),
      this.destinationPath('app/components/partials')
    );
    this.fs.copy(
      this.templatePath('_app/_react-routes.js'),
      this.destinationPath('app/react-routes.js')
    );

    // Public/
    this.fs.copy(
      this.templatePath('_app/_public/_styles/_main.css'),
      this.destinationPath('app/public/styles/main.css')
    );
    this.fs.copy(
      this.templatePath('_app/_public/_scripts/_main.js'),
      this.destinationPath('app/public/scripts/main.js')
    );
    this.fs.copy(
      this.templatePath('_app/_public/_index.html'),
      this.destinationPath('app/public/index.html')
    );
  },

  install: function () {
    this.installDependencies();
  }
});
