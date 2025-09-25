import { IconType } from "react-icons";

import {
  BsPlugin,
} from "react-icons/bs";

import {
  HiArrowUpRight,
  HiOutlineLink,
  HiArrowTopRightOnSquare,
  HiEnvelope,
  HiCalendarDays,
  HiArrowRight,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineDocument,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

import {
  PiHouseDuotone,
  PiUserCircleDuotone,
  PiGridFourDuotone,
  PiBookBookmarkDuotone,
  PiImageDuotone,
  PiShieldStar,
} from "react-icons/pi";

import {
  SiJavascript,
  SiNextdotjs,
  SiElementor,
  SiFigma,
  SiGraphql,
  SiHubspot,
  SiIfttt,
  SiMagento,
  SiMysql,
  SiMariadb,
  SiPhp,
  SiReact,
  SiShopify,
  SiSupabase,
  SiTypescript,
  SiWoo,
  SiZapier,
} from "react-icons/si";


import { 
  FaDiscord,
  FaRegEye,
  FaEye, 
  FaGithub, 
  FaLinkedin, 
  FaX, 
  FaThreads,
  FaNodeJs,
  FaSalesforce,
  FaVuejs,
  FaWordpress,
 } from "react-icons/fa6";

import {
  TbHexagonLetterS,
  TbCircleLetterAFilled,
} from "react-icons/tb";

import {
  GiAllSeeingEye,
} from "react-icons/gi";

export const iconLibrary: Record<string, IconType> = {
  arrowUpRight: HiArrowUpRight,
  arrowRight: HiArrowRight,
  email: HiEnvelope,
  globe: HiOutlineGlobeAsiaAustralia,
  person: PiUserCircleDuotone,
  grid: PiGridFourDuotone,
  book: PiBookBookmarkDuotone,
  openLink: HiOutlineLink,
  eye: FaRegEye,
  calendar: HiCalendarDays,
  home: PiHouseDuotone,
  gallery: PiImageDuotone,
  discord: FaDiscord,
  allSeeingEye: GiAllSeeingEye,
  eyeOff: HiOutlineEyeSlash,
  supabase: SiSupabase,
  figma: SiFigma,
  github: FaGithub,
  linkedin: FaLinkedin,
  x: FaX,
  threads: FaThreads,
  arrowUpRightFromSquare: HiArrowTopRightOnSquare,
  document: HiOutlineDocument,
  rocket: HiOutlineRocketLaunch,
  javascript: SiJavascript,
  typescript: SiTypescript,
  react: SiReact,
  nextjs: SiNextdotjs,
  php: SiPhp,
  mysql: SiMysql,
  mariadb: SiMariadb,
  graphql: SiGraphql,
  wordpress: FaWordpress,
  plugin: BsPlugin,
  elementor: SiElementor,
  divi: PiShieldStar,
  nodejs: FaNodeJs,
  vue: FaVuejs,
  magento: SiMagento,
  shopify: SiShopify,
  snipcart: TbHexagonLetterS,
  woo: SiWoo,
  acf: TbCircleLetterAFilled,
  zapier: SiZapier,
  ifttt: SiIfttt,
  hubspot: SiHubspot,
  salesforce: FaSalesforce,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
