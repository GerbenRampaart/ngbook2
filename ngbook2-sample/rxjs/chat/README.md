<p align="center">
  <img src="app/images/logos/Angular2RxJSChatHeaderImage.png" alt="Angular 2 RxJS Chat" width="500" height="300"/>
</p>

# Angular 2 RxJS Chat [![Join the chat at https://gitter.im/ng-book/ng-book](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/ng-book/ng-book?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

> An Angular 2 chat app using [Angular 2](https://angular.io/), [RxJS](https://github.com/Reactive-Extensions/RxJS), [Webpack](https://webpack.github.io/), [TypeScript](http://www.typescriptlang.org/), Services, Injectables, [Karma](http://karma-runner.github.io/), Forms, [SCSS](http://sass-lang.com/), and [tslint](http://palantir.github.io/tslint/) by the [ng-book 2 team](https://ng-book.com/2)

This repo shows an example chat application using RxJS and Angular 2. The goal is to show how to use the Observables data architecture pattern within Angular 2. It also features:

* Webpack configuration with TypeScript, Karma, SCSS, and tslint
* Writing async components that work with RxJS
* How to write injectable services in Angular 2
* And much more

<p align="center">
  <img src="app/images/readme/full-chat-preview.png" alt="Angular 2 RxJS Chat" width="800" height="577"/>
</p>

> Try the live [demo here](http://rxjs.ng-book.com)

## Quick start

```bash
# clone the repo
git clone https://github.com/ng-book/angular2-rxjs-chat.git 

# change into the repo directory
cd angular2-rxjs-chat

# install 
npm install

# run
npm run go
```

Then visit [http://localhost:8080](http://localhost:8080) in your browser. 

## Architecture

The app has three models:

* [`Message`](app/ts/models.ts#L27) - holds individual chat messages
* [`Thread`](app/ts/models.ts#L12) - holds metadata for a group of `Message`s
* [`User`](app/ts/models.ts#L3) - holds data about an individual user

<p align="center">
  <img src="app/images/readme/rx-chat-models.png" alt="Model Diagram" width="500" height="119"/>
</p>

And there are three services, one for each model:

* [`MessagesService`](app/ts/services/MessagesService.ts) - manages streams of `Message`s
* [`ThreadsService`](app/ts/services/ThreadsService.ts) - manages streams of `Thread`s
* [`UserService`](app/ts/services/UserService.ts) - manages a stream of the current `User`

There are also three top-level components:

* [`ChatNavBar`](app/ts/components/ChatNavBar.ts) - for the top navigation bar and unread messages count
* [`ChatThreads`](app/ts/components/ChatThreads.ts) - for our clickable list of threads 
* [`ChatWindow`](app/ts/components/ChatWindow.ts) - where we hold our current conversation

<p align="center">
  <img src="app/images/readme/rx-chat-top-level-components.png" alt="Angular 2 RxJS Chat" width="500" height="360"/>
</p>

## Services Manage Observables

Each service publishes data as RxJS streams. The service clients subscribe to these streams to be notified of changes. 

The `MessagesService` is the backbone of the application. All new messages are added to the `newMessages` stream and, more or less, all streams are derived from listening to `newMessages`. Even the `Thread`s exposed by the `ThreadsService` are created by listening to the stream of `Message`s.

There are several other helpful streams that the services expose:

For example, the `MessagesService` exposes the `messages` stream which is a stream of _the list of the all current messages_. That is, `messages` emits an array for each record.

Similarly, the `ThreadsService` exposes a list of the chronologically-ordered threads in `orderedThreads` and so on.

Understanding how RxJS streams can be tricky, but this code is heavily commented. One strategy to grokking this code is to start at the components and see how they use the services. The other strategy is to get a copy of [ng-book 2](https://ng-book.com/2) where we explain each line in detail over ~60 pages.

## Bots

This app implements a few simple chat bots. For instance:

* Echo bot
* Reversing bot
* Waiting bot

<img src="app/images/readme/rx-chat-echo-bot.png" alt="Angular 2 RxJS Chat Bots" width="346" height="348"/>

<div style="clear:both"></div>

## File Structure

Here's an overview of how the files are laid out in this project:

```
angular2-rxjs-chat/
├── Makefile                        * Easy access to common tasks
├── README.md                       * This file
├── app/                            * Where our application code is stored
│   ├── css/                        * Contains our CSS and SCSS files
|   | 
│   ├── images/                     * Stores app images
|   | 
│   ├── index.html                  * HTML entry point
|   | 
│   ├── ts/                         * All of our TypeScript is here
|   |   |
│   │   ├── ChatExampleData.ts      * Contains our bots and sample data
|   |   |
│   │   ├── app.ts                  * App entry point
|   |   |
│   │   ├── components/             * Components go here
|   |   |   |
│   │   │   ├── ChatNavBar.ts       * Nav Bar Component
│   │   │   ├── ChatThreads.ts      * Threads Component
│   │   │   └── ChatWindow.ts       * Chat Window Component
|   |   |
│   │   ├── models.ts               * Our models go here
|   |   |
│   │   ├── services/               * Services here
|   |   |   |
│   │   │   ├── MessagesService.ts  * Manages our messages
│   │   │   ├── ThreadsService.ts   * Exposes our threads
│   │   │   ├── UserService.ts      * Manage our user
│   │   │   └── services.ts         * Exports all services
|   |   |
│   │   └── util/                   * Pipes and various utilities
|   | 
│   ├── typings/                    * Self-managed type definitions here
|   | 
│   └── vendor.js                   * Vendor js requires for webpack
|   | 
├── karma.conf.js                   * Our unit testing configuration
├── package.json                    * Our javascript dependencies
├── test/                           * Our tests go here
├── test.bundle.js                  * Some hacks to get TypeScript tests
├── tsconfig.json                   * Configures the TypeScript compiler
├── tsd.json                        * Configures tsd (type definitions packages)
├── tslint.json                     * Configures our TypeScript linter 
├── typings/                        * tsd managed typings
├── vendor/                         * Various vendored code
└── webpack.config.js               * Our Webpack configuration
```

## Detailed Installation

**Step 1: Install Node.js from the [Node Website](http://nodejs.org/).**

We recommend Node version 4.1 or above. You can check your node version by running this:

```bash
$ node -v
vv4.1...
```

**Step 2: Install Dependencies**

```bash
npm install
```

## Running the App

```bash
npm run go
```

Then visit [http://localhost:8080](http://localhost:8080) in your browser. 

## Running the Tests

You can run the unit tests with:

```bash
npm run test
```

## Future Plans

There are two big changes we plan to make to this repo:

### 1. Add HTTP Requests

Currently the bots are all client-side and there are no HTTP requests involved in the chats. 

We will move the chat bots to a server and integrate API requests into this project once the Angular 2 HTTP client development has settled down.

### 2. `ON_PUSH` change detection

Because we're using observables, we can improve the performance of these components by using `ON_PUSH` change detection. Again, once Angular 2 development stabilizes, we'll be making this change.

## Contributing

There are lots of other little things that need cleaned up such as:

- More tests
- Cleaning up the vendor scripts / typings
- Simplifying the unread messages count

If you'd like to contribute, feel free to submit a pull request and we'll likely merge it in.

## Getting Help

If you're having trouble getting this project running, feel free to [open an issue](https://github.com/ng-book/angular2-rxjs-chat/issues), join us on [Gitter](https://gitter.im/ng-book/ng-book?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge), or [email us](mailto:us@fullstack.io)!

___

# ng-book 2

<a href="https://ng-book.com/2">
<img align="right" src="app/images/readme/ng-book-2-as-book-cover-pigment.png" alt="ng-book 2" width="148" height="250" />
</a>

This repo was written and is maintained by the [ng-book 2](https://ng-book.com/2) team. In the book we talk about each line of code in this app and explain why it's there and how it works.

This app is only one of several apps we have in the book. If you're looking to learn Angular 2, there's no faster way than by spending a few hours with ng-book 2.

<div style="clear:both"></div>

## License
 [MIT](/LICENSE.md)


