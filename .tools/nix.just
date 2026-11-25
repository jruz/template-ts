set working-directory := '..'

check:
    fd \
        --hidden \
        --extension nix \
        --exec nixfmt --check
    statix check .
    deadnix --fail .

fix:
    fd \
        --hidden \
        --extension nix \
        --exec nixfmt
    statix fix .
    deadnix --edit .
