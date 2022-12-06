import React from "react"

import animation from "data/animated-dots.json"

import data from "data/user.json"

import * as Styled from "./Loader.styles"

interface Props {
  item: string
}

const Loader = ({ item }: Props) => (
  <div>
    <Styled.Animation animationData={animation} loop={true} />
    <Styled.Text>
      {`${data.infos.name}'s ${item} are being fetched...`}
    </Styled.Text>
  </div>
)

export default Loader
