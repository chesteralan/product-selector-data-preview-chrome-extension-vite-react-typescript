import React, { useState } from 'react'
import * as S from './ShortcutSettings.styles'
import useLocalStorage from '../../../../hooks/useLocalStorage';


type Props = {}

const ShortcutSettings = (props: Props) => {
    const [show, setShow] = useState(false);
    const [strapiServerUrl, setStrapiServerUrl] = useLocalStorage("strapi-server-url", "");

    const onClickHandler = () => {
        setShow(!show);
    }
    
    const onChangeHandler = (evt:any) => {
        setStrapiServerUrl(evt.target.value as string);
    }

  return (
    <>
        <div style={S.Cog} onClick={onClickHandler}>⚙️</div>
        {show && (<div style={S.SettingsContainer}>Strapi Server URL: <input onChange={onChangeHandler} style={S.SettingsInput} type="text" defaultValue={strapiServerUrl} /></div>)}
    </>
  )
}

export default ShortcutSettings