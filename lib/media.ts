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
} satisfies Record<string, Photo>;

export const VIDEO = { src: "/media/sigiriya-clip.mp4", w: 496, h: 368 };

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
  PHOTOS.lotusBlessing,
  PHOTOS.sunsetGuests,
  PHOTOS.thalkoteWewa,
  PHOTOS.rockPuppies,
  PHOTOS.roshenGuestField,
  PHOTOS.wildHoney,
  PHOTOS.roshenBoulder,
  PHOTOS.jungleMushrooms,
  PHOTOS.rockLizard,
  PHOTOS.guesthouseHangout,
  PHOTOS.villageEvening,
];

export const CONTACT = {
  name: "Menantheus Roshen Muduwantha",
  phoneDisplay: "+94 78 691 5604",
  phoneHref: "tel:+94786915604",
  whatsapp: "https://wa.me/94786915604",
  address: "Kashyapagama, Pidurangala, Sigiriya, Sri Lanka",
  maps: "https://www.google.com/maps/search/?api=1&query=Pidurangala+Kashyapagama+Sigiriya+Sri+Lanka",
};
