import { AiFillLike } from 'solid-icons/ai'
import { createSignal } from 'solid-js'
import { Button, IconButton } from '..'

export default {
  title: 'Button',
}

export const H = () => <div>hhha</div>
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
        <Button size="xs" variant="text">
          text
        </Button>
      </div>
      <div
        style={{ display: 'flex', 'column-gap': '4px', 'margin-top': '4px' }}
      >
        <Button variant="neutral">neutral</Button>
        <Button variant="primary">primary</Button>
        <Button variant="outline">outline</Button>
        <Button variant="ghost">ghost</Button>
        <Button variant="text">text</Button>
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
        <Button size="md" variant="text">
          text
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
        <Button size="lg" variant="text">
          text
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
        <Button size="md" variant="text" leftIcon={<AiFillLike />}>
          text
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
        <IconButton size="xs" variant="text" icon={<AiFillLike />}></IconButton>
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
        <IconButton size="sm" variant="text" icon={<AiFillLike />}></IconButton>
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
        <IconButton size="md" variant="text" icon={<AiFillLike />}></IconButton>
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
        <IconButton size="lg" variant="text" icon={<AiFillLike />}></IconButton>
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
          variant="text"
          icon={<AiFillLike />}
          rounded
        ></IconButton>
      </div>
    </>
  )
}

export const status = () => {
  const [$loading, setLoading] = createSignal(true)

  const handleClick = () => {
    setLoading(prev => {
      console.log('prev', prev)
      return !prev
    })
  }
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
        <Button size="md" variant="text" leftIcon={<AiFillLike />} disabled>
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
        <Button
          size="xs"
          variant="neutral"
          loading={$loading()}
          onClick={handleClick}
        >
          neutral
        </Button>
        <Button
          size="sm"
          variant="primary"
          loading={$loading()}
          onClick={handleClick}
        >
          primary
        </Button>
        <Button
          size="md"
          variant="outline"
          loading={$loading()}
          onClick={handleClick}
        >
          outline
        </Button>
        <Button
          size="lg"
          variant="ghost"
          loading={$loading()}
          onClick={handleClick}
        >
          ghost
        </Button>
      </div>
    </>
  )
}
