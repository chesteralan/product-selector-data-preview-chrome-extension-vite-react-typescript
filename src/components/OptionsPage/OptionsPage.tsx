import * as S from './OptionsPage.styles'
import MainOptions from './MainOptions/MainOptions'
import StrapiCMS from './StrapiCMS/StrapiCMS'

type Props = {}

const OptionsPage = (props: Props) => {
  return (
    <div style={S.Container}>
        <MainOptions />
        <StrapiCMS />
   </div>
  )
}

export default OptionsPage