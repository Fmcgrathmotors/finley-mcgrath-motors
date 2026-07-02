export const site = {
  name: "Finley McGrath Motors",
  tagline: "Auto Broker · Brisbane",
  phone: "0410 007 614",
  phoneHref: "tel:0410007614",
  serviceArea: "Brisbane & South East Queensland",
  serviceAreaList: ["Brisbane", "Ipswich", "Logan", "Gold Coast", "Sunshine Coast"],
  email: "hello@finleymcgrathmotors.com.au",
  hours: [
    { day: "Mon–Fri", time: "8:30am – 5:30pm" },
    { day: "Sat", time: "9:00am – 2:00pm" },
    { day: "Sun", time: "Closed" },
  ],
} as const;

// Hours keyed by JS Date#getDay() (0 = Sunday)
const HOURS_BY_DAY: Record<number, { open: number; close: number } | null> = {
  0: null, // Sunday closed
  1: { open: 8.5, close: 17.5 },
  2: { open: 8.5, close: 17.5 },
  3: { open: 8.5, close: 17.5 },
  4: { open: 8.5, close: 17.5 },
  5: { open: 8.5, close: 17.5 },
  6: { open: 9, close: 14 },
};

export function getOpenStatus(date: Date = new Date()) {
  const today = HOURS_BY_DAY[date.getDay()];
  const hoursNow = date.getHours() + date.getMinutes() / 60;

  if (today && hoursNow >= today.open && hoursNow < today.close) {
    const closeHour = Math.floor(today.close);
    const closeMin = Math.round((today.close - closeHour) * 60);
    const closeLabel = `${closeHour > 12 ? closeHour - 12 : closeHour}:${closeMin
      .toString()
      .padStart(2, "0")}${closeHour >= 12 ? "pm" : "am"}`;
    return { open: true, label: `Open · closes ${closeLabel}` };
  }

  return { open: false, label: "Closed now" };
}
