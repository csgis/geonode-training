# Makefile

.PHONY: replace-paths build

# Detect operating system (Darwin is macOS, Linux is Linux)
UNAME_S := $(shell uname -s)
ifeq ($(UNAME_S),Darwin)
    SED_INPLACE = sed -i '' 
else
    SED_INPLACE = sed -i
endif

# Target to replace paths
rp:
	@find . -type f -name "*.html" -exec $(SED_INPLACE) -E 's|href="/assets/|href="./assets/|g' {} +
	@find . -type f -name "*.html" -exec $(SED_INPLACE) -E 's|src="/assets/|src="./assets/|g' {} +
	@find . -type f -name "*.html" -exec $(SED_INPLACE) -E 's|href="/images/|href="./images/|g' {} +
	@find . -type f -name "*.html" -exec $(SED_INPLACE) -E 's|src="/images/|src="./images/|g' {} +

# Target to build the site
build:
	@rm -rf ./_site
	@bundle exec jekyll build
	$(MAKE) rp
