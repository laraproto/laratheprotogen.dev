# laratheprotogen.dev

Simple website built with sveltekit, not a static site but no real server stuff right now (might add some blog stuff sometime with a comment system probably after the 28th)

## Contributing

In it's current state you only need the [Bun Runtime and Package Manager](https://bun.com) to start developing on it, then install deps and work on it

```sh
bun i
bun --bun run dev
```

## Deploying

This project uses the sveltekit node adapter, so it requires an environment whicch can handle server stuff, either hosted on a linux machine (or a docker container inside coolify like I'm doing for it), or probably easily enough adapted to vercel, cloudflare pages, whichever as it isn't yet locked to a specific database (will be locked to postgresql soon-ish) but running should just be as easy as

```sh
bun i
bun --bun run build
bun --bun run ./build
```