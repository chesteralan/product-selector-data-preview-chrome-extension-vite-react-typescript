import * as S from './OptionsPage.styles'
import StrapiCMS from './StrapiCMS/StrapiCMS'

type Props = {}

const OptionsPage = (props: Props) => {
  return (
    <div style={S.Container}>
        <StrapiCMS />
   </div>
  )
}

export default OptionsPage