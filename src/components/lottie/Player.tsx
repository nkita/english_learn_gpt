import { Player } from '@lottiefiles/react-lottie-player';
import { scoring } from './json/scoring'
import { dots } from './json/dots'

export const Scoring = ({ ...restprop }) => <_Player src={scoring} {...restprop} />
export const Dots = ({ ...restprop }) => <_Player src={dots} {...restprop} />

const _Player = ({ src, ...restprops }: { src: any }) => <Player autoplay {...restprops} src={src} />
