import Input from './Input'
import * as S from './StrapiCMS.style'

type Props = {}

const StrapiCMS = (props: Props) => {
  return (
    <div style={S.Container}>
        <h3 style={S.Title}>US Site</h3>
        <Input title="Strapi Server URL" storeKey="usStrapiServerUrl" />
        <Input title="Next.js Staging Url" storeKey="usNextjsStagingUrl" />
        <Input title="Next.js Live Url" storeKey="usNextjsLiveUrl" />
        <h3 style={S.Title}>UK Site</h3>
        <Input title="Strapi Server URL" storeKey="ukStrapiServerUrl" />
        <Input title="Next.js Staging Url" storeKey="ukNextjsStagingUrl" />
        <Input title="Next.js Live Url" storeKey="ukNextjsLiveUrl" />
        <h3 style={S.Title}>CA Site</h3>
        <Input title="Strapi Server URL" storeKey="caStrapiServerUrl" />
        <Input title="Next.js Staging Url" storeKey="caNextjsStagingUrl" />
        <Input title="Next.js Live Url" storeKey="usNextjsLiveUrl" />
        <h3 style={S.Title}>Others</h3>
        <Input title="Next.js Local Url" storeKey="nextjsLocalUrl" />
        <Input title="Developer Tool Url" storeKey="developerToolUrl" />
    </div>
  )
}

export default StrapiCMS