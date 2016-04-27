System.register(['angular2/testing', '../../app/ts/services/services', '../../app/ts/models'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, services_1, models_1;
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
            }],
        execute: function() {
            testing_1.describe('MessagesService', function () {
                testing_1.it('should test', function () {
                    var user = new models_1.User('Nate', '');
                    var thread = new models_1.Thread('t1', 'Nate', '');
                    var m1 = new models_1.Message({
                        author: user,
                        text: 'Hi!',
                        thread: thread
                    });
                    var m2 = new models_1.Message({
                        author: user,
                        text: 'Bye!',
                        thread: thread
                    });
                    var messagesService = new services_1.MessagesService();
                    // listen to each message indivdually as it comes in
                    messagesService.newMessages
                        .subscribe(function (message) {
                        console.log('=> newMessages: ' + message.text);
                    });
                    // listen to the stream of most current messages
                    messagesService.messages
                        .subscribe(function (messages) {
                        console.log('=> messages: ' + messages.length);
                    });
                    messagesService.addMessage(m1);
                    messagesService.addMessage(m2);
                    // => messages: 1
                    // => newMessages: Hi!
                    // => messages: 2
                    // => newMessages: Bye!
                });
            });
        }
    }
});
//# sourceMappingURL=MessagesService.spec.js.map