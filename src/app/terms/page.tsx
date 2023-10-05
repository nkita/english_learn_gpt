'use client'
import { useFetch } from '@/hooks/fetch'
import { Box, Container } from '@chakra-ui/react'
import BoxImage from '@/components/image'
import Loading from '@/components/loading'
import { isUUID } from '@/lib/util'
import { redirect } from 'next/navigation'

export default function Home() {

  return (
    <Box
      bg={"#fafafa"}
      sx={{
        '&::-webkit-scrollbar': {
          backgroundColor: `#fafafa`,
          width: '10px',
          transition: '10s',
        },
        '&::-webkit-scrollbar-thumb': {
          borderRadius: '10px',
          backgroundColor: '#dadada',
          transition: '10s',
        },
      }}
    >
      <Container
        h={`100vh`}
        pt={20} maxW={'container.md'}
        px={5}
        overflow={'scroll'}
        overflowY={'auto'}
        overflowX={'hidden'}

      >
        {`
        条項
        はじめに
        この利用規約は、私nkita（以下、「作者」といいます。）がこのウェブサイト上で提供するサービス（以下、「本サービス」といいます。）の利用条件を定めるものです。
        ご利用の皆さま（以下、「ユーザー」といいます。）には、本規約に従って、本サービスを個人,法人,商用,非商用問わず無料でご利用頂けます。
        
        禁止事項
        ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。
        法令または公序良俗に違反する行為
        犯罪行為に関連する行為
        本サービスの内容等、本サービスに含まれる著作権、商標権ほか知的財産権を侵害する行為
        本サービスによって得られた情報を商業的に利用する行為
        作者のサービスの運営を妨害するおそれのある行為
        不正アクセスをし、またはこれを試みる行為
        他のユーザーに関する個人情報等を収集または蓄積する行為
        不正な目的を持って本サービスを利用する行為
        本サービスの他のユーザーまたはその他の第三者に不利益、損害、不快感を与える行為
        作者が許諾しない本サービス上での宣伝、広告、勧誘、または営業行為
        作者のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為
        その他、作者が不適切と判断する行為
        サービス内容の変更等
        作者は、ユーザーへの事前の告知なく、本サービスの内容を変更、追加または廃止することがあり、ユーザーはこれを承諾するものとします。
        利用規約の変更
        作者は、ユーザーの個別の同意を要せず、本規約を変更することができるものとします。
        保証の否認および免責事項
        作者は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。
        作者は、本サービスに起因してユーザーに生じたあらゆる損害について、一切の責任を負いません。
        作者は、本サービスに関して、ユーザーと他のユーザーまたは第三者との間において生じた取引、連絡または紛争等について一切責任を負いません。
      `}
      </Container>
    </Box>
  );
}
