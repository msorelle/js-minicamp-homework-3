'use strict';

//Do not change any of the function names

function makeCat(name, age) {
    var cat = {
        name: name,
        age: age,
        meow: function () {
            return 'Meow!';
        }
    };
    return cat;
}

function addProperty(object, property) {
    object[property] = null;
    return object;
}

function invokeMethod(object, method) {
    object[method]();
}

function multiplyMysteryNumberByFive(mysteryNumberObject) {
    return mysteryNumberObject.mysteryNumber * 5;
}

function deleteProperty(object, property) {
    delete object[property];
    return object;
}

function newUser(name, email, password) {
    var user = {
        name: name,
        email: email,
        password: password
    };
    return user;
}

function hasEmail(user) {
    return !!user.email;
}

function hasProperty(object, property) {
    return object.hasOwnProperty(property);
}

function verifyPassword(user, password) {
    return user.password === password;
}

function updatePassword(user, newPassword) {
    user.password = newPassword;
    return user;
}

function addFriend(user, newFriend) {
    user.friends.push(newFriend);
    return user;
}

function setUsersToPremium(users) {
    for (var u in users) {
        users[u].isPremium = true;
    }
    return users;
}

function sumUserPostLikes(user) {
    var totalLikes = 0;
    for (var p in user.posts) {
        totalLikes += user.posts[p].likes;
    }
    return totalLikes;
}

function addCalculateDiscountPriceMethod(storeItem) {
    storeItem.calculateDiscountPrice = function () {
        return this.price * (1 - this.discountPercentage);
    };
    return storeItem;
}


//Do not modify code below this line.
////--------------------------------

module.exports = {
    makeCat: makeCat,
    addProperty: addProperty,
    invokeMethod: invokeMethod,
    multiplyMysteryNumberByFive: multiplyMysteryNumberByFive,
    deleteProperty: deleteProperty,
    newUser: newUser,
    hasEmail: hasEmail,
    hasProperty: hasProperty,
    verifyPassword: verifyPassword,
    updatePassword: updatePassword,
    addFriend: addFriend,
    setUsersToPremium: setUsersToPremium,
    sumUserPostLikes: sumUserPostLikes,
    addCalculateDiscountPriceMethod: addCalculateDiscountPriceMethod
};
