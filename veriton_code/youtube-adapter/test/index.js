var should = require('should');
var youTubeAdapter = require('../index');
var getYoutubeMetaDataByVideoId = youTubeAdapter.getYoutubeMetaDataByVideoId;
var getYoutubeMetaDataByPlaylistId = youTubeAdapter.getYoutubeMetaDataByPlaylistId;

describe('#getYoutubeMetaDataByPlaylistId', function() {
    this.timeout(100000000);
    /*
     Positive test case
     */
    it("calling youtube api with playlist id", function(done) {
        var youtubeVideoId="UCfV36TX5AejfAGIbtwTc7Zw";
        getYoutubeMetaDataByPlaylistId(youtubeVideoId,function (err,result) {
            should.not.exist(err);
            should.exist(result);
            result.should.have.property('pageInfo');
            result.should.have.property('items');
            result.pageInfo.should.have.property('totalResults');
            done();
        });
    });
    /*
     Negative test cases
     */
    it("calling youtube api with wrong channel id", function(done) {
        var youtubeVideoId="UCfV36TX5AejfAGIbtwTc7Zw_500";
        getYoutubeMetaDataByPlaylistId(youtubeVideoId,function (err,result) {
            should.exist(err);
            done();
        });
    });
});

describe('#getYoutubeMetaData', function() {
    this.timeout(100000000);
/*
  Positive test case
 */
    it("calling youtube api with single video id", function(done) {
        var youtubeVideoId="Bv_5Zv5c-Ts";
        getYoutubeMetaDataByVideoId(youtubeVideoId,function (err,result) {
            should.not.exist(err);
            should.exist(result);
            result.should.have.property('pageInfo');
            result.should.have.property('items');
            result.pageInfo.should.have.property('totalResults');
            done();
        });
    });
    it("calling youtube api with two video id", function(done) {
        var youtubeVideoId="Bv_5Zv5c-Ts,r5OPRhelEIU";
        getYoutubeMetaDataByVideoId(youtubeVideoId,function (err,result) {
            should.not.exist(err);
            should.exist(result);
            result.should.have.property('pageInfo');
            result.should.have.property('items');
            result.pageInfo.should.have.property('totalResults');
            done();
        });
    });
    /*
       Negative test cases
     */
    it("calling youtube api with wrong video url", function(done) {
        var youtubeVideoId="Bv_5Zv5c-Ts_500";
        getYoutubeMetaDataByVideoId(youtubeVideoId,function (err,result) {
            should.exist(err);
            done();
        });
    });
});


