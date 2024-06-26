const EpInfo = ({ episode }) => {
  return (
    <div className="h-full flex items-center justify-center flex-col w-96 px-14 text-center text-sm">
      <p>You are watching <span className="text-[#e26bbd]">Episdode {episode}</span></p>
      <p>If you wish switch To Dub, Click on dub Servers</p>
    </div>
  )
}

export default EpInfo