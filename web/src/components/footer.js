import React from 'react';

import './footer.css';

const linkedInIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    id="icon-linkedin"
  >
    <g clipPath="url(#clip0_2767_69804)">
      <path
        d="M59.4286 0H4.55714C2.04286 0 0 2.07143 0 4.61429V59.3857C0 61.9286 2.04286 64 4.55714 64H59.4286C61.9429 64 64 61.9286 64 59.3857V4.61429C64 2.07143 61.9429 0 59.4286 0ZM19.3429 54.8571H9.85714V24.3143H19.3571V54.8571H19.3429ZM14.6 20.1429C11.5571 20.1429 9.1 17.6714 9.1 14.6429C9.1 11.6143 11.5571 9.14286 14.6 9.14286C17.6429 9.14286 20.1 11.6143 20.1 14.6429C20.1 17.6714 17.6429 20.1429 14.6 20.1429ZM54.9 54.8571H45.4143V40C45.4143 36.4571 45.3429 31.9 40.4857 31.9C35.6286 31.9 34.7857 35.7571 34.7857 39.7429V54.8571H25.3V24.3143H34.4V28.4857H34.5286C35.8 26.0857 38.9 23.5571 43.5143 23.5571C53.1143 23.5571 54.9 29.8857 54.9 38.1143V54.8571Z"
        className="socialLink__icon"
      />
    </g>
    <defs>
      <clipPath id="clip0_2767_69804">
        <rect width="64" height="64" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
const githubIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="icon-github">
    <g clipPath="url(#clip0_2767_69807)">
      <path
        d="M57.1429 0H6.85714C3.07143 0 0 3.07143 0 6.85714V57.1429C0 60.9286 3.07143 64 6.85714 64H57.1429C60.9286 64 64 60.9286 64 57.1429V6.85714C64 3.07143 60.9286 0 57.1429 0ZM39.6529 54.9514C38.4457 55.1671 38 54.42 38 53.8014C38 53.0257 38.0286 49.0586 38.0286 45.8529C38.0286 43.6114 37.2814 42.1886 36.4043 41.44C41.7214 40.8514 47.3271 40.1171 47.3271 30.9343C47.3271 28.3186 46.3929 27.01 44.87 25.3286C45.1143 24.71 45.9329 22.1671 44.6257 18.8614C42.6286 18.2429 38.0571 21.4343 38.0571 21.4343C36.16 20.9029 34.1043 20.63 32.0786 20.63C30.0529 20.63 27.9971 20.9029 26.1 21.4343C26.1 21.4343 21.53 18.2443 19.5314 18.8614C18.2229 22.1529 19.0286 24.6971 19.2871 25.3286C17.7643 27.01 17.0457 28.3186 17.0457 30.9343C17.0457 40.0757 22.4071 40.8514 27.7243 41.44C27.0343 42.0586 26.4157 43.1214 26.2014 44.6457C24.8357 45.2643 21.3443 46.3271 19.26 42.6486C17.9514 40.3771 15.5957 40.1914 15.5957 40.1914C13.2671 40.1629 15.4371 41.6571 15.4371 41.6571C16.99 42.3757 18.0814 45.1357 18.0814 45.1357C19.4757 49.4043 26.1443 47.9671 26.1443 47.9671C26.1443 49.9643 26.1729 53.2129 26.1729 53.8029C26.1729 54.3929 25.7414 55.1686 24.52 54.9529C15.0343 51.7771 8.39429 42.7514 8.39429 32.2014C8.39429 19.0071 18.4843 8.99 31.6771 8.99C44.87 8.99 55.5643 19.0071 55.5643 32.2014C55.5786 42.75 49.14 51.7914 39.6543 54.9529L39.6529 54.9514ZM25.6 46.0857C25.3286 46.1429 25.0714 46.0286 25.0429 45.8429C25.0143 45.6286 25.2 45.4429 25.4714 45.3857C25.7429 45.3571 26 45.4714 26.0286 45.6571C26.0714 45.8429 25.8857 46.0286 25.6 46.0857ZM24.2429 45.9571C24.2429 46.1429 24.0286 46.3 23.7429 46.3C23.4286 46.3286 23.2143 46.1714 23.2143 45.9571C23.2143 45.7714 23.4286 45.6143 23.7143 45.6143C23.9857 45.5857 24.2429 45.7429 24.2429 45.9571ZM22.2857 45.8C22.2286 45.9857 21.9429 46.0714 21.7 45.9857C21.4286 45.9286 21.2429 45.7143 21.3 45.5286C21.3571 45.3429 21.6429 45.2571 21.8857 45.3143C22.1714 45.4 22.3571 45.6143 22.2857 45.8ZM20.5286 45.0286C20.4 45.1857 20.1286 45.1571 19.9143 44.9429C19.7 44.7571 19.6429 44.4857 19.7857 44.3571C19.9143 44.2 20.1857 44.2286 20.4 44.4429C20.5857 44.6286 20.6571 44.9143 20.5286 45.0286ZM19.2286 43.7286C19.1 43.8143 18.8571 43.7286 18.7 43.5143C18.5429 43.3 18.5429 43.0571 18.7 42.9571C18.8571 42.8286 19.1 42.9286 19.2286 43.1429C19.3857 43.3571 19.3857 43.6143 19.2286 43.7286ZM18.3 42.3429C18.1714 42.4714 17.9571 42.4 17.8 42.2571C17.6429 42.0714 17.6143 41.8571 17.7429 41.7571C17.8714 41.6286 18.0857 41.7 18.2429 41.8429C18.4 42.0286 18.4286 42.2429 18.3 42.3429ZM17.3429 41.2857C17.2857 41.4143 17.1 41.4429 16.9429 41.3429C16.7571 41.2571 16.6714 41.1 16.7286 40.9714C16.7857 40.8857 16.9429 40.8429 17.1286 40.9143C17.3143 41.0143 17.4 41.1714 17.3429 41.2857Z"
        className="socialLink__icon"
      />
    </g>
    <defs>
      <clipPath id="clip0_2767_69807">
        <rect width="64" height="64" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
const behanceIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="icon-behance">
    <g clipPath="url(#clip0_2767_69810)">
      <path
        d="M26.6343 37.2214C26.6343 39.9843 24.63 40.8571 22.1686 40.8571H15.7129V33.2857H22.2971C24.96 33.3 26.6343 34.4014 26.6343 37.2214ZM25.5429 25.5714C25.5429 23.0314 23.5771 22.4286 21.3957 22.4286H15.7129V28.8571H21.84C24.0071 28.8571 25.5429 27.91 25.5429 25.5714ZM44.4414 28.9C41.8271 28.9 40.0843 30.5286 39.9129 33.1429H48.7986C48.5557 30.5 47.1843 28.9 44.4414 28.9ZM64 6.85714V57.1429C64 60.9286 60.9286 64 57.1429 64H6.85714C3.07143 64 0 60.9286 0 57.1429V6.85714C0 3.07143 3.07143 0 6.85714 0H57.1429C60.9286 0 64 3.07143 64 6.85714ZM38.8571 21.8571H50V19.1429H38.8571V21.8571ZM32.6714 37.5857C32.6714 34.1429 31.0429 31.1714 27.6714 30.2143C30.1286 29.0429 31.4143 27.6857 31.4143 24.9286C31.4143 19.4714 27.3429 18.1429 22.6429 18.1429H9.71429V45.5714H23.0143C28 45.5429 32.6714 43.1571 32.6714 37.5857ZM54.17 35.5543C54.17 29.7514 50.7671 24.9086 44.6257 24.9086C38.4843 24.9086 34.5871 29.3986 34.5871 35.3C34.5871 41.2014 38.4414 45.6071 44.6257 45.6071C49.3129 45.6071 52.3486 43.5029 53.8171 38.9986H49.0586C48.5357 40.6786 46.4329 41.5543 44.7943 41.5543C41.6314 41.5543 39.98 39.7043 39.98 36.57H54.1271C54.1414 36.2457 54.17 35.8929 54.17 35.5529V35.5543Z"
        className="socialLink__icon"
      />
    </g>
    <defs>
      <clipPath id="clip0_2767_69810">
        <rect width="64" height="64" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

function chooseIcon(string) {
  let el = null;
  switch (string) {
    case 'behance':
      el = behanceIcon;
      break;
    case 'github':
      el = githubIcon;
      break;
    case 'linkedin':
      el = linkedInIcon;
      break;
    default:
      console.log('Whoops! Nothing matched.');
  }
  return el;
}

function createLinks(object) {
  return Object.keys(object).map((key, i) => {
    return (
      <li key={i} className="socialLink">
        <a href={object[key]} target="_blank" rel="noopener noreferrer">
          {chooseIcon(key)}
        </a>
      </li>
    );
  });
}

const Footer = (props) => {
  const { companyInfo } = props;
  const companyName = companyInfo.companyName;
  const links = companyInfo.socialMediaAccounts;
  const preppedLinks = createLinks(links);

  return (
    <footer id="mainFooter" className="footer">
      <ul className="footer__links">{preppedLinks}</ul>
      <small className="footer__copyright">© {companyName}</small>
    </footer>
  );
};

export default Footer;
