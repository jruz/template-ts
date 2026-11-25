set working-directory := '..'

check:
    nix develop "path:$PWD/.tools" --command check

fix:
    nix develop "path:$PWD/.tools" --command fix

renovate-dry-run:
    nix develop "path:$PWD/.tools" --command \
        just --justfile .tools/justfile renovate::dry-run
