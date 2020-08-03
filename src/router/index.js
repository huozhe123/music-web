import HYDiscover from '@/pages/discover'
import HYFriend from '@/pages/friends'
import HYMine from '@/pages/mine'

const routes=[
  {
    path: '/',
    component: HYDiscover,
    exact: true
  },
  {
    path: '/mine',
    component: HYMine,
    exact: true
  },
  {
    path: '/friend',
    component: HYFriend,
    exact: true
  }
]

export default routes