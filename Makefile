game = "games"

install:
	npm install

start:
	npm run babel-node -- src/bin/brain-$(game).js

publish:
	npm publish

lint:
	npm run eslint .

watch:
	npm run watch

test:
	npm test