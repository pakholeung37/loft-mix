import { Button } from '..'

export default {
  title: 'Button',
}

export const Basic = () => {
  return (
    <>
      <div style={{ display: 'flex', 'column-gap': '4px' }}>
        <Button size="xs" variant="neutral">
          neutral
        </Button>
        <Button size="xs" variant="primary">
          primary
        </Button>
        <Button size="xs" variant="outline">
          outline
        </Button>
        <Button size="xs" variant="ghost">
          ghost
        </Button>
        <Button size="xs" variant="link">
          link
        </Button>
      </div>
      <div
        style={{ display: 'flex', 'column-gap': '4px', 'margin-top': '4px' }}
      >
        <Button variant="neutral">neutral</Button>
        <Button variant="primary">primary</Button>
        <Button variant="outline">outline</Button>
        <Button variant="ghost">ghost</Button>
        <Button variant="link">link</Button>
      </div>
    </>
  )
}
