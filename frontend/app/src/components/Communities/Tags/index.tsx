import { ReactComponent as btc } from './svg/btc.svg';
import { ReactComponent as lightning } from './svg/lightning.svg';
// import { ReactComponent as sphinx } from './svg/sphinx.svg';
import { ReactComponent as crypto } from './svg/crypto.svg';
import { ReactComponent as music } from './svg/music.svg';
import { ReactComponent as movies } from './svg/movies.svg';
import { ReactComponent as tech } from './svg/tech.svg';
import { ReactComponent as altcoins } from './svg/altcoins.svg';
import { ReactComponent as podcast } from './svg/podcast.svg';
import { ReactComponent as fitness } from './svg/fitness.svg';
import { ReactComponent as health } from './svg/health.svg';
import { ReactComponent as education } from './svg/education.svg';
import { ReactComponent as news } from './svg/news.svg';
import { ReactComponent as travel } from './svg/travel.svg';

// 2d9be3145a5b9aa9fd4ad3c8c7c180946fbe3982

const tags: { [k: string]: any } = {
  Bitcoin: {
    icon: btc,
    color: '#FAC917'
  },
  Lightning: {
    icon: lightning,
    color: '#9f5bca'
  },
  // Sphinx: {
  //   icon: sphinx,
  //   color: '#6189ff'
  // },
  Podcast: {
    icon: podcast,
    color: '#C41D73'
  },
  Crypto: {
    icon: crypto,
    color: '#51ae95'
  },
  Music: {
    icon: music,
    color: '#81c12c'
  },
  Movies: {
    icon: movies,
    color: '#187ecf'
  },
  Tech: {
    icon: tech,
    color: '#c1501f'
  },
  Altcoins: {
    icon: altcoins,
    color: '#99a2b322'
  },
  Travel: {
    icon: travel,
    color: '#ef635a'
  },
  Fitness: {
    icon: fitness,
    color: '#2a9d05'
  },
  Health: {
    icon: health,
    color: '#0095ff'
  },
  Education: {
    icon: education,
    color: '#51ae95'
  },
  News: {
    icon: news,
    color: '#24566b'
  }
};

export default tags;
