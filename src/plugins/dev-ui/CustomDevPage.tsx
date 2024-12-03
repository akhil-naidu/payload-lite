import configPromise from '@payload-config'

const CustomDevPage = async (props: any) => {
  console.log(await configPromise)

  return (
    <div>
      <h1>Custom Admin Page</h1>
      <p>This is a custom admin page created using the devUI plugin.</p>
    </div>
  )
}

export default CustomDevPage
