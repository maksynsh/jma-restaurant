import { LayoutChangeEvent } from 'react-native'
import React, { useState } from 'react'
import styled from 'styled-components'
import LinearGradient from 'react-native-linear-gradient'
import { useIntl } from 'react-intl'

import Wrapper from '../components/Wrapper'
import { Box } from '../../Box'
import { Text } from '../../Text'
import ScoreBar from '../components/ScoreBar'
import ReadMore from '../components/ReadMore'
import { Divider } from 'components/Divider'

const UpperLine = styled(Box)`
  height: 2px;
  margin-right: ${({ theme }) => theme.spacing.l}px;
  opacity: 0.2;
`

const Content = styled(Box)`
  flex: 1;
  flex-direction: row;
`

const CardInfo = styled(Box)`
  padding-left: 19px;
`

const Score = styled(Box)`
  align-items: center;
  flex: 1;
  padding-top: ${({ theme }) => theme.spacing.m}px;
`

const Heading = styled(Box)`
  flex-direction: row;
  align-items: flex-end;
`

const MAX_SCORE_BAR_SIZE = 140

const GoldCard = () => {
  const [scoreBarSize, setScoreBarSize] = useState(100)
  const progress = 0.8

  const intl = useIntl()

  const onScoreLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout
    const newScoreBarSize = width - 56
    setScoreBarSize(newScoreBarSize > MAX_SCORE_BAR_SIZE ? MAX_SCORE_BAR_SIZE : newScoreBarSize)
  }

  return (
    <Wrapper>
      <LinearGradient colors={['#393939', '#2A2A2A']} style={{ flex: 1 }}>
        <UpperLine>
          <LinearGradient
            colors={[
              'rgba(57, 57, 57, 1)',
              'rgba(200, 200, 200, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(181, 181, 181, 1)',
              'rgba(56, 56, 56, 1)',
            ]}
            start={{ x: 1, y: 0.5 }}
            end={{ x: 0, y: 0.5 }}
            style={{ flex: 1 }}
          />
        </UpperLine>
        <Content>
          <CardInfo
            paddingBottom={{ smallPhone: 's', phone: 'm', tablet: 'xxl' }}
            paddingTop='m'
            paddingRight='m'
          >
            <Heading>
              <Text variant='logo'>PDF™</Text>
              <Text
                variant='body4'
                color='p2'
                fontSize={{ smallPhone: 'body5', phone: 'body5', tablet: 'body4' }}
                textTransform='uppercase'
              >
                {intl.formatMessage({ id: 'memberCard.goldMember' })}
              </Text>
            </Heading>

            <Box marginTop={{ smallPhone: 'xs', phone: 'xs', tablet: 'm' }}>
              <Text
                variant='h6'
                fontSize={{ smallPhone: 'body3', phone: 'body2', tablet: 'h6' }}
                textTransform='uppercase'
              >
                Anna{'\n'}
                Soderlun
              </Text>
            </Box>

            <Box style={{ flex: 1, justifyContent: 'flex-end' }}>
              <Text
                variant='body1'
                color='p2'
                fontSize={{ smallPhone: 'body4', phone: 'body3', tablet: 'body1' }}
              >
                • 10% {intl.formatMessage({ id: 'memberCard.discount' })}
                {'\n'}• 2% {intl.formatMessage({ id: 'memberCard.cashback' })}
              </Text>
            </Box>
          </CardInfo>
          <Divider color='#979797' />
          <Score
            onLayout={onScoreLayout}
            paddingBottom={{ smallPhone: 's', phone: 'm', tablet: 'xxl' }}
          >
            <Box marginTop='m' marginBottom={{ smallPhone: 'none', phone: 'xs', tablet: 'm' }}>
              <Text
                variant='body4'
                color='p2'
                fontSize={{ smallPhone: 'body5', phone: 'body5', tablet: 'body4' }}
                textTransform='uppercase'
              >
                {intl.formatMessage({ id: 'memberCard.currentScore' })}
              </Text>
            </Box>

            <ScoreBar progress={progress} size={scoreBarSize} type='gold' />

            <ReadMore paddingBottom={{ smallPhone: 's', phone: 'm', tablet: 'xxl' }}>
              <Text
                variant='body2'
                color='p2'
                fontSize={{ smallPhone: 'body4', phone: 'body3', tablet: 'body2' }}
              >
                {intl.formatMessage({ id: 'memberCard.readMore' })}
              </Text>
            </ReadMore>
          </Score>
        </Content>
      </LinearGradient>
    </Wrapper>
  )
}

export default GoldCard
