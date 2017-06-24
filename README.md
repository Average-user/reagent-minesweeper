# ms

A simple 16 16 with 40 mines, minesweeper made with reagent and clojure.

![](https://github.com/Average-user/reagent-minesweeper/blob/master/resources/public/img/rms.png?raw=true)

# [Demo](https://average-user.github.io/reagent-minesweeper/)

## How to play:

To reveal a square just click on it, and to put or remove a flag, right-click on it.

## Setup

To get an interactive development environment run:

    lein figwheel

and open your browser at [localhost:3449](http://localhost:3449/).
This will auto compile and send all changes to the browser without the
need to reload. After the compilation process is complete, you will
get a Browser Connected REPL. An easy way to try it is:

    (js/alert "Am I connected?")

and you should see an alert in the browser window.

To clean all compiled files:

    lein clean

To create a production build run:

    lein do clean, cljsbuild once min

And open your browser in `resources/public/index.html`. You will not
get live reloading, nor a REPL.

## License

Copyright © 2017 Lucas Polyméris

Distributed under the Eclipse Public License either version 1.0 or (at your option) any later version.
