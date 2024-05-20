import * as Kernel from '@avanzu/kernel'
import { Services } from './services';


// extend kernel interfaces to use as shorthand during development
export interface Container extends Kernel.Container<Services> {}
export interface State extends Kernel.AppState<Container> {}
export interface Context extends Kernel.AppContext<Container, State> {}
export interface App extends Kernel.App<Container, State, Context> {}