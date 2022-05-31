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
      <div
        style={{ display: 'flex', 'column-gap': '4px', 'margin-top': '4px' }}
      >
        <Button size="md" variant="neutral">
          neutral
        </Button>
        <Button size="md" variant="primary">
          primary
        </Button>
        <Button size="md" variant="outline">
          outline
        </Button>
        <Button size="md" variant="ghost">
          ghost
        </Button>
        <Button size="md" variant="link">
          link
        </Button>
      </div>
      <div
        style={{ display: 'flex', 'column-gap': '4px', 'margin-top': '4px' }}
      >
        <Button size="lg" variant="neutral">
          neutral
        </Button>
        <Button size="lg" variant="primary">
          primary
        </Button>
        <Button size="lg" variant="outline">
          outline
        </Button>
        <Button size="lg" variant="ghost">
          ghost
        </Button>
        <Button size="lg" variant="link">
          link
        </Button>
      </div>
    </>
  )
}

export const IconOnly = () => {
  return (
    <>
      <div
        style={{ display: 'flex', 'column-gap': '4px', 'margin-top': '4px' }}
      >
        <Button size="lg" variant="neutral">
          neutral
        </Button>
        <Button size="lg" variant="primary">
          primary
        </Button>
        <Button size="lg" variant="outline">
          outline
        </Button>
        <Button size="lg" variant="ghost">
          ghost
        </Button>
        <Button size="lg" variant="link">
          link
        </Button>
      </div>
    </>
  )
}
