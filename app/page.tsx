import type { LucideIcon } from "lucide-react";
import {
  Activity,
  ArrowRight,
  Ban,
  Camera,
  Clock,
  Droplets,
  Dumbbell,
  ExternalLink,
  Footprints,
  HeartPulse,
  MapPin,
  Phone,
  RotateCcw,
  ShieldCheck,
  ShowerHead,
  Shirt,
  Smartphone,
  Trash2,
  User,
  UserCheck,
} from "lucide-react";

type Facility = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type Rule = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type Timing = {
  days: string;
  hours: string;
};

type SocialLink = {
  label: string;
  handle: string;
  href: string;
};

const facilities: Facility[] = [
  {
    title: "Cardio Zone",
    description:
      "Treadmills, cross trainers, spin bikes and rowers in a well-ventilated, open floor area.",
    icon: HeartPulse,
  },
  {
    title: "Strength Training",
    description:
      "Free weights, power racks, benches and plate-loaded machines for every level of lifter.",
    icon: Dumbbell,
  },
  {
    title: "Locker Rooms",
    description:
      "Clean, secure lockers with changing areas and shower facilities, cleaned throughout the day.",
    icon: ShowerHead,
  },
  {
    title: "Personal Training",
    description:
      "One-on-one coaching with structured programs, form correction and progress tracking.",
    icon: UserCheck,
  },
];

const rules: Rule[] = [
  {
    title: "Carry a Clean Towel",
    description:
      "Always bring a towel and wipe down benches, seats and handles after every use.",
    icon: Droplets,
  },
  {
    title: "Proper Gym Attire",
    description:
      "Wear clean workout clothes and non-marking indoor sports shoes. No outdoor footwear on the floor.",
    icon: Shirt,
  },
  {
    title: "Re-Rack Your Weights",
    description:
      "Return dumbbells, plates and barbells to their racks so the next member can train safely.",
    icon: RotateCcw,
  },
  {
    title: "Don't Hog Equipment",
    description:
      "Limit rest time between sets during peak hours and share machines when others are waiting.",
    icon: Ban,
  },
  {
    title: "Respect Personal Space",
    description:
      "Keep a safe distance from others while lifting and avoid interrupting someone mid-set.",
    icon: Footprints,
  },
  {
    title: "Phone Etiquette",
    description:
      "Keep calls short and phones on silent. Do not film other members without their consent.",
    icon: Smartphone,
  },
  {
    title: "Keep It Tidy",
    description:
      "Dispose of bottles and wrappers in the bins provided and keep the locker rooms clean.",
    icon: Trash2,
  },
  {
    title: "Train Safely",
    description:
      "Use spotters for heavy lifts, warm up properly and ask a trainer if you are unsure of a movement.",
    icon: ShieldCheck,
  },
];

// Edit these timings to match the real schedule.
const timings: Timing[] = [
  { days: "Monday – Saturday", hours: "5:30 AM – 10:00 PM" },
  { days: "Sunday", hours: "6:00 AM – 12:00 PM" },
];

const socialLinks: SocialLink[] = [
  {
    label: "AMAN FITNESS 2.0 on Instagram",
    handle: "Gym Instagram",
    href: "https://www.instagram.com/fitness_box2.0",
  },
  {
    label: "Owner Aman on Instagram",
    handle: "Owner Instagram",
    href: "https://www.instagram.com/_aman_kaju",
  },
];

const GYM_NAME = "AMAN FITNESS 2.0";
const OWNER_NAME = "AMAN PRADHAN";
const PHONE_DISPLAY = "06372760690";
const PHONE_HREF = "tel:06372760690";

// Google Maps place embed (built from the place ID in your link).
const MAP_EMBED_URL =
  "https://www.google.com/maps?cid=12299681020509706060&output=embed";

// Opens the full listing in Google Maps.
const MAP_OPEN_URL =
  "https://www.google.com/maps?cid=12299681020509706060";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#home"
            className="flex items-center gap-2 text-lg font-extrabold tracking-tight"
          >
            <Dumbbell className="h-6 w-6 text-amber-400" aria-hidden="true" />
            AMAN <span className="text-amber-400">FITNESS 2.0</span>
          </a>
          <ul className="hidden items-center gap-8 text-sm font-medium text-neutral-300 md:flex">
            <li>
              <a href="#facilities" className="transition hover:text-amber-400">
                Facilities
              </a>
            </li>
            <li>
              <a href="#rules" className="transition hover:text-amber-400">
                Guidelines
              </a>
            </li>
            <li>
              <a href="#contact" className="transition hover:text-amber-400">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-950"
      >
        <div
          className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-amber-500/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 py-28 text-center md:py-40">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-400">
            <Activity className="h-4 w-4" aria-hidden="true" />
            {GYM_NAME}
          </span>
          <h1 className="text-5xl font-black tracking-tight sm:text-6xl md:text-7xl">
            BUILD YOUR <span className="text-amber-400">STRENGTH</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-neutral-400">
            Premium equipment, expert coaching and a community that pushes you
            further. Build strength, endurance and discipline at {GYM_NAME}.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-amber-400 px-8 py-4 text-base font-bold text-neutral-950 shadow-lg shadow-amber-500/20 transition hover:bg-amber-300"
            >
              Visit Desk to Join
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="#facilities"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-8 py-4 text-base font-semibold text-neutral-200 transition hover:border-amber-400 hover:text-amber-400"
            >
              Explore Facilities
            </a>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section id="facilities" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">
            What We Offer
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Gym Facilities
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="group rounded-2xl border border-white/10 bg-neutral-900/60 p-6 transition hover:-translate-y-1 hover:border-amber-400/50 hover:bg-neutral-900"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400/10 text-amber-400 transition group-hover:bg-amber-400 group-hover:text-neutral-950">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                {description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Rules */}
      <section
        id="rules"
        className="border-y border-white/10 bg-neutral-900/40"
      >
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-14 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">
              Hygiene &amp; Etiquette
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Gym Guidelines &amp; Rules
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
              Help us keep {GYM_NAME} clean, safe and welcoming for every member.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {rules.map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="flex items-start gap-4 rounded-xl border border-white/10 bg-neutral-950/70 p-5"
              >
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-400/10 text-amber-400">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-400">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Owner & Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">
            Get In Touch
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Owner Details &amp; Contact
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Details card */}
          <div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-8">
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-amber-400/10 text-amber-400">
                  <User className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-neutral-500">
                    Owner Name
                  </p>
                  <p className="text-lg font-bold">{OWNER_NAME}</p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-amber-400/10 text-amber-400">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-neutral-500">
                    Phone Number
                  </p>
                  <a
                    href={PHONE_HREF}
                    className="text-lg font-bold transition hover:text-amber-400"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-amber-400/10 text-amber-400">
                  <Clock className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="w-full">
                  <p className="text-xs uppercase tracking-wider text-neutral-500">
                    Daily Timings
                  </p>
                  <dl className="mt-2 space-y-2">
                    {timings.map(({ days, hours }) => (
                      <div
                        key={days}
                        className="flex items-center justify-between gap-4 border-b border-white/5 pb-2 text-sm last:border-0"
                      >
                        <dt className="text-neutral-400">{days}</dt>
                        <dd className="font-semibold">{hours}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-amber-400/10 text-amber-400">
                  <Camera className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="w-full">
                  <p className="text-xs uppercase tracking-wider text-neutral-500">
                    Follow Us
                  </p>
                  <div className="mt-2 flex flex-wrap gap-3">
                    {socialLinks.map(({ label, handle, href }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="rounded-lg border border-white/15 px-4 py-2 text-sm font-medium transition hover:border-amber-400 hover:text-amber-400"
                      >
                        {handle}
                      </a>
                    ))}
                  </div>
                </div>
              </li>
            </ul>

            <a
              href={PHONE_HREF}
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-amber-400 px-6 py-3 font-bold text-neutral-950 transition hover:bg-amber-300"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call Now
            </a>
          </div>

          {/* Map card */}
          <div className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/60">
            <div className="flex items-center justify-between gap-2 border-b border-white/10 px-6 py-4">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-amber-400" aria-hidden="true" />
                <h3 className="font-semibold">Find Us on the Map</h3>
              </div>
              <a
                href={MAP_OPEN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-amber-400 transition hover:text-amber-300"
              >
                Open in Maps
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <iframe
              title={`${GYM_NAME} location map`}
              src={MAP_EMBED_URL}
              className="min-h-[360px] w-full flex-1 border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

     {/* Footer */}
      <footer className="border-t border-white/10 bg-neutral-950 py-8 text-center text-xs text-neutral-600">
        <p>&copy; 2026 {GYM_NAME}. Setup Complete.</p>
      </footer>
    </main>
  );
}