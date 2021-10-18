import Loading from '../Loading'

import { Iframe } from './style'
import { useState } from 'react'

const Workspace = () => {
  const [isLoading, setIsLoading] = useState(false)
  return (
    <>
      {/* <Loading/> */}

      {isLoading ? (
        <Loading />
      ) : (
        <Iframe
          dangerouslySetInnerHTML={{
            __html:
              "<iframe src='https://workstation-ecru.vercel.app/' style='margin:0; padding:3; width:100%; height:800px; overflow-y: hidden;' scrolling='no' />"
          }}
        />
      )}
    </>
  )
}
export default Workspace
