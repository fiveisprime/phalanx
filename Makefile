SRC = index.js lib/phalanx.js

test: $(SRC)
	@node_modules/.bin/jshint $^
