/* ORG's arrival config, read by arrival.js (kit v1.3). Shared by every ORG page: the entry portal
   (/, /donate/, /map/, the 404), the AstroLog, and (by absolute URL) the drasticstatic ORG lab and
   the O-R-G dApp preview.

   Every fact here comes from ORG's own materials: orgspirituality.org (About, Community, Offerings
   and its offering policy), the organization's .github profile (CONTACTS.md included), and
   brand-assets. Anything not published yet is marked as a placeholder rather than guessed, and no
   link is made up. People are named by first name and last initial. Strings shown in the guide and
   the modals may hold simple HTML. */
(function () {
  var ROOT = "https://octagon-religious-research-group-org.github.io";
  var LOG = ROOT + "/changelog-astro-public";
  var SITE = "https://orgspirituality.org";
  // The Telegram group chat orgspirituality.org/community links to ("for more information and
  // updates"). Telegram titles it "ORG Events and Ceremonies", shared with Entheo Community.
  var TELEGRAM = "https://t.me/+ccL8NUffhuU0ZGJh";
  // Tripp, as orgspirituality.org's About page lists him under Contact Us.
  var TRIPP = "https://t.me/Tripp_ORG";
  var CONTACTS = "https://github.com/Octagon-Religious-Research-Group-ORG/.github/blob/main/CONTACTS.md";
  var LAB = "https://drasticstatic.github.io/O-R-G-astro-public/"; // Christopher's drasticstatic ORG lab
  // The dApp preview is a static export: its pages live at /give, /beliefs (no trailing slash).
  var DAPP = "https://drasticstatic.github.io/O-R-G-dapp-public-preview/";
  // The octagon mark's eight wedge colors, clockwise from the top edge.
  var WEDGES = ["#5a43f0", "#9a4dff", "#d04ce8", "#e65aa8", "#f29a3a", "#e4d548", "#6fd84a", "#3ccfe0"];

  window.ARRIVAL = {
    org: {
      short: "ORG",
      name: "Octagon Religious-Research Group",
      motto: "Where science and spirituality meet.",
      about:
        "ORG is a member-governed spiritual and research community. Members propose beliefs and keep the ones most of them agree on, and together they plan octagon-shaped temples and research centers where spirituality and science are practiced side by side.",
      // The official mark, unmodified (brand-assets apple-touch-icon-180.png).
      mark: { src: ROOT + "/apple-touch-icon.png" },
      home: {
        label: "orgspirituality.org",
        href: SITE,
        text: "The official site: beliefs, community, research, and offerings. It's also where ORG decides. Every belief starts on one member's page, and becomes ORG's once most voting members agree. Votes never close, so any belief can be revisited.",
      },
      welcomeNote: null,
      welcomePlaceholder:
        "A few words of welcome from ORG's founder, Tripp A, belong here. This space is left empty on purpose until he writes them.",
    },

    // Same key and shape as the O-R-G dApp preview, so a choice made there carries to the lab.
    // The legacy keys are what ORG's portal and AstroLog stored before the kit.
    storage: { key: "org-experience", legacy: { light: "org-light", motion: "org-motion" } },

    modes: [
      { id: "night", name: "Night Sanctuary", note: "Candle-lit indigo, warm gold, and aurora light.", swatch: ["#100e1c", "#e9be72"], dark: true },
      { id: "prism", name: "Prism Light", note: "Morning light through a prism, soft and bright.", swatch: ["#f5f3fa", "#6b4fa0"] },
      { id: "stone", name: "Stone & Lapis", note: "Temple stone veined with lapis and gold.", swatch: ["#ecebe6", "#22408a"], calm: true },
      {
        id: "day",
        name: "Follow the day",
        note: "Prism by morning, stone by afternoon, sanctuary by night.",
        shows: ["prism", "stone", "night"],
        // Prism's lilac by morning, lapis by afternoon, candle gold by night.
        ink: "linear-gradient(90deg, #c9b8ff 0 33.3%, #22408a 0 66.6%, #e9be72 0)",
        follows: function (d) {
          var h = d.getHours();
          return h >= 5 && h < 11 ? "prism" : h >= 11 && h < 17 ? "stone" : "night";
        },
      },
    ],
    defaultMode: "night",

    // Reading mode: one tap for Stone & Lapis (ORG's calmest light), still ink, more contrast, no
    // cursor effects and a comfortable line length; another tap brings back what the visitor had.
    // Text size steps sit beside it (kit 1.2: the kit's four default steps).
    reading: { light: "stone" },

    // "What's new since your last visit": the AstroLog's latest.json lists its newest entries,
    // write-ups and ledger items (same origin for the portal, cross-origin for the lab).
    news: { sources: [LOG + "/latest.json"] },

    // ORG's motion styles. The cursor trail runs through the octagon's eight colors: faint on Gentle,
    // brighter on Vivid, where it also scatters little octagons. Cursor effects can be switched off
    // on their own, and they rest whenever motion is Still.
    motions: [
      { id: "still", name: "Still", icon: "pause", note: "Nothing moves unless you touch it." },
      {
        id: "gentle",
        name: "Gentle",
        icon: "wind",
        note: "The ink drifts slowly, and your pointer stirs it and leaves a faint trail of the octagon's colors.",
        trail: { colors: WEDGES, life: 440, width: 2.2, alpha: 0.5 },
      },
      {
        id: "vivid",
        name: "Vivid",
        icon: "sparkle",
        note: "Faster ink, a brighter trail, and little octagons scattering behind your pointer.",
        trail: { colors: WEDGES, life: 680, width: 3.6, alpha: 0.85, sparks: 0.45, sides: 8 },
      },
    ],
    defaultMotion: "gentle",
    stillMotion: "still",

    // The octagon mark's eight wedge colors, clockwise from the top edge. They color the guide's
    // progress octagon (eight steps, eight wedges) and the initials avatars.
    wedges: WEDGES,

    // Gravatar is used only for addresses at these domains (ORG's role addresses, such as
    // org@orgspirituality.org). Nobody's personal email is ever hashed into a page; everyone else
    // shows a GitHub picture or their initials in an octagon.
    avatar: { shape: "octagon", roleDomains: ["orgspirituality.org"] },

    // ── kit 1.2: the navbar, shared by the portal, the AstroLog and (with its own items) the lab ──
    // Lower priority folds into "More" first when the bar runs short; below 1100px it all folds into
    // the Menu. Contact and Community open their windows; the href is the no-JavaScript fallback.
    nav: {
      label: "ORG",
      fold: 1100,
      items: [
        { id: "portal", label: "Portal", icon: "house-simple", href: ROOT + "/", hideOn: ["portal"], priority: 1, note: "ORG's front door on GitHub" },
        { id: "porch", label: "Porch", icon: "door-open", href: LOG + "/", exact: true, priority: 1, note: "The AstroLog's front door" },
        { id: "changelog", label: "Changelog", icon: "clock-counter-clockwise", href: LOG + "/changelog", priority: 3, note: "What changed, newest first" },
        { id: "library", label: "Library", icon: "books", href: LOG + "/library", priority: 2, note: "Longer write-ups on how it works" },
        { id: "ledger", label: "Ledger", icon: "scroll", href: LOG + "/ledger", priority: 2, note: "Every public change, in plain words" },
        { id: "map", label: "Map", icon: "map-trifold", href: LOG + "/map", hrefs: { portal: ROOT + "/map/" }, priority: 2, note: "Every place, with a picture of each" },
        {
          id: "involved",
          label: "Get involved",
          icon: "hand-heart",
          priority: 3,
          items: [
            { id: "community", label: "Community", icon: "users-three", href: SITE + "/community", open: "community", note: "Where ORG's members talk, on Telegram" },
            { id: "contact", label: "Reach out", icon: "envelope-simple", href: SITE + "/about#contact", open: "contact", note: "Every way to reach ORG" },
            { id: "donate", label: "Donate", icon: "heart", href: ROOT + "/donate/", note: "Ways to give, and thanks by name" },
          ],
        },
        {
          id: "sites",
          label: "ORG's sites",
          icon: "globe-hemisphere-west",
          priority: 2,
          items: [
            { id: "home", label: "orgspirituality.org", icon: "globe-hemisphere-west", href: SITE, note: "The official site, where members decide" },
            { id: "directions", label: "Three directions", icon: "compass-tool", href: LOG + "/three-directions", note: "Renan T's proposal, kept as history" },
            { id: "lab", label: "The drasticstatic ORG lab", icon: "flask", href: LAB, note: "Christopher's lab, where the new builds take shape" },
            { id: "dapp", label: "The dApp preview", icon: "cube", href: DAPP, note: "A web3-ready preview from the lab" },
          ],
        },
        {
          id: "about",
          label: "About",
          icon: "info",
          priority: 1,
          items: [
            { id: "roadmap", label: "Roadmap", icon: "path", href: LOG + "/roadmap", note: "Where these pages are headed" },
            { id: "sustainability", label: "Sustainability", icon: "plant", href: LOG + "/sustainability", note: "What it takes to keep them running" },
            { id: "github", label: "GitHub", icon: "github-logo", href: "https://github.com/Octagon-Religious-Research-Group-ORG", note: "The organization and its code" },
            { id: "brand", label: "Brand assets", icon: "seal-check", href: "https://github.com/Octagon-Religious-Research-Group-ORG/brand-assets", note: "The octagon logo files and guidelines" },
          ],
        },
      ],
    },
    footer: {
      label: "ORG, all the ways around",
      groups: [
        { label: "Explore", icon: "compass", items: ["portal", "porch", "changelog", "library", "ledger", "map"] },
        { label: "Get involved", icon: "hand-heart", items: ["community", "contact", "donate", { id: "guide", label: "Welcome guide", icon: "signpost", href: "#welcome", open: "guide" }] },
        { label: "ORG's sites", icon: "globe-hemisphere-west", items: ["home", "directions", "lab", "dapp"] },
        { label: "About this build", icon: "wrench", items: ["roadmap", "sustainability", "github", "brand", { id: "contacts", label: "CONTACTS.md", icon: "address-book", href: CONTACTS }, { id: "source", label: "AstroLog source", icon: "code", href: "https://github.com/Octagon-Religious-Research-Group-ORG/changelog-astro-public" }] },
      ],
      note: "ORG's name and octagon mark belong to ORG; the brand assets explain how to use them.",
    },

    // ── kit 1.2: one window for every way to reach ORG ─────────────────────────────────────────
    // The three role addresses come from ORG (Tripp). orgspirituality.org has no /contact page (it's
    // a 404); its contact details are the About page's "Contact Us" section, linked here.
    // intercept: false, because that section shares its address with the About page itself: a plain
    // link to orgspirituality.org/about (a door on the portal, a search result) must stay a link.
    contact: {
      title: "Reach out",
      intro: "Every way to reach ORG, in one place. Pick whichever suits you.",
      intercept: false,
      paths: [
        { kind: "email", label: "org@orgspirituality.org", href: "mailto:org@orgspirituality.org", note: "ORG's main address." },
        { kind: "email", label: "webdev@orgspirituality.org", href: "mailto:webdev@orgspirituality.org", note: "About the websites, these GitHub pages included." },
        { kind: "email", label: "octagonreligiousresearchgroup@gmail.com", href: "mailto:octagonreligiousresearchgroup@gmail.com", note: "ORG's shared inbox." },
        {
          kind: "chat",
          label: "Tripp, on Telegram or Signal",
          href: SITE + "/about#contact",
          action: "See Contact Us",
          note: "The Contact Us section of orgspirituality.org's About page lists ORG's founder: @Tripp_ORG on Telegram, @Tripp_ORG.99 on Signal.",
        },
        { kind: "page", label: "ORG's contacts on GitHub", href: CONTACTS, action: "Open CONTACTS.md", note: "Every address and channel above, kept in the organization's .github repository." },
        {
          kind: "form",
          label: "An ORG help desk",
          placeholder: "A help desk for questions and website feedback, with Telegram built in, is planned. Until it opens, the addresses above or the ORG group on Telegram reach the team.",
        },
      ],
    },

    // ── where the community talks: Telegram (ORG's own setting), and a sneak peek at a network of
    //    the members' own, paired with a DAO. The v1.0 keys (name … more) drive the guide's step. ──
    community: {
      name: "Telegram",
      icon: "telegram-logo",
      href: TELEGRAM,
      label: "See every way in",
      title: "Where we gather",
      eyebrow: "Community",
      text: "ORG's members talk in a Telegram group chat. The Community page on orgspirituality.org invites everyone there for more information and updates.",
      intro: "ORG lives on Telegram: its group chat is where members, and people thinking of joining, connect and hear about meetings, events and ceremonies.",
      more: [
        'Prefer to ask one person first? ORG\'s About page lists Tripp on Telegram as <a href="' + TRIPP + '">@Tripp_ORG</a>.',
      ],
      // Same reason as contact: orgspirituality.org/community and /join are also doors on the portal.
      intercept: false,
      platforms: [
        {
          id: "telegram",
          kind: "telegram",
          name: "Events and ceremonies",
          text: "ORG's Telegram group chat, a collaboration with Entheo Community. orgspirituality.org sends people here for news of the monthly meditation ceremony, and it's where most members connect.",
          public: { href: SITE + "/community", label: "See what's on", note: "The meetings, events and ceremonies, on orgspirituality.org." },
          join: { href: TELEGRAM, label: "Join the ORG group", note: "An invite link to the group chat on Telegram." },
        },
        {
          id: "tripp",
          kind: "telegram",
          icon: "chat-circle-text",
          name: "Ask Tripp first",
          text: "ORG's Community page asks people who'd like to join to message Tripp, its founder, with their preferred name.",
          public: { href: TRIPP, label: "Message @Tripp_ORG", note: "On Telegram." },
          join: { href: SITE + "/join", label: "Become a member", note: "Create a member account on orgspirituality.org." },
        },
      ],
      bespoke: {
        title: "Looking ahead: a network of our own",
        tag: "Sneak peek",
        icon: "graph",
        text: "Today ORG's members gather on Telegram. Further out, ORG would like a small social network its members own, rather than one company, paired with a DAO.",
        points: [
          "Profiles and posts on open protocols like Lens and Farcaster, so what members share stays theirs.",
          "A DAO where members propose and vote, the way ORG already decides its beliefs: by majority, with votes that never close.",
          "Privacy first: members choose what's public and what stays among members, and proposals and votes can be anonymous, an idea ORG's own Community page raises.",
        ],
        note: "No dates, and nothing to sign up for yet. A direction, not a promise. Telegram stays the place to talk.",
      },
    },

    // ── kit 1.2: the donate page (/donate/) ────────────────────────────────────────────────────
    // ORG's own giving path is the "Direct contribution" section of orgspirituality.org/offerings
    // (it hands off to PayPal or Venmo); /donate there is a 404. The page links ORG's pages, never a
    // payment processor directly. The dApp preview's gift page calls itself a preview on a
    // placeholder address, and is linked as exactly that. No wallet address here, ever.
    // Give with crypto (kit v1.3, arrival/give/give.js): one Connect button in the donate page's crypto
    // slot. The Reown project (a public client ID, shared by the fleet's portals for now) must list
    // https://octagon-religious-research-group-org.github.io in its allowlist at dashboard.reown.com; until it does, the page
    // calmly says wallet connect isn't switched on for this site yet. No treasury address yet, so every
    // coin reads "Treasury address coming soon" and connecting is a labelled preview. Never put a
    // placeholder or example address here: the page would show it. note: the org's own words, if any.
    give: {
      reownProjectId: "00b6a1cd528ff580f1fd845ed08b0187",
      chains: ["mainnet"],
      addresses: { eth: null, btc: null, sol: null },
      note: "",
    },

    donate: {
      give: [
        {
          label: "Give through orgspirituality.org",
          icon: "hand-heart",
          href: SITE + "/offerings",
          action: "Open the offerings page",
          note: "ORG's own page for giving. Its <em>Direct contribution</em> section lets you give without requesting an item, once, monthly or yearly, and finish the gift with PayPal or Venmo. In ORG's words, it “does not see your account credentials.”",
        },
        {
          label: "How ORG uses gifts",
          icon: "scroll",
          href: SITE + "/gifts-contributions",
          action: "Read the offering policy",
          note: "ORG's own words on gifts and contributions, including the memo that can point a gift toward one area: the website, the legal fund, sacraments, or the octagon infrastructure.",
        },
        {
          label: "The dApp preview's gift page",
          icon: "cube",
          href: DAPP + "give",
          action: "See the preview",
          note: "<strong>A preview, not live.</strong> A web3 gift flow from Christopher's lab. The page says so itself: its address is a placeholder until ORG designates a real one, and sending funds now will not reach ORG.",
        },
      ],
      disclaimer: {
        placeholder: true,
        title: "About giving",
        text: "ORG's own words about gifts made through these GitHub pages belong here. Until ORG writes them, this is a placeholder. These pages never take payments or see payment details: gifts are made on orgspirituality.org.",
      },
      ledger: {
        src: ROOT + "/donate/contributors.json",
        title: "Contribution ledger",
        intro: "People and groups who have given time, skills or gifts to ORG, and said yes to being thanked by name here.",
      },
      crypto: {
        text: "Giving from a crypto wallet is planned for this page, through the same wallet connection the dApp preview uses. It isn't open yet.",
      },
    },

    record: {
      intro: "ORG's AstroLog has two halves.",
      share:
        "Sharing one change? Every entry and every write-up has its own preview card. Paste its link into Telegram, iMessage or Discord and it arrives with its title, summary and who made it. The <strong>Copy a link</strong> button under each one does the copying.",
      changelog: {
        name: "The changelog",
        text: "Every notable change to ORG's websites, newest first. Each entry is a short summary with the full story underneath, filed under one of four areas: the live site, the API, ORG on GitHub, and previews and proposals.",
        href: LOG + "/changelog",
        label: "Read the changelog",
      },
      library: {
        name: "The library",
        text: "Longer write-ups on how the sites are built and how they fit together. The changelog says what changed; the library explains how it works.",
        href: LOG + "/library",
        label: "Open the library",
      },
      ledger: {
        name: "The ledger",
        text: "Every public change to ORG's code, in plain words: grouped by day and by kind, credited to whoever made it, and linked to the change itself. For anyone who'd rather not open GitHub. It refreshes every day.",
        href: LOG + "/ledger",
        label: "Open the ledger",
      },
    },

    sites: {
      portal: {
        name: "ORG on GitHub",
        what: "This is ORG's front door on GitHub: the same nine doors as the home page of orgspirituality.org, and the way into the AstroLog, where ORG keeps its record of what changed.",
      },
      astrolog: {
        name: "the ORG AstroLog",
        what: "The AstroLog is ORG's plain-language record of what changed on its websites, who made each change, and how the pieces fit together. It's the official record for the repositories in ORG's GitHub organization.",
      },
    },

    guide: {
      light: {
        text: 'Every ORG page offers three lights. They began as Renan T\'s design proposal for orgspirituality.org, the spark for these new builds, and they live on here as lights you can choose. Your choice follows you from page to page. <a href="' + LOG + '/three-directions">Their story</a>.',
      },
      motion: {
        text: "Behind each page is marbled ink that moves with your pointer. Choose how much it moves, and whether you'd like more contrast for reading.",
      },
      people: {
        text: "Every entry credits whoever did the work, by first name and last initial, the way ORG's own profile names them.",
        fine: "Pictures come from public GitHub profiles. Anyone without one linked gets an octagon with their initials.",
      },
    },
    guideFinale: "You've lit all eight wedges of the octagon. Welcome to ORG.",

    words: {
      enter: "Enter ORG",
      readingNote: "One tap for the calmest page: Stone & Lapis, the ink at rest, more contrast, and no cursor trail. Tap again to go back to how you had it.",
      cursorNote: "A trail of the octagon's colors behind your pointer, and ink that stirs as you move. Switch it off if you'd rather not.",
      pause: "Pause the ink",
      play: "Let the ink move",
      searchTip: "Anywhere on ORG's pages, any time: every change, write-up, person and page, including the AstroLog from the entry portal.",
    },

    search: {
      sources: [{ url: LOG + "/search.json" }],
      items: [
        { t: "ORG entry portal", k: "page", i: "house", h: ROOT + "/", pin: true, x: "home github io root nine doors" },
        { t: "orgspirituality.org", k: "official site", i: "globe-hemisphere-west", h: SITE, pin: true, x: "website main home" },
        { t: "About", k: "orgspirituality.org", i: "info", h: SITE + "/about", x: "charter founder tripp" },
        { t: "Community", k: "orgspirituality.org", i: "users-three", h: SITE + "/community", x: "meditation ceremony meetings" },
        { t: "Beliefs", k: "orgspirituality.org", i: "scales", h: SITE + "/beliefs", x: "vote majority" },
        { t: "Infrastructure", k: "orgspirituality.org", i: "buildings", h: SITE + "/infrastructure", x: "temples research centers octagon" },
        { t: "Join ORG", k: "orgspirituality.org", i: "hand-heart", h: SITE + "/join", x: "membership member apply sign in" },
        { t: "Research", k: "orgspirituality.org", i: "flask", h: SITE + "/research", x: "science studies" },
        { t: "Legal", k: "orgspirituality.org", i: "scroll", h: SITE + "/legal", x: "church religious" },
        { t: "Future ideas", k: "orgspirituality.org", i: "lightbulb", h: SITE + "/future-ideas", x: "future" },
        { t: "Gifts and offerings", k: "orgspirituality.org", i: "gift", h: SITE + "/offerings", x: "shop offerings donate" },
        { t: "Join the ORG group", k: "Telegram", i: "telegram-logo", h: TELEGRAM, x: "chat talk community members events ceremonies meditation" },
        { t: "Message Tripp", k: "Telegram", i: "chat-circle-text", h: TRIPP, x: "founder ask question join membership" },
        { t: "Contact Us", k: "orgspirituality.org", i: "address-book", h: SITE + "/about#contact", x: "contact reach telegram signal tripp" },
        { t: "ORG's contacts (CONTACTS.md)", k: "GitHub", i: "address-book", h: CONTACTS, x: "email addresses org webdev gmail reach out" },
        { t: "Donate", k: "page", i: "heart", h: ROOT + "/donate/", x: "give gift support money contribution ledger thanks crypto offerings" },
        { t: "Map: every place, with pictures", k: "page", i: "map-trifold", h: ROOT + "/map/", pin: true, x: "sitemap where everything links overview thumbnails" },
        { t: "Roadmap", k: "AstroLog", i: "path", h: LOG + "/roadmap", x: "plans next future ideas direction web3 site merge" },
        { t: "Sustainability", k: "AstroLog", i: "plant", h: LOG + "/sustainability", x: "maintenance keep running tokens costs upkeep" },
        { t: "ORG on GitHub", k: "link", i: "github-logo", h: "https://github.com/Octagon-Religious-Research-Group-ORG", x: "organization code repositories" },
        { t: "Brand assets and guidelines", k: "link", i: "seal-check", h: "https://github.com/Octagon-Religious-Research-Group-ORG/brand-assets", x: "logo octagon mark favicon" },
        { t: "Three directions, living together", k: "history", i: "compass-tool", h: LOG + "/three-directions", x: "renan design directions night sanctuary prism light stone lapis proposal history credit" },
        { t: "Help decide what comes next", k: "feedback", i: "chats-circle", h: LOG + "/three-directions#what-comes-next", x: "feedback merge main site web3 new site opinion say" },
        { t: "The ledger: every public change", k: "AstroLog", i: "scroll", h: LOG + "/ledger", pin: true, x: "commits github history code record plain words" },
        { t: "drasticstatic ORG lab", k: "Christopher's lab", i: "flask", h: LAB, x: "dapp preview portfolio previews christopher" },
        { t: "The lab's changelog", k: "Christopher's lab", i: "clock-counter-clockwise", h: LAB + "changelog/", x: "lab history dapp" },
        { t: "O-R-G dApp preview", k: "Christopher's lab", i: "cube", h: DAPP, x: "web3 wallet donation preview" },
        { t: "The dApp preview's gift page", k: "preview, not live", i: "gift", h: DAPP + "give", x: "web3 wallet crypto donation preview give" },
        { t: "ORG's organization profile", k: "link", i: "identification-card", h: "https://github.com/Octagon-Religious-Research-Group-ORG", x: "profile readme github" },
      ],
    },
  };
})();
