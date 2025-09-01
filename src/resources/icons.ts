import { IconType } from "react-icons";

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
} from "react-icons/pi";

import {
  SiJavascript,
  SiNextdotjs,
  SiElementor,
  SiFigma,
  SiGraphql,
  SiMagento,
  SiMysql,
  SiMariadb,
  SiPhp,
  SiReact,
  SiShopify,
  SiSupabase,
  SiTypescript,
  SiWoo,
} from "react-icons/si";


import { 
  FaDiscord, 
  FaGithub, 
  FaLinkedin, 
  FaX, 
  FaThreads,
  FaNodeJs,
  FaWordpress,
 } from "react-icons/fa6";

export const iconLibrary: Record<string, IconType> = {
  arrowUpRight: HiArrowUpRight,
  arrowRight: HiArrowRight,
  email: HiEnvelope,
  globe: HiOutlineGlobeAsiaAustralia,
  person: PiUserCircleDuotone,
  grid: PiGridFourDuotone,
  book: PiBookBookmarkDuotone,
  openLink: HiOutlineLink,
  calendar: HiCalendarDays,
  home: PiHouseDuotone,
  gallery: PiImageDuotone,
  discord: FaDiscord,
  eye: HiOutlineEye,
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
  elementor: SiElementor,
  nodejs: FaNodeJs,
  magento: SiMagento,
  shopify: SiShopify,
  woo: SiWoo,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
