
export const waLink = (phone:string, text:string) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
