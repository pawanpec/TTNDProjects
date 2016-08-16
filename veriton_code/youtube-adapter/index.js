/**
 * Created by ttnd on 16/8/16.
 */
var request = require('request');
var config = require('./config.json');
var YOUTUBE_API_KEY = config.api_key;
module.exports = {
    getYoutubeMetaDataByVideoId: function (youtubeVideoId,callback) {
        var _url = 'https://www.googleapis.com/youtube/v3/videos?part=snippet&id=' + youtubeVideoId + '&key=' + YOUTUBE_API_KEY;
        request(_url, function (err, response, body) {
            if (!err && response.statusCode === 200) {
                try {
                    var result = JSON.parse(body);
                    return callback(null, result);
                } catch (e) {
                    return callback(e, null);
                }
            } else {
                return callback(err || body, null);
            }
        });


    },
    getYoutubeMetaDataByPlaylistId: function (playlistId,callback) {
        var _url = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10" + "&playlistId=" + playlistId + "&key=" + YOUTUBE_API_KEY;
        console.log(_url);
        request(_url, function (err, response, body) {
            if (!err && response.statusCode === 200) {
                try {
                    var result = JSON.parse(body);
                    return callback(null, result);
                } catch (e) {
                    return callback(e, null);
                }
            } else {
                return callback(err || body, null);
            }
        });


    }
}