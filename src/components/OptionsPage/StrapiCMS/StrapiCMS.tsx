import Input from '../Input'
import * as S from '../MainOptions/MainOptions.style'

type Props = {}

const StrapiCMS = (props: Props) => {
  return (
    <div style={S.Container}>
        <h2>Strapi CMS</h2>
        <h3 style={S.Title}>US</h3>
        <Input title="Green - Strapi CMS URL" storeKey="usStrapiGreenUrl" />
        <Input title="Blue - Strapi CMS URL" storeKey="usStrapiBlueUrl" />
        <h3 style={S.Title}>CA</h3>
        <Input title="Green - Strapi CMS URL" storeKey="caStrapiGreenUrl" />
        <Input title="Blue - Strapi CMS URL" storeKey="caStrapiBlueUrl" />
        <h3 style={S.Title}>UK</h3>
        <Input title="Green - Strapi CMS URL" storeKey="ukStrapiGreenUrl" />
        <Input title="Blue - Strapi CMS URL" storeKey="ukStrapiBlueUrl" />
        <h3 style={S.Title}>Stagin / Dev</h3>
        <Input title="Green - Strapi CMS URL" storeKey="devStrapiGreenUrl" />
        <Input title="Blue - Strapi CMS URL" storeKey="devStrapiBlueUrl" />
    </div>
  )
}

export default StrapiCMS