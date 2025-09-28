export default function Home() {
  const STORYBOOK = {
    BUTTON:
      "https://experiment-storybook-embed-storyboo.vercel.app/iframe.html?args=&globals=&id=stories-button--docs&viewMode=story",
  }

  return (
    <div className="">
      <iframe
        className="border border-gray-300 w-full min-h-[500px]"
        src={STORYBOOK.BUTTON}
      />
    </div>
  )
}
