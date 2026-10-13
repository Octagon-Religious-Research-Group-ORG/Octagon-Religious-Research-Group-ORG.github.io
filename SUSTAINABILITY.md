# 🌱 Sustainability: what keeps this portal running

> The full, current version, covering this portal, the AstroLog, the lab and the dApp preview, is a page:
> **[octagon-religious-research-group-org.github.io/changelog-astro-public/sustainability](https://octagon-religious-research-group-org.github.io/changelog-astro-public/sustainability)**.
> This file lists what applies to **this repository**, so it's here even when you're reading the code.

Nothing here costs money. What it takes is a few things that quietly expire or drift, written down
so none of it depends on anyone's memory.

## What this repository is

`Octagon-Religious-Research-Group-ORG.github.io` is the entry portal (`/`, `/donate/`, `/map/`, the
404) and the home of the **arrival kit** every ORG page loads: `arrival/arrival.js` +
`arrival/arrival.css` (the kit), `arrival/org.js` + `arrival/org.css` (ORG's own settings and look),
plus `marble.js` (the marbled ink) and `site.css` (the portal's header, footer and dock). The
AstroLog, the drasticstatic ORG lab and the O-R-G dApp preview load the kit files from here by full
URL.

## What needs looking after

| What | Why it matters | What to do |
| --- | --- | --- |
| **The hourly README mirror** (`.github/workflows/mirror-profile-readme.yml`) | Copies the organization profile (`.github` → `profile/README.md`) into this repo's `README.md` every hour, at :17. In a public repository, GitHub switches off scheduled workflows after 60 days without activity. | If the README stops following the profile, open **Actions → Mirror org profile README** and re-enable or run it. Edit the profile, never this `README.md`. |
| **The arrival kit is vendored** | `arrival.js` and `arrival.css` are copies. The canonical copy lives in `drasticstatic/my-template` (`changelog-template/arrival/`), and every org keeps its own copy so one org's change can't break another's. | To upgrade, copy both files from the template unchanged, read the porting notes in its README, and push this repo **before** the AstroLog. |
| **Deploy order** | The AstroLog, the lab and the dApp preview load the kit from this site. A new `org.js` key they rely on must be live here first. | Push here, wait a minute for Pages, then push the others. |
| **Share images** (`social-card.jpg`, and the cards the AstroLog builds for `/donate/` and `/map/`) | Telegram, iMessage, Slack, Discord and LinkedIn keep their own copy of a link's preview. Cards never carry counts, so a cached one doesn't go stale on its own. | After changing a share image, refresh the cached previews: the steps for each app are in [`SOCIAL-PREVIEWS.md`](https://github.com/Octagon-Religious-Research-Group-ORG/.github/blob/main/SOCIAL-PREVIEWS.md) (for Telegram, send each link to @WebpageBot). |
| **The contribution ledger** (`donate/contributors.json`) | It names people. | Add someone only after they've said yes. First name and last initial; never an email or an amount. |
| **The giving links** | `/donate/` links to orgspirituality.org's offerings page (its Direct contribution section) and its offering policy, and to the dApp preview's gift page, labelled a preview. | If ORG changes how it takes gifts, update `donate.give` in `arrival/org.js`. |
| **Wallet giving, later** | The crypto slot on `/donate/` is empty on purpose. The dApp preview's wallet connection runs on a Reown project whose domain allowlist has `https://drasticstatic.github.io` today. | When crypto giving comes to this page, add `https://octagon-religious-research-group-org.github.io` to that project's allowlist, or the button won't load here. Never put a wallet address on a page by hand. |
| **Links that leave GitHub** | The nav, the contact and community windows and the map point at orgspirituality.org, Telegram and ORG's role addresses. | If one changes, update `arrival/org.js` (one place), ORG's [`CONTACTS.md`](https://github.com/Octagon-Religious-Research-Group-ORG/.github/blob/main/CONTACTS.md), and the AstroLog's map. |

*Maintained by Christopher W with Alfred (Claude Code). Last reviewed 2026-10-13.*
