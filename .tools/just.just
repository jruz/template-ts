set working-directory := '..'

check:
    fd \
        --hidden \
        --type file \
        '^(justfile|.+\.just(file)?)$' \
        --exec just \
        --justfile {} \
        --unstable \
        --fmt \
        --check

fix:
    fd \
        --hidden \
        --type file \
        '^(justfile|.+\.just(file)?)$' \
        --exec just \
        --justfile {} \
        --unstable \
        --fmt
