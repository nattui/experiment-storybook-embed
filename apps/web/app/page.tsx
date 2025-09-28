export default function Home() {
  const STORYBOOK = {
    BUTTON: {
      PRIMARY:
        "https://experiment-storybook-embed-storyboo.vercel.app/iframe.html?args=&globals=&id=example-button--button-primary&viewMode=story",
      CONTROLS:
        "https://experiment-storybook-embed-storyboo.vercel.app/iframe.html?args=&globals=&id=example-button--button-controls&viewMode=story",
    },
  }

  return (
    <div className="">
      <iframe
        className="border border-gray-300 bg-transparent w-full min-h-[360px]"
        src={STORYBOOK.BUTTON.PRIMARY}
      />
      <iframe
        className="border border-gray-300 bg-transparent w-full min-h-[360px]"
        src={STORYBOOK.BUTTON.CONTROLS}
      />
    </div>
  )
}
