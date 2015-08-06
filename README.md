# Pontarius web site

## Running

Docker and Fig needs to be installed.

Just run the follwoing:

    $ fig up

The server will now be running at https://localhost/. We're using a snakeoil
HTTPS certificate that you will likely have to add as an exception to your
browser's HTTPS settings.

## Development

Start the services according to the instructions in the previous section.

Install Node.js:

    $ sudo apt-get install --yes nodejs nodejs-legacy

Install the grunt-cli and jslint packages:

    $ sudo npm -g install bower grunt-cli jslint

Install the Node.js dependencies for the project.

    $ npm install

Install the Bower dependencies for the project, and package the dependencies.

    $ bower install
    $ grunt deps

Initiate the "dev" Grunt target.

    $ grunt dev

Now, any changes to JavaScript, HTML or CSS files in the source directory will
trigger a "rebuild" of the source code.

Additionally, you can use <code>grunt deps</code> to fetch and rebuild the
Bower dependencies. You can also use <code>grunt live</code> to, in addition to
performing the tasks of the two previous tasks, run JSLint on the source code.

## Attribution

The image Stone Bridge over Apadale Beck (bridge.jpg) is Copyright © Matthew Hatton, 2008. Licensed under the Creative Commons Attribute-Share Alike 2.0 Generic license.
