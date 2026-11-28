mod ts '.just/ts.just'
mod bun '.just/bun.just'
mod tools '.just/tools.just'

setup:
    direnv allow
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
