const SlackBot = require('slackbots');
 
// create a bot
const bot = new SlackBot({
    token: 'xoxb-754508229478-765695917493-MRqk1fGUDdjeQIQUaNs9p95v', // Add a bot https://my.slack.com/services/new/bot and put the token 
    name: 'Marvin The Robot'
});
 
bot.on('start', function() {
    // more information about additional params https://api.slack.com/methods/chat.postMessage
    var params = {
        icon_emoji: ':lizard:'
    };
    
    // define private group instead of 'private_group', where bot exist
    // bot.postMessageToGroup('bot_party', 'PARTY!', params); 

})

bot.on('error', (err) => console.log(err));

bot.on('message', (data) => {
    if(data.type !== 'message') {
        return;
    }
    console.log(data.text)
    handleMessage(data.text)
})

function handleMessage(message) {
    if(message.includes("hi")){
        sayHi();
    }
    if(message.includes("rock out")){
        rockOut();
    }
}

function sayHi(){
    console.log("responding")
    var params = {
        icon_emoji: ':lizard:'
    };
    bot.postMessageToChannel('bot_party', 'Well hello there!', params); 
}

function rockOut() {
    var params = {
        icon_emoji: ':lizard:'
    };
    bot.postMessageToChannel('bot_party', ':guitar:', params); 
}
