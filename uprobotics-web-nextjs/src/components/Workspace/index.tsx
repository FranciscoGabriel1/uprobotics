import React, { useState } from 'react'
import Loading from '../Loading'

import { Iframe } from './style'

const Workspace = (): JSX.Element => {
  const [isLoading] = useState(false)
  return (
    <>
      {/* <Loading/> */}

      {isLoading ? (
        <Loading />
      ) : (
        <Iframe
          dangerouslySetInnerHTML={{
            __html:
              "<iframe src='https://workstation-six.vercel.app/' style='margin:0; padding:3; width:100%; height:1250px; overflow-y: hidden;' scrolling='no' />"
          }}
        />
      )}
    </>
  )
}
export default Workspace
