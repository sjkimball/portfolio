import { gsap } from 'gsap';

const iconTl = () => {
  const tl = gsap.timeline({ duration: 0.25 });
  tl.to('#top', {
    attr: {
      y1: '86',
    },
    stroke: '#F2F2F2',
  });
  tl.to(
    '#middle',
    {
      x: '100',
      opacity: '0',
    },
    '<',
  );
  tl.to(
    '#bottom',
    {
      attr: {
        y1: '16',
      },
      stroke: '#F2F2F2',
    },
    '<',
  );
  return tl;
};

const maskTl = () => {
  gsap.set('#black', {
    fill: '#fff',
    transformOrigin: 'center',
  });
  const tl = gsap.timeline({ duration: 0.25 });
  tl.from('#black', {
    scaleY: 0,
  });
  return tl;
};

const linksTl = () => {
  const tl = gsap.timeline({ duration: 0.5 });
  tl.set('#mainHeader__navLinks', { clearProps: true });
  tl.set('#mainHeader__navLinks a', { clearProps: true });
  tl.to('#mainHeader__navLinks', {
    display: 'flex',
    height: 'calc(100vh - 90px)',
  });
  tl.to('#mainHeader__navLinks a', {
    opacity: 1,
    stagger: 0.2,
  });
  return tl;
};

export { iconTl, maskTl, linksTl };
