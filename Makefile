SRC = index.js lib/phalanx.js

test: $(SRC)
	@node_modules/.bin/jshint $^
	@NODE_ENV=test node_modules/.bin/jasmine-node \
	--verbose \
	--captureExceptions \
	spec
