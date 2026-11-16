mod ts '.just/ts.justfile'
mod bun '.just/bun.justfile'
mod tools '.just/tools.justfile'

setup:
    just git-hooks
    just ts::install

check:
    just ts::check

fix:
    just ts::fix

test:
    just ts::test
    just bun::test

git-hooks:
    git config --local core.hooksPath .githooks
