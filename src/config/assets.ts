import { Assets } from '../types';

const pub = process.env.PUBLIC_URL;

export const assets: Assets = {
  logo: `${pub}/img/logo.jpg`,
  gallery: [
    {
      largeImage: `${pub}/img/portfolio/01-large.jpg`,
      smallImage: `${pub}/img/portfolio/01-small.jpg`
    },
    {
      largeImage: `${pub}/img/portfolio/02-large.jpg`,
      smallImage: `${pub}/img/portfolio/02-small.jpg`
    },
    {
      largeImage: `${pub}/img/portfolio/03-large.jpg`,
      smallImage: `${pub}/img/portfolio/03-small.jpg`
    },
    {
      largeImage: `${pub}/img/portfolio/04-large.jpg`,
      smallImage: `${pub}/img/portfolio/04-small.jpg`
    },
    {
      largeImage: `${pub}/img/portfolio/05-large.jpg`,
      smallImage: `${pub}/img/portfolio/05-small.jpg`
    },
    {
      largeImage: `${pub}/img/portfolio/06-large.jpg`,
      smallImage: `${pub}/img/portfolio/06-small.jpg`
    },
    {
      largeImage: `${pub}/img/portfolio/07-large.jpg`,
      smallImage: `${pub}/img/portfolio/07-small.jpg`
    },
    {
      largeImage: `${pub}/img/portfolio/08-large.jpg`,
      smallImage: `${pub}/img/portfolio/08-small.jpg`
    },
    {
      largeImage: `${pub}/img/portfolio/09-large.jpg`,
      smallImage: `${pub}/img/portfolio/09-small.jpg`
    }
  ],
  testimonials: [
    { img: `${pub}/img/testimonials/01.jpg` },
    { img: `${pub}/img/testimonials/02.jpg` },
    { img: `${pub}/img/testimonials/03.jpg` },
    { img: `${pub}/img/testimonials/04.jpg` },
    { img: `${pub}/img/testimonials/05.jpg` },
    { img: `${pub}/img/testimonials/06.jpg` }
  ],
  team: [
    { img: `${pub}/img/team/01.jpg` },
    { img: `${pub}/img/team/02.jpg` },
    { img: `${pub}/img/team/03.jpg` },
    { img: `${pub}/img/team/04.jpg` }
  ],
  social: {
    facebook: "https://www.facebook.com/solutionsnplusone",
    twitter: "https://twitter.com/solutionsnplus1",
    youtube: "https://www.youtube.com/@solutionsnplusone"
  }
};