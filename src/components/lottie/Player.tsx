import { Player } from '@lottiefiles/react-lottie-player';
import scoring from './json/scoring.json'
import dots from './json/dots.json'
import robot from './json/robot.json'

export const Scoring = ({ ...restprop }) => <_Player src={scoring} {...restprop} />
export const Dots = ({ ...restprop }) => <_Player src={dots} {...restprop} />
export const Robot = ({ ...restprop }) => <_Player src={robot} {...restprop} />

const _Player = ({ src, ...restprops }: { src: any }) => <Player autoplay {...restprops} src={src} />
