System.register(['angular2/testing', '../../app/ts/services/services', '../../app/ts/models', 'underscore'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, services_1, models_1, _;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (services_1_1) {
                services_1 = services_1_1;
            },
            function (models_1_1) {
                models_1 = models_1_1;
            },
            function (_1) {
                _ = _1;
            }],
        execute: function() {
            testing_1.describe('ThreadsService', function () {
                testing_1.it('should collect the Threads from Messages', function () {
                    var nate = new models_1.User('Nate Murray', '');
                    var felipe = new models_1.User('Felipe Coury', '');
                    var t1 = new models_1.Thread('t1', 'Thread 1', '');
                    var t2 = new models_1.Thread('t2', 'Thread 2', '');
                    var m1 = new models_1.Message({
                        author: nate,
                        text: 'Hi!',
                        thread: t1
                    });
                    var m2 = new models_1.Message({
                        author: felipe,
                        text: 'Where did you get that hat?',
                        thread: t1
                    });
                    var m3 = new models_1.Message({
                        author: nate,
                        text: 'Did you bring the briefcase?',
                        thread: t2
                    });
                    var messagesService = new services_1.MessagesService();
                    var threadsService = new services_1.ThreadsService(messagesService);
                    threadsService.threads
                        .subscribe(function (threadIdx) {
                        var threads = _.values(threadIdx);
                        var threadNames = _.map(threads, function (t) { return t.name; })
                            .join(', ');
                        console.log("=> threads (" + threads.length + "): " + threadNames + " ");
                    });
                    messagesService.addMessage(m1);
                    messagesService.addMessage(m2);
                    messagesService.addMessage(m3);
                    // => threads (1): Thread 1
                    // => threads (1): Thread 1
                    // => threads (2): Thread 1, Thread 2
                });
            });
        }
    }
});
//# sourceMappingURL=ThreadsService.spec.js.map