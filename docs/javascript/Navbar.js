const navbar = document.getElementById("navbar");

navbar.innerHTML = `
  <header id="siteHeader" class="fixed inset-x-0 top-0 z-50">
    <div id="navContainer" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-300">
      <div id="navBar" class="relative mt-3 flex items-center justify-between rounded-2xl px-3 py-2.5 transition-all duration-300">
        <a href="index.html" class="inline-flex items-center gap-3 shrink-0">
          <span id="brandMark" class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ring-1">
            <i class="fa-solid fa-wrench"></i>
          </span>
          <span class="leading-tight font-semibold">
            <span id="brandText" class="block -mb-0.5 text-base sm:text-lg font-extrabold tracking-tight">Washer Repair</span>
            <span id="brandSub" class=" text-xs block  opacity-75">Fast Clean Reliable</span>
          </span>
        </a>

        <nav class="hidden md:block">
          <ul class="flex items-center justify-center gap-3 lg:gap-6 text-sm font-semibold">
            <li><a class="navLink transition" href="index.html">Home</a></li>
            <li><a class="navLink transition" href="about.html">About</a></li>

            <li class="relative">
              <button
                id="servicesTrigger"
                type="button"
                aria-haspopup="true"
                aria-expanded="false"
                class="dropTrigger inline-flex items-center gap-2 transition"
              >
                Services
                <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full ring-1" id="dropDot">
                  <i id="dropIcon" class="fa-solid fa-chevron-down text-xs"></i>
                </span>
              </button>

              <div
                id="servicesMenu"
                class="pointer-events-none absolute left-1/2 top-[calc(100%+12px)] w-[340px] -translate-x-1/2 opacity-0 translate-y-2 transition-all duration-200"
                role="menu"
                aria-label="Services menu"
              >
                <div id="servicesMenuBox" class="rounded-2xl border p-3 shadow-2xl">
                  <a href="washer-not-spinning.html" class="menuItem group flex items-start gap-3 rounded-2xl p-3 transition">
                    
                    <div class="flex-1">
                      <p class="text-sm font-semibold">Washer not spinning</p>
                      <p class="mt-1 text-xs opacity-75">Motor, belt & lid-switch checks</p>
                    </div>
                    <span class="menuArrow flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ring-1">
                      <i class="fa-solid fa-arrow-right text-xs"></i>
                    </span>
                  </a>

                  <a href="washer-not-draining.html" class="menuItem group flex items-start gap-3 rounded-2xl p-3 transition">
                   
                    <div class="flex-1">
                      <p class="text-sm font-semibold">Washer not draining</p>
                      <p class="mt-1 text-xs opacity-75">Pump, hose & filter checks</p>
                    </div>
                    <span class="menuArrow flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ring-1">
                      <i class="fa-solid fa-arrow-right text-xs"></i>
                    </span>
                  </a>

                  <a href="washer-wont-start.html" class="menuItem group flex items-start gap-3 rounded-2xl p-3 transition">
                  
                    <div class="flex-1">
                      <p class="text-sm font-semibold">Washer won’t start</p>
                      <p class="mt-1 text-xs opacity-75">Power, lock & control checks</p>
                    </div>
                    <span class="menuArrow flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ring-1">
                      <i class="fa-solid fa-arrow-right text-xs"></i>
                    </span>
                  </a>

                  <a href="leaking-washer.html" class="menuItem group flex items-start gap-3 rounded-2xl p-3 transition">
                  
                    <div class="flex-1">
                      <p class="text-sm font-semibold">Leaking washer</p>
                      <p class="mt-1 text-xs opacity-75">Hose, seal & overflow checks</p>
                    </div>
                    <span class="menuArrow flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ring-1">
                      <i class="fa-solid fa-arrow-right text-xs"></i>
                    </span>
                  </a>

                  <div class="mt-2 border-t border-zinc-200 pt-2">
                    <a href="local-washer-repair.html" class="menuItem group flex items-center justify-between gap-3 rounded-2xl p-3 transition">
                      <span class="inline-flex items-center gap-3">
                        <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#222EC5]/10 ring-1 ring-[#222EC5]/15">
                          <i class="fa-solid text-xs fa-location-dot text-[#222EC5]"></i>
                        </span>
                        <span class="text-sm font-semibold">Local washer repair</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </li>

            <li><a class="navLink transition" href="faq.html">FAQ</a></li>
            <li><a class="navLink transition" href="contact.html">Contact</a></li>
          </ul>
        </nav>

        <div class="hidden md:flex items-center gap-2 sm:gap-3 shrink-0">
          <a href="contact.html"
            id="ctaBtn"
            class="inline-flex items-center gap-2 pr-4 pl-1.5 py-1.5 text-sm font-semibold transition hover:-translate-y-0.5 active:translate-y-0"
          >
            <span id="ctaIcon" class="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl ring-1">
              <i class="fa-solid fa-paper-plane"></i>
            </span>
            <span class="hidden sm:inline">Book a Visit</span>
          </a>
        </div>

        <button
          id="menuBtnMobile"
          type="button"
          aria-label="Open menu"
          aria-expanded="false"
          class="group inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl transition active:scale-[0.98] md:hidden"
        >
          <i class="fa-solid fa-bars text-base"></i>
        </button>
      </div>
    </div>
  </header>

  <div id="menuOverlay" class="fixed inset-0 z-[60] hidden bg-black/40 backdrop-blur-sm opacity-0 transition-opacity duration-300"></div>

  <aside
    id="menuPanel"
    class="fixed right-0 top-0 z-[70] h-full w-[88%] max-w-sm translate-x-full bg-white shadow-2xl shadow-black/10 ring-1 ring-black/5 transition-transform duration-300 ease-out overflow-y-auto"
    aria-hidden="true"
  >
    <div class="flex items-center justify-between px-5 py-5">
      <a href="index.html" class="inline-flex items-center gap-3">
        <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#222EC5]/10 ring-1 ring-[#222EC5]/15 text-[#222EC5]">
          <i class="fa-solid fa-wrench"></i>
        </span>
        <span class="text-base font-extrabold tracking-tight text-[#222EC5]">Washer Repair</span>
      </a>

      <button
        id="closeBtn"
        type="button"
        aria-label="Close menu"
        class="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#222EC5]/10 text-[#222EC5] ring-1 ring-[#222EC5]/15 transition hover:bg-[#222EC5]/15 active:scale-[0.98]"
      >
        <i class="fa-solid fa-xmark text-lg"></i>
      </button>
    </div>

    <div class="px-5">
     

      <nav class="mt-5">
        <ul class="space-y-2">
          <li>
            <a class="mLink flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-[#1A237E] ring-1 ring-[#222EC5]/15 hover:bg-[#1A237E]/5 transition"
              href="index.html">
              <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#222EC5]/10 text-[#222EC5] ring-1 ring-[#222EC5]/15">
                <i class="fa-solid fa-house"></i>
              </span>
              Home
            </a>
          </li>

          <li>
            <a class="mLink flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-[#1A237E] ring-1 ring-[#222EC5]/15 hover:bg-[#1A237E]/5 transition"
              href="about.html">
              <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#222EC5]/10 text-[#222EC5] ring-1 ring-[#222EC5]/15">
                <i class="fa-solid fa-circle-info"></i>
              </span>
              About
            </a>
          </li>

          <li class="rounded-2xl ring-1 ring-[#222EC5]/15 overflow-hidden">
            <button
              id="mServicesTrigger"
              type="button"
              aria-expanded="false"
              class="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm font-semibold text-[#1A237E] hover:bg-[#1A237E]/5 transition"
            >
              <span class="inline-flex items-center gap-3">
                <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#222EC5]/10 text-[#222EC5] ring-1 ring-[#222EC5]/15">
                  <i class="fa-solid fa-wrench"></i>
                </span>
                Services
              </span>
              <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white text-[#222EC5] ring-1 ring-[#222EC5]/15">
                <i id="mServicesChevron" class="fa-solid fa-chevron-down"></i>
              </span>
            </button>

            <div id="mServicesPanel" class="max-h-0 overflow-hidden transition-[max-height] duration-300 ease-out bg-white">
              <div class="p-3 space-y-2">
                <a class="mSub flex items-center justify-between gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-[#1A237E] bg-[#222EC5]/5 hover:bg-[#222EC5]/10 transition"
                  href="washer-not-spinning.html">
                  <span class="inline-flex items-center gap-3">
                    <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#222EC5]/10 ring-1 ring-[#222EC5]/15">
                      <i class="fa-solid text-xs fa-rotate text-[#222EC5]"></i>
                    </span>
                    Washer not spinning
                  </span>
                  <i class="fa-solid fa-arrow-right text-xs opacity-70"></i>
                </a>

                <a class="mSub flex items-center justify-between gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-[#1A237E] bg-[#222EC5]/5 hover:bg-[#222EC5]/10 transition"
                  href="washer-not-draining.html">
                  <span class="inline-flex items-center gap-3">
                    <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#222EC5]/10 ring-1 ring-[#222EC5]/15">
                      <i class="fa-solid text-xs fa-sliders text-[#222EC5]"></i>
                    </span>
                    Washer not draining
                  </span>
                  <i class="fa-solid fa-arrow-right text-xs opacity-70"></i>
                </a>

                <a class="mSub flex items-center justify-between gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-[#1A237E] bg-[#222EC5]/5 hover:bg-[#222EC5]/10 transition"
                  href="washer-wont-start.html">
                  <span class="inline-flex items-center gap-3">
                    <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#222EC5]/10 ring-1 ring-[#222EC5]/15">
                      <i class="fa-solid text-xs fa-tag text-[#222EC5]"></i>
                    </span>
                    Washer won’t start
                  </span>
                  <i class="fa-solid fa-arrow-right text-xs opacity-70"></i>
                </a>

                <a class="mSub flex items-center justify-between gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-[#1A237E] bg-[#222EC5]/5 hover:bg-[#222EC5]/10 transition"
                  href="leaking-washer.html">
                  <span class="inline-flex items-center gap-3">
                    <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#222EC5]/10 ring-1 ring-[#222EC5]/15">
                      <i class="fa-solid text-xs fa-house-chimney text-[#222EC5]"></i>
                    </span>
                    Leaking washer
                  </span>
                  <i class="fa-solid fa-arrow-right text-xs opacity-70"></i>
                </a>

                <a class="mSub flex items-center justify-between gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-[#1A237E] bg-[#222EC5]/5 hover:bg-[#222EC5]/10 transition"
                  href="local-washer-repair.html">
                  <span class="inline-flex items-center gap-3">
                    <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#222EC5]/10 ring-1 ring-[#222EC5]/15">
                      <i class="fa-solid text-xs fa-location-dot text-[#222EC5]"></i>
                    </span>
                    Local washer repair
                  </span>
                  <i class="fa-solid fa-arrow-right text-xs opacity-70"></i>
                </a>
              </div>
            </div>
          </li>

          <li>
            <a class="mLink flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-[#1A237E] ring-1 ring-[#222EC5]/15 hover:bg-[#1A237E]/5 transition"
              href="faq.html">
              <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#222EC5]/10 text-[#222EC5] ring-1 ring-[#222EC5]/15">
                <i class="fa-solid fa-circle-question"></i>
              </span>
              FAQ
            </a>
          </li>

          <li>
            <a class="mLink flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-[#1A237E] ring-1 ring-[#222EC5]/15 hover:bg-[#1A237E]/5 transition"
              href="contact.html">
              <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#222EC5]/10 text-[#222EC5] ring-1 ring-[#222EC5]/15">
                <i class="fa-solid fa-envelope"></i>
              </span>
              Contact
            </a>
          </li>
        </ul>
      </nav>

       <div class="rounded-2xl border border-[#222EC5]/15 bg-[#222EC5]/5 p-4 mt-5">
        <div class="flex items-start gap-3">
          <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#222EC5]/10 text-[#222EC5] ring-1 ring-[#222EC5]/15">
            <i class="fa-solid fa-wrench"></i>
          </span>
          <div class="flex-1">
            <p class="text-sm font-extrabold text-[#222EC5]">Fast diagnosis, clean repair</p>
            <p class="mt-1 text-sm text-[#222EC5]/70">Choose a washer service or book a visit.</p>
          </div>
        </div>

        <div class="mt-4 grid gap-2">
          <a href="contact.html"
            class="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#222EC5] p-3 text-sm font-extrabold text-white shadow-lg shadow-black/10 transition hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-[#222EC5]/30">
            Book a Visit
          </a>

          <a href="index.html#services"
            class="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-[#222EC5]/15 bg-white p-3 text-sm font-extrabold text-[#222EC5] shadow-sm transition hover:bg-[#222EC5]/5 focus:outline-none focus:ring-2 focus:ring-[#222EC5]/20">
            View Services
          </a>
        </div>
      </div>

      <div class="h-8"></div>
    </div>
  </aside>
`;

const navBar = document.getElementById("navBar");
const navContainer = document.getElementById("navContainer");
const brandText = document.getElementById("brandText");
const brandSub = document.getElementById("brandSub");
const brandMark = document.getElementById("brandMark");
const navLinks = Array.from(document.querySelectorAll(".navLink"));
const servicesTrigger = document.getElementById("servicesTrigger");
const servicesMenu = document.getElementById("servicesMenu");
const servicesMenuBox = document.getElementById("servicesMenuBox");
const dropDot = document.getElementById("dropDot");
const dropIcon = document.getElementById("dropIcon");
const ctaBtn = document.getElementById("ctaBtn");
const ctaIcon = document.getElementById("ctaIcon");
const menuBtn = document.getElementById("menuBtnMobile");

const overlay = document.getElementById("menuOverlay");
const panel = document.getElementById("menuPanel");
const closeBtn = document.getElementById("closeBtn");

const mServicesTrigger = document.getElementById("mServicesTrigger");
const mServicesPanel = document.getElementById("mServicesPanel");
const mServicesChevron = document.getElementById("mServicesChevron");

const lockScroll = () => {
  document.documentElement.style.overflow = "hidden";
  document.body.style.overflow = "hidden";
};

const unlockScroll = () => {
  document.documentElement.style.overflow = "";
  document.body.style.overflow = "";
};

const setMenuClosed = (immediate = false) => {
  if (!overlay || !panel) return;
  if (immediate) {
    overlay.style.transition = "none";
    panel.style.transition = "none";
  }
  overlay.classList.add("hidden");
  overlay.classList.add("opacity-0");
  overlay.classList.remove("opacity-100");
  panel.classList.add("translate-x-full");
  panel.classList.remove("translate-x-0");
  panel.style.transform = "translateX(100%)";
  panel.setAttribute("aria-hidden", "true");
  if (menuBtn) menuBtn.setAttribute("aria-expanded", "false");
  unlockScroll();
  if (immediate) {
    overlay.offsetHeight;
    panel.offsetHeight;
    overlay.style.transition = "";
    panel.style.transition = "";
  }
};

const openMenu = () => {
  if (!overlay || !panel) return;
  overlay.classList.remove("hidden");
  lockScroll();
  panel.setAttribute("aria-hidden", "false");
  if (menuBtn) menuBtn.setAttribute("aria-expanded", "true");
  requestAnimationFrame(() => {
    overlay.classList.remove("opacity-0");
    overlay.classList.add("opacity-100");
    panel.classList.remove("translate-x-full");
    panel.classList.add("translate-x-0");
    panel.style.transform = "translateX(0)";
  });
};

const closeMenu = () => {
  if (!overlay || !panel) return;
  overlay.classList.add("opacity-0");
  overlay.classList.remove("opacity-100");
  panel.classList.add("translate-x-full");
  panel.classList.remove("translate-x-0");
  panel.style.transform = "translateX(100%)";
  panel.setAttribute("aria-hidden", "true");
  if (menuBtn) menuBtn.setAttribute("aria-expanded", "false");
  unlockScroll();
  setTimeout(() => overlay.classList.add("hidden"), 300);
};

if (menuBtn) menuBtn.addEventListener("click", openMenu);
if (closeBtn) closeBtn.addEventListener("click", closeMenu);
if (overlay) overlay.addEventListener("click", closeMenu);

const setDropdownClosed = () => {
  if (!servicesMenu || !servicesTrigger) return;
  servicesTrigger.setAttribute("aria-expanded", "false");
  servicesMenu.classList.add("pointer-events-none", "opacity-0", "translate-y-2");
  servicesMenu.classList.remove("pointer-events-auto", "opacity-100", "translate-y-0");
};

const setDropdownOpen = () => {
  if (!servicesMenu || !servicesTrigger) return;
  servicesTrigger.setAttribute("aria-expanded", "true");
  servicesMenu.classList.remove("pointer-events-none", "opacity-0", "translate-y-2");
  servicesMenu.classList.add("pointer-events-auto", "opacity-100", "translate-y-0");
};

const toggleDropdown = () => {
  if (!servicesTrigger) return;
  const expanded = servicesTrigger.getAttribute("aria-expanded") === "true";
  if (expanded) setDropdownClosed();
  else setDropdownOpen();
};

const setDropdownStyle = (mode) => {
  if (!servicesMenuBox || !dropDot || !dropIcon) return;

  const items = Array.from(document.querySelectorAll(".menuItem"));
  const icons = Array.from(document.querySelectorAll(".menuIcon"));
  const arrows = Array.from(document.querySelectorAll(".menuArrow"));

  if (mode === "top") {
    servicesMenuBox.className = "rounded-2xl border border-white/10 bg-[#222EC5]/95 p-3 shadow-2xl shadow-black/30 backdrop-blur";
    dropDot.className = "flex h-6 w-6 shrink-0 items-center justify-center rounded-full ring-1 ring-white/15 bg-white/10 text-white/80";
    dropIcon.className = "fa-solid fa-chevron-down text-xs text-white/80";

    items.forEach((x) => (x.className = "menuItem group flex items-start gap-3 rounded-2xl p-3 transition text-white/90 hover:bg-white/10"));
    icons.forEach((x) => (x.className = "menuIcon flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15 text-[#E8ECFF]"));
    arrows.forEach((x) => (x.className = "menuArrow flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15 text-white/90"));
  } else {
    servicesMenuBox.className = "rounded-2xl border border-black/10 bg-white p-3 shadow-2xl shadow-black/10";
    dropDot.className = "flex h-6 w-6 shrink-0 items-center justify-center rounded-full ring-1 ring-[#1A237E]/10 bg-[#1A237E]/5 text-[#1A237E]/80";
    dropIcon.className = "fa-solid fa-chevron-down text-xs text-[#1A237E]/80";

    items.forEach((x) => (x.className = "menuItem group flex items-start gap-3 rounded-2xl p-3 transition text-[#1A237E] hover:bg-[#1A237E]/5"));
    icons.forEach((x) => (x.className = "menuIcon flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#222EC5]/10 ring-1 ring-[#222EC5]/15 text-[#222EC5]"));
    arrows.forEach((x) => (x.className = "menuArrow flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#222EC5]/10 ring-1 ring-[#222EC5]/15 text-[#222EC5]"));
  }
};

const setTopStyle = () => {
  if (navContainer) navContainer.className = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-300";
  if (navBar) navBar.className = "relative mt-3 flex items-center justify-between rounded-2xl px-3 py-2.5 transition-all duration-300 bg-white/85 ring-1 ring-black/10 shadow-lg shadow-black/5 backdrop-blur";
  if (brandText) brandText.className = "block -mb-0.5 text-base sm:text-lg font-extrabold tracking-tight text-[#222EC5]";
  if (brandSub) brandSub.className = "hidden sm:block text-xs text-[#222EC5]/60";
  if (brandMark) brandMark.className = "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ring-1 ring-[#222EC5]/15 bg-[#222EC5]/10 text-[#222EC5]";
  navLinks.forEach((a) => (a.className = "navLink inline-flex items-center gap-1 text-[#1A237E]/80 hover:text-[#1A237E] transition"));
  if (servicesTrigger) servicesTrigger.className = "dropTrigger inline-flex items-center gap-2 text-[#1A237E]/80 hover:text-[#1A237E] transition";
  if (ctaBtn) ctaBtn.className = "inline-flex items-center gap-2 rounded-2xl bg-[#222EC5] pr-4 pl-1.5 py-1.5 text-sm font-semibold text-white shadow-lg shadow-black/10 transition hover:-translate-y-0.5 active:translate-y-0";
  if (ctaIcon) ctaIcon.className = "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-white/20 text-white ring-1 ring-white/20";
  if (menuBtn) menuBtn.className = "group inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#222EC5]/10 text-[#222EC5] ring-1 ring-[#222EC5]/15 transition hover:bg-[#222EC5]/15 active:scale-[0.98] md:hidden";
  setDropdownStyle("scrolled");
};

const setScrolledStyle = () => {
  if (navContainer) navContainer.className = "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 transition-all duration-300";
  if (navBar) navBar.className = "relative mt-3 flex items-center justify-between rounded-2xl px-3 py-2.5 transition-all duration-300 bg-white/85 ring-1 ring-black/10 shadow-lg shadow-black/5 backdrop-blur";
  if (brandText) brandText.className = "block -mb-0.5 text-base sm:text-lg font-extrabold tracking-tight text-[#222EC5]";
  if (brandSub) brandSub.className = "hidden sm:block text-xs text-[#222EC5]/60";
  if (brandMark) brandMark.className = "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ring-1 ring-[#222EC5]/15 bg-[#222EC5]/10 text-[#222EC5]";
  navLinks.forEach((a) => (a.className = "navLink inline-flex items-center gap-1 text-[#1A237E]/80 hover:text-[#1A237E] transition"));
  if (servicesTrigger) servicesTrigger.className = "dropTrigger inline-flex items-center gap-2 text-[#1A237E]/80 hover:text-[#1A237E] transition";
  if (ctaBtn) ctaBtn.className = "inline-flex items-center gap-2 rounded-2xl bg-[#222EC5] pr-4 pl-1.5 py-1.5 text-sm font-semibold text-white shadow-lg shadow-black/10 transition hover:-translate-y-0.5 active:translate-y-0";
  if (ctaIcon) ctaIcon.className = "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-white/20 text-white ring-1 ring-white/20";
  if (menuBtn) menuBtn.className = "group inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#222EC5]/10 text-[#222EC5] ring-1 ring-[#222EC5]/15 transition hover:bg-[#222EC5]/15 active:scale-[0.98] md:hidden";
  setDropdownStyle("scrolled");
};

const applyNavState = () => {
  const atTop = window.scrollY <= 8;
  if (atTop) setTopStyle();
  else setScrolledStyle();
};

let ticking = false;
const onScroll = () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    applyNavState();
    ticking = false;
  });
};

window.addEventListener("scroll", onScroll, { passive: true });
applyNavState();

if (servicesTrigger) {
  servicesTrigger.addEventListener("click", (e) => {
    e.preventDefault();
    toggleDropdown();
    applyNavState();
  });

  document.addEventListener("click", (e) => {
    const t = e.target;
    if (!servicesMenu || !servicesTrigger) return;
    if (servicesTrigger.contains(t) || servicesMenu.contains(t)) return;
    setDropdownClosed();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setDropdownClosed();
  });

  setDropdownClosed();
}

if (mServicesTrigger && mServicesPanel) {
  mServicesTrigger.setAttribute("aria-expanded", "false");
  mServicesPanel.style.maxHeight = "0px";
  mServicesPanel.dataset.open = "0";

  mServicesTrigger.addEventListener("click", () => {
    const open = mServicesPanel.dataset.open === "1";
    if (open) {
      mServicesTrigger.setAttribute("aria-expanded", "false");
      mServicesPanel.dataset.open = "0";
      mServicesPanel.style.maxHeight = "0px";
      if (mServicesChevron) mServicesChevron.className = "fa-solid fa-chevron-down";
    } else {
      mServicesTrigger.setAttribute("aria-expanded", "true");
      mServicesPanel.dataset.open = "1";
      mServicesPanel.style.maxHeight = mServicesPanel.scrollHeight + "px";
      if (mServicesChevron) mServicesChevron.className = "fa-solid fa-chevron-up";
    }
  });

  window.addEventListener("resize", () => {
    if (mServicesPanel.dataset.open === "1") {
      mServicesPanel.style.maxHeight = mServicesPanel.scrollHeight + "px";
    }
  });
}

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});

setMenuClosed(true);
