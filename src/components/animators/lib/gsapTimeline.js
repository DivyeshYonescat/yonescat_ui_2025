import gsap from "gsap";

export function intro(group) {
  const tl = gsap.timeline();
  tl.from(group.rotation, { y: Math.PI, duration: 2, ease: "power3.out" })
    .from(group.position, { z: -5, duration: 2 }, 0);
}
