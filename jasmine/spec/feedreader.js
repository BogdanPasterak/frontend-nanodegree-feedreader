/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {

            since('allFeeds is not defined').expect(typeof allFeeds).not.toBe(undefined);
            since('allFeeds is not Array').expect(Array.isArray(allFeeds)).toBe(true);
            since('allFeeds is empty').expect(allFeeds.length).not.toBe(0);

        });


        /* HACK: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        allFeeds.forEach(function(feed, index) {
            it('Item ' + (index + 1) + ' has a URL and that is not empty', function() {
                since('Item ' + (index + 1) + ' has no URL').expect(feed.hasOwnProperty('url')).toBe(true);
                since('Item ' + (index + 1) + ' URL is empty').expect(feed.url.length).not.toBe(0);
            });
        });

        /* HACK: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        allFeeds.forEach(function(feed, index) {
            it('Item ' + (index + 1) + ' has a Name and that is not empty', function() {
                since('Item ' + (index + 1) + ' has no Name').expect(feed.hasOwnProperty('name')).toBe(true);
                since('Item ' + (index + 1) + ' Name is empty').expect(feed.name.length).not.toBe(0);
            });
        });

    });


    /* HACK: Write a new test suite named "The menu" */
    describe('The menu', function() {

        /* HACK: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('the menu element is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /* HACK: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('the menu element is visibility after clicking the menu icon', function() {
            $('.menu-icon-link').click();

            expect($('body').hasClass('menu-hidden')).not.toBe(true);

            $('.menu-icon-link').click();

            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

    });

    /* HACK: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        //var since = require('jasmine2-custom-message');
        let length;
        /* HACK: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        afterEach(function() {
            // is an elegant form of sending your own message, but requires installation
            // 'jasmine2-custom-message' (https://github.com/avrelian/jasmine2-custom-message)
            // console.log(length);
        });

        it('the .feed has at least one .entry-link', function(done) {
            length = $('.feed .entry-link').length;

            since('there is ' + length + ' .entry-link').
                expect(length).toBeGreaterThan(0);
            done();
        });

    });

    /* HACK: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        const title = $('.header-title');
        let index;
        let header;
        /* HACK: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        beforeEach(function(done) {

            // if (allFeeds.some(feed => feed.name === title.text())) {
            // if this will be the first test title.text () === 'Feeds' (from index.html)
            // index will take -1. And great, next will be 0, first in the array !!!
            index = allFeeds.indexOf(allFeeds.filter(feed => feed.name === title.text())[0]);
            //}
            // console.log(title.text() + '  ' + index );
            // next in allFeeead array
            index++;
            // if last one -> start from 0
            if (index >= allFeeds.length) {
                index = 0;
            }
            // before call header is ...
            header = title.text();

            loadFeed(index, function() {
                done();
            });
        });

        afterEach(function() {

            index = allFeeds.indexOf(allFeeds.filter(feed => feed.name === title.text())[0]);
            // after call header is ...
            // console.log(title.text() + '  ' + index );
        });

        it('new feed is loaded that the content actually changes.', function(done) {
            // I expects different titles after calling the function
            expect(title.text()).not.toBe(header);
            done();
        });


    });

}());
