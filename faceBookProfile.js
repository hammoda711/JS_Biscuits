var facebookProfile = {
    name: "mo",
    friends: 6,
    messages: ["hi" , "hello" , "gentle remainder!! "],
    postMessage: function(message){
         facebookProfile.messages.push(message);
        return  facebookProfile.messages;
    },
    deleteMessage: function(){
         facebookProfile.messages.pop(); 
      return  facebookProfile.messages;
    },
    addFriend: function(friends){
         facebookProfile.friends++
      return  facebookProfile.friends;
    },
    removeFriend: function(friends){
        facebookProfile.friends--;
      return  facebookProfile.friends;
    },

}


console.log(facebookProfile.deleteMessage());