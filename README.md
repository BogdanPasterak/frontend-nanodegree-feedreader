# Feed-Reader

This is a project made for the course _**Udacity** - Front-End Web Developer Nanodegree Program_

Author - **Bogdan Pasterak**

## Contributing

This repository can be used by anyone for any positive purpose.
It was created for learning and has fun to play.

## Instructions

You can clone the repository:
`git clone https://github.com/BogdanPasterak/frontend-nanodegree-arcade-game`
And run the file 'index.html' using your browser.

You can also run the game by clicking on this link: [GitHub Pages](https://bogdanpasterak.github.io/frontend-nanodegree-feedreader/)

## How I completed the project

- I started the project by downloading a ready repository [required project assets](http://github.com/udacity/frontend-nanodegree-feedreader).
-  I got acquainted with the project and review the [Jasmine documentation](http://jasmine.github.io).
-  I started to analyze the tasks .
- The first part of the project required performing two loops to check the Name and URL.
- The loops automatically prevent the test from being executed if `allFeeds` does not exist or is empty.
- The next test concerns the menu which should by default be hidden.
- The menu is hidden when 'body' has a class 'menu-hidden'.
- The second part of this test checks if the menu shows up and hides after clicking on the chamburger icon.
- Clicking is done using the procedure *"$('menu-icon-link'). click();"*
- The next two tests checked the *"loadFeed ()"* procedure. This is an asynchronous procedure.
- Asynchrony forces the built-in *"done ()"* function.
- Fortunately, the author *"loadFeed ()"* predicted its use and attached an additional parameter made at the end of the procedure.
- The first of them checks if *"loadFeed ()"* there is at least a single *.entry* element within the *.feed* container.
- Next test that ensures when a new feed is loaded by the *"loadFeed ()"* function that the content actually changes.
- All tests can be performed independently.
- All tests pass.
- For my tests, I added error messages [jasmine2-custom-message](https://github.com/avrelian/jasmine2-custom-message).
- It seems to me very useful if the test fails.
- The last step was to describe in [README.md](https://github.com/BogdanPasterak/frontend-nanodegree-feedreader/blob/master/README.md) which you are reading :)

## Licence

License in the file [LICENCE.md](https://github.com/BogdanPasterak/frontend-nanodegree-feedreader/blob/master/LICENCE.md)

