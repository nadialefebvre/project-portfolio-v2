import React from "react"

import * as Styled from "./Section.styles"

interface Props {
  title?: string
  extraTitle?: string
  children?: any
  featured?: any
  subtitle?: string
  other?: any
}

const Section: React.FC<Props> = ({
  title,
  extraTitle,
  children,
  featured,
  subtitle,
  other,
}) => (
  <Styled.Section data-testid={title}>
    <Styled.InnerContainer>
      {title && (
        <Styled.HeadingContainer>
          <Styled.Heading>
            {title}
            {extraTitle && (
              <Styled.ExtraHeading>{extraTitle}</Styled.ExtraHeading>
            )}
          </Styled.Heading>
        </Styled.HeadingContainer>
      )}
      {children && children}
      {featured && (
        <Styled.FeaturedContainer>{featured}</Styled.FeaturedContainer>
      )}

      {subtitle && (
        <Styled.SubheadingContainer>
          <Styled.Subheading>{subtitle}</Styled.Subheading>
        </Styled.SubheadingContainer>
      )}

      {other && <Styled.OtherContainer>{other}</Styled.OtherContainer>}
    </Styled.InnerContainer>
  </Styled.Section>
)

export default Section
