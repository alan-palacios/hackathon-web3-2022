import { ReactComponent as Github } from 'assets/images/socials/github.svg';

const socials = [
  { href: 'https://github.com/alan-palacios/hackathon-web3-2022', icon: Github },
];

export default function Socials() {
  const getItems = () =>
    socials.map(({ href, icon: Icon }) => (
      <li key={href}>
        <a href={href} target="_blank" rel="noreferrer">
          <Icon />
        </a>
      </li>
    ));

  return <ul className=''>{getItems()}</ul>;
}
