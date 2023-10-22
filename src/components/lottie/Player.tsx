import { Player } from '@lottiefiles/react-lottie-player';
import scoring from './json/scoring.json'
import dots from './json/dots.json'

export const Scoring = ({ ...restprop }) => <_Player src={scoring} {...restprop} />
export const Dots = ({ ...restprop }) => <_Player src={dots} {...restprop} />

const _Player = ({ src, ...restprops }: { src: any }) => <Player autoplay {...restprops} src={src} />
