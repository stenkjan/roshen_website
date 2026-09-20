export type Photo = {
  slug: string;
  src: string;
  w: number;
  h: number;
};

const photo = (slug: string, w: number, h: number): Photo => ({
  slug,
  src: `/media/${slug}.webp`,
  w,
  h,
});

export const PHOTOS = {
  roshenBoulder: photo("roshen-boulder", 1600, 1066),
  pidurangalaSunsetDog: photo("pidurangala-sunset-dog", 1500, 999),
  lotusBlessing: photo("lotus-blessing", 1200, 800),
  lionRockView: photo("lion-rock-view", 688, 1280),
  thalkoteWewa: photo("thalkote-wewa", 1500, 1125),
  roshenGuestField: photo("roshen-guest-field", 1200, 900),
  villageEvening: photo("village-evening", 1100, 1100),
  sunsetGuests: photo("sunset-guests", 960, 1280),
  sunriseMeditation: photo("sunrise-meditation", 900, 1201),
  guesthouseHangout: photo("guesthouse-hangout", 960, 1280),
  wildHoney: photo("wild-honey", 820, 1093),
  rockPuppies: photo("rock-puppies", 820, 1093),
  jungleMushrooms: photo("jungle-mushrooms", 760, 1013),
  rockLizard: photo("rock-lizard", 760, 1013),
  bikeTourGuests: photo("bike-tour-guests", 1200, 1195),
  jungleBikePath: photo("jungle-bike-path", 1100, 1300),
  forestStupa: photo("forest-stupa", 1400, 919),
  villageTourFlyer: photo("village-tour-flyer", 1000, 1326),
} satisfies Record<string, Photo>;

export type Clip = {
  slug: string;
  src: string;
  w: number;
  h: number;
  /** Still used as the thumbnail in the switcher — a real frame from the clip. */
  poster: Photo;
};

const clip = (slug: string, w: number, h: number, poster: Photo): Clip => ({
  slug,
  src: `/media/${slug}.mp4`,
  w,
  h,
  poster,
});

/** Video band clips. The first one is the featured player when the page loads. */
export const CLIPS: Clip[] = [
  clip("lake-bike-ride", 576, 1024, photo("lake-bike-ride-poster", 480, 854)),
  clip("sigiriya-clip", 496, 368, photo("sigiriya-clip-poster", 480, 356)),
];

/** Photo used for each tour card, in the order the cards are rendered. */
export const TOUR_PHOTOS: Photo[] = [
  PHOTOS.pidurangalaSunsetDog,
  PHOTOS.lionRockView,
  PHOTOS.thalkoteWewa,
  PHOTOS.wildHoney,
  PHOTOS.villageEvening,
  PHOTOS.guesthouseHangout,
];

/** Gallery order — tuned so portrait and landscape shots alternate nicely. */
export const GALLERY: Photo[] = [
  PHOTOS.sunriseMeditation,
  PHOTOS.pidurangalaSunsetDog,
  PHOTOS.lionRockView,
  PHOTOS.bikeTourGuests,
  PHOTOS.lotusBlessing,
  PHOTOS.sunsetGuests,
  PHOTOS.thalkoteWewa,
  PHOTOS.jungleBikePath,
  PHOTOS.rockPuppies,
  PHOTOS.roshenGuestField,
  PHOTOS.forestStupa,
  PHOTOS.wildHoney,
  PHOTOS.roshenBoulder,
  PHOTOS.jungleMushrooms,
  PHOTOS.rockLizard,
  PHOTOS.guesthouseHangout,
  PHOTOS.villageEvening,
  PHOTOS.villageTourFlyer,
];

// Public-facing details only: first name and town, no full name and no street
// address — the exact location is something Roshen shares over WhatsApp.
export const CONTACT = {
  name: "Roshen",
  phoneDisplay: "+94 78 691 5604",
  phoneHref: "tel:+94786915604",
  whatsapp: "https://wa.me/94786915604",
  address: "Sigiriya, Sri Lanka",
  maps: "https://www.google.com/maps/search/?api=1&query=Sigiriya+Sri+Lanka",
};
