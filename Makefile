install:
	npm install
link:
	sudo npm link
start:
	node bin/brain-games.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
