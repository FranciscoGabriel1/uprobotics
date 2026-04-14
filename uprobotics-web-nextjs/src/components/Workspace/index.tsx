import { Iframe } from './style'

const Workspace = () => {
  return (
    <Iframe>
      <iframe
        title="UpRobotics Workspace"
        src="https://workstation-six.vercel.app/"
        style={{
          border: 0,
          margin: 0,
          width: '100%',
          height: '1250px',
          overflowY: 'hidden'
        }}
        scrolling="no"
      />
    </Iframe>
  )
}

export default Workspace
