import { Avatar } from '..'
import { BsCheck } from 'solid-icons/bs'
import { defineStories } from '../../../util/storybook'

export default defineStories({
  title: 'Avatar',
})

export const Basic = () => (
  <>
    <div style={{ display: 'flex' }}>
      <Avatar
        src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/515.jpg"
        size="sm"
      />
      <Avatar
        src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/515.jpg"
        size="md"
      />
      <Avatar
        src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/515.jpg"
        size="lg"
      />
      <Avatar
        src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/515.jpg"
        size="xl"
      />
    </div>
    <div style={{ display: 'flex' }}>
      <Avatar name="John Doe" size="sm" />
      <Avatar name="John Doe" size="md" />
      <Avatar name="John Doe" size="lg" />
      <Avatar name="John Doe" size="xl" />
    </div>
    <div style={{ display: 'flex' }}>
      <Avatar size="sm" />
      <Avatar size="md" />
      <Avatar size="lg" />
      <Avatar size="xl" />
    </div>
  </>
)

export const Status = () => {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <Avatar
          src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/515.jpg"
          size="sm"
          status={{
            color: 'green',
            title: 'Online',
            icon: <BsCheck />,
          }}
        />
        <Avatar
          src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/515.jpg"
          size="md"
          status={{
            color: 'green',
            title: 'Online',
            icon: <BsCheck />,
          }}
        />
        <Avatar
          src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/515.jpg"
          size="lg"
          status={{
            color: 'green',
            title: 'Online',
            icon: <BsCheck />,
          }}
        />
        <Avatar
          src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/515.jpg"
          size="xl"
          status={{
            color: 'green',
            title: 'Online',
            icon: <BsCheck />,
          }}
        />
      </div>
      <div style={{ display: 'flex' }}>
        <Avatar
          src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/515.jpg"
          size="sm"
          status={{
            color: 'red',
            title: 'Offline',
          }}
        />
        <Avatar
          src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/515.jpg"
          size="md"
          status={{
            color: 'red',
            title: 'Offline',
          }}
        />
        <Avatar
          src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/515.jpg"
          size="lg"
          status={{
            color: 'red',
            title: 'Offline',
          }}
        />
        <Avatar
          src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/515.jpg"
          size="xl"
          status={{
            color: 'red',
            title: 'Offline',
          }}
        />
      </div>
    </>
  )
}
