import Home from "@/pages/Home/Home.vue"
import Cate from "@/pages/Cate/Cate.vue"
import Buy from "@/pages/Buy/Buy.vue"
import Cart from "@/pages/Cart/Cart.vue"
import Personal from "@/pages/Personal/Personal.vue"
import recommend from "@/pages/recommend/recommend.vue"
import live from "@/pages/live/live.vue"

export default[
  {path: "/Home",
    component: Home,
    meta:{showFooter:true},
    children:[
      {path: "recommend",component:recommend},
      {path: "live",component:live},
      {path: "",redirect:"recommend"}
    ]
  },
  {path: "/Cate",component: Cate},
  {path: "/Buy",component: Buy},
  {path: "/Cart",component: Cart},
  {path: "/Personal",component: Personal},
  {path: "/",redirect: "/Home"}
]