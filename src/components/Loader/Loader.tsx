import React from "react"

import animation from "animations/animated-dots.json"

import * as Styled from "./Loader.styles"

const Loader = () => <Styled.Animation data-testid="animation" animationData={animation} loop={true} />

export default Loader
