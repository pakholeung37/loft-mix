import { AiFillLike } from 'solid-icons/ai'
import { Button, IconButton } from '..'

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

export const withIcon = () => {
  return (
    <>
      <div style={{ display: 'flex', 'column-gap': '4px' }}>
        <Button size="md" variant="neutral" leftIcon={<AiFillLike />}>
          neutral
        </Button>
        <Button size="md" variant="primary" leftIcon={<AiFillLike />}>
          primary
        </Button>
        <Button size="md" variant="outline" leftIcon={<AiFillLike />}>
          outline
        </Button>
        <Button size="md" variant="ghost" leftIcon={<AiFillLike />}>
          ghost
        </Button>
        <Button size="md" variant="link" leftIcon={<AiFillLike />}>
          link
        </Button>
      </div>
      <div
        style={{ display: 'flex', 'column-gap': '4px', 'margin-top': '4px' }}
      >
        <Button size="xs" variant="primary" leftIcon={<AiFillLike />}>
          neutral
        </Button>
        <Button size="sm" variant="primary" leftIcon={<AiFillLike />}>
          primary
        </Button>
        <Button size="md" variant="primary" leftIcon={<AiFillLike />}>
          outline
        </Button>
        <Button size="lg" variant="primary" leftIcon={<AiFillLike />}>
          ghost
        </Button>
      </div>
      <div
        style={{ display: 'flex', 'column-gap': '4px', 'margin-top': '4px' }}
      >
        <Button size="xs" variant="primary" rightIcon={<AiFillLike />}>
          neutral
        </Button>
        <Button size="sm" variant="primary" rightIcon={<AiFillLike />}>
          primary
        </Button>
        <Button size="md" variant="primary" rightIcon={<AiFillLike />}>
          outline
        </Button>
        <Button size="lg" variant="primary" rightIcon={<AiFillLike />}>
          ghost
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
        <IconButton
          size="xs"
          variant="neutral"
          icon={<AiFillLike />}
        ></IconButton>
        <IconButton
          size="xs"
          variant="primary"
          icon={<AiFillLike />}
        ></IconButton>
        <IconButton
          size="xs"
          variant="outline"
          icon={<AiFillLike />}
        ></IconButton>
        <IconButton
          size="xs"
          variant="ghost"
          icon={<AiFillLike />}
        ></IconButton>
        <IconButton size="xs" variant="link" icon={<AiFillLike />}></IconButton>
      </div>
      <div
        style={{ display: 'flex', 'column-gap': '4px', 'margin-top': '4px' }}
      >
        <IconButton
          size="sm"
          variant="neutral"
          icon={<AiFillLike />}
        ></IconButton>
        <IconButton
          size="sm"
          variant="primary"
          icon={<AiFillLike />}
        ></IconButton>
        <IconButton
          size="sm"
          variant="outline"
          icon={<AiFillLike />}
        ></IconButton>
        <IconButton
          size="sm"
          variant="ghost"
          icon={<AiFillLike />}
        ></IconButton>
        <IconButton size="sm" variant="link" icon={<AiFillLike />}></IconButton>
      </div>
      <div
        style={{ display: 'flex', 'column-gap': '4px', 'margin-top': '4px' }}
      >
        <IconButton
          size="md"
          variant="neutral"
          icon={<AiFillLike />}
        ></IconButton>
        <IconButton
          size="md"
          variant="primary"
          icon={<AiFillLike />}
        ></IconButton>
        <IconButton
          size="md"
          variant="outline"
          icon={<AiFillLike />}
        ></IconButton>
        <IconButton
          size="md"
          variant="ghost"
          icon={<AiFillLike />}
        ></IconButton>
        <IconButton size="md" variant="link" icon={<AiFillLike />}></IconButton>
      </div>

      <div
        style={{ display: 'flex', 'column-gap': '4px', 'margin-top': '4px' }}
      >
        <IconButton
          size="lg"
          variant="neutral"
          icon={<AiFillLike />}
        ></IconButton>
        <IconButton
          size="lg"
          variant="primary"
          icon={<AiFillLike />}
        ></IconButton>
        <IconButton
          size="lg"
          variant="outline"
          icon={<AiFillLike />}
        ></IconButton>
        <IconButton
          size="lg"
          variant="ghost"
          icon={<AiFillLike />}
        ></IconButton>
        <IconButton size="lg" variant="link" icon={<AiFillLike />}></IconButton>
      </div>
      <div
        style={{ display: 'flex', 'column-gap': '4px', 'margin-top': '4px' }}
      >
        <IconButton
          size="sm"
          variant="neutral"
          icon={<AiFillLike />}
          rounded
        ></IconButton>
        <IconButton
          size="sm"
          variant="primary"
          icon={<AiFillLike />}
          rounded
        ></IconButton>
        <IconButton
          size="sm"
          variant="outline"
          icon={<AiFillLike />}
          rounded
        ></IconButton>
        <IconButton
          size="sm"
          variant="ghost"
          icon={<AiFillLike />}
          rounded
        ></IconButton>
        <IconButton
          size="sm"
          variant="link"
          icon={<AiFillLike />}
          rounded
        ></IconButton>
      </div>
    </>
  )
}

export const status = () => {
  return (
    <>
      <div style={{ display: 'flex', 'column-gap': '4px' }}>
        <Button size="md" variant="neutral" leftIcon={<AiFillLike />} disabled>
          disabled
        </Button>
        <Button size="md" variant="primary" leftIcon={<AiFillLike />} disabled>
          disabled
        </Button>
        <Button size="md" variant="outline" leftIcon={<AiFillLike />} disabled>
          disabled
        </Button>
        <Button size="md" variant="ghost" leftIcon={<AiFillLike />} disabled>
          disabled
        </Button>
        <Button size="md" variant="link" leftIcon={<AiFillLike />} disabled>
          disabled
        </Button>
      </div>
      <div
        style={{ display: 'flex', 'column-gap': '4px', 'margin-top': '4px' }}
      >
        <Button size="xs" variant="neutral" leftIcon={<AiFillLike />} rounded>
          rounded
        </Button>
        <Button size="sm" variant="primary" leftIcon={<AiFillLike />} rounded>
          rounded
        </Button>
        <Button size="md" variant="outline" leftIcon={<AiFillLike />} rounded>
          rounded
        </Button>
        <Button size="lg" variant="ghost" leftIcon={<AiFillLike />} rounded>
          rounded
        </Button>
      </div>
      <div
        style={{ display: 'flex', 'column-gap': '4px', 'margin-top': '4px' }}
      >
        <Button size="xs" variant="primary" rightIcon={<AiFillLike />}>
          neutral
        </Button>
        <Button size="sm" variant="primary" rightIcon={<AiFillLike />}>
          primary
        </Button>
        <Button size="md" variant="primary" rightIcon={<AiFillLike />}>
          outline
        </Button>
        <Button size="lg" variant="primary" rightIcon={<AiFillLike />}>
          ghost
        </Button>
      </div>
    </>
  )
}
