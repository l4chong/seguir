var st = require("string-template");
var queries = {};

/**
 * Definitions of queries are referenced in the structure documentation in ../setup/index
 * They exist here so they can be kept up to date with the queries;
 */

/**
 * @apiDefine ExampleCqlAccounts
 * @apiExample {cql} Insert Account
 *    INSERT INTO {KEYSPACE}.accounts (account, name, isadmin, enabled) VALUES(?, ?, ?, ?)
 */
queries.upsertAccount = 'INSERT INTO {KEYSPACE}.accounts (account, name, isadmin, enabled) VALUES(?, ?, ?, ?)';
queries.selectAccounts = 'SELECT account, name, isadmin, enabled FROM {KEYSPACE}.accounts';
queries.selectAccount = 'SELECT account, name, isadmin, enabled FROM {KEYSPACE}.accounts WHERE account = ?';
queries.selectAccountByName = 'SELECT account, name, isadmin, enabled FROM {KEYSPACE}.accounts WHERE name = ?';
queries.updateAccount = 'UPDATE {KEYSPACE}.accounts SET name = ?, isadmin = ?, enabled = ?  WHERE account = ?';

/**
 * @apiDefine ExampleCqlAccountUsers
 * @apiExample {cql} Insert Account User
 *    INSERT INTO {KEYSPACE}.accounts (account, name, isadmin, enabled) VALUES(?, ?, ?, ?)
 */
queries.upsertAccountUser = 'INSERT INTO {KEYSPACE}.account_users (account, username, password, enabled) VALUES(?, ?, ?, ?)';
queries.selectAccountUsers = 'SELECT account, username, enabled FROM {KEYSPACE}.account_users WHERE account = ?';
queries.selectAccountUserByName = 'SELECT account, username, password, enabled FROM {KEYSPACE}.account_users WHERE username = ?';
queries.updateAccountUser = 'UPDATE {KEYSPACE}.account_users SET password = ?, enabled = ?  WHERE account = ? AND username = ?';

/**
 * @apiDefine ExampleCqlApplications
 * @apiExample {cql} Insert Application
 *    INSERT INTO seguir.applications (application, key, name) VALUES(?, ?, ?)
 * @apiExample {cql} Check Application
 *    SELECT application, name FROM seguir.applications WHERE key = ?
 */
queries.upsertApplication = 'INSERT INTO {KEYSPACE}.applications (account, name, appkeyspace, appid, appsecret, enabled) VALUES(?, ?, ?, ?, ?, ?)';
queries.checkApplication = 'SELECT account, name, appkeyspace, appid, appsecret, enabled FROM {KEYSPACE}.applications WHERE appid = ?';
queries.selectApplications = 'SELECT account, name, appkeyspace, appid, appsecret, enabled FROM {KEYSPACE}.applications WHERE account = ?';
queries.updateApplication = 'UPDATE {KEYSPACE}.applications SET name = ?, enabled = ? WHERE appid = ?';
queries.updateApplicationSecret = 'UPDATE {KEYSPACE}.applications SET appsecret = ? WHERE appid = ?';

/**
 * @apiDefine ExampleCqlUsers
 * @apiExample {cql} Insert User
 *    INSERT INTO seguir.users (user, username) VALUES(?, ?)
 * @apiExample {cql} Select User
 *    SELECT user, username FROM seguir.users WHERE user = ?
 * @apiExample {cql} Select User by Name
 *    SELECT user, username FROM seguir.users WHERE username = ?
 */
queries.upsertUser = 'INSERT INTO {KEYSPACE}.users (user, username, altid, userdata) VALUES(?, ?, ?, ?);';
queries.selectUser = 'SELECT user, username, altid, userdata FROM {KEYSPACE}.users WHERE user = ?';
queries.selectUserByUsername = 'SELECT user, username, altid, userdata FROM {KEYSPACE}.users WHERE username = ?';
queries.selectUserByAltId = 'SELECT user, username, altid, userdata FROM {KEYSPACE}.users WHERE altid = ?';
queries.updateUser = 'UPDATE {KEYSPACE}.users SET {setValues} WHERE user = ?;';

/**
 * @apiDefine ExampleCqlPosts
 * @apiExample {cql} Insert Post
 *    INSERT INTO seguir.posts (post, user, content, posted) VALUES(?, ?, ?, ?)
 * @apiExample {cql} Select Post
 *    SELECT post, content, user, posted FROM seguir.posts WHERE post = ?
 */
queries.selectPost = 'SELECT post, content, user, posted, isprivate, ispersonal FROM {KEYSPACE}.posts WHERE post = ?';
queries.upsertPost = 'INSERT INTO {KEYSPACE}.posts (post, user, content, posted, isprivate, ispersonal) VALUES(?, ?, ?, ?, ?, ?);';
queries.removePost = 'DELETE FROM {KEYSPACE}.posts WHERE post=?';

/**
 * @apiDefine ExampleCqlFriends
 * @apiExample {cql} Insert Friend
 *    INSERT INTO seguir.friends (friend, user, user_friend, since) VALUES(?, ?, ?, ?)
 * @apiExample {cql} Select Friend
 *    SELECT friend, user, user_friend, since FROM seguir.friends WHERE friend = ?
 * @apiExample {cql} Select Friends
 *    SELECT user_friend, since from seguir.friends WHERE user = ?
 * @apiExample {cql} Remove Friend
 *    DELETE FROM {KEYSPACE}.friends WHERE friend = ?
 */
queries.upsertFriend = 'INSERT INTO {KEYSPACE}.friends (friend, user, user_friend, since) VALUES(?, ?, ?, ?)';
queries.selectFriend = 'SELECT friend, user, user_friend, since FROM {KEYSPACE}.friends WHERE friend = ?';
queries.selectFriends = 'SELECT user_friend, since from {KEYSPACE}.friends WHERE user = ?';
queries.removeFriend = 'DELETE FROM {KEYSPACE}.friends WHERE user = ? AND user_friend=?';
queries.isFriend = 'SELECT friend, since from {KEYSPACE}.friends WHERE user = ? AND user_friend = ?';

/**
 * @apiDefine ExampleCqlFriendRequests
 * @apiExample {cql} Insert Friend Request
 *    INSERT INTO seguir.friend_request (friend_request, user, user_friend, message, time) VALUES(?, ?, ?, ?)
 */
queries.upsertFriendRequest = 'INSERT INTO {KEYSPACE}.friend_request (friend_request, user, user_friend, message, since) VALUES(?, ?, ?, ?, ?)';
queries.selectFriendRequest = 'SELECT friend_request, user, user_friend, message, since FROM {KEYSPACE}.friend_request WHERE friend_request = ?';
queries.selectIncomingFriendRequests = 'SELECT friend_request, user, user_friend, message, since FROM {KEYSPACE}.friend_request WHERE user_friend = ?';
queries.selectOutgoingFriendRequests = 'SELECT friend_request, user, user_friend, message, since FROM {KEYSPACE}.friend_request WHERE user = ?';
queries.acceptFriendRequest = 'DELETE FROM {KEYSPACE}.friend_request WHERE friend_request = ?';

/**
 * @apiDefine ExampleCqlFollows
 * @apiExample {cql} Insert Follow
 *    INSERT INTO seguir.followers (follow, user, user_follower, since) VALUES(?, ?, ?, ?);
 * @apiExample {cql} Select Follow
 *    SELECT follow, user, user_follower, since FROM seguir.followers WHERE follow = ?
 * @apiExample {cql} Select Followers
 *    SELECT user, user_follower, since from seguir.followers WHERE user = ?
 * @apiExample {cql} Remove Follow
 *    DELETE FROM {KEYSPACE}.followers WHERE follow = ?
 */
queries.upsertFollower = 'INSERT INTO {KEYSPACE}.followers (follow, user, user_follower, since, isprivate, ispersonal) VALUES(?, ?, ?, ?, ?, ?);';
queries.selectFollow = 'SELECT follow, user, user_follower, since, isprivate, ispersonal FROM {KEYSPACE}.followers WHERE follow = ?';
queries.selectFollowers = 'SELECT user, user_follower, since, isprivate, ispersonal from {KEYSPACE}.followers WHERE user = ?';
queries.removeFollower = 'DELETE FROM {KEYSPACE}.followers WHERE user = ? AND user_follower = ?';
queries.isFollower = 'SELECT follow, since, isprivate, ispersonal from {KEYSPACE}.followers WHERE user = ? AND user_follower = ?';

/**
 * @apiDefine ExampleCqlLikes
 * @apiExample {cql} Insert Like
 *    INSERT INTO seguir.likes (like, user, item, since) VALUES(?, ?, ?, ?);
 * @apiExample {cql} Select Like
 *    SELECT like, item, user, since FROM seguir.likes WHERE like = ?
 * @apiExample {cql} Check Like
 *    SELECT like, user, since FROM seguir.likes WHERE user = ? AND item = ?
 * @apiExample {cql} Remove Like
 *    DELETE FROM {KEYSPACE}.likes WHERE like = ?
 */
queries.upsertLike = 'INSERT INTO {KEYSPACE}.likes (like, user, item, since) VALUES(?, ?, ?, ?);';
queries.selectLike = 'SELECT like, item, user, since FROM {KEYSPACE}.likes WHERE like = ?';
queries.checkLike = 'SELECT like, user, since FROM {KEYSPACE}.likes WHERE user = ? AND item = ?';
queries.removeLike = 'DELETE FROM {KEYSPACE}.likes WHERE user = ? AND item = ?';

/**
 * @apiDefine ExampleCqlFeed
 * @apiExample {cql} Insert Feed Item
 *    INSERT INTO seguir.userline (user, item, type, time) VALUES(?, ?, ?, ?);
 * @apiExample {cql} Select Feed
 *    SELECT user, time, dateOf(time) AS date, item, type FROM seguir.userline WHERE user = ? {privateClause}{timeClause} LIMIT {limit}
 * @apiExample {cql} Remove Item from feed)
 *    DELETE FROM {KEYSPACE}.userline WHERE user = ? AND item = ?
 */
queries.upsertUserTimeline = 'INSERT INTO {KEYSPACE}.{TIMELINE} (user, item, type, time, isprivate, ispersonal) VALUES(?, ?, ?, ?, ?, ?);';
queries.selectTimeline = 'SELECT user, time, dateOf(time) AS date, item, type, isprivate, ispersonal FROM {KEYSPACE}.{TIMELINE} WHERE user = ?{timeClause} LIMIT {limit}';
queries.removeFromTimeline = 'DELETE FROM {KEYSPACE}.{TIMELINE} WHERE user = ? AND time = ?';
queries.selectAllItems = 'SELECT user, time FROM {KEYSPACE}.{TIMELINE} WHERE item = ?';

module.exports = function(keyspace, name, data) {
    data = data || {};
    data.KEYSPACE = keyspace; // Keyspace important and so explicit in method call
    return st(queries[name], data);
}
