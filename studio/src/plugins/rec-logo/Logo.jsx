// We recommend using SVGs as they have both a small footprint and scale well
const dataset = process.env.SANITY_STUDIO_API_DATASET;

export const Logo = () => {
  if (dataset === 'staging') {
    return <div>STAGING</div>;
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      clipRule="evenodd"
      viewBox="0 0 1667 1667"
    >
      <path fill="#fff" d="M0 0H1666.67V1666.67H0z"></path>
      <g>
        <g>
          <path
            fill="#ed1c24"
            d="M894.93 890.093v489.397l167.543 11.498v67.345H604.194v-67.345l168.364-11.498V902.092l122.372-11.999zm-122.372-113.6V292.926l-168.364-17.247v-67.346h458.279v67.346L894.93 292.105v472.389l-122.372 11.999z"
          ></path>
          <path d="M1062.47 873.666L604.191 918.6V793.001l458.279-44.935v125.6z"></path>
        </g>
      </g>
    </svg>
  );
};
